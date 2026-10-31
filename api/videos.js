// Fonction Vercel : dernières vidéos et Shorts de la chaîne YouTube Radio Centre Lumière.
// 1) Essaie le flux RSS public de la chaîne (aucune clé API nécessaire).
// 2) Si YouTube refuse le flux (erreur 404 fréquente depuis les serveurs), lit directement
//    les pages publiques « Vidéos » et « Shorts » de la chaîne.
// Le résultat est mis en cache 30 minutes sur le CDN de Vercel.

const CHANNEL_ID = "UCtD9sGaj2biDHiha_TSDI6Q";
const HANDLE = "CentreLumiere";
const FEEDS = [
  `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
  `https://www.youtube.com/feeds/videos.xml?playlist_id=UU${CHANNEL_ID.slice(2)}`,
];
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.9",
  Cookie: "CONSENT=YES+1; SOCS=CAI",
};

const decode = (s = "") =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));

const pick = (xml, re) => {
  const m = xml.match(re);
  return m ? decode(m[1].trim()) : "";
};

const isShortTitle = (t) => /#shorts\b/i.test(t);
const thumbOf = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const urlOf = (id, short) => (short ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`);
const validId = (id) => /^[\w-]{11}$/.test(id);

// --- 1) Flux RSS ---
export function parseFeed(xml) {
  const entries = xml.split("<entry>").slice(1).map((chunk) => chunk.split("</entry>")[0]);
  const items = entries
    .map((e) => {
      const id = pick(e, /<yt:videoId>([^<]+)<\/yt:videoId>/);
      const link = pick(e, /<link[^>]*rel="alternate"[^>]*href="([^"]+)"/) || pick(e, /<link[^>]*href="([^"]+)"/);
      const title = pick(e, /<title>([\s\S]*?)<\/title>/);
      const short = /\/shorts\//.test(link) || isShortTitle(title);
      return {
        id,
        title,
        published: pick(e, /<published>([^<]+)<\/published>/),
        views: Number(pick(e, /<media:statistics[^>]*views="(\d+)"/) || 0),
        isShort: short,
        thumb: thumbOf(id),
        url: urlOf(id, short),
      };
    })
    .filter((v) => /^[\w-]{6,}$/.test(v.id));
  return {
    videos: items.filter((v) => !v.isShort),
    shorts: items.filter((v) => v.isShort),
  };
}

// --- 2) Pages publiques de la chaîne ---
const jsonStr = (s) => {
  try {
    return JSON.parse(`"${s}"`);
  } catch {
    return s;
  }
};

// « 3 days ago » -> date ISO approximative
const relToIso = (txt = "") => {
  const m = txt.match(/(\d+)\s*(second|minute|hour|day|week|month|year)/i);
  if (!m) return new Date().toISOString();
  const n = Number(m[1]);
  const unit = { second: 1, minute: 60, hour: 3600, day: 86400, week: 604800, month: 2592000, year: 31536000 }[m[2].toLowerCase()];
  return new Date(Date.now() - n * unit * 1000).toISOString();
};

export function parseVideosPage(html) {
  const out = [];
  const seen = new Set();
  const re = /"videoRenderer":\{"videoId":"([\w-]{11})"/g;
  let m;
  while ((m = re.exec(html)) && out.length < 15) {
    const id = m[1];
    if (seen.has(id)) continue;
    const chunk = html.slice(m.index, m.index + 6000);
    const title = jsonStr((chunk.match(/"title":\{"runs":\[\{"text":"((?:[^"\\]|\\.)*)"/) || chunk.match(/"title":\{"simpleText":"((?:[^"\\]|\\.)*)"/) || [])[1] || "");
    if (!title) continue;
    const when = jsonStr((chunk.match(/"publishedTimeText":\{"simpleText":"((?:[^"\\]|\\.)*)"/) || [])[1] || "");
    const short = isShortTitle(title);
    seen.add(id);
    out.push({ id, title, published: relToIso(when), views: 0, isShort: short, thumb: thumbOf(id), url: urlOf(id, short) });
  }
  return out;
}

export function parseShortsPage(html) {
  const out = [];
  const seen = new Set();
  const add = (id, title) => {
    if (!validId(id) || seen.has(id)) return;
    seen.add(id);
    out.push({ id, title: title || "Short", published: new Date().toISOString(), views: 0, isShort: true, thumb: thumbOf(id), url: urlOf(id, true) });
  };
  // Format récent : shortsLockupViewModel
  const re1 = /"entityId":"shorts-shelf-item-([\w-]{11})"/g;
  let m;
  while ((m = re1.exec(html)) && out.length < 15) {
    const chunk = html.slice(m.index, m.index + 4000);
    const t = (chunk.match(/"primaryText":\{"content":"((?:[^"\\]|\\.)*)"/) || chunk.match(/"accessibilityText":"((?:[^"\\]|\\.)*?)(?:, \d|")/) || [])[1];
    add(m[1], t ? jsonStr(t) : "");
  }
  // Ancien format : reelItemRenderer
  const re2 = /"reelItemRenderer":\{"videoId":"([\w-]{11})"/g;
  while ((m = re2.exec(html)) && out.length < 15) {
    const chunk = html.slice(m.index, m.index + 3000);
    const t = (chunk.match(/"headline":\{"simpleText":"((?:[^"\\]|\\.)*)"/) || [])[1];
    add(m[1], t ? jsonStr(t) : "");
  }
  return out;
}

async function fromRss() {
  let last = "";
  for (const url of FEEDS) {
    try {
      const r = await fetch(url, { headers: HEADERS });
      if (!r.ok) {
        last = `RSS ${r.status}`;
        continue;
      }
      const data = parseFeed(await r.text());
      if (data.videos.length || data.shorts.length) return { ...data, source: "rss" };
      last = "RSS vide";
    } catch (e) {
      last = String(e.message || e);
    }
  }
  throw new Error(last || "RSS indisponible");
}

// --- 3) Page « En direct » de la chaîne ---
// Renvoie les directs : celui en cours (isLiveNow) puis les rediffusions.
export function parseStreamsPage(html) {
  const out = [];
  const seen = new Set();
  const re = /"videoId":"([\w-]{11})"/g;
  let m;
  while ((m = re.exec(html)) && out.length < 20) {
    const id = m[1];
    if (seen.has(id)) continue;
    const chunk = html.slice(m.index, m.index + 7000);
    const title = jsonStr(
      (chunk.match(/"title":\{"runs":\[\{"text":"((?:[^"\\]|\\.)*)"/) ||
        chunk.match(/"title":\{"simpleText":"((?:[^"\\]|\\.)*)"/) ||
        chunk.match(/"primaryText":\{"content":"((?:[^"\\]|\\.)*)"/) ||
        [])[1] || ""
    );
    if (!title) continue;
    // Un direct en cours porte un badge LIVE et un compteur de spectateurs,
    // là où une rediffusion porte une durée et un nombre de vues.
    const head = chunk.slice(0, 3500);
    const liveNow =
      /"style"\s*:\s*"LIVE"/.test(head) ||
      /"isLiveNow"\s*:\s*true/.test(head) ||
      /"iconType"\s*:\s*"LIVE"/.test(head) ||
      /watching now|spectateurs? en ce moment|regardent en ce moment/i.test(head);
    const when = jsonStr((chunk.match(/"publishedTimeText":\{"simpleText":"((?:[^"\\]|\\.)*)"/) || [])[1] || "");
    seen.add(id);
    out.push({
      id,
      title,
      published: liveNow ? new Date().toISOString() : relToIso(when),
      isLiveNow: liveNow,
      thumb: thumbOf(id),
      url: urlOf(id, false),
    });
  }
  return out;
}

async function fromStreams() {
  const r = await fetch(`https://www.youtube.com/@${HANDLE}/streams?hl=en&gl=US`, { headers: HEADERS });
  if (!r.ok) throw new Error(`Page streams ${r.status}`);
  const all = parseStreamsPage(await r.text());
  const live = all.find((s) => s.isLiveNow) || null;
  const replays = all.filter((s) => !s.isLiveNow);
  return { live, replays };
}

