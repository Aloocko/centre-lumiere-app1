// Fonction Vercel : dernières vidéos et Shorts de la chaîne YouTube Radio Centre Lumière.
// Lit le flux RSS public de la chaîne (aucune clé API nécessaire) et renvoie du JSON.
// Le résultat est mis en cache 30 minutes sur le CDN de Vercel.

const CHANNEL_ID = "UCtD9sGaj2biDHiha_TSDI6Q";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

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

export function parseFeed(xml) {
  const entries = xml.split("<entry>").slice(1).map((chunk) => chunk.split("</entry>")[0]);
  const items = entries
    .map((e) => {
      const id = pick(e, /<yt:videoId>([^<]+)<\/yt:videoId>/);
      const link = pick(e, /<link[^>]*rel="alternate"[^>]*href="([^"]+)"/) || pick(e, /<link[^>]*href="([^"]+)"/);
      return {
        id,
        title: pick(e, /<title>([\s\S]*?)<\/title>/),
        published: pick(e, /<published>([^<]+)<\/published>/),
        views: Number(pick(e, /<media:statistics[^>]*views="(\d+)"/) || 0),
        isShort: /\/shorts\//.test(link) || /#shorts\b/i.test(pick(e, /<title>([\s\S]*?)<\/title>/)),
        thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        url: /\/shorts\//.test(link) || /#shorts\b/i.test(pick(e, /<title>([\s\S]*?)<\/title>/)) ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`,
      };
    })
    .filter((v) => /^[\w-]{6,}$/.test(v.id));
  return {
    videos: items.filter((v) => !v.isShort),
    shorts: items.filter((v) => v.isShort),
  };
}

export default async function handler(req, res) {
  try {
    const r = await fetch(FEED_URL, { headers: { "User-Agent": "CentreLumiereApp/1.0" } });
    if (!r.ok) throw new Error(`YouTube a répondu ${r.status}`);
    const data = parseFeed(await r.text());
    res.setHeader("Cache-Control", "public, s-maxage=1800, stale-while-revalidate=86400");
    res.status(200).json({ ...data, channelUrl: "https://www.youtube.com/@CentreLumiere", updated: new Date().toISOString() });
  } catch (err) {
    res.setHeader("Cache-Control", "public, s-maxage=120");
    res.status(502).json({ videos: [], shorts: [], error: String(err.message || err) });
  }
}
