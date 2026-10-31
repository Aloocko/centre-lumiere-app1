// Page de diagnostic : dit en clair si l'application voit un direct en cours,
// et d'où vient l'information. Lisible d'un coup d'œil sur un téléphone.
import { fromLive, fromStreams } from "./videos.js";

export default async function handler(req, res) {
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

  res.setHeader("Cache-Control", "no-store");
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
