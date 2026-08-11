import React, { useState, useEffect, useRef } from "react";
import { Home, BookOpen, Compass, ChevronRight, Flame, Users, GraduationCap, HandHeart, Megaphone, Play, Pause, Video, Radio, Youtube, Facebook, Volume2, Tv, Heart, Send, Check } from "lucide-react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&display=swap');
`;

const COLORS = {
  night: "#1B1B3A",
  ink: "#2D2A4A",
  dawn: "#F4B942",
  ember: "#E8622C",
  light: "#FDFBF5",
  mist: "#C9C5D6",
};

const CONTENT = {
  fr: {
    tagline: "Centre Lumière du Grand Réveil",
    subtagline: "Ambassade de la Grâce",
    navHome: "Accueil",
    navDevotion: "Dévotion",
    navPillars: "Piliers",
    heroTitle: "La lumière se lève encore",
    heroBody:
      "Une communauté vivante, portée par la grâce, envoyée pour éclairer chaque nation, chaque langue, chaque cœur.",
    missionLabel: "Notre mission",
    missionBody:
      "Faire des disciples de toutes les nations, en incarnant l'amour du Christ par l'adoration, le service et l'annonce de la bonne nouvelle — jusqu'aux périphéries.",
    verseRef: "Luc 4:18",
    verseText:
      "L'Esprit du Seigneur est sur moi, il m'a envoyé pour annoncer la bonne nouvelle aux pauvres.",
    pillarsTitle: "Cinq piliers, un même appel",
    pillarsIntro: "Fondés sur Matthieu 28:19, ces piliers structurent toute notre vie communautaire.",
    ctaDevotion: "Lire la dévotion du jour",
    devotionLabel: "Dévotion du jour",
    devotionDate: "Aujourd'hui",
    devotionVerseRef: "Ésaïe 14:4-5",
    devotionVerse:
      "Le Seigneur a brisé le bâton des méchants, le sceptre des dominateurs.",
    devotionReflectionTitle: "Réflexion",
    devotionReflection:
      "Ce qui semblait irréversible dans ta vie — une situation figée, un joug ancien — Dieu peut le renverser en un instant. Le bâton qui t'oppressait aujourd'hui peut être brisé demain. Ta situation n'a pas le dernier mot ; Dieu l'a.",
    devotionPrayerTitle: "Prière",
    devotionPrayer:
      "Seigneur, je te remets ce qui me semble figé et sans issue. Brise aujourd'hui ce qui m'opprime, et lève-toi pour moi comme tu t'es levé pour ton peuple. Amen.",
    shareBtn: "Partager",
    footerNote: "Bâti avec grâce, pour le monde entier.",
    audioLabel: "Écouter le message",
    videoLabel: "Regarder la vidéo",
    playLabel: "Lecture",
    pauseLabel: "Pause",
    navLive: "Direct",
    liveBadge: "EN DIRECT",
    liveOfflineTitle: "Pas de direct pour le moment",
    liveOfflineBody: "Revenez pendant un culte pour suivre la diffusion en direct.",
    nextServiceLabel: "Prochain culte",
    nextServiceValue: "Dimanche, 10h00",
    watchOnYoutube: "Regarder sur YouTube",
    watchOnFacebook: "Regarder sur Facebook",
    navRadio: "Radio",
    radioTitle: "Radio en direct",
    radioSubtitle: "Louange, prédications et enseignements, 24h/24",
    radioOnAir: "À l'antenne",
    navTv: "Télévision",
    tvTitle: "Télévision en direct",
    tvSubtitle: "Notre chaîne, 24h/24",
    tvOnAir: "À l'antenne",
    donateBtn: "Faire un don",
    donateSubtext: "Soutenez la mission",
    navPrayer: "Prière",
    navDonate: "Don",
    donateTitle: "Soutenir la mission",
    donateHeroBody: "Chaque don aide à porter l'Évangile plus loin — production de contenu, diffusion, accompagnement pastoral, aide aux plus démunis.",
    donateImpactTitle: "Ce que votre don rend possible",
    donateImpact1: "Produire des dévotions et enseignements pour la communauté",
    donateImpact2: "Maintenir le direct, la radio et la télévision en ligne",
    donateImpact3: "Soutenir les familles dans le besoin",
    donateOneTime: "Don unique",
    donateMonthly: "Don mensuel",
    donateAmountLabel: "Choisissez un montant",
    donateCustom: "Autre montant",
    donateCta: "Faire un don maintenant",
    donateSecure: "Paiement sécurisé via PayPal",
    prayerTitle: "Demande de prière",
    prayerSubtitle: "Partagez ce qui pèse sur votre cœur — notre équipe prie pour vous.",
    prayerNameLabel: "Votre nom (optionnel)",
    prayerNamePlaceholder: "Anonyme",
    prayerRequestLabel: "Votre demande",
    prayerRequestPlaceholder: "Écrivez votre demande ici...",
    prayerSubmitBtn: "Envoyer la demande",
    prayerSendingBtn: "Envoi en cours...",
    prayerSuccessTitle: "Demande envoyée",
    prayerSuccessBody: "Merci de nous avoir fait confiance. Notre équipe prie pour vous.",
    prayerSuccessNew: "Envoyer une autre demande",
    prayerErrorBody: "Une erreur est survenue. Veuillez réessayer.",
    pillars: [
      { key: "adoration", title: "Adoration", body: "Vivre en présence de Dieu, cœur ouvert, dans la louange et le silence." },
      { key: "fraternite", title: "Communion fraternelle", body: "Marcher ensemble, se porter les uns les autres avec vérité et tendresse." },
      { key: "discipolat", title: "Discipolat", body: "Grandir dans la Parole, être formé et former d'autres à leur tour." },
      { key: "service", title: "Service", body: "Servir les pauvres et les marginalisés, à l'image du Christ." },
      { key: "evangelisation", title: "Évangélisation", body: "Annoncer la bonne nouvelle jusqu'aux extrémités de la terre." },
    ],
  },
  en: {
    tagline: "Centre Lumière du Grand Réveil",
    subtagline: "Embassy of Grace",
    navHome: "Home",
    navDevotion: "Devotion",
    navPillars: "Pillars",
    heroTitle: "The light rises again",
    heroBody:
      "A living community, carried by grace, sent to light up every nation, every language, every heart.",
    missionLabel: "Our mission",
    missionBody:
      "Making disciples of all nations, embodying the love of Christ through worship, service, and the proclamation of good news — to the very edges.",
    verseRef: "Luke 4:18",
    verseText:
      "The Spirit of the Lord is on me, he has sent me to proclaim good news to the poor.",
    pillarsTitle: "Five pillars, one calling",
    pillarsIntro: "Grounded in Matthew 28:19, these pillars shape our whole community life.",
    ctaDevotion: "Read today's devotion",
    devotionLabel: "Today's devotion",
    devotionDate: "Today",
    devotionVerseRef: "Isaiah 14:4-5",
    devotionVerse:
      "The Lord has broken the rod of the wicked, the scepter of the rulers.",
    devotionReflectionTitle: "Reflection",
    devotionReflection:
      "What seemed permanent in your life — a stuck situation, an old yoke — God can overturn in an instant. The rod that oppresses you today can be broken tomorrow. Your circumstance does not have the last word; God does.",
    devotionPrayerTitle: "Prayer",
    devotionPrayer:
      "Lord, I hand you what feels frozen and without a way out. Break today what oppresses me, and rise for me as you rose for your people. Amen.",
    shareBtn: "Share",
    footerNote: "Built with grace, for the whole world.",
    audioLabel: "Listen to the message",
    videoLabel: "Watch the video",
    playLabel: "Play",
    pauseLabel: "Pause",
    navLive: "Live",
    liveBadge: "LIVE",
    liveOfflineTitle: "No live stream right now",
    liveOfflineBody: "Come back during a service to watch the live broadcast.",
    nextServiceLabel: "Next service",
    nextServiceValue: "Sunday, 10:00 AM",
    watchOnYoutube: "Watch on YouTube",
    watchOnFacebook: "Watch on Facebook",
    navRadio: "Radio",
    radioTitle: "Live radio",
    radioSubtitle: "Worship, sermons, and teaching, 24/7",
    radioOnAir: "On air",
    navTv: "TV",
    tvTitle: "Live TV",
    tvSubtitle: "Our channel, 24/7",
    tvOnAir: "On air",
    donateBtn: "Donate",
    donateSubtext: "Support the mission",
    navPrayer: "Prayer",
    navDonate: "Give",
    donateTitle: "Support the mission",
    donateHeroBody: "Every gift helps carry the Gospel further — content, broadcasting, pastoral care, and support for those in need.",
    donateImpactTitle: "What your gift makes possible",
    donateImpact1: "Producing devotions and teaching for the community",
    donateImpact2: "Keeping the live stream, radio, and TV running",
    donateImpact3: "Supporting families in need",
    donateOneTime: "One-time gift",
    donateMonthly: "Monthly gift",
    donateAmountLabel: "Choose an amount",
    donateCustom: "Other amount",
    donateCta: "Give now",
    donateSecure: "Secure payment via PayPal",
    prayerTitle: "Prayer request",
    prayerSubtitle: "Share what's on your heart — our team prays for you.",
    prayerNameLabel: "Your name (optional)",
    prayerNamePlaceholder: "Anonymous",
    prayerRequestLabel: "Your request",
    prayerRequestPlaceholder: "Write your request here...",
    prayerSubmitBtn: "Send request",
    prayerSendingBtn: "Sending...",
    prayerSuccessTitle: "Request sent",
    prayerSuccessBody: "Thank you for trusting us. Our team is praying for you.",
    prayerSuccessNew: "Send another request",
    prayerErrorBody: "Something went wrong. Please try again.",
    pillars: [
      { key: "adoration", title: "Worship", body: "Living in God's presence, an open heart, in praise and in silence." },
      { key: "fraternite", title: "Fellowship", body: "Walking together, carrying one another with truth and tenderness." },
      { key: "discipolat", title: "Discipleship", body: "Growing in the Word, being formed and forming others in turn." },
      { key: "service", title: "Service", body: "Serving the poor and the marginalized, after the image of Christ." },
      { key: "evangelisation", title: "Evangelism", body: "Proclaiming the good news to the ends of the earth." },
    ],
  },
  ht: {
    tagline: "Centre Lumière du Grand Réveil",
    subtagline: "Anbasad Gras la",
    navHome: "Akèy",
    navDevotion: "Devosyon",
    navPillars: "Pilye",
    heroTitle: "Limyè a leve ankò",
    heroBody:
      "Yon kominote vivan, gras pote l, voye pou klere chak nasyon, chak lang, chak kè.",
    missionLabel: "Misyon nou",
    missionBody:
      "Fè disip nan tout nasyon, montre lanmou Kris la nan adorasyon, sèvis, ak anonse bon nouvèl la — jiska dènye kwen tè a.",
    verseRef: "Lik 4:18",
    verseText:
      "Lespri Senyè a sou mwen, li voye m pou m anonse bon nouvèl la bay pòv yo.",
    pillarsTitle: "Senk pilye, yon sèl apèl",
    pillarsIntro: "Baze sou Matye 28:19, pilye sa yo dirije tout lavi kominote nou an.",
    ctaDevotion: "Li devosyon jodi a",
    devotionLabel: "Devosyon jodi a",
    devotionDate: "Jodi a",
    devotionVerseRef: "Ezayi 14:4-5",
    devotionVerse:
      "Senyè a kase baton mechan yo, baton chèf k ap dominen yo.",
    devotionReflectionTitle: "Refleksyon",
    devotionReflection:
      "Sa ki te sanble pa ka chanje nan lavi w — yon sitiyasyon bloke, yon ansyen jouk — Bondye ka ranvèse l yon sèl kou. Baton k ap oprime w jodi a ka kase demen. Sitiyasyon w lan pa gen dènye mo a; se Bondye ki genyen l.",
    devotionPrayerTitle: "Priyè",
    devotionPrayer:
      "Senyè, m ap remèt ou sa ki sanble bloke san chape pou mwen. Kase jodi a sa k ap oprime m, epi leve pou mwen jan ou te leve pou pèp ou a. Amèn.",
    shareBtn: "Pataje",
    footerNote: "Bati ak gras, pou lemonn antye.",
    audioLabel: "Koute mesaj la",
    videoLabel: "Gade videyo a",
    playLabel: "Jwe",
    pauseLabel: "Poze",
    navLive: "Dirèk",
    liveBadge: "AN DIRÈK",
    liveOfflineTitle: "Pa gen dirèk kounye a",
    liveOfflineBody: "Retounen pandan yon sèvis pou swiv difizyon an dirèk la.",
    nextServiceLabel: "Pwochen sèvis",
    nextServiceValue: "Dimanch, 10h00",
    watchOnYoutube: "Gade sou YouTube",
    watchOnFacebook: "Gade sou Facebook",
    navRadio: "Radyo",
    radioTitle: "Radyo an dirèk",
    radioSubtitle: "Adorasyon, predikasyon ak ansèyman, 24/24",
    radioOnAir: "Sou antèn",
    navTv: "Televizyon",
    tvTitle: "Televizyon an dirèk",
    tvSubtitle: "Chèn nou an, 24/24",
    tvOnAir: "Sou antèn",
    donateBtn: "Fè yon don",
    donateSubtext: "Soutni misyon an",
    navPrayer: "Priyè",
    navDonate: "Don",
    donateTitle: "Soutni misyon an",
    donateHeroBody: "Chak don ede pote Levanjil la pi lwen — kontni, difizyon, akonpayman pastoral, ak èd pou fanmi ki nan bezwen.",
    donateImpactTitle: "Sa don ou fè posib",
    donateImpact1: "Pwodwi devosyon ak ansèyman pou kominote a",
    donateImpact2: "Kenbe dirèk la, radyo a, ak televizyon an sou entènèt",
    donateImpact3: "Soutni fanmi ki nan bezwen",
    donateOneTime: "Don sèl fwa",
    donateMonthly: "Don chak mwa",
    donateAmountLabel: "Chwazi yon montan",
    donateCustom: "Lòt montan",
    donateCta: "Fè yon don kounye a",
    donateSecure: "Peman sekirize via PayPal",
    prayerTitle: "Demann priyè",
    prayerSubtitle: "Pataje sa k sou kè w — ekip nou an ap priye pou ou.",
    prayerNameLabel: "Non ou (opsyonèl)",
    prayerNamePlaceholder: "Anonim",
    prayerRequestLabel: "Demann ou",
    prayerRequestPlaceholder: "Ekri demann ou la la...",
    prayerSubmitBtn: "Voye demann lan",
    prayerSendingBtn: "N ap voye...",
    prayerSuccessTitle: "Demann voye",
    prayerSuccessBody: "Mèsi paske ou fè nou konfyans. Ekip nou an ap priye pou ou.",
    prayerSuccessNew: "Voye yon lòt demann",
    prayerErrorBody: "Gen yon erè. Tanpri eseye ankò.",
    pillars: [
      { key: "adoration", title: "Adorasyon", body: "Viv nan prezans Bondye, ak yon kè ouvè, nan lwanj ak nan silans." },
      { key: "fraternite", title: "Fratènite", body: "Mache ansanm, pote youn lòt ak verite ak tandrès." },
      { key: "discipolat", title: "Disiplina", body: "Grandi nan Pawòl la, fòme e fòme lòt moun." },
      { key: "service", title: "Sèvis", body: "Sèvi pòv yo ak moun ki mete sou kote yo, jan Kris fè l la." },
      { key: "evangelisation", title: "Evanjelizasyon", body: "Anonse bon nouvèl la jiska dènye kwen latè." },
    ],
  },
};

const PILLAR_ICONS = {
  adoration: Flame,
  fraternite: Users,
  discipolat: GraduationCap,
  service: HandHeart,
  evangelisation: Megaphone,
};

const LANG_LABELS = { fr: "FR", en: "EN", ht: "HT" };

// Remplacez ces liens par vos propres fichiers audio (mp3) et vidéos (page YouTube/Vimeo, etc.)
const MEDIA = {
  audioSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  // Remplacez par l'URL "embed" de votre chaîne YouTube (ex: https://www.youtube.com/embed/live_stream?channel=VOTRE_ID)
  youtubeEmbedUrl: "https://www.youtube.com/embed/live_stream?channel=UC_x5XG1OV2P6uZZ5FSM9Ttw",
  // Remplacez par l'URL "embed" de votre page Facebook (via Facebook Video Plugin)
  facebookEmbedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F",
  // Remplacez par l'URL de votre flux radio en direct (Icecast/Shoutcast, ou un service comme Radio.co, Zeno.fm)
  radioStreamUrl: "https://ice1.somafm.com/groovesalad-256-mp3",
  radioStationName: "Radio Centre Lumière",
  // Remplacez par l'URL "embed" de votre chaîne TV en continu (playlist YouTube en boucle, ou lien embed Vimeo/Facebook)
  tvEmbedUrl: "https://www.youtube.com/embed/live_stream?channel=UC_x5XG1OV2P6uZZ5FSM9Ttw",
  tvChannelName: "Télé Centre Lumière",
  // Remplacez par votre vrai lien de don (PayPal, Stripe, Zelle, GoFundMe, etc.)
  donationUrl: "https://www.paypal.com/donate/?hosted_button_id=ZAYBYSWWVXULJ",
  // Remplacez par votre URL Formspree (gratuit sur formspree.io) pour recevoir les demandes de prière par email
  prayerFormEndpoint: "https://formspree.io/f/xyegwewb",
};

function Dawn({ compact }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        className="dawn-arc"
        style={{
          position: "absolute",
          left: "50%",
          bottom: compact ? "-60%" : "-40%",
          width: "160%",
          height: "160%",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle at 50% 100%, ${COLORS.dawn} 0%, ${COLORS.ember} 28%, rgba(232,98,44,0) 62%)`,
          opacity: 0.9,
        }}
      />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("fr");
  const [tab, setTab] = useState("home");
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liveSource, setLiveSource] = useState("youtube");
  const [isLive, setIsLive] = useState(true); // simulation pour la démo
  const [radioPlaying, setRadioPlaying] = useState(false);
  const [prayerName, setPrayerName] = useState("");
  const [prayerText, setPrayerText] = useState("");
  const [prayerStatus, setPrayerStatus] = useState("idle"); // idle | sending | success | error
  const [donateAmount, setDonateAmount] = useState(25);
  const [donateFrequency, setDonateFrequency] = useState("once");
  const audioRef = useRef(null);
  const radioRef = useRef(null);

  const submitPrayer = async (e) => {
    e.preventDefault();
    if (!prayerText.trim()) return;
    setPrayerStatus("sending");
    try {
      const res = await fetch(MEDIA.prayerFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ name: prayerName || "Anonyme", message: prayerText, langue: lang }),
      });
      if (res.ok) {
        setPrayerStatus("success");
      } else {
        setPrayerStatus("error");
      }
    } catch {
      setPrayerStatus("error");
    }
  };

  const toggleRadio = () => {
    const el = radioRef.current;
    if (!el) return;
    if (radioPlaying) {
      el.pause();
    } else {
      el.play();
    }
  };
  const t = CONTENT[lang];

  const toggleAudio = () => {
    const el = audioRef.current;
    if (!el) return;
    if (isPlaying) {
      el.pause();
    } else {
      el.play();
    }
  };

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Work Sans', sans-serif",
        background: COLORS.night,
        color: COLORS.light,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <style>{FONTS}{`
        * { box-sizing: border-box; }
        .display { font-family: 'Fraunces', serif; }
        .dawn-arc { animation: rise 2.4s cubic-bezier(.2,.8,.2,1) both; }
        @keyframes rise {
          from { transform: translateX(-50%) translateY(8%); opacity: 0; }
          to { transform: translateX(-50%) translateY(0%); opacity: 0.9; }
        }
        .fade-up { animation: fadeUp .6s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tab-btn { transition: color .2s ease, transform .15s ease; }
        .tab-btn:active { transform: scale(0.94); }
        .pillar-card { transition: transform .2s ease, border-color .2s ease; }
        .pillar-card:hover { transform: translateY(-2px); border-color: ${COLORS.dawn}; }
        .lang-pill { transition: background .2s ease, color .2s ease; }
        @media (prefers-reduced-motion: reduce) {
          .dawn-arc, .fade-up { animation: none !important; }
        }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: 430,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 20px 8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div>
            <div className="display" style={{ fontSize: 15, fontWeight: 600, letterSpacing: 0.2 }}>
              {t.tagline}
            </div>
            <div style={{ fontSize: 11, color: COLORS.mist, marginTop: 1 }}>{t.subtagline}</div>
          </div>
          <div style={{ display: "flex", gap: 4, background: "rgba(255,255,255,0.06)", padding: 3, borderRadius: 999 }}>
            {Object.keys(CONTENT).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className="lang-pill"
                style={{
                  border: "none",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "5px 9px",
                  borderRadius: 999,
                  background: lang === code ? COLORS.dawn : "transparent",
                  color: lang === code ? COLORS.night : COLORS.mist,
                }}
              >
                {LANG_LABELS[code]}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", position: "relative" }}>
          {tab === "home" && (
            <div key={lang + "-home"} className="fade-up">
              <div style={{ position: "relative", padding: "36px 24px 28px", minHeight: 230, overflow: "hidden" }}>
                {loaded && <Dawn />}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div
                    className="display"
                    style={{ fontSize: 34, lineHeight: 1.12, fontWeight: 600, maxWidth: 280 }}
                  >
                    {t.heroTitle}
                  </div>
                  <p style={{ fontSize: 14.5, color: COLORS.mist, marginTop: 14, lineHeight: 1.55, maxWidth: 300 }}>
                    {t.heroBody}
                  </p>
                </div>
              </div>

              <div style={{ padding: "0 20px" }}>
                <div
                  style={{
                    background: COLORS.ink,
                    borderRadius: 16,
                    padding: 20,
                    border: `1px solid rgba(244,185,66,0.18)`,
                  }}
                >
                  <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: COLORS.dawn, fontWeight: 600 }}>
                    {t.missionLabel}
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, marginTop: 10 }}>{t.missionBody}</p>
                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="display" style={{ fontSize: 15, fontStyle: "italic", lineHeight: 1.5, color: COLORS.light }}>
                      "{t.verseText}"
                    </p>
                    <div style={{ fontSize: 12, color: COLORS.mist, marginTop: 6 }}>— {t.verseRef}</div>
                  </div>
                </div>

                <button
                  onClick={() => setTab("devotion")}
                  style={{
                    width: "100%",
                    marginTop: 16,
                    background: COLORS.ember,
                    color: COLORS.light,
                    border: "none",
                    borderRadius: 14,
                    padding: "15px 18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 14.5,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {t.ctaDevotion}
                  <ChevronRight size={18} />
                </button>

                <button
                  onClick={() => setTab("donate")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    width: "100%",
                    marginTop: 10,
                    background: "rgba(244,185,66,0.12)",
                    border: `1px solid rgba(244,185,66,0.35)`,
                    color: COLORS.dawn,
                    borderRadius: 14,
                    padding: "13px 18px",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    boxSizing: "border-box",
                  }}
                >
                  <Heart size={17} />
                  <span style={{ flex: 1, textAlign: "left" }}>{t.donateBtn}</span>
                  <span style={{ fontSize: 11.5, color: COLORS.mist, fontWeight: 500 }}>{t.donateSubtext}</span>
                </button>

                <div style={{ marginTop: 26, marginBottom: 8 }}>
                  <div className="display" style={{ fontSize: 19, fontWeight: 600 }}>
                    {t.pillarsTitle}
                  </div>
                  <p style={{ fontSize: 12.5, color: COLORS.mist, marginTop: 4 }}>{t.pillarsIntro}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingBottom: 24 }}>
                  {t.pillars.map((p) => {
                    const Icon = PILLAR_ICONS[p.key];
                    return (
                      <div
                        key={p.key}
                        className="pillar-card"
                        style={{
                          display: "flex",
                          gap: 12,
                          alignItems: "flex-start",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: 12,
                          padding: 14,
                        }}
                      >
                        <div
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: 10,
                            background: "rgba(244,185,66,0.14)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={17} color={COLORS.dawn} />
                        </div>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 600 }}>{p.title}</div>
                          <div style={{ fontSize: 12.5, color: COLORS.mist, marginTop: 2, lineHeight: 1.5 }}>{p.body}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {tab === "devotion" && (
            <div key={lang + "-devotion"} className="fade-up" style={{ padding: "28px 20px 24px" }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: COLORS.dawn, fontWeight: 600 }}>
                {t.devotionLabel}
              </div>
              <div style={{ fontSize: 12, color: COLORS.mist, marginTop: 4 }}>{t.devotionDate}</div>

              <div
                style={{
                  marginTop: 18,
                  background: `linear-gradient(160deg, ${COLORS.ink}, ${COLORS.night})`,
                  border: "1px solid rgba(244,185,66,0.2)",
                  borderRadius: 16,
                  padding: 22,
                }}
              >
                <p className="display" style={{ fontSize: 20, lineHeight: 1.45, fontWeight: 500, fontStyle: "italic" }}>
                  "{t.devotionVerse}"
                </p>
                <div style={{ fontSize: 12.5, color: COLORS.dawn, marginTop: 10, fontWeight: 600 }}>{t.devotionVerseRef}</div>
              </div>

              <div style={{ marginTop: 22 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.light }}>{t.devotionReflectionTitle}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: COLORS.mist, marginTop: 8 }}>{t.devotionReflection}</p>
              </div>

              <div
                style={{
                  marginTop: 20,
                  background: "rgba(232,98,44,0.1)",
                  border: `1px solid rgba(232,98,44,0.3)`,
                  borderRadius: 14,
                  padding: 16,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.ember }}>{t.devotionPrayerTitle}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 8, color: COLORS.light }}>{t.devotionPrayer}</p>
              </div>

              {/* Lecteur audio */}
              <div
                style={{
                  marginTop: 18,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14,
                  padding: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <button
                  onClick={toggleAudio}
                  aria-label={isPlaying ? t.pauseLabel : t.playLabel}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: COLORS.dawn,
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  {isPlaying ? <Pause size={18} color={COLORS.night} /> : <Play size={18} color={COLORS.night} style={{ marginLeft: 2 }} />}
                </button>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{t.audioLabel}</div>
                <audio
                  ref={audioRef}
                  src={MEDIA.audioSrc}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  style={{ display: "none" }}
                />
              </div>

              {/* Lien vidéo */}
              <a
                href={MEDIA.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 10,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14,
                  padding: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  textDecoration: "none",
                  color: COLORS.light,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "rgba(232,98,44,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Video size={18} color={COLORS.ember} />
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{t.videoLabel}</div>
                <ChevronRight size={16} style={{ marginLeft: "auto", color: COLORS.mist }} />
              </a>

              <button
                style={{
                  width: "100%",
                  marginTop: 20,
                  background: "transparent",
                  border: `1px solid rgba(255,255,255,0.2)`,
                  color: COLORS.light,
                  borderRadius: 12,
                  padding: "12px 16px",
                  fontSize: 13.5,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {t.shareBtn}
              </button>
            </div>
          )}

          {tab === "live" && (
            <div key={lang + "-live"} className="fade-up" style={{ padding: "28px 20px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                  {t.navLive}
                </div>
                {isLive && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(232,98,44,0.16)",
                      border: `1px solid ${COLORS.ember}`,
                      color: COLORS.ember,
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "5px 10px",
                      borderRadius: 999,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: COLORS.ember,
                        display: "inline-block",
                      }}
                    />
                    {t.liveBadge}
                  </div>
                )}
              </div>

              {isLive ? (
                <>
                  <div style={{ display: "flex", gap: 8, marginTop: 16, marginBottom: 14 }}>
                    <button
                      onClick={() => setLiveSource("youtube")}
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        padding: "10px 0",
                        borderRadius: 10,
                        border: `1px solid ${liveSource === "youtube" ? COLORS.dawn : "rgba(255,255,255,0.15)"}`,
                        background: liveSource === "youtube" ? "rgba(244,185,66,0.14)" : "transparent",
                        color: liveSource === "youtube" ? COLORS.dawn : COLORS.mist,
                        fontSize: 12.5,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      <Youtube size={15} /> YouTube
                    </button>
                    <button
                      onClick={() => setLiveSource("facebook")}
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        padding: "10px 0",
                        borderRadius: 10,
                        border: `1px solid ${liveSource === "facebook" ? COLORS.dawn : "rgba(255,255,255,0.15)"}`,
                        background: liveSource === "facebook" ? "rgba(244,185,66,0.14)" : "transparent",
                        color: liveSource === "facebook" ? COLORS.dawn : COLORS.mist,
                        fontSize: 12.5,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      <Facebook size={15} /> Facebook
                    </button>
                  </div>

                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "56.25%",
                      borderRadius: 14,
                      overflow: "hidden",
                      background: "#000",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <iframe
                      key={liveSource}
                      src={liveSource === "youtube" ? MEDIA.youtubeEmbedUrl : MEDIA.facebookEmbedUrl}
                      title="Direct"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    />
                  </div>

                  <a
                    href={liveSource === "youtube" ? MEDIA.videoUrl : "https://www.facebook.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textAlign: "center",
                      marginTop: 14,
                      fontSize: 12.5,
                      color: COLORS.mist,
                      textDecoration: "underline",
                    }}
                  >
                    {liveSource === "youtube" ? t.watchOnYoutube : t.watchOnFacebook}
                  </a>
                </>
              ) : (
                <div
                  style={{
                    marginTop: 20,
                    textAlign: "center",
                    background: COLORS.ink,
                    borderRadius: 16,
                    padding: "36px 20px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Radio size={30} color={COLORS.mist} style={{ marginBottom: 12 }} />
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{t.liveOfflineTitle}</div>
                  <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 8, lineHeight: 1.5 }}>{t.liveOfflineBody}</p>
                  <div
                    style={{
                      marginTop: 18,
                      display: "inline-block",
                      background: "rgba(244,185,66,0.12)",
                      border: `1px solid rgba(244,185,66,0.3)`,
                      borderRadius: 10,
                      padding: "10px 16px",
                    }}
                  >
                    <div style={{ fontSize: 11, color: COLORS.dawn, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6 }}>
                      {t.nextServiceLabel}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, marginTop: 3 }}>{t.nextServiceValue}</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === "radio" && (
            <div key={lang + "-radio"} className="fade-up" style={{ padding: "28px 20px 24px" }}>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.radioTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.radioSubtitle}</p>

              <div
                style={{
                  position: "relative",
                  marginTop: 26,
                  background: `linear-gradient(160deg, ${COLORS.ink}, ${COLORS.night})`,
                  border: "1px solid rgba(244,185,66,0.2)",
                  borderRadius: 20,
                  padding: "36px 20px",
                  textAlign: "center",
                  overflow: "hidden",
                }}
              >
                {radioPlaying && <Dawn compact />}
                <div style={{ position: "relative", zIndex: 1 }}>
                  {radioPlaying && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "rgba(232,98,44,0.16)",
                        border: `1px solid ${COLORS.ember}`,
                        color: COLORS.ember,
                        fontSize: 10.5,
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: 999,
                        marginBottom: 16,
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.ember, display: "inline-block" }} />
                      {t.radioOnAir}
                    </div>
                  )}

                  <button
                    onClick={toggleRadio}
                    aria-label={radioPlaying ? t.pauseLabel : t.playLabel}
                    style={{
                      width: 84,
                      height: 84,
                      borderRadius: "50%",
                      background: COLORS.dawn,
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      margin: "0 auto",
                      boxShadow: radioPlaying ? "0 0 0 8px rgba(244,185,66,0.14)" : "none",
                    }}
                  >
                    {radioPlaying ? (
                      <Pause size={32} color={COLORS.night} />
                    ) : (
                      <Play size={32} color={COLORS.night} style={{ marginLeft: 4 }} />
                    )}
                  </button>

                  <div className="display" style={{ fontSize: 17, fontWeight: 600, marginTop: 20 }}>
                    {MEDIA.radioStationName}
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "prayer" && (
            <div key={lang + "-prayer"} className="fade-up" style={{ padding: "28px 20px 24px" }}>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.prayerTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.prayerSubtitle}</p>

              {prayerStatus === "success" ? (
                <div
                  style={{
                    marginTop: 24,
                    textAlign: "center",
                    background: COLORS.ink,
                    borderRadius: 16,
                    padding: "36px 20px",
                    border: "1px solid rgba(244,185,66,0.25)",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "rgba(244,185,66,0.16)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <Check size={26} color={COLORS.dawn} />
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{t.prayerSuccessTitle}</div>
                  <p style={{ fontSize: 13.5, color: COLORS.mist, marginTop: 8, lineHeight: 1.5 }}>{t.prayerSuccessBody}</p>
                  <button
                    onClick={() => {
                      setPrayerStatus("idle");
                      setPrayerName("");
                      setPrayerText("");
                    }}
                    style={{
                      marginTop: 20,
                      background: "transparent",
                      border: `1px solid rgba(255,255,255,0.2)`,
                      color: COLORS.light,
                      borderRadius: 12,
                      padding: "10px 18px",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {t.prayerSuccessNew}
                  </button>
                </div>
              ) : (
                <form onSubmit={submitPrayer} style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.mist, display: "block", marginBottom: 6 }}>
                      {t.prayerNameLabel}
                    </label>
                    <input
                      type="text"
                      value={prayerName}
                      onChange={(e) => setPrayerName(e.target.value)}
                      placeholder={t.prayerNamePlaceholder}
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 10,
                        padding: "11px 14px",
                        color: COLORS.light,
                        fontSize: 14,
                        fontFamily: "inherit",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.mist, display: "block", marginBottom: 6 }}>
                      {t.prayerRequestLabel}
                    </label>
                    <textarea
                      value={prayerText}
                      onChange={(e) => setPrayerText(e.target.value)}
                      placeholder={t.prayerRequestPlaceholder}
                      required
                      rows={6}
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 10,
                        padding: "11px 14px",
                        color: COLORS.light,
                        fontSize: 14,
                        fontFamily: "inherit",
                        resize: "vertical",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  {prayerStatus === "error" && (
                    <div style={{ fontSize: 12.5, color: COLORS.ember }}>{t.prayerErrorBody}</div>
                  )}

                  <button
                    type="submit"
                    disabled={prayerStatus === "sending"}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      background: COLORS.ember,
                      color: COLORS.light,
                      border: "none",
                      borderRadius: 14,
                      padding: "14px 18px",
                      fontSize: 14.5,
                      fontWeight: 600,
                      cursor: prayerStatus === "sending" ? "default" : "pointer",
                      opacity: prayerStatus === "sending" ? 0.7 : 1,
                    }}
                  >
                    <Send size={16} />
                    {prayerStatus === "sending" ? t.prayerSendingBtn : t.prayerSubmitBtn}
                  </button>
                </form>
              )}
            </div>
          )}

          {tab === "donate" && (
            <div key={lang + "-donate"} className="fade-up" style={{ padding: "28px 20px 24px" }}>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.donateTitle}
              </div>
              <p style={{ fontSize: 13.5, color: COLORS.mist, marginTop: 8, lineHeight: 1.55 }}>{t.donateHeroBody}</p>

              <div
                style={{
                  marginTop: 20,
                  background: COLORS.ink,
                  borderRadius: 16,
                  padding: 18,
                  border: "1px solid rgba(244,185,66,0.18)",
                }}
              >
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.1, color: COLORS.dawn, fontWeight: 600, marginBottom: 12 }}>
                  {t.donateImpactTitle}
                </div>
                {[t.donateImpact1, t.donateImpact2, t.donateImpact3].map((line, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: i < 2 ? 10 : 0 }}>
                    <Heart size={14} color={COLORS.ember} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, lineHeight: 1.5 }}>{line}</span>
                  </div>
                ))}
              </div>

              {/* Toggle unique / mensuel */}
              <div style={{ display: "flex", gap: 8, marginTop: 22 }}>
                {[
                  { key: "once", label: t.donateOneTime },
                  { key: "monthly", label: t.donateMonthly },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setDonateFrequency(key)}
                    style={{
                      flex: 1,
                      padding: "11px 0",
                      borderRadius: 10,
                      border: `1px solid ${donateFrequency === key ? COLORS.dawn : "rgba(255,255,255,0.15)"}`,
                      background: donateFrequency === key ? "rgba(244,185,66,0.14)" : "transparent",
                      color: donateFrequency === key ? COLORS.dawn : COLORS.mist,
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Montants suggérés */}
              <div style={{ marginTop: 18 }}>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.mist, marginBottom: 10 }}>{t.donateAmountLabel}</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                  {[10, 25, 50, 100, 250, 500].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonateAmount(amount)}
                      style={{
                        padding: "14px 0",
                        borderRadius: 12,
                        border: `1px solid ${donateAmount === amount ? COLORS.dawn : "rgba(255,255,255,0.15)"}`,
                        background: donateAmount === amount ? "rgba(244,185,66,0.14)" : "rgba(255,255,255,0.04)",
                        color: donateAmount === amount ? COLORS.dawn : COLORS.light,
                        fontSize: 15,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href={MEDIA.donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  marginTop: 22,
                  background: COLORS.ember,
                  color: COLORS.light,
                  border: "none",
                  borderRadius: 14,
                  padding: "15px 18px",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  textDecoration: "none",
                  boxSizing: "border-box",
                }}
              >
                <Heart size={17} />
                {t.donateCta} — ${donateAmount}
              </a>
              <div style={{ textAlign: "center", fontSize: 11.5, color: COLORS.mist, marginTop: 10 }}>{t.donateSecure}</div>
            </div>
          )}

          {tab === "tv" && (
            <div key={lang + "-tv"} className="fade-up" style={{ padding: "28px 20px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                  {t.tvTitle}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(232,98,44,0.16)",
                    border: `1px solid ${COLORS.ember}`,
                    color: COLORS.ember,
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "5px 10px",
                    borderRadius: 999,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.ember, display: "inline-block" }} />
                  {t.tvOnAir}
                </div>
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.tvSubtitle}</p>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                  borderRadius: 14,
                  overflow: "hidden",
                  background: "#000",
                  border: "1px solid rgba(255,255,255,0.1)",
                  marginTop: 18,
                }}
              >
                <iframe
                  src={MEDIA.tvEmbedUrl}
                  title={t.tvTitle}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </div>

              <div style={{ marginTop: 14, fontSize: 13.5, fontWeight: 600, textAlign: "center", color: COLORS.mist }}>
                {MEDIA.tvChannelName}
              </div>
            </div>
          )}

          {tab === "pillars" && (
            <div key={lang + "-pillars"} className="fade-up" style={{ padding: "28px 20px 24px" }}>
              <div className="display" style={{ fontSize: 24, fontWeight: 600 }}>
                {t.pillarsTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.pillarsIntro}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
                {t.pillars.map((p, i) => {
                  const Icon = PILLAR_ICONS[p.key];
                  return (
                    <div
                      key={p.key}
                      style={{
                        background: COLORS.ink,
                        borderRadius: 14,
                        padding: 18,
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            width: 38,
                            height: 38,
                            borderRadius: 11,
                            background: "rgba(244,185,66,0.14)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon size={19} color={COLORS.dawn} />
                        </div>
                        <div style={{ fontSize: 15.5, fontWeight: 700 }}>{p.title}</div>
                      </div>
                      <p style={{ fontSize: 13.5, color: COLORS.mist, marginTop: 10, lineHeight: 1.55 }}>{p.body}</p>
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: 22, textAlign: "center" }}>
                <div style={{ fontSize: 11.5, color: COLORS.mist, fontStyle: "italic" }}>{t.footerNote}</div>
              </div>
            </div>
          )}
        </div>

        {/* Lecteur radio persistant (reste actif même en changeant d'écran) */}
        <audio
          ref={radioRef}
          src={MEDIA.radioStreamUrl}
          onPlay={() => setRadioPlaying(true)}
          onPause={() => setRadioPlaying(false)}
          style={{ display: "none" }}
        />

        {/* Mini-barre radio, visible sur tous les écrans sauf l'onglet Radio lui-même */}
        {radioPlaying && tab !== "radio" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 16px",
              background: "rgba(244,185,66,0.12)",
              borderTop: "1px solid rgba(244,185,66,0.25)",
              cursor: "pointer",
            }}
            onClick={() => setTab("radio")}
          >
            <Volume2 size={15} color={COLORS.dawn} />
            <div style={{ fontSize: 12, fontWeight: 600, flex: 1 }}>{MEDIA.radioStationName}</div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleRadio();
              }}
              aria-label={t.pauseLabel}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: COLORS.dawn,
                display: "flex",
              }}
            >
              <Pause size={16} />
            </button>
          </div>
        )}

        {/* Bottom nav */}
        <div
          style={{
            display: "flex",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(27,27,58,0.96)",
            backdropFilter: "blur(8px)",
            padding: "8px 12px calc(8px + env(safe-area-inset-bottom))",
            position: "sticky",
            bottom: 0,
          }}
        >
          {[
            { key: "home", label: t.navHome, Icon: Home },
            { key: "donate", label: t.navDonate, Icon: Heart },
            { key: "prayer", label: t.navPrayer, Icon: HandHeart },
            { key: "live", label: t.navLive, Icon: Video },
            { key: "tv", label: t.navTv, Icon: Tv },
            { key: "radio", label: t.navRadio, Icon: Radio },
            { key: "devotion", label: t.navDevotion, Icon: BookOpen },
            { key: "pillars", label: t.navPillars, Icon: Compass },
          ].map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className="tab-btn"
              style={{
                flex: 1,
                background: "none",
                border: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                padding: "6px 0",
                cursor: "pointer",
                color: tab === key ? COLORS.dawn : COLORS.mist,
              }}
            >
              <Icon size={18} />
              <span style={{ fontSize: 9, fontWeight: 600, whiteSpace: "nowrap" }}>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