// --- 4) Détection directe du direct : /@chaine/live sert la page du direct en cours ---
// C'est le signal le plus sûr : la page porte "isLiveNow":true et l'identifiant de la vidéo.
export function parseLivePage(html) {
  if (!/"isLiveNow"\s*:\s*true/.test(html)) return null;
  const i = html.indexOf('"videoDetails"');
  const chunk = i >= 0 ? html.slice(i, i + 5000) : html.slice(0, 20000);
  const id = (chunk.match(/"videoId"\s*:\s*"([\w-]{11})"/) || [])[1];
  if (!id) return null;
  const title = jsonStr((chunk.match(/"title"\s*:\s*"((?:[^"\\]|\\.)*)"/) || [])[1] || "");
  return {
    id,
    title: title || "En direct",
    published: new Date().toISOString(),
    isLiveNow: true,
    thumb: thumbOf(id),
    url: urlOf(id, false),
  };
}

async function fromLive() {
  const r = await fetch(`https://www.youtube.com/@${HANDLE}/live?hl=en&gl=US`, { headers: HEADERS });
  if (!r.ok) throw new Error(`Page live ${r.status}`);
  return parseLivePage(await r.text());
}

async function fromPages() {
  const get = async (path) => {
    const r = await fetch(`https://www.youtube.com/@${HANDLE}/${path}?hl=en&gl=US`, { headers: HEADERS });
    if (!r.ok) throw new Error(`Page ${path} ${r.status}`);
    return r.text();
  };
  const [vHtml, sHtml] = await Promise.all([get("videos").catch(() => ""), get("shorts").catch(() => "")]);
  const all = parseVideosPage(vHtml);
  const shorts = parseShortsPage(sHtml);
  const ids = new Set(shorts.map((s) => s.id));
  const videos = all.filter((v) => !v.isShort && !ids.has(v.id));
  shorts.push(...all.filter((v) => v.isShort && !ids.has(v.id)));
  if (!videos.length && !shorts.length) throw new Error("Pages YouTube sans vidéos lisibles");
  return { videos, shorts, source: "pages" };
}

