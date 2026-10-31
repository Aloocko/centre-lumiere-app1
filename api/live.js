// Page de diagnostic : dit en clair si l'application voit un direct en cours,
// et d'où vient l'information. Lisible d'un coup d'œil sur un téléphone.
// Avec ?debug=1 : montre ce que YouTube renvoie réellement à nos serveurs.
import { fromLive, fromStreams } from "./videos.js";

const CHANNEL_ID = "UCtD9sGaj2biDHiha_TSDI6Q";
const HANDLE = "CentreLumiere";
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  "Accept-Language": "fr-CA,fr;q=0.9,en;q=0.8",
  Cookie: "CONSENT=YES+1; SOCS=CAI",
};

const sonde = async (nom, url) => {
  try {
    const r = await fetch(url, { headers: HEADERS, redirect: "follow" });
    const html = await r.text();
    return {
      nom,
      statut: r.status,
      adresseFinale: r.url !== url ? r.url : undefined,
      taille: html.length,
      titrePage: (html.match(/<title>([^<]{0,120})/) || [])[1] || null,
      aIsLiveNow: /"isLiveNow"\s*:\s*true/.test(html),
      aIsLive: /"isLive"\s*:\s*true/.test(html),
      aIsLiveContent: /"isLiveContent"\s*:\s*true/.test(html),
      aVideoDetails: html.includes('"videoDetails"'),
      aPlayerResponse: html.includes("ytInitialPlayerResponse"),
      aConsentement: /consent\.youtube|CookieConsent|Avant de continuer/i.test(html),
      premierVideoId: (html.match(/"videoId"\s*:\s*"([\w-]{11})"/) || [])[1] || null,
      videoIdEmbed: (html.match(/[?&"]video_id["=:]+"?([\w-]{11})/) || [])[1] || null,
    };
  } catch (e) {
    return { nom, erreur: String(e.message || e) };
  }
};

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.query && (req.query.debug === "1" || req.query.debug === "true")) {
    const sondes = await Promise.all([
      sonde("live", `https://www.youtube.com/@${HANDLE}/live?hl=fr&gl=CA`),
      sonde("streams", `https://www.youtube.com/@${HANDLE}/streams?hl=fr&gl=CA`),
      sonde("embed", `https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}`),
    ]);
    res.status(200).json({ sondes, verifie: new Date().toISOString() });
    return;
  }

  const erreurs = {};
  const [direct, streams] = await Promise.all([
    fromLive().catch((e) => {
      erreurs.pageLive = String(e.message || e);
      return null;
    }),
    fromStreams().catch((e) => {
      erreurs.pageEnDirect = String(e.message || e);
      return { live: null, replays: [] };
    }),
  ]);

  const live = direct || streams.live;

  res.status(200).json({
    direct: !!live,
    titre: live ? live.title : null,
    id: live ? live.id : null,
    source: live ? (direct ? "page /live" : "onglet En direct") : "aucune",
    rediffusionsTrouvees: streams.replays.length,
    erreurs: Object.keys(erreurs).length ? erreurs : null,
    verifie: new Date().toISOString(),
  });
}