export default async function handler(req, res) {
  let data;
  const errors = [];

  // Les directs sont lus en parallèle : ils vivent sur des pages à part,
  // que ni le flux RSS ni l'onglet « Vidéos » ne distinguent.
  const diag = {};
  const streamsPromise = fromStreams().catch((e) => {
    diag.streams = String(e.message || e);
    errors.push(String(e.message || e));
    return { live: null, replays: [] };
  });
  const livePromise = fromLive().catch((e) => {
    diag.live = String(e.message || e);
    return null;
  });

  try {
    data = await fromRss();
  } catch (e) {
    errors.push(String(e.message || e));
    try {
      data = await fromPages();
    } catch (e2) {
      errors.push(String(e2.message || e2));
    }
  }

  const [{ live: liveFromStreams, replays }, liveDirect] = await Promise.all([streamsPromise, livePromise]);
  // La page /live est la source la plus fiable ; la page « En direct » sert de secours.
  const live = liveDirect || liveFromStreams;
  diag.found = live ? (liveDirect ? "live-page" : "streams-page") : "none";
  diag.replays = replays.length;

  if (data || live || replays.length) {
    const base = data || { videos: [], shorts: [], source: "streams" };
    // Un direct ou une rediffusion peut aussi figurer dans la liste des vidéos.
    const pastStreams = replays.filter((r) => r.id !== live?.id);
    const liveIds = new Set([live?.id, ...pastStreams.map((r) => r.id)].filter(Boolean));
    const videos = base.videos.filter((v) => !liveIds.has(v.id));
    // Pendant un direct, la page doit se rafraîchir vite ; sinon un cache de 5 minutes
    // suffit pour qu'un direct qui commence apparaisse sans attendre une demi-heure.
    res.setHeader(
      "Cache-Control",
      live
        ? "public, s-maxage=120, stale-while-revalidate=600"
        : "public, s-maxage=300, stale-while-revalidate=86400"
    );
    res.status(200).json({
      ...base,
      videos,
      live,
      replays: pastStreams,
      channelUrl: `https://www.youtube.com/@${HANDLE}`,
      liveUrl: live ? live.url : `https://www.youtube.com/@${HANDLE}/streams`,
      diag,
      updated: new Date().toISOString(),
    });
  } else {
    res.setHeader("Cache-Control", "public, s-maxage=120");
    res.status(502).json({ videos: [], shorts: [], live: null, replays: [], error: errors.join(" | ") });
  }
}
