import React, { useState, useEffect, useRef } from "react";
import { Home, BookOpen, Compass, ChevronRight, Flame, Users, GraduationCap, HandHeart, Megaphone, Play, Pause, Video, Radio, Youtube, Facebook, Volume2, Tv, Heart, Send, Check, Award, Calendar, UserPlus, Sparkles } from "lucide-react";

const FONTS = ``;

const COLORS = {
  night: "#1B1B3A",
  ink: "#2D2A4A",
  dawn: "#F4B942",
  ember: "#BC4614",
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
    navHeroes: "Héros",
    navMedia: "Média",
    navMore: "Plus",
    backLabel: "Retour",
    copyrightLabel: "Centre Lumière du Grand Réveil — Ambassade de la Grâce. Tous droits réservés.",
    heroTitle: "La lumière se lève encore",
    slogan: "La Grâce Réveille, La Lumière Transforme",
    heroBody:
      "Une communauté vivante, portée par la grâce, envoyée pour éclairer chaque nation, chaque langue, chaque cœur.",
    missionLabel: "Notre mission",
    visionLabel: "Notre vision",
    visionTagline: "Réveiller les cœurs, libérer la grâce, illuminer le monde et régner.",
    visionBody: "Être un épicentre de réveil spirituel, une ambassade du ciel où chaque personne, quelle que soit son histoire, rencontre la grâce transformative de Dieu, découvre son identité en Christ et est équipée pour rayonner la lumière du royaume dans sa sphère d'influence.",
    missionBody:
      "Nous existons pour glorifier Dieu et étendre son royaume, en adorant avec ferveur, en cultivant une communauté fraternelle authentique, en faisant des disciples matures et engagés, en servant avec amour les pauvres, les brisés et les marginalisés de notre communauté, en œuvrant pour la justice, la réconciliation et la dignité humaine, et en proclamant l'Évangile de la grâce avec puissance — jusqu'à ce que le grand réveil transforme chaque cœur, chaque famille et chaque nation.",
    verseRef: "Luc 4:18",
    verseText:
      "L'Esprit du Seigneur est sur moi, il m'a envoyé pour annoncer la bonne nouvelle aux pauvres.",
    pillarsTitle: "Cinq piliers, un même appel",
    pillarsIntro: "Fondés sur Matthieu 28:19, ces piliers structurent toute notre vie communautaire.",
    heroesTitle: "Héros de la foi",
    heroesIntro: "Des vies qui ont marqué leur génération et continuent d'inspirer la nôtre.",
    heroesLessonLabel: "Leçon clé",
    heroes: [
      {
        name: "Charles Spurgeon",
        years: "1834–1892",
        role: "Le « prince des prédicateurs »",
        bio: "Pasteur baptiste anglais, il prêchait chaque semaine devant des milliers de personnes au Metropolitan Tabernacle de Londres. Ses sermons imprimés continuent d'être lus dans le monde entier, plus d'un siècle après sa mort.",
        lesson: "Spurgeon a commencé à prêcher dès l'âge de 17 ans, sans formation théologique formelle. Sa vie rappelle que Dieu peut puissamment utiliser quelqu'un, quel que soit son parcours, quand ce dernier se rend simplement disponible.",
      },
      {
        name: "John Wesley",
        years: "1703–1791",
        role: "Fondateur du méthodisme",
        bio: "Théologien anglais, il a parcouru l'Angleterre à cheval pendant des décennies, prêchant en plein air à des dizaines de milliers de personnes et fondant un mouvement qui a transformé la vie spirituelle et sociale de toute une nation.",
        lesson: "Wesley organisait ses convertis en petits groupes de responsabilité mutuelle. Sa vie enseigne l'importance d'une communauté structurée pour une croissance durable dans la foi, au-delà des expériences spirituelles ponctuelles.",
      },
      {
        name: "D.L. Moody",
        years: "1837–1899",
        role: "Évangéliste sans formation théologique",
        bio: "Ancien vendeur de chaussures sans éducation formelle, Moody est devenu l'un des évangélistes les plus influents du 19e siècle, touchant des millions de personnes en Amérique et en Grande-Bretagne.",
        lesson: "Moody disait que le monde n'avait pas encore vu ce que Dieu pouvait faire à travers une personne entièrement consacrée à lui. Sa vie illustre que la disponibilité du cœur compte plus que les qualifications humaines.",
      },
      {
        name: "George Whitefield",
        years: "1714–1770",
        role: "Prédicateur du Grand Réveil",
        bio: "L'un des instigateurs du Premier Grand Réveil en Amérique et en Angleterre, il prêchait en plein air devant des foules de plusieurs dizaines de milliers de personnes, sans microphone, à travers les treize colonies américaines.",
        lesson: "Whitefield a traversé l'Atlantique treize fois pour prêcher. Son endurance rappelle que porter l'Évangile demande souvent un vrai sacrifice, pas seulement une conviction intérieure.",
      },
      {
        name: "Smith Wigglesworth",
        years: "1859–1947",
        role: "« L'apôtre de la foi »",
        bio: "Plombier britannique sans instruction formelle, il est devenu un prédicateur reconnu pour son ministère de guérison et sa foi radicale, marquant profondément le mouvement pentecôtiste naissant.",
        lesson: "Wigglesworth affirmait fonder sa vie non sur ce qu'il voyait ou ressentait, mais sur ce qu'il croyait. Sa vie encourage à ancrer sa foi dans la Parole de Dieu plutôt que dans les circonstances visibles.",
      },
      {
        name: "Kathryn Kuhlman",
        years: "1907–1976",
        role: "Ministère de guérison",
        bio: "Prédicatrice américaine connue pour ses grands rassemblements marqués par des guérisons rapportées et une forte présence du Saint-Esprit, elle a insisté toute sa vie sur le fait qu'elle-même n'avait aucun pouvoir.",
        lesson: "Kuhlman refusait qu'on lui attribue le mérite des guérisons, redirigeant systématiquement l'attention vers Dieu seul. Sa posture rappelle l'importance de rester un simple instrument, jamais la source.",
      },
      {
        name: "A.A. Allen",
        years: "1911–1970",
        role: "Ministère de guérison et miracles",
        bio: "Prédicateur américain associé au mouvement de guérison par la foi des années 1950-60, connu pour ses grandes campagnes sous tente marquées par des guérisons et miracles rapportés, touchant particulièrement les communautés marginalisées.",
        lesson: "Allen prêchait avec la conviction que Dieu voulait agir puissamment aujourd'hui, pas seulement dans les récits bibliques du passé. Sa vie, avec ses luttes personnelles bien documentées, rappelle aussi qu'aucun ministre n'est à l'abri de la faiblesse humaine — la grâce reste nécessaire à tous, y compris ceux qui prêchent.",
      },
      {
        name: "Billy Graham",
        years: "1918–2018",
        role: "« L'évangéliste des présidents »",
        bio: "Considéré comme l'évangéliste le plus influent du 20e siècle, il a prêché en personne devant plus de 200 millions de personnes dans 185 pays lors de ses grandes croisades, tout en conseillant plusieurs présidents américains sans jamais se laisser entraîner dans la politique partisane.",
        lesson: "Graham a maintenu une réputation d'intégrité personnelle et financière irréprochable pendant plus de 60 ans de ministère public, en s'imposant des règles strictes de transparence. Sa vie rappelle que la crédibilité d'un témoignage se construit autant par le caractère que par le message.",
      },
      {
        name: "Oral Roberts",
        years: "1918–2009",
        role: "Pionnier de la guérison divine télévisée",
        bio: "Prédicateur américain pionnier de la télévangélisation, il a porté le ministère de guérison divine à une échelle nationale grâce à la télévision, et a fondé l'Oral Roberts University pour former une nouvelle génération de leaders chrétiens.",
        lesson: "Roberts insistait sur le principe qu'il appelait la « foi de semence » — donner généreusement en confiance que Dieu multiplie ce qui est semé. Sa vie illustre l'importance d'oser innover dans la manière de porter l'Évangile, en utilisant les outils de son époque.",
      },
    ],
    ctaDevotion: "Lire la dévotion du jour",
    devotionLabel: "Dévotion du jour",
    devotionDate: "Aujourd'hui",
    devotionReflectionTitle: "Réflexion",
    devotionPrayerTitle: "Prière",
    devotions: [
      {
        ref: "Ésaïe 14:4-5",
        verse: "Le Seigneur a brisé le bâton des méchants, le sceptre des dominateurs.",
        reflection: "Ce qui semblait irréversible dans ta vie — une situation figée, un joug ancien — Dieu peut le renverser en un instant. Le bâton qui t'oppressait aujourd'hui peut être brisé demain. Ta situation n'a pas le dernier mot ; Dieu l'a.",
        prayer: "Seigneur, je te remets ce qui me semble figé et sans issue. Brise aujourd'hui ce qui m'opprime, et lève-toi pour moi comme tu t'es levé pour ton peuple. Amen.",
      },
      {
        ref: "Lamentations 3:22-23",
        verse: "Les bontés de l'Éternel ne sont pas épuisées, ses compassions ne sont pas à leur terme ; elles se renouvellent chaque matin.",
        reflection: "Peu importe hier — ses échecs, ses larmes, ses regrets — la grâce de Dieu ne s'use pas. Chaque matin est une invitation à recommencer, non parce que tu le mérites, mais parce que sa fidélité est nouvelle chaque jour.",
        prayer: "Père, merci pour cette grâce renouvelée aujourd'hui. Aide-moi à laisser hier derrière moi et à marcher dans ta fidélité. Amen.",
      },
      {
        ref: "Philippiens 4:6-7",
        verse: "Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces.",
        reflection: "L'inquiétude promet de résoudre le problème mais ne fait que l'agrandir. La prière, elle, ne change pas toujours la situation immédiatement — mais elle change ce qui se passe en toi. La paix de Dieu ne dépend pas de la réponse, mais de la remise.",
        prayer: "Seigneur, je te remets ce qui pèse sur mon cœur aujourd'hui. Garde mon cœur et mes pensées en ta paix. Amen.",
      },
      {
        ref: "Josué 1:9",
        verse: "Fortifie-toi et prends courage ; ne t'effraie point et ne t'épouvante point, car l'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.",
        reflection: "Le courage biblique n'est pas l'absence de peur, c'est avancer malgré elle, parce que tu n'es pas seul. Quoi que tu affrontes aujourd'hui, tu ne l'affrontes pas seul.",
        prayer: "Seigneur, donne-moi le courage d'avancer aujourd'hui, sachant que tu marches avec moi. Amen.",
      },
      {
        ref: "Psaume 34:19",
        verse: "L'Éternel est près de ceux qui ont le cœur brisé, et il sauve ceux qui ont l'esprit dans l'abattement.",
        reflection: "Dieu ne se tient pas loin de ta douleur — il s'en approche. Si ton cœur est lourd aujourd'hui, tu n'es pas invisible à ses yeux ; tu es exactement là où sa présence se fait la plus proche.",
        prayer: "Seigneur, merci de te tenir près de moi dans mes moments difficiles. Je te confie mon cœur aujourd'hui. Amen.",
      },
      // --- Pilier 1 : Adoration ---
      {
        ref: "Psaume 95:6",
        verse: "Venez, prosternons-nous et humilions-nous, fléchissons le genou devant l'Éternel qui nous a faits.",
        reflection: "Adorer commence par une posture du cœur avant d'être une posture du corps : reconnaître que Dieu est Dieu, et que nous ne le sommes pas. Cette humilité n'écrase pas — elle libère.",
        prayer: "Seigneur, je m'incline devant toi aujourd'hui. Tu es Dieu, et je me repose dans cette vérité. Amen.",
      },
      {
        ref: "Psaume 100:4",
        verse: "Entrez dans ses portes avec des louanges, dans ses parvis avec des cantiques ! Célébrez-le, bénissez son nom !",
        reflection: "La reconnaissance est la porte d'entrée dans la présence de Dieu. Avant de demander quoi que ce soit aujourd'hui, prends un instant pour simplement dire merci.",
        prayer: "Merci, Seigneur, pour ta bonté envers moi. J'entre dans ta présence avec un cœur reconnaissant. Amen.",
      },
      {
        ref: "Jean 4:23-24",
        verse: "Dieu est Esprit, et il faut que ceux qui l'adorent l'adorent en esprit et en vérité.",
        reflection: "L'adoration n'est pas un lieu ni un rituel — c'est une rencontre du cœur. Tu peux adorer Dieu véritablement partout où tu es aujourd'hui, sans attendre un cadre parfait.",
        prayer: "Seigneur, je t'adore en esprit et en vérité, là où je suis, tel que je suis. Amen.",
      },
      {
        ref: "Psaume 34:1",
        verse: "Je bénirai l'Éternel en tout temps ; sa louange sera toujours dans ma bouche.",
        reflection: "La louange n'est pas réservée aux beaux jours. Bénir Dieu « en tout temps » veut dire choisir la reconnaissance même quand les circonstances ne s'y prêtent pas naturellement.",
        prayer: "Seigneur, je choisis de te louer aujourd'hui, peu importe ce que cette journée m'apporte. Amen.",
      },
      {
        ref: "Psaume 63:3-4",
        verse: "Ta bonté vaut mieux que la vie : mes lèvres célèbrent tes louanges. Je te bénirai donc toute ma vie.",
        reflection: "Quand la bonté de Dieu devient plus précieuse à nos yeux que la vie elle-même, la louange cesse d'être un effort — elle devient un débordement naturel du cœur.",
        prayer: "Seigneur, que ta bonté soit ce que je valorise le plus aujourd'hui. Je te bénis. Amen.",
      },
      {
        ref: "Psaume 150:6",
        verse: "Que tout ce qui respire loue l'Éternel !",
        reflection: "Louer Dieu n'est pas réservé à une élite spirituelle — c'est l'appel de tout être vivant. Ton simple souffle aujourd'hui est déjà une raison de le louer.",
        prayer: "Seigneur, que chaque souffle que je prends aujourd'hui te rende gloire. Amen.",
      },
      {
        ref: "Psaume 8:1",
        verse: "Éternel, notre Seigneur ! Que ton nom est magnifique sur toute la terre !",
        reflection: "Contempler la grandeur de Dieu remet nos soucis à leur juste place. Celui qui a créé l'univers entier connaît aussi les détails de ta journée.",
        prayer: "Seigneur, ta grandeur me rassure aujourd'hui. Rien de ce que je traverse n'est trop grand pour toi. Amen.",
      },
      {
        ref: "Psaume 29:2",
        verse: "Rendez à l'Éternel gloire pour son nom ! Prosternez-vous devant l'Éternel avec des ornements sacrés !",
        reflection: "Donner gloire à Dieu, c'est lui rendre ce qui lui revient déjà — reconnaître publiquement d'où vient chaque bonne chose dans ta vie.",
        prayer: "Seigneur, je te rends gloire aujourd'hui pour tout ce que tu as fait dans ma vie. Amen.",
      },
      {
        ref: "Apocalypse 4:11",
        verse: "Tu es digne, notre Seigneur et notre Dieu, de recevoir la gloire, l'honneur et la puissance.",
        reflection: "Certaines vérités méritent d'être redites même quand on les connaît déjà. Dieu est digne — pas parce qu'il a besoin de l'entendre, mais parce que ton cœur en a besoin.",
        prayer: "Tu es digne, Seigneur. Je te le redis aujourd'hui avec un cœur sincère. Amen.",
      },
      {
        ref: "Psaume 27:4",
        verse: "Habiter dans la maison de l'Éternel tous les jours de ma vie, pour contempler la magnificence de l'Éternel.",
        reflection: "Le désir le plus profond du psalmiste n'est pas une solution à un problème, mais une présence : être avec Dieu. Que désires-tu vraiment aujourd'hui ?",
        prayer: "Seigneur, plus que toute autre chose, je désire ta présence aujourd'hui. Amen.",
      },
      {
        ref: "Psaume 84:2",
        verse: "Mon âme soupire et languit après les parvis de l'Éternel ; mon cœur et ma chair poussent des cris vers le Dieu vivant.",
        reflection: "Il est normal d'avoir soif de Dieu — cette soif elle-même est un signe de vie spirituelle, pas un manque de foi. Laisse-la te conduire vers lui aujourd'hui.",
        prayer: "Seigneur, mon âme a soif de toi. Viens combler ce vide aujourd'hui. Amen.",
      },
      {
        ref: "Psaume 103:1",
        verse: "Mon âme, bénis l'Éternel ! Que tout ce qui est en moi bénisse son saint nom !",
        reflection: "La louange se pratique aussi en se parlant à soi-même : le psalmiste s'exhorte lui-même à louer. Parfois, il faut se le rappeler activement avant de le ressentir.",
        prayer: "Mon âme, bénis l'Éternel aujourd'hui — même si le cœur n'y est pas encore pleinement. Amen.",
      },
      {
        ref: "Psaume 145:3",
        verse: "L'Éternel est grand et digne de toute louange, et sa grandeur est insondable.",
        reflection: "Il y a un repos particulier à savoir que Dieu est plus grand que ce que nous pouvons comprendre — nous n'avons pas à tout saisir pour lui faire confiance.",
        prayer: "Seigneur, ta grandeur dépasse ma compréhension, et c'est exactement pour cela que je te fais confiance. Amen.",
      },
      {
        ref: "Éphésiens 5:19-20",
        verse: "Entretenez-vous par des psaumes, des hymnes et des cantiques spirituels, chantant et célébrant de tout votre cœur les louanges du Seigneur.",
        reflection: "L'adoration en communauté nous porte les uns les autres. Le chant partagé rappelle qu'on n'adore jamais vraiment seul, même dans les moments personnels.",
        prayer: "Seigneur, merci pour la communauté qui m'entoure dans l'adoration. Amen.",
      },
      {
        ref: "Psaume 22:3",
        verse: "Tu es le Saint, tu sièges au milieu des louanges d'Israël.",
        reflection: "Dieu habite d'une manière particulière au milieu de la louange de son peuple. Quand nous louons ensemble, nous créons un espace où sa présence se manifeste.",
        prayer: "Seigneur, viens habiter au milieu de ma louange aujourd'hui. Amen.",
      },
      {
        ref: "Psaume 96:9",
        verse: "Prosternez-vous devant l'Éternel avec des ornements sacrés ; tremblez devant lui, vous tous, habitants de la terre !",
        reflection: "Un saint respect n'est pas de la peur qui éloigne — c'est une conscience juste de qui est Dieu, qui rapproche le cœur de lui avec humilité.",
        prayer: "Seigneur, je m'approche de toi aujourd'hui avec respect et confiance à la fois. Amen.",
      },
      {
        ref: "Psaume 118:24",
        verse: "C'est ici la journée que l'Éternel a faite : qu'elle soit pour nous un sujet d'allégresse et de joie !",
        reflection: "Chaque jour est un don, pas un dû. Choisir la joie aujourd'hui n'est pas ignorer les difficultés — c'est se rappeler que ce jour vient de la main de Dieu.",
        prayer: "Seigneur, merci pour cette journée. Aide-moi à y trouver la joie que tu y as déjà placée. Amen.",
      },
      {
        ref: "Psaume 46:10",
        verse: "Arrêtez, et sachez que je suis Dieu : je domine sur les nations, je domine sur la terre.",
        reflection: "Dans un monde qui bouge constamment, s'arrêter est un acte d'adoration. Le silence devant Dieu dit parfois plus que n'importe quel mot.",
        prayer: "Seigneur, je m'arrête aujourd'hui pour me souvenir que tu es Dieu, et que je ne le suis pas. Amen.",
      },
      {
        ref: "Habacuc 3:17-18",
        verse: "Même si le figuier ne fleurit pas... je veux me réjouir en l'Éternel, je veux me réjouir dans le Dieu de mon salut.",
        reflection: "La plus haute forme d'adoration est peut-être celle qui loue avant que la réponse n'arrive. Habacuc choisit la joie non pas malgré les circonstances, mais au-delà d'elles.",
        prayer: "Seigneur, je choisis de me réjouir en toi aujourd'hui, quelles que soient mes circonstances. Amen.",
      },
      {
        ref: "Psaume 43:4",
        verse: "J'irai vers l'autel de Dieu, vers Dieu, ma joie et mon allégresse.",
        reflection: "Dieu lui-même est la source de la joie — pas seulement ce qu'il donne. Chercher sa présence aujourd'hui, c'est chercher la joie à sa source.",
        prayer: "Seigneur, tu es ma joie. Je viens à toi aujourd'hui simplement pour être avec toi. Amen.",
      },
      {
        ref: "1 Chroniques 16:29",
        verse: "Rendez à l'Éternel la gloire due à son nom ! Apportez des offrandes et venez en sa présence, prosternez-vous devant l'Éternel avec de saints ornements.",
        reflection: "L'adoration a un coût — elle demande qu'on vienne, qu'on apporte quelque chose, qu'on se déplace vers Dieu. Que peux-tu lui apporter aujourd'hui, même simplement ton temps ?",
        prayer: "Seigneur, je viens à toi aujourd'hui et je t'apporte ce que j'ai : mon temps, mon cœur, mon attention. Amen.",
      },
      {
        ref: "Psaume 71:8",
        verse: "Que ma bouche soit remplie de tes louanges, que chaque jour elle publie ta gloire !",
        reflection: "Ce qui remplit notre bouche révèle souvent ce qui remplit notre cœur. Que dirait-on de toi si on écoutait tes paroles aujourd'hui ?",
        prayer: "Seigneur, remplis ma bouche de tes louanges aujourd'hui, plus que de plaintes. Amen.",
      },
      {
        ref: "Colossiens 3:16",
        verse: "Que la parole de Christ habite parmi vous abondamment ; instruisez-vous et exhortez-vous les uns les autres par des psaumes, par des hymnes.",
        reflection: "L'adoration nourrit et enseigne en même temps qu'elle célèbre. Chanter la vérité de Dieu, c'est aussi se la rappeler à soi-même.",
        prayer: "Seigneur, que ta parole habite richement en moi aujourd'hui, à travers ce que je chante et ce que je médite. Amen.",
      },
      {
        ref: "Psaume 149:1-2",
        verse: "Chantez à l'Éternel un cantique nouveau ! Que sa louange retentisse dans l'assemblée des fidèles !",
        reflection: "Dieu invite toujours à du nouveau — de nouvelles raisons de louer, de nouvelles façons de le faire. Quelle nouvelle raison as-tu de le louer aujourd'hui ?",
        prayer: "Seigneur, donne-moi un cœur qui trouve toujours de nouvelles raisons de te louer. Amen.",
      },
      {
        ref: "Psaume 34:8",
        verse: "Goûtez et voyez combien l'Éternel est bon ! Heureux l'homme qui cherche en lui son refuge !",
        reflection: "La bonté de Dieu se découvre par l'expérience, pas seulement par la théorie. As-tu pris le temps aujourd'hui de vraiment goûter à sa présence ?",
        prayer: "Seigneur, aide-moi à goûter ta bonté aujourd'hui, pas seulement à la connaître de loin. Amen.",
      },
      {
        ref: "Jean 12:3",
        verse: "Marie, ayant pris une livre d'un parfum de nard pur, de grand prix, oignit les pieds de Jésus.",
        reflection: "L'adoration de Marie a coûté cher, et certains l'ont trouvée excessive. La vraie adoration ne calcule pas toujours ce qu'elle donne à Dieu.",
        prayer: "Seigneur, donne-moi un cœur qui ne calcule pas ce qu'il t'offre. Amen.",
      },
      {
        ref: "Luc 1:46-47",
        verse: "Mon âme exalte le Seigneur, et mon esprit se réjouit en Dieu, mon Sauveur.",
        reflection: "Marie loue Dieu avant même de comprendre pleinement comment tout allait se dérouler. L'adoration peut précéder la compréhension complète de ce que Dieu fait.",
        prayer: "Seigneur, mon âme t'exalte aujourd'hui, même quand je ne comprends pas encore tout ce que tu fais. Amen.",
      },
      {
        ref: "Psaume 138:1-2",
        verse: "Je te célèbre de tout mon cœur... je me prosterne dans ton saint temple, et je célèbre ton nom.",
        reflection: "La louange « de tout son cœur » exclut la moitié-mesure. Aujourd'hui, qu'est-ce qui t'empêche de louer Dieu pleinement, sans retenue ?",
        prayer: "Seigneur, je te célèbre aujourd'hui de tout mon cœur, sans rien retenir. Amen.",
      },
      // --- Pilier 2 : Communion fraternelle ---
      {
        ref: "Actes 2:42",
        verse: "Ils persévéraient dans l'enseignement des apôtres, dans la communion fraternelle, dans la fraction du pain et dans les prières.",
        reflection: "La communion fraternelle n'était pas optionnelle pour la première Église — elle faisait partie du quotidien, au même titre que la prière. Qui fait partie de ton quotidien spirituel ?",
        prayer: "Seigneur, donne-moi le désir de vivre la communion fraternelle comme une priorité, pas comme un supplément. Amen.",
      },
      {
        ref: "Hébreux 10:24-25",
        verse: "Veillons les uns sur les autres, pour nous exciter à la charité et aux bonnes œuvres. N'abandonnons pas notre assemblée.",
        reflection: "On ne grandit pas seul dans la foi. Se réunir n'est pas juste une habitude religieuse — c'est un acte d'amour mutuel qui nous pousse vers le bien.",
        prayer: "Seigneur, aide-moi à ne jamais négliger la communauté que tu m'as donnée. Amen.",
      },
      {
        ref: "Ecclésiaste 4:9-10",
        verse: "Deux valent mieux qu'un... car, s'ils tombent, l'un relève son compagnon ; mais malheur à celui qui est seul et qui tombe.",
        reflection: "La solitude rend chaque chute plus lourde. Dieu a conçu la vie chrétienne pour être vécue à plusieurs, pas en isolement.",
        prayer: "Seigneur, merci pour ceux que tu as placés autour de moi pour me relever quand je tombe. Amen.",
      },
      {
        ref: "Romains 12:15",
        verse: "Réjouissez-vous avec ceux qui se réjouissent ; pleurez avec ceux qui pleurent.",
        reflection: "La vraie communion demande de la présence émotionnelle, pas seulement physique. Es-tu capable d'entrer dans la joie et la douleur des autres, pas seulement la tienne ?",
        prayer: "Seigneur, donne-moi un cœur qui sait vraiment se réjouir et pleurer avec les autres. Amen.",
      },
      {
        ref: "Jean 13:34-35",
        verse: "Je vous donne un commandement nouveau : aimez-vous les uns les autres... à ceci tous connaîtront que vous êtes mes disciples.",
        reflection: "L'amour fraternel est le témoignage le plus visible de notre foi — plus visible que nos paroles. Ce que les gens voient de notre communauté parle souvent plus fort que ce qu'on prêche.",
        prayer: "Seigneur, que mon amour pour les autres témoigne clairement de toi aujourd'hui. Amen.",
      },
      {
        ref: "Galates 6:2",
        verse: "Portez les fardeaux les uns des autres, et vous accomplirez ainsi la loi de Christ.",
        reflection: "Personne n'est censé tout porter seul. Partager ton fardeau avec quelqu'un n'est pas une faiblesse — c'est vivre la loi de l'amour.",
        prayer: "Seigneur, montre-moi qui a besoin que je porte son fardeau aujourd'hui, ou à qui je peux confier le mien. Amen.",
      },
      {
        ref: "Proverbes 27:17",
        verse: "Comme le fer aiguise le fer, ainsi un homme excite la colère d'un autre — ou l'affine, selon le contexte de la relation.",
        reflection: "Les relations authentiques nous façonnent, parfois par le confort, parfois par le frottement. Les deux ont leur place dans la croissance.",
        prayer: "Seigneur, merci pour les personnes qui m'aiguisent, même quand c'est inconfortable. Amen.",
      },
      {
        ref: "1 Jean 1:7",
        verse: "Si nous marchons dans la lumière, comme il est lui-même dans la lumière, nous sommes mutuellement en communion.",
        reflection: "La communion véritable naît de la transparence, pas de la façade. Marcher dans la lumière veut dire ne pas se cacher les uns des autres.",
        prayer: "Seigneur, aide-moi à marcher dans la lumière avec ceux qui m'entourent, sans masque. Amen.",
      },
      {
        ref: "Colossiens 3:13",
        verse: "Supportez-vous les uns les autres, et, si l'un a sujet de se plaindre de l'autre, pardonnez-vous réciproquement.",
        reflection: "La communauté n'est pas l'absence de conflit — c'est la présence du pardon malgré le conflit. Aucune relation durable n'y échappe.",
        prayer: "Seigneur, donne-moi la grâce de pardonner comme tu m'as pardonné. Amen.",
      },
      {
        ref: "Actes 4:32",
        verse: "La multitude de ceux qui avaient cru n'était qu'un cœur et qu'une âme.",
        reflection: "L'unité de la première Église n'était pas l'uniformité — c'était un même cœur malgré des personnes différentes. C'est encore possible aujourd'hui.",
        prayer: "Seigneur, unis nos cœurs dans ta communauté, malgré nos différences. Amen.",
      },
      {
        ref: "Philippiens 2:1-2",
        verse: "S'il y a quelque consolation en Christ... rendez ma joie parfaite, ayant un même sentiment, un même amour, une même âme.",
        reflection: "Paul lie directement notre unité les uns avec les autres à notre relation avec Christ. On ne peut pas séparer l'amour de Dieu de l'amour du prochain.",
        prayer: "Seigneur, que mon amour pour toi se traduise concrètement dans mes relations aujourd'hui. Amen.",
      },
      {
        ref: "1 Pierre 4:9-10",
        verse: "Exercez l'hospitalité les uns envers les autres, sans murmures. Que chacun mette au service des autres le don qu'il a reçu.",
        reflection: "L'hospitalité n'est pas réservée à ceux qui ont une grande maison — c'est une disposition du cœur qui accueille sans compter. Comment peux-tu accueillir quelqu'un aujourd'hui ?",
        prayer: "Seigneur, donne-moi un cœur hospitalier, prêt à accueillir sans murmurer. Amen.",
      },
      {
        ref: "Marc 2:3-4",
        verse: "Des gens amenèrent auprès de Jésus un paralytique... ils découvrirent le toit et descendirent le lit.",
        reflection: "Ces quatre amis ont porté leur ami jusqu'à Jésus quand il ne pouvait pas y aller seul. Qui portes-tu vers Jésus aujourd'hui ?",
        prayer: "Seigneur, aide-moi à porter ceux qui n'ont pas la force d'avancer seuls vers toi. Amen.",
      },
      {
        ref: "Romains 15:7",
        verse: "Accueillez-vous donc les uns les autres, comme Christ vous a accueillis, pour la gloire de Dieu.",
        reflection: "La mesure de notre accueil des autres, c'est l'accueil que Christ nous a fait — sans condition, sans mérite préalable.",
        prayer: "Seigneur, aide-moi à accueillir les autres comme tu m'as accueilli. Amen.",
      },
      {
        ref: "Éphésiens 4:2-3",
        verse: "Supportez-vous les uns les autres avec charité, vous efforçant de conserver l'unité de l'Esprit par le lien de la paix.",
        reflection: "L'unité demande un effort actif — elle ne se maintient pas toute seule. C'est un choix quotidien de préserver la paix plutôt que de la rompre.",
        prayer: "Seigneur, aide-moi à m'efforcer activement de préserver la paix dans mes relations aujourd'hui. Amen.",
      },
      {
        ref: "Actes 2:46-47",
        verse: "Ils rompaient le pain dans les maisons, prenant leur nourriture avec joie et simplicité de cœur.",
        reflection: "La communion la plus profonde se vit souvent dans les moments les plus simples — un repas partagé, une conversation ordinaire vécue avec joie.",
        prayer: "Seigneur, aide-moi à trouver de la joie dans les moments simples partagés avec les autres. Amen.",
      },
      {
        ref: "Proverbes 17:17",
        verse: "L'ami aime en tout temps, et dans le malheur il se montre un frère.",
        reflection: "La vraie amitié se révèle surtout dans les moments difficiles, pas seulement dans les moments faciles. Sois ce genre d'ami aujourd'hui.",
        prayer: "Seigneur, fais de moi un ami fidèle, présent en tout temps. Amen.",
      },
      {
        ref: "1 Thessaloniciens 5:11",
        verse: "Consolez-vous donc les uns les autres, et édifiez-vous mutuellement, comme vous le faites déjà.",
        reflection: "L'encouragement est un ministère à la portée de tous — pas besoin d'un titre ou d'un talent particulier pour édifier quelqu'un aujourd'hui.",
        prayer: "Seigneur, utilise mes paroles aujourd'hui pour encourager et édifier quelqu'un. Amen.",
      },
      {
        ref: "Jacques 5:16",
        verse: "Confessez donc vos péchés les uns aux autres, et priez les uns pour les autres, afin que vous soyez guéris.",
        reflection: "La guérison passe souvent par la vulnérabilité partagée. Se cacher éternellement empêche la restauration que Dieu veut nous donner.",
        prayer: "Seigneur, donne-moi le courage d'être vulnérable avec ceux en qui j'ai confiance. Amen.",
      },
      {
        ref: "Ruth 1:16",
        verse: "Ne me presse pas de te laisser, de retourner loin de toi ! Où tu iras, j'irai, où tu demeureras, je demeurerai.",
        reflection: "L'engagement de Ruth envers Naomi va au-delà de l'obligation — c'est un choix libre de loyauté. La vraie communion demande cette même fidélité choisie.",
        prayer: "Seigneur, donne-moi un cœur fidèle et loyal envers ceux que tu as placés dans ma vie. Amen.",
      },
      {
        ref: "1 Corinthiens 12:26",
        verse: "Si un membre souffre, tous les membres souffrent avec lui ; si un membre est honoré, tous se réjouissent avec lui.",
        reflection: "Nous sommes tellement liés les uns aux autres dans le corps de Christ que la douleur ou la joie de l'un devrait affecter tout le monde.",
        prayer: "Seigneur, rends-moi sensible à ce que vivent les membres de ma communauté aujourd'hui. Amen.",
      },
      {
        ref: "Actes 20:35",
        verse: "Il y a plus de bonheur à donner qu'à recevoir.",
        reflection: "Notre culture valorise l'accumulation ; Jésus valorise le don. La vraie communion se construit par ceux qui donnent librement, pas seulement par ceux qui reçoivent.",
        prayer: "Seigneur, apprends-moi la joie de donner librement aux autres. Amen.",
      },
      {
        ref: "Proverbes 18:24",
        verse: "Il y a des amis qui mènent à la ruine, et il y a tel ami plus attaché qu'un frère.",
        reflection: "Toutes les relations ne se valent pas. Choisis tes amitiés avec discernement, et sois toi-même ce genre d'ami fidèle pour d'autres.",
        prayer: "Seigneur, entoure-moi d'amitiés qui m'élèvent et m'aident à te suivre. Amen.",
      },
      {
        ref: "Romains 12:10",
        verse: "Par amour fraternel, soyez pleins d'affection les uns pour les autres, et rivalisez d'estime réciproque.",
        reflection: "Rivaliser d'estime, c'est chercher activement à honorer l'autre plutôt qu'à se mettre en avant. C'est une posture rare, et précieuse.",
        prayer: "Seigneur, aide-moi à honorer les autres avant de chercher à être honoré. Amen.",
      },
      {
        ref: "Actes 9:26-27",
        verse: "Barnabas, prenant Saul avec lui, le mena vers les apôtres, et leur raconta comment sur le chemin il avait vu le Seigneur.",
        reflection: "Barnabas a pris un risque en défendant Saul auprès d'une Église méfiante. Parfois, la communion demande de plaider en faveur de quelqu'un que d'autres rejettent.",
        prayer: "Seigneur, donne-moi le courage d'être un Barnabas pour quelqu'un aujourd'hui. Amen.",
      },
      {
        ref: "Psaume 133:1",
        verse: "Voici, oh ! qu'il est agréable, qu'il est doux pour des frères de demeurer ensemble !",
        reflection: "L'unité fraternelle n'est pas seulement un devoir — le psalmiste la décrit comme quelque chose d'agréable, de doux. La communauté est faite pour être appréciée, pas juste endurée.",
        prayer: "Seigneur, aide-moi à savourer la douceur de la communauté que tu m'as donnée. Amen.",
      },
      {
        ref: "Matthieu 18:20",
        verse: "Là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux.",
        reflection: "Il ne faut pas une grande foule pour que Dieu se manifeste — juste quelques personnes réunies en son nom. Ta petite communauté compte autant qu'une grande.",
        prayer: "Seigneur, merci d'être présent même dans les petits rassemblements en ton nom. Amen.",
      },
      {
        ref: "2 Corinthiens 1:3-4",
        verse: "Le Dieu de toute consolation... nous console dans toutes nos afflictions, afin que nous puissions consoler ceux qui sont dans l'affliction.",
        reflection: "Ce que Dieu nous donne, il veut souvent qu'on le transmette. Ta propre expérience de la consolation te prépare à consoler quelqu'un d'autre aujourd'hui.",
        prayer: "Seigneur, utilise la consolation que j'ai reçue de toi pour consoler quelqu'un d'autre aujourd'hui. Amen.",
      },
      // --- Pilier 3 : Discipolat ---
      {
        ref: "Matthieu 28:19-20",
        verse: "Allez, faites de toutes les nations des disciples... enseignez-leur à observer tout ce que je vous ai prescrit.",
        reflection: "Le discipolat ne s'arrête pas à la conversion — il continue par l'enseignement et l'accompagnement. Qui accompagnes-tu dans sa croissance aujourd'hui ?",
        prayer: "Seigneur, rends-moi disponible pour faire grandir quelqu'un dans la foi. Amen.",
      },
      {
        ref: "2 Timothée 2:2",
        verse: "Ce que tu as entendu de moi... confie-le à des hommes fidèles, qui soient capables de l'enseigner aussi à d'autres.",
        reflection: "Le discipolat se transmet en chaîne, génération après génération. Ce que tu as reçu n'est pas seulement pour toi — c'est fait pour être transmis.",
        prayer: "Seigneur, montre-moi à qui je peux transmettre ce que j'ai reçu de toi. Amen.",
      },
      {
        ref: "Luc 9:23",
        verse: "Si quelqu'un veut venir après moi, qu'il renonce à lui-même, qu'il se charge chaque jour de sa croix, et qu'il me suive.",
        reflection: "Le discipolat est quotidien, pas ponctuel. Ce n'est pas une décision prise une fois, mais un choix renouvelé chaque jour de suivre Christ.",
        prayer: "Seigneur, aide-moi à te suivre aujourd'hui, pas seulement en théorie mais dans mes choix concrets. Amen.",
      },
      {
        ref: "Jean 8:31-32",
        verse: "Si vous demeurez dans ma parole, vous êtes vraiment mes disciples ; vous connaîtrez la vérité, et la vérité vous affranchira.",
        reflection: "« Demeurer » implique la durée, pas juste une visite ponctuelle dans la Parole. La vraie croissance vient de la constance, pas de l'intensité occasionnelle.",
        prayer: "Seigneur, aide-moi à demeurer dans ta parole aujourd'hui, et pas seulement à la visiter. Amen.",
      },
      {
        ref: "Philippiens 3:12",
        verse: "Ce n'est pas que j'aie déjà remporté le prix... mais je cours, pour tâcher de le saisir.",
        reflection: "Même l'apôtre Paul se considérait en chemin, pas arrivé. Le discipolat n'exige pas la perfection — il exige la persévérance.",
        prayer: "Seigneur, aide-moi à continuer de courir, même quand je me sens loin d'être arrivé. Amen.",
      },
      {
        ref: "Proverbes 27:17",
        verse: "Comme le fer aiguise le fer, ainsi un homme en aiguise un autre.",
        reflection: "Grandir dans la foi se fait rarement en solitaire — il faut quelqu'un pour nous aiguiser, et quelqu'un que nous aiguisons à notre tour.",
        prayer: "Seigneur, donne-moi à la fois un mentor et quelqu'un à encourager dans la foi. Amen.",
      },
      {
        ref: "Romains 12:2",
        verse: "Ne vous conformez pas au siècle présent, mais soyez transformés par le renouvellement de l'intelligence.",
        reflection: "Le discipolat transforme la façon de penser, pas seulement le comportement extérieur. Le changement durable commence dans l'esprit.",
        prayer: "Seigneur, renouvelle mon intelligence aujourd'hui, pas seulement mes actions. Amen.",
      },
      {
        ref: "Actes 17:11",
        verse: "Ils reçurent la parole avec beaucoup d'empressement, et ils examinaient chaque jour les Écritures.",
        reflection: "Les Béréens sont loués pour avoir vérifié eux-mêmes ce qu'on leur enseignait dans les Écritures. Un bon disciple ne suit pas aveuglément — il examine.",
        prayer: "Seigneur, donne-moi la faim d'examiner ta parole par moi-même chaque jour. Amen.",
      },
      {
        ref: "Luc 6:40",
        verse: "Le disciple n'est pas au-dessus de son maître ; mais tout disciple accompli sera comme son maître.",
        reflection: "L'objectif du discipolat est la ressemblance à Christ, pas juste l'accumulation de connaissances. Deviens-tu plus semblable à lui avec le temps ?",
        prayer: "Seigneur, forme-moi à ressembler davantage à toi, pas seulement à en savoir plus sur toi. Amen.",
      },
      {
        ref: "Colossiens 2:6-7",
        verse: "Ainsi donc, comme vous avez reçu le Seigneur Jésus-Christ, marchez en lui, enracinés et fondés en lui.",
        reflection: "Une plante enracinée résiste à la tempête ; une plante sans racines est emportée au premier coup de vent. L'enracinement demande du temps, pas de la précipitation.",
        prayer: "Seigneur, enracine-moi profondément en toi aujourd'hui. Amen.",
      },
      {
        ref: "1 Corinthiens 11:1",
        verse: "Soyez mes imitateurs, comme je le suis moi-même de Christ.",
        reflection: "Paul invite les autres à l'imiter, non par orgueil, mais parce qu'il s'efforce lui-même d'imiter Christ. Le discipolat se transmet par l'exemple vécu.",
        prayer: "Seigneur, que ma vie soit un exemple digne d'être suivi, parce qu'elle te suit toi. Amen.",
      },
      {
        ref: "Psaume 1:2-3",
        verse: "Son plaisir est dans la loi de l'Éternel, et c'est cette loi qu'il médite jour et nuit... il est comme un arbre planté près d'un courant d'eau.",
        reflection: "La méditation régulière de la Parole porte du fruit, comme un arbre bien irrigué. Ce fruit ne vient pas d'un effort ponctuel, mais d'une pratique continue.",
        prayer: "Seigneur, donne-moi le plaisir de méditer ta parole jour après jour. Amen.",
      },
      {
        ref: "Marc 1:17",
        verse: "Suivez-moi, et je vous ferai pêcheurs d'hommes.",
        reflection: "Jésus a formé ses disciples en marchant avec eux, pas seulement en leur enseignant depuis une estrade. Le vrai discipolat se vit dans la relation, pas juste dans l'instruction.",
        prayer: "Seigneur, apprends-moi à marcher avec toi au quotidien, pas seulement à t'écouter de loin. Amen.",
      },
      {
        ref: "2 Pierre 3:18",
        verse: "Croissez dans la grâce et dans la connaissance de notre Seigneur et Sauveur Jésus-Christ.",
        reflection: "La croissance chrétienne combine grâce et connaissance — grandir en vérité sans devenir dur, et grandir en amour sans devenir naïf.",
        prayer: "Seigneur, fais-moi grandir à la fois en grâce et en connaissance de toi. Amen.",
      },
      {
        ref: "Jacques 1:22",
        verse: "Mettez en pratique la parole, et ne vous bornez pas à l'écouter.",
        reflection: "Connaître la Parole sans la vivre est une forme d'illusion spirituelle. Le discipolat authentique se mesure dans l'action, pas seulement dans la connaissance.",
        prayer: "Seigneur, aide-moi à mettre en pratique aujourd'hui ce que je connais déjà de ta parole. Amen.",
      },
      {
        ref: "Éphésiens 4:15",
        verse: "Mais professant la vérité dans la charité, nous croîtrons à tous égards en celui qui est le chef, Christ.",
        reflection: "La croissance spirituelle vise Christ comme point de référence, dans un équilibre entre vérité et amour — ni l'un ni l'autre sacrifié.",
        prayer: "Seigneur, aide-moi à grandir vers toi, en vérité et en amour à la fois. Amen.",
      },
      {
        ref: "Matthieu 11:29",
        verse: "Prenez mon joug sur vous et recevez mes instructions, car je suis doux et humble de cœur.",
        reflection: "Jésus invite à apprendre de lui avec douceur, pas avec pression. Le discipolat n'est pas un fardeau écrasant — c'est un joug porté avec lui.",
        prayer: "Seigneur, apprends-moi ta douceur et ton humilité aujourd'hui. Amen.",
      },
      {
        ref: "1 Timothée 4:7-8",
        verse: "Exerce-toi toi-même à la piété... l'exercice corporel est utile à peu de chose, mais la piété est utile à tout.",
        reflection: "La croissance spirituelle demande un exercice actif, comme un entraînement. Ce n'est pas passif — ça se pratique délibérément.",
        prayer: "Seigneur, aide-moi à m'exercer activement à la piété aujourd'hui. Amen.",
      },
      {
        ref: "Actes 2:42",
        verse: "Ils persévéraient dans l'enseignement des apôtres, dans la communion fraternelle, dans la fraction du pain et dans les prières.",
        reflection: "Le discipolat de la première Église combinait enseignement, communauté et prière — pas un seul de ces éléments isolément.",
        prayer: "Seigneur, équilibre ma vie entre l'enseignement, la communauté et la prière. Amen.",
      },
      {
        ref: "Proverbes 9:9",
        verse: "Donne au sage, et il deviendra plus sage ; instruis le juste, et il augmentera son savoir.",
        reflection: "Un cœur enseignable continue de grandir, peu importe où il en est déjà. L'humilité d'apprendre ne s'arrête jamais, même chez les plus avancés.",
        prayer: "Seigneur, garde mon cœur enseignable, prêt à apprendre encore aujourd'hui. Amen.",
      },
      {
        ref: "Jean 15:8",
        verse: "Si vous portez beaucoup de fruit, c'est ainsi que mon Père sera glorifié, et que vous serez mes disciples.",
        reflection: "Le fruit visible dans notre vie témoigne de notre lien réel avec Christ. Le discipolat authentique produit des résultats concrets.",
        prayer: "Seigneur, fais porter du fruit dans ma vie aujourd'hui, pour ta gloire. Amen.",
      },
      {
        ref: "Deutéronome 6:6-7",
        verse: "Ces commandements... tu les inculqueras à tes enfants, tu en parleras quand tu seras dans ta maison, quand tu iras en voyage.",
        reflection: "Le discipolat commence souvent à la maison, dans les conversations ordinaires du quotidien, pas seulement dans un cadre formel.",
        prayer: "Seigneur, aide-moi à transmettre ta vérité dans les moments ordinaires de ma journée. Amen.",
      },
      {
        ref: "2 Corinthiens 3:18",
        verse: "Nous tous, contemplant à visage découvert la gloire du Seigneur, nous sommes transformés en la même image.",
        reflection: "La transformation vient en regardant Christ, pas en se concentrant sur nos propres efforts. On devient ce qu'on contemple.",
        prayer: "Seigneur, que je te contemple aujourd'hui et que cela me transforme. Amen.",
      },
      {
        ref: "1 Corinthiens 3:6-7",
        verse: "J'ai planté, Apollos a arrosé, mais Dieu a fait croître.",
        reflection: "Nous avons un rôle dans le discipolat des autres, mais c'est Dieu qui fait vraiment grandir. Cela libère de la pression de tout contrôler.",
        prayer: "Seigneur, je plante et j'arrose, mais je te confie la croissance. Amen.",
      },
      {
        ref: "Marc 4:20",
        verse: "Ceux qui ont reçu la semence dans une bonne terre... entendent la parole, la reçoivent, et portent du fruit.",
        reflection: "Recevoir la Parole ne suffit pas — c'est la qualité du sol de notre cœur qui détermine si elle porte du fruit durable.",
        prayer: "Seigneur, prépare mon cœur à être une bonne terre pour ta parole aujourd'hui. Amen.",
      },
      {
        ref: "Tite 2:7-8",
        verse: "Montre-toi toi-même à tous égards un modèle de bonnes œuvres.",
        reflection: "Nos vies enseignent autant que nos paroles, parfois plus. Le discipolat se transmet aussi silencieusement, par l'exemple vécu.",
        prayer: "Seigneur, que ma vie soit un modèle cohérent avec ce que je professe. Amen.",
      },
      {
        ref: "Psaume 119:105",
        verse: "Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.",
        reflection: "La Parole n'éclaire généralement pas tout le chemin d'un coup, mais suffisamment pour le prochain pas. Fais confiance à cette lumière progressive.",
        prayer: "Seigneur, éclaire mon prochain pas aujourd'hui à travers ta parole. Amen.",
      },
      {
        ref: "Hébreux 5:12-14",
        verse: "Vous devriez être des maîtres... mais vous avez encore besoin qu'on vous enseigne les premiers rudiments.",
        reflection: "La stagnation spirituelle est un vrai risque. Le discipolat pousse à mûrir continuellement, pas à rester éternellement débutant.",
        prayer: "Seigneur, pousse-moi vers la maturité, pas vers la stagnation, dans ma foi. Amen.",
      },
      // --- Pilier 4 : Service ---
      {
        ref: "Marc 10:45",
        verse: "Le Fils de l'homme est venu, non pour être servi, mais pour servir, et donner sa vie en rançon pour plusieurs.",
        reflection: "Jésus, qui aurait pu exiger d'être servi, a choisi de servir. Le service n'est pas indigne d'un grand cœur — c'est la marque d'un cœur transformé par lui.",
        prayer: "Seigneur, donne-moi un cœur qui choisit de servir plutôt que d'être servi aujourd'hui. Amen.",
      },
      {
        ref: "Jean 13:14-15",
        verse: "Si donc je vous ai lavé les pieds, moi, le Seigneur et le Maître, vous devez aussi vous laver les pieds les uns aux autres.",
        reflection: "Aucune tâche n'est trop humble si Jésus lui-même l'a accomplie. Le service authentique ne calcule pas ce qui est « en dessous » de nous.",
        prayer: "Seigneur, montre-moi une tâche humble que je peux accomplir aujourd'hui avec amour. Amen.",
      },
      {
        ref: "Galates 5:13",
        verse: "Par amour, servez-vous les uns les autres.",
        reflection: "La liberté chrétienne ne mène pas à l'individualisme, mais au service. Ce paradoxe libère : nous sommes libres pour servir, pas libres de l'obligation d'aimer.",
        prayer: "Seigneur, que ma liberté en toi se traduise par le service envers les autres. Amen.",
      },
      {
        ref: "Matthieu 25:35-36",
        verse: "J'ai eu faim, et vous m'avez donné à manger... j'étais nu, et vous m'avez vêtu.",
        reflection: "Jésus s'identifie avec les plus vulnérables. Servir les pauvres n'est pas une option secondaire — c'est servir Christ lui-même.",
        prayer: "Seigneur, aide-moi à te voir dans ceux qui sont dans le besoin autour de moi. Amen.",
      },
      {
        ref: "1 Pierre 4:10",
        verse: "Comme de bons dispensateurs des diverses grâces de Dieu, que chacun de vous mette au service des autres le don qu'il a reçu.",
        reflection: "Chaque don que tu as reçu n'est pas seulement pour toi — c'est confié pour bénir les autres. Quel don peux-tu mettre au service de quelqu'un aujourd'hui ?",
        prayer: "Seigneur, montre-moi comment utiliser mes dons pour servir les autres aujourd'hui. Amen.",
      },
      {
        ref: "Philippiens 2:3-4",
        verse: "Ne faites rien par esprit de parti... considérez les autres comme supérieurs à vous-mêmes.",
        reflection: "Le service commence par un changement de regard : voir les intérêts des autres comme aussi importants que les nôtres, sinon plus.",
        prayer: "Seigneur, aide-moi à considérer les besoins des autres avant les miens aujourd'hui. Amen.",
      },
      {
        ref: "Luc 10:33-34",
        verse: "Un Samaritain... fut ému de compassion. Il s'approcha, et banda ses plaies.",
        reflection: "Le bon Samaritain n'a pas seulement ressenti de la compassion — il a agi concrètement. La compassion sans action reste stérile.",
        prayer: "Seigneur, transforme ma compassion en action concrète aujourd'hui. Amen.",
      },
      {
        ref: "Actes 20:35",
        verse: "Il faut soutenir les faibles, et se rappeler les paroles du Seigneur Jésus... il y a plus de bonheur à donner qu'à recevoir.",
        reflection: "Le vrai bonheur, selon Jésus, se trouve davantage dans le don que dans la réception. Cette vérité va à contre-courant de nos instincts naturels.",
        prayer: "Seigneur, apprends-moi à trouver ma joie dans le don, pas seulement dans ce que je reçois. Amen.",
      },
      {
        ref: "Romains 12:6-8",
        verse: "Nous avons des dons différents... que celui qui exerce la charité le fasse avec joie.",
        reflection: "Servir avec un cœur lourd épuise ; servir avec joie renouvelle. Dieu ne veut pas seulement notre service, mais un service joyeux.",
        prayer: "Seigneur, remplis mon service de joie aujourd'hui, pas d'obligation pesante. Amen.",
      },
      {
        ref: "Ésaïe 58:10",
        verse: "Si tu ouvres ton âme à l'affamé, si tu rassasies l'âme indigente, ta lumière se lèvera sur l'obscurité.",
        reflection: "Servir les autres fait briller notre propre lumière d'une manière que rien d'autre ne peut accomplir. Le don devient une source de lumière, pas seulement pour celui qui reçoit.",
        prayer: "Seigneur, utilise mon service aujourd'hui pour faire briller ta lumière autour de moi. Amen.",
      },
      {
        ref: "Colossiens 3:23-24",
        verse: "Tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes.",
        reflection: "Servir pour Dieu change la qualité de notre travail, même dans les tâches les plus ordinaires. La motivation ultime n'est pas la reconnaissance humaine.",
        prayer: "Seigneur, que je fasse tout aujourd'hui comme pour toi, pas pour être vu des hommes. Amen.",
      },
      {
        ref: "Luc 4:18",
        verse: "L'Esprit du Seigneur est sur moi... il m'a envoyé pour guérir ceux qui ont le cœur brisé, pour proclamer aux captifs la délivrance.",
        reflection: "Jésus définit sa mission par le service aux plus vulnérables. Suivre Jésus implique de partager ce même souci pour les brisés et les captifs.",
        prayer: "Seigneur, donne-moi ton cœur pour les brisés et les opprimés aujourd'hui. Amen.",
      },
      {
        ref: "Proverbes 19:17",
        verse: "Celui qui a pitié du pauvre prête à l'Éternel, qui lui rendra selon son œuvre.",
        reflection: "Servir les pauvres n'est jamais perdu — Dieu le considère comme un prêt qui lui est fait directement. Rien de ce que tu donnes par amour n'est gaspillé.",
        prayer: "Seigneur, aide-moi à voir chaque acte de générosité comme un investissement en toi. Amen.",
      },
      {
        ref: "Jacques 2:15-16",
        verse: "Si un frère ou une sœur sont nus et manquent de nourriture... que leur servira de dire : allez en paix, chauffez-vous et vous rassasiez ?",
        reflection: "La foi sans action concrète pour les nécessiteux sonne creux. Les bonnes intentions ne nourrissent personne — les actes le font.",
        prayer: "Seigneur, transforme mes bonnes intentions en actions concrètes aujourd'hui. Amen.",
      },
      {
        ref: "2 Corinthiens 9:6-7",
        verse: "Dieu aime celui qui donne avec joie.",
        reflection: "Ce n'est pas seulement ce que nous donnons qui compte, mais avec quel cœur nous le donnons. Dieu regarde au-delà du montant, vers la disposition du cœur.",
        prayer: "Seigneur, donne-moi un cœur joyeux dans ce que je donne aujourd'hui, quelle que soit la quantité. Amen.",
      },
      {
        ref: "Éphésiens 2:10",
        verse: "Nous sommes son ouvrage, ayant été créés en Jésus-Christ pour de bonnes œuvres, que Dieu a préparées d'avance.",
        reflection: "Dieu a déjà préparé des occasions de service spécifiques pour toi. Le service n'est pas une invention humaine — c'est une préparation divine que tu découvres en marchant avec lui.",
        prayer: "Seigneur, ouvre mes yeux aux bonnes œuvres que tu as préparées pour moi aujourd'hui. Amen.",
      },
      {
        ref: "Matthieu 20:26-27",
        verse: "Quiconque veut être grand parmi vous, qu'il soit votre serviteur.",
        reflection: "Jésus renverse la logique du monde : la grandeur se mesure par le service, pas par le pouvoir exercé sur les autres. C'est un royaume à l'envers.",
        prayer: "Seigneur, apprends-moi ta définition de la grandeur, celle du service. Amen.",
      },
      {
        ref: "Néhémie 2:17-18",
        verse: "Venez, rebâtissons la muraille de Jérusalem... Alors ils fortifièrent leurs mains pour cette bonne œuvre.",
        reflection: "Néhémie a mobilisé une communauté entière autour d'un projet de service concret. Le service collectif accomplit ce qu'un seul individu ne pourrait pas faire seul.",
        prayer: "Seigneur, unis-nous en communauté autour d'une œuvre concrète de service aujourd'hui. Amen.",
      },
      {
        ref: "1 Jean 3:17-18",
        verse: "N'aimons pas en paroles et avec la langue, mais en actions et avec vérité.",
        reflection: "L'amour se prouve dans l'action, pas seulement dans les mots. Cette vérité met une pression saine sur nos belles paroles pour qu'elles deviennent des actes.",
        prayer: "Seigneur, que mon amour aujourd'hui se voie dans mes actes, pas seulement dans mes paroles. Amen.",
      },
      {
        ref: "Ruth 2:2",
        verse: "Ruth, la Moabite, dit à Naomi : laisse-moi aller glaner des épis dans le champ de celui aux yeux duquel je trouverai grâce.",
        reflection: "Ruth ne demande pas la charité passive — elle prend l'initiative de travailler pour subvenir aux besoins de sa belle-mère. Le service prend parfois la forme d'un effort discret et déterminé.",
        prayer: "Seigneur, donne-moi l'initiative de servir concrètement ceux que j'aime aujourd'hui. Amen.",
      },
      {
        ref: "Marc 6:37",
        verse: "Jésus leur dit : donnez-leur vous-mêmes à manger.",
        reflection: "Face à une foule affamée, Jésus invite ses disciples à participer, pas seulement à observer le miracle. Il nous appelle souvent à être une partie de la réponse.",
        prayer: "Seigneur, montre-moi comment être une partie concrète de ta réponse aujourd'hui. Amen.",
      },
      {
        ref: "Proverbes 31:20",
        verse: "Elle tend la main au malheureux, elle tend la main à l'indigent.",
        reflection: "La femme vertueuse de Proverbes 31 est louée pour sa générosité tangible envers les nécessiteux. Le caractère se révèle dans la façon dont on traite les plus vulnérables.",
        prayer: "Seigneur, que mes mains soient tendues vers ceux qui sont dans le besoin aujourd'hui. Amen.",
      },
      {
        ref: "Tite 3:8",
        verse: "Ceux qui ont cru en Dieu s'appliquent à pratiquer de bonnes œuvres. Voilà ce qui est bon et utile aux hommes.",
        reflection: "Les bonnes œuvres ne sont pas accessoires à la foi — elles en découlent naturellement, et bénéficient concrètement à ceux qui nous entourent.",
        prayer: "Seigneur, que ma foi s'exprime aujourd'hui par des œuvres utiles à ceux qui m'entourent. Amen.",
      },
      {
        ref: "Job 29:15-16",
        verse: "J'étais l'œil de l'aveugle et le pied du boiteux. J'étais le père des indigents.",
        reflection: "Job décrit une vie où il se mettait au service des plus fragiles, comme leurs propres yeux ou leurs propres pieds. C'est une image forte de service incarné.",
        prayer: "Seigneur, fais de moi les yeux et les pieds de quelqu'un dans le besoin aujourd'hui. Amen.",
      },
      {
        ref: "Actes 6:2-3",
        verse: "Choisissez parmi vous sept hommes... que nous chargerons de cet emploi.",
        reflection: "L'Église primitive a organisé le service pour que les veuves ne soient pas négligées. Servir efficacement demande parfois de l'organisation, pas juste de la bonne volonté.",
        prayer: "Seigneur, aide-moi à organiser mon service pour qu'il soit vraiment efficace. Amen.",
      },
      {
        ref: "Luc 21:1-4",
        verse: "Cette pauvre veuve a mis plus que tous les autres... elle a mis de son indigence tout ce qu'elle avait pour vivre.",
        reflection: "Jésus mesure la générosité non par le montant, mais par le sacrifice qu'elle représente. Le don de la veuve, pourtant minime, était le plus grand aux yeux de Dieu.",
        prayer: "Seigneur, que je donne avec le cœur de la veuve, pas selon les apparences. Amen.",
      },
      {
        ref: "Galates 6:9-10",
        verse: "Ne nous lassons pas de faire le bien... pendant que nous en avons l'occasion, pratiquons le bien envers tous.",
        reflection: "Le service continu peut fatiguer. Paul encourage à persévérer, parce que la moisson vient en son temps, même si elle n'est pas immédiate.",
        prayer: "Seigneur, donne-moi la persévérance pour continuer à faire le bien, même quand je me sens fatigué. Amen.",
      },
      {
        ref: "Michée 6:8",
        verse: "On t'a fait connaître, ô homme, ce qui est bien... pratiquer la justice, aimer la miséricorde, et marcher humblement avec ton Dieu.",
        reflection: "Le service authentique combine justice, miséricorde et humilité — pas juste un acte isolé, mais une manière de vivre.",
        prayer: "Seigneur, aide-moi à vivre la justice, la miséricorde et l'humilité ensemble aujourd'hui. Amen.",
      },
      // --- Pilier 5 : Évangélisation ---
      {
        ref: "Matthieu 28:19",
        verse: "Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit.",
        reflection: "La Grande Commission n'est pas réservée à quelques-uns — elle s'adresse à tous les disciples de Christ. Toi aussi, tu es envoyé.",
        prayer: "Seigneur, rappelle-moi aujourd'hui que je suis envoyé, pas seulement enseigné. Amen.",
      },
      {
        ref: "Actes 1:8",
        verse: "Vous recevrez une puissance, le Saint-Esprit survenant sur vous, et vous serez mes témoins... jusqu'aux extrémités de la terre.",
        reflection: "Le témoignage commence près de soi — Jérusalem — avant de s'étendre au loin. Qui est ton « Jérusalem » aujourd'hui, la personne juste à côté de toi ?",
        prayer: "Seigneur, donne-moi le courage d'être ton témoin, en commençant par ceux qui sont proches de moi. Amen.",
      },
      {
        ref: "Romains 10:14-15",
        verse: "Comment croiront-ils en celui dont ils n'ont pas entendu parler ? Et comment entendront-ils s'il n'y a personne qui prêche ?",
        reflection: "Quelqu'un doit parler pour que d'autres puissent entendre. Ta voix, aussi imparfaite qu'elle te semble, peut être celle que Dieu utilise aujourd'hui.",
        prayer: "Seigneur, utilise ma voix aujourd'hui pour que quelqu'un entende parler de toi. Amen.",
      },
      {
        ref: "2 Corinthiens 5:20",
        verse: "Nous faisons donc les fonctions d'ambassadeurs pour Christ, comme si Dieu exhortait par nous.",
        reflection: "Un ambassadeur ne parle pas en son propre nom — il représente celui qui l'envoie. Aujourd'hui, tu représentes Christ partout où tu vas.",
        prayer: "Seigneur, aide-moi à bien te représenter aujourd'hui, dans mes paroles et mes actes. Amen.",
      },
      {
        ref: "1 Pierre 3:15",
        verse: "Soyez toujours prêts à vous défendre... devant quiconque vous demande raison de l'espérance qui est en vous.",
        reflection: "L'évangélisation commence souvent par une question honnête à laquelle on répond avec douceur. Es-tu prêt à expliquer simplement pourquoi tu espères ?",
        prayer: "Seigneur, prépare mon cœur et mes mots pour répondre avec douceur à ceux qui questionnent ma foi. Amen.",
      },
      {
        ref: "Jean 4:39",
        verse: "Plusieurs Samaritains crurent en lui à cause de cette déclaration de la femme : il m'a dit tout ce que j'ai fait.",
        reflection: "Le témoignage personnel de la femme samaritaine a suffi pour ouvrir le cœur de toute une ville. Ton histoire personnelle avec Dieu a un vrai pouvoir.",
        prayer: "Seigneur, donne-moi le courage de partager mon propre témoignage aujourd'hui. Amen.",
      },
      {
        ref: "Marc 5:19",
        verse: "Va dans ta maison, vers les tiens, et raconte-leur tout ce que le Seigneur t'a fait.",
        reflection: "Jésus n'a pas toujours demandé à ceux qu'il a guéris de tout quitter pour le suivre — parfois, il les a envoyés simplement raconter aux leurs. L'évangélisation commence souvent à la maison.",
        prayer: "Seigneur, aide-moi à raconter ce que tu as fait pour moi à ceux qui me sont proches. Amen.",
      },
      {
        ref: "Luc 15:4",
        verse: "Quel homme d'entre vous, s'il a cent brebis, et qu'il en perde une, ne laisse les quatre-vingt-dix-neuf... pour aller après celle qui est perdue ?",
        reflection: "Le cœur de Dieu pour un seul perdu se manifeste dans cette parabole. L'évangélisation reflète cette même valeur donnée à chaque personne, une par une.",
        prayer: "Seigneur, donne-moi ton cœur pour ceux qui sont loin de toi aujourd'hui. Amen.",
      },
      {
        ref: "Actes 8:4",
        verse: "Ceux qui avaient été dispersés allaient de lieu en lieu, annonçant la bonne nouvelle de la parole.",
        reflection: "Même dispersés par la persécution, les premiers chrétiens transformaient chaque déplacement en occasion de témoigner. Où que tu ailles, tu portes la bonne nouvelle avec toi.",
        prayer: "Seigneur, que chaque lieu où je vais aujourd'hui devienne une occasion de témoigner. Amen.",
      },
      {
        ref: "Romains 1:16",
        verse: "Je n'ai point honte de l'Évangile : c'est une puissance de Dieu pour le salut de quiconque croit.",
        reflection: "La honte est souvent le premier obstacle à surmonter avant même la peur du rejet. Paul choisit délibérément de ne pas avoir honte — un choix que nous pouvons aussi faire.",
        prayer: "Seigneur, enlève toute honte de mon cœur concernant l'Évangile aujourd'hui. Amen.",
      },
      {
        ref: "Matthieu 5:14-16",
        verse: "Vous êtes la lumière du monde... que votre lumière luise ainsi devant les hommes.",
        reflection: "Le témoignage ne se limite pas aux paroles — une vie qui reflète Christ attire les regards vers lui naturellement, comme une lumière qu'on ne peut ignorer.",
        prayer: "Seigneur, que ma vie luise aujourd'hui d'une manière qui pointe vers toi. Amen.",
      },
      {
        ref: "Colossiens 4:5-6",
        verse: "Conduisez-vous avec sagesse envers ceux du dehors... que votre parole soit toujours accompagnée de grâce.",
        reflection: "Le témoignage efficace combine sagesse et grâce, pas seulement de la vérité brute. La façon de dire compte autant que ce qui est dit.",
        prayer: "Seigneur, donne-moi la sagesse et la grâce dans mes conversations aujourd'hui. Amen.",
      },
      {
        ref: "Jean 1:41",
        verse: "André... trouva Simon, son frère, et lui dit : nous avons trouvé le Messie.",
        reflection: "Le tout premier réflexe d'André après avoir rencontré Jésus a été de courir vers son frère. Le vrai enthousiasme pour Christ se partage naturellement.",
        prayer: "Seigneur, remplis-moi d'un tel enthousiasme pour toi que je veuille naturellement le partager. Amen.",
      },
      {
        ref: "Actes 4:20",
        verse: "Nous ne pouvons pas ne pas parler de ce que nous avons vu et entendu.",
        reflection: "Pierre et Jean ne pouvaient tout simplement pas se taire sur ce qu'ils avaient vécu avec Jésus. Une vraie rencontre avec lui produit ce même débordement.",
        prayer: "Seigneur, que ma rencontre avec toi soit si réelle que je ne puisse pas la taire. Amen.",
      },
      {
        ref: "Luc 19:10",
        verse: "Car le Fils de l'homme est venu chercher et sauver ce qui était perdu.",
        reflection: "La mission de Jésus était centrée sur la recherche active des perdus, pas sur l'attente passive. Suivre Jésus implique ce même mouvement vers les autres.",
        prayer: "Seigneur, donne-moi ton élan pour rechercher activement ceux qui sont loin de toi. Amen.",
      },
      {
        ref: "1 Corinthiens 9:22",
        verse: "Je me suis fait tout à tous, afin d'en sauver de toute manière quelques-uns.",
        reflection: "Paul adaptait son approche selon les personnes, sans jamais changer le message. La flexibilité dans la méthode sert la fidélité au message.",
        prayer: "Seigneur, donne-moi la sagesse d'adapter mon approche sans jamais compromettre la vérité. Amen.",
      },
      {
        ref: "Marc 16:15",
        verse: "Allez par tout le monde, et prêchez la bonne nouvelle à toute la création.",
        reflection: "L'ampleur de cet appel — « tout le monde », « toute la création » — dépasse largement ce qu'un seul individu peut accomplir. C'est un appel à l'Église entière, ensemble.",
        prayer: "Seigneur, unis-nous en tant qu'Église pour porter la bonne nouvelle au monde entier. Amen.",
      },
      {
        ref: "Actes 26:22",
        verse: "J'ai jusqu'à ce jour... rendu témoignage devant les petits et les grands.",
        reflection: "Paul ne faisait pas de distinction entre qui méritait d'entendre l'Évangile — petits et grands recevaient le même témoignage. Personne n'est trop insignifiant ou trop important pour la bonne nouvelle.",
        prayer: "Seigneur, aide-moi à témoigner sans distinction, à qui que ce soit aujourd'hui. Amen.",
      },
      {
        ref: "Éphésiens 6:19-20",
        verse: "Priez pour moi, afin qu'il me soit donné, quand j'ouvre la bouche, de faire connaître avec hardiesse le mystère de l'Évangile.",
        reflection: "Même Paul, l'apôtre le plus zélé, demandait de la prière pour avoir du courage à parler. Le courage pour témoigner se reçoit, il ne se génère pas tout seul.",
        prayer: "Seigneur, donne-moi la hardiesse de parler de toi aujourd'hui, comme tu l'as donnée à Paul. Amen.",
      },
      {
        ref: "Jean 3:16",
        verse: "Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",
        reflection: "Ce verset résume tout l'Évangile en une phrase. Parfois, la simplicité du message le rend d'autant plus puissant à partager.",
        prayer: "Seigneur, merci pour ton amour si grand qu'il t'a poussé à donner ton Fils pour moi. Amen.",
      },
      {
        ref: "Actes 17:26-27",
        verse: "Il a déterminé les temps et les limites de leur demeure, afin qu'ils cherchent Dieu, et qu'ils le trouvent en tâtonnant.",
        reflection: "Dieu a placé chaque personne exactement là où elle est, y compris toi, dans un but : que les gens le cherchent et le trouvent. Ton lieu de vie n'est pas un hasard.",
        prayer: "Seigneur, aide-moi à voir l'endroit où tu m'as placé comme un lieu de mission. Amen.",
      },
      {
        ref: "Luc 24:47",
        verse: "Que la repentance et le pardon des péchés soient prêchés en son nom à toutes les nations.",
        reflection: "Le message de l'Évangile combine toujours deux réalités : la repentance et le pardon. L'un sans l'autre déforme la bonne nouvelle.",
        prayer: "Seigneur, aide-moi à partager un message complet — repentance et pardon ensemble. Amen.",
      },
      {
        ref: "Actes 16:31",
        verse: "Crois au Seigneur Jésus, et tu seras sauvé, toi et ta famille.",
        reflection: "Le salut individuel a souvent des répercussions familiales. Une vie transformée peut devenir la porte d'entrée pour toute une maisonnée.",
        prayer: "Seigneur, utilise ma transformation pour toucher aussi ma famille. Amen.",
      },
      {
        ref: "Philippiens 1:27",
        verse: "Conduisez-vous d'une manière digne de l'Évangile de Christ.",
        reflection: "Notre comportement quotidien doit correspondre au message que nous proclamons. Une vie incohérente affaiblit le témoignage, aussi bonnes que soient les paroles.",
        prayer: "Seigneur, que ma conduite aujourd'hui soit digne de l'Évangile que je professe. Amen.",
      },
      {
        ref: "Jean 20:21",
        verse: "Comme le Père m'a envoyé, moi aussi je vous envoie.",
        reflection: "Notre envoi suit le même modèle que celui de Jésus — envoyé par amour, avec une mission claire. Tu n'es pas envoyé au hasard, mais avec un but précis.",
        prayer: "Seigneur, aide-moi à vivre aujourd'hui comme quelqu'un d'envoyé par toi. Amen.",
      },
      {
        ref: "Actes 13:47",
        verse: "Je t'ai établi pour être la lumière des nations, pour porter le salut jusqu'aux extrémités de la terre.",
        reflection: "La vision de Dieu pour l'Évangile n'a jamais été limitée à un seul peuple — elle a toujours visé toutes les nations, jusqu'aux extrémités de la terre.",
        prayer: "Seigneur, donne-nous une vision aussi large que la tienne pour les nations. Amen.",
      },
      {
        ref: "1 Thessaloniciens 2:8",
        verse: "Nous aurions voulu, dans notre vive affection pour vous, vous donner non seulement l'Évangile de Dieu, mais encore nos propres vies.",
        reflection: "Le meilleur témoignage combine le message avec une relation authentique. Les gens ressentent la différence entre un discours et un amour véritable.",
        prayer: "Seigneur, que mon témoignage soit accompagné d'un amour authentique pour les gens. Amen.",
      },
      {
        ref: "Apocalypse 7:9-10",
        verse: "Une grande foule... de toute nation, de toute tribu, de tout peuple, et de toute langue... criait d'une voix forte : le salut est à notre Dieu.",
        reflection: "La vision finale de l'Apocalypse montre toutes les nations réunies autour du trône. C'est cette vision qui donne son sens ultime à toute œuvre d'évangélisation.",
        prayer: "Seigneur, que je participe aujourd'hui à cette vision de toutes les nations réunies autour de toi. Amen.",
      },
    ],
    shareBtn: "Partager",
    shareCopied: "Copié !",
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
    radioSubtitle: "La lumière qui ne s'éteint jamais",
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
    donateHeroBody: "Ensemble, nous faisons plus que nous ne pourrions jamais faire seuls. Votre don d'aujourd'hui devient une dévotion partagée demain, une famille soutenue, une âme touchée.",
    donateImpactTitle: "Ce que votre don rend possible",
    donateImpact1: "Produire des dévotions et enseignements pour la communauté",
    donateImpact2: "Maintenir le direct, la radio et la télévision en ligne",
    donateImpact3: "Soutenir les familles dans le besoin",
    donateOneTime: "Don unique",
    donateMonthly: "Don mensuel",
    donateAmountLabel: "Choisissez un montant",
    donateCustom: "Autre montant",
    donateCta: "Faire un don via PayPal",
    donateStripeCta: "Payer par carte de crédit ou débit (Stripe)",
    donateSecure: "Paiement sécurisé",
    donateCheckNote: "Vous préférez donner par chèque ? Contactez-nous directement via le formulaire « Devenir membre » et notre équipe vous indiquera comment procéder.",
    donateVerse: "« Donnez, et il vous sera donné : on versera dans votre sein une bonne mesure, tassée, secouée et qui déborde ; car on vous mesurera avec la mesure dont vous vous serez servis. »",
    donateVerseRef: "Luc 6:38",
    streakLabel: "jours consécutifs",
    streakLabelSingular: "jour consécutif",
    membersLabel: "Membres",
    prayersLabel: "Prières envoyées",
    eventsTitle: "Événements",
    eventsIntro: "Prochains rendez-vous de la communauté.",
    addToCalendar: "Ajouter au calendrier",
    navMember: "Devenir membre",
    memberTitle: "Rejoindre la famille",
    memberSubtitle: "Devenez membre du Centre Lumière et recevez nos actualités.",
    memberNameLabel: "Nom complet",
    memberEmailLabel: "Adresse courriel",
    memberPhoneLabel: "Téléphone (optionnel)",
    memberNewsletterLabel: "Je souhaite recevoir l'infolettre et les actualités par courriel",
    memberSubmitBtn: "S'inscrire",
    memberSendingBtn: "Envoi en cours...",
    memberSuccessTitle: "Bienvenue dans la famille !",
    memberSuccessBody: "Merci de vous être inscrit. Notre équipe vous contactera bientôt.",
    memberSuccessNew: "Inscrire quelqu'un d'autre",
    memberErrorBody: "Une erreur est survenue. Veuillez réessayer.",
    navBible: "Bible",
    bibleTitle: "La Bible",
    bibleSubtitle: "Recherchez un passage — ex. « Jean 3 » ou « Psaume 23 »",
    biblePlaceholder: "Ex. Jean 3, Psaume 23:1-6...",
    bibleSearchBtn: "Rechercher",
    bibleLoading: "Chargement...",
    bibleErrorBody: "Passage introuvable. Essayez un autre format, ex. « Jean 3 » ou « Genese 1:1-5 ».",
    events: [
      { title: "Culte du dimanche", date: "Chaque dimanche, 10h00", location: "Centre Lumière du Grand Réveil" },
      { title: "Soirée de prière", date: "Chaque mercredi, 19h00", location: "En ligne et sur place" },
      { title: "Étude biblique", date: "Chaque vendredi, 19h00", location: "Centre Lumière du Grand Réveil" },
    ],
    prayerTitle: "Demande de prière",
    prayerSubtitle: "Partagez ce qui pèse sur votre cœur — notre équipe prie pour vous.",
    prayerVerse: "« Qui cherche trouve ; qui demande reçoit ; à qui frappe, on ouvrira. »",
    prayerVerseRef: "Matthieu 7:7-8",
    navTestimony: "Témoignage",
    navHistory: "Notre histoire",
    navFaq: "FAQ",
    navBaptism: "Baptême",
    baptismTitle: "S'inscrire au baptême",
    baptismSubtitle: "Le baptême est un témoignage public de votre foi en Jésus-Christ. Remplissez ce formulaire pour vous inscrire à la prochaine session.",
    baptismNameLabel: "Nom complet",
    baptismContactLabel: "Courriel ou téléphone",
    baptismReasonLabel: "Pourquoi voulez-vous être baptisé(e) ? (optionnel)",
    baptismReasonPlaceholder: "Partagez brièvement ce qui vous motive...",
    baptismSubmitBtn: "Envoyer mon inscription",
    baptismSendingBtn: "Envoi en cours...",
    baptismSuccessTitle: "Inscription reçue !",
    baptismSuccessBody: "Notre équipe vous contactera bientôt avec les détails de la prochaine session de baptême.",
    baptismErrorBody: "Une erreur est survenue. Veuillez réessayer.",
    navReadingPlan: "Plan de lecture",
    readingPlanTitle: "Plan de lecture biblique",
    readingPlanIntro: "30 jours pour découvrir les grandes vérités de la Bible, un chapitre à la fois.",
    readingPlanReadBtn: "Lire",
    readingPlanDoneLabel: "Terminé",
    readingPlan: [
      { day: 1, bookNr: 43, chapter: 1 }, { day: 2, bookNr: 43, chapter: 3 },
      { day: 3, bookNr: 40, chapter: 5 }, { day: 4, bookNr: 40, chapter: 6 },
      { day: 5, bookNr: 19, chapter: 23 }, { day: 6, bookNr: 19, chapter: 1 },
      { day: 7, bookNr: 45, chapter: 8 }, { day: 8, bookNr: 45, chapter: 12 },
      { day: 9, bookNr: 46, chapter: 13 }, { day: 10, bookNr: 50, chapter: 4 },
      { day: 11, bookNr: 49, chapter: 6 }, { day: 12, bookNr: 59, chapter: 1 },
      { day: 13, bookNr: 20, chapter: 3 }, { day: 14, bookNr: 20, chapter: 31 },
      { day: 15, bookNr: 1, chapter: 1 }, { day: 16, bookNr: 2, chapter: 20 },
      { day: 17, bookNr: 19, chapter: 91 }, { day: 18, bookNr: 19, chapter: 34 },
      { day: 19, bookNr: 42, chapter: 15 }, { day: 20, bookNr: 42, chapter: 24 },
      { day: 21, bookNr: 44, chapter: 2 }, { day: 22, bookNr: 44, chapter: 16 },
      { day: 23, bookNr: 58, chapter: 11 }, { day: 24, bookNr: 41, chapter: 4 },
      { day: 25, bookNr: 43, chapter: 15 }, { day: 26, bookNr: 51, chapter: 3 },
      { day: 27, bookNr: 60, chapter: 5 }, { day: 28, bookNr: 66, chapter: 21 },
      { day: 29, bookNr: 23, chapter: 40 }, { day: 30, bookNr: 19, chapter: 150 },
    ],
    navMessageNotes: "Notes du message",
    messageNotesTitle: "Notes du dernier message",
    messageNotesDate: "Dernière mise à jour",
    messageNotesDateValue: "À mettre à jour chaque semaine",
    messageNotesMainTitle: "Titre du message",
    messageNotesMainTitleValue: "Vivre par la foi, pas par la vue",
    messageNotesVerseRef: "2 Corinthiens 5:7",
    messageNotesPointsLabel: "Points clés",
    messageNotesPoints: [
      "La foi n'ignore pas la réalité — elle voit au-delà d'elle.",
      "Ce qu'on voit change ; la Parole de Dieu, elle, ne change pas.",
      "Marcher par la foi est un choix quotidien, pas un sentiment ponctuel.",
    ],
    navGallery: "Galerie",
    galleryTitle: "Galerie photo",
    galleryIntro: "Des moments forts de notre communauté.",
    galleryCaption1: "Culte du dimanche",
    galleryCaption2: "Baptêmes",
    galleryCaption3: "Soirée de louange",
    galleryCaption4: "Communauté en fête",
    faqTitle: "Questions fréquentes",
    faqIntro: "Les réponses aux questions les plus courantes.",
    faqItems: [
      {
        q: "Comment devenir membre du Centre Lumière ?",
        a: "Allez dans le menu « Plus » → « Devenir membre », remplissez le formulaire avec vos coordonnées. Notre équipe vous contactera pour vous accompagner dans les prochaines étapes.",
      },
      {
        q: "Comment se faire baptiser ?",
        a: "Le baptême est une étape importante après avoir accepté Jésus comme Sauveur. Contactez notre équipe via le formulaire « Devenir membre » ou lors d'un culte pour vous inscrire à la prochaine session de baptême.",
      },
      {
        q: "Quels sont les horaires des cultes et activités ?",
        a: "Consultez l'onglet « Événements » dans le menu « Plus » pour voir tous les rendez-vous à jour : culte dominical, soirées de prière, études bibliques.",
      },
      {
        q: "Comment soumettre une demande de prière ?",
        a: "Allez dans l'onglet « Prière », remplissez le formulaire (vous pouvez rester anonyme si vous préférez). Nos intercesseurs et nos sentinelles prient pour chaque demande reçue.",
      },
      {
        q: "Comment faire un don ?",
        a: "Allez dans le menu « Plus » → « Don ». Vous pouvez donner par carte de crédit (Stripe) ou par PayPal, en montant unique ou récurrent.",
      },
      {
        q: "L'application est-elle gratuite ?",
        a: "Oui, entièrement gratuite — aucun contenu n'est payant. Les dons sont volontaires et servent à soutenir la mission de l'église.",
      },
      {
        q: "Comment regarder les cultes en direct ?",
        a: "Allez dans l'onglet « Média » → « Direct » pour suivre nos cultes en direct sur YouTube ou Facebook, selon votre préférence.",
      },
      {
        q: "L'application est-elle disponible dans plusieurs langues ?",
        a: "Oui — français, anglais et créole haïtien. Changez de langue avec les boutons FR / EN / HT en haut de l'écran d'accueil.",
      },
      {
        q: "Comment contacter l'église directement ?",
        a: "Les coordonnées de contact sont disponibles sur notre fiche Google et notre site web centre-lumiere.org. Vous pouvez aussi utiliser le formulaire « Devenir membre » pour qu'on vous recontacte.",
      },
    ],
    historyTitle: "Notre histoire",
    historyBody: "Le Centre Lumière du Grand Réveil est né d'un appel clair de Dieu sur la vie de son fondateur. Poussé par cette conviction profonde, il s'est entouré d'un groupe de personnes passionnées de Dieu, unies par un même désir : voir des âmes sauvées et transformées par la grâce.\n\nDe cet appel et de ce petit groupe de foi est née une mission qui continue aujourd'hui de grandir — portée par la même vision d'un grand réveil spirituel, la même passion pour le salut des âmes, et la même conviction que Dieu agit encore puissamment aujourd'hui.",
    testimonyEncourageTitle: "Partagez ce que Dieu a fait",
    testimonyEncourageBody: "Votre témoignage peut encourager quelqu'un d'autre aujourd'hui. N'ayez pas peur de raconter ce que Dieu a fait dans votre vie.",
    testimonyTitle: "Partager un témoignage",
    testimonySubtitle: "Racontez ce que Dieu a fait dans votre vie — votre histoire peut encourager quelqu'un d'autre.",
    testimonyNameLabel: "Votre nom (optionnel)",
    testimonyTextLabel: "Votre témoignage",
    testimonyTextPlaceholder: "Racontez votre histoire ici...",
    testimonySubmitBtn: "Envoyer mon témoignage",
    testimonySendingBtn: "Envoi en cours...",
    testimonySuccessTitle: "Merci d'avoir partagé !",
    testimonySuccessBody: "Votre témoignage encouragera d'autres personnes. Merci de l'avoir partagé avec nous.",
    testimonySuccessNew: "Partager un autre témoignage",
    testimonyErrorBody: "Une erreur est survenue. Veuillez réessayer.",
    navSalvation: "J'accepte Jésus",
    salvationHomeTitle: "Envie de connaître Jésus ?",
    salvationHomeBody: "Vous pouvez recevoir Christ dès aujourd'hui — sans conditions, juste tel que vous êtes.",
    salvationHomeBtn: "Je fais ce pas aujourd'hui",
    salvationTitle: "Recevoir Jésus-Christ",
    salvationIntro: "Vous n'avez pas besoin d'être parfait pour venir à Dieu — juste sincère. Lisez cette prière à voix haute, avec votre cœur.",
    salvationPrayerTitle: "Une prière pour recevoir Christ",
    salvationPrayer: "Seigneur Jésus, je reconnais que j'ai besoin de toi. Je crois que tu es mort sur la croix pour mes péchés et que tu es ressuscité. Aujourd'hui, je me détourne de mon ancienne vie et je te reçois comme mon Sauveur et Seigneur. Merci de me pardonner et de me donner une vie nouvelle. Amen.",
    salvationConfirmBtn: "J'ai prié cette prière avec mon cœur",
    salvationNameLabel: "Votre nom (optionnel)",
    salvationEmailLabel: "Courriel ou téléphone (pour un suivi)",
    salvationSubmitBtn: "Confirmer ma décision",
    salvationSendingBtn: "Envoi en cours...",
    salvationSuccessTitle: "Bienvenue dans la famille de Dieu !",
    salvationSuccessBody: "Le ciel se réjouit aujourd'hui à cause de vous. Notre équipe va vous contacter pour vous accompagner dans cette nouvelle vie.",
    salvationNextStepsTitle: "Vos premiers pas",
    salvationNextSteps: [
      "Lisez un passage de la Bible chaque jour, même court",
      "Parlez à Dieu chaque jour dans la prière, comme à un ami",
      "Rejoignez une communauté — ne restez pas seul dans votre foi",
      "Parlez de cette décision à quelqu'un de confiance",
      "Envisagez le baptême comme témoignage public de votre foi",
    ],
    victoriousLifeTitle: "Vie chrétienne victorieuse",
    victoriousLifeIntro: "Des vérités simples pour marcher chaque jour avec force et espérance.",
    victoriousTeachings: [
      {
        title: "Votre identité en Christ",
        body: "Vous n'êtes plus défini par votre passé, vos échecs ou ce que les autres disent de vous. En Christ, vous êtes une nouvelle création, aimé et accepté. Votre valeur ne dépend pas de vos performances.",
      },
      {
        title: "Vaincre la tentation",
        body: "La tentation n'est pas un péché — céder l'est. Dieu promet toujours une issue. Fuir certaines situations n'est pas de la faiblesse, c'est de la sagesse.",
      },
      {
        title: "La guerre spirituelle",
        body: "Le combat n'est pas contre les gens autour de vous, mais spirituel. La prière, la Parole de Dieu et la louange sont des armes puissantes, pas de simples habitudes religieuses.",
      },
      {
        title: "Marcher par la foi",
        body: "La foi n'est pas l'absence de doute — c'est choisir de faire confiance à Dieu malgré l'incertitude. Chaque petit pas de foi renforce le suivant.",
      },
      {
        title: "Le pouvoir du pardon",
        body: "Pardonner ne veut pas dire excuser le mal fait — c'est se libérer soi-même du poison de la rancune. Le pardon est un choix, pas un sentiment.",
      },
      {
        title: "Une prière qui change les choses",
        body: "La prière n'est pas une formalité religieuse, c'est une vraie conversation avec un Père qui écoute. Priez simplement, honnêtement, régulièrement.",
      },
      {
        title: "La Parole comme fondation",
        body: "Les émotions changent, les circonstances changent — la Parole de Dieu reste stable. Ancrer sa vie dans la Bible, c'est bâtir sur un roc, pas sur du sable.",
      },
      {
        title: "Persévérer dans l'épreuve",
        body: "Les difficultés ne signifient pas que Dieu vous a abandonné. Souvent, c'est justement dans l'épreuve que le caractère se forme et que la foi devient réelle.",
      },
    ],
    dailyEncouragements: [
      "Dieu n'a pas fini son œuvre en vous — continuez d'avancer.",
      "Vous êtes plus fort que ce que vous traversez aujourd'hui.",
      "Rien de ce que vous vivez n'échappe au regard de Dieu.",
      "Un petit pas de foi aujourd'hui peut changer toute votre semaine.",
      "Vous êtes aimé, pas parce que vous le méritez, mais parce que Dieu vous a choisi.",
      "Le découragement ment — la promesse de Dieu reste vraie.",
      "Chaque jour est une nouvelle occasion de recommencer.",
      "Votre prière d'hier n'a pas été oubliée.",
      "Dieu peut faire plus avec vos fragments que vous seul avec vos forces.",
      "La lumière brille même dans les nuits les plus sombres.",
      "Ce que vous semez en secret, Dieu le récompense en public.",
      "Votre histoire n'est pas encore terminée.",
      "La grâce de Dieu est suffisante pour aujourd'hui, pas besoin de tout porter d'avance.",
      "Quelqu'un a besoin d'entendre votre témoignage aujourd'hui.",
      "Dieu répare ce qui semble irréparable.",
    ],
    prayerNameLabel: "Votre nom (optionnel)",
    prayerNamePlaceholder: "Anonyme",
    prayerRequestLabel: "Votre demande",
    prayerTopicLabel: "Sujet de la demande (optionnel)",
    prayerTopicPlaceholder: "Choisissez un sujet...",
    prayerTopics: [
      "Abus", "Dépendances", "Inquiétude / Anxiété", "Faillite", "Percée", "Entreprise",
      "Délivrance", "Dépression / Troubles émotionnels", "Découragement / Déceptions",
      "Famille", "Conseils / Sagesse", "Guérison", "Emploi", "Restauration du mariage",
      "Ministère", "Biens et provisions", "Protection divine", "Salut des enfants",
      "Suicide", "Voyage", "Succès", "Réussite professionnelle",
      "Délivrance des alliances ancestrales",
      "Maladies chroniques", "Deuil / Perte d'un être cher", "Immigration / Papiers",
      "Études / Réussite scolaire", "Finances", "Grossesse", "Paix intérieure",
      "Persécution", "Direction / Appel de Dieu",
    ],
    prayerRequestPlaceholder: "Écrivez votre demande ici...",
    prayerSubmitBtn: "Envoyer la demande",
    prayerSendingBtn: "Envoi en cours...",
    prayerSuccessTitle: "Demande envoyée",
    prayerSuccessBody: "Merci de nous avoir fait confiance. Nos intercesseurs et nos sentinelles prient pour vous.",
    prayerSuccessNew: "Envoyer une autre demande",
    prayerErrorBody: "Une erreur est survenue. Veuillez réessayer.",
    pillars: [
      {
        key: "adoration",
        title: "Adoration",
        subtitle: "Célébrer, glorifier la présence de Dieu",
        tagline: "Aimer Dieu",
        body: "Vivre des rencontres puissantes de louange où l'on expérimente la présence du Dieu de grâce.",
        verseRef: "Matthieu 22:37",
      },
      {
        key: "fraternite",
        title: "Communion fraternelle",
        subtitle: "Incorporer la famille de Dieu — Ambassade des Relations et d'Accueil",
        tagline: "Baptême",
        body: "Bâtir une famille spirituelle authentique où chacun est aimé, soutenu et accepté inconditionnellement.",
        verseRef: "Actes 2:41",
      },
      {
        key: "discipolat",
        title: "Discipolat (Maturité)",
        subtitle: "Former pour le Réveil — Enseigner le peuple de Dieu",
        tagline: "Enseigner",
        body: "Équiper chaque croyant par l'enseignement de la grâce pour qu'il devienne semblable à Christ et mature.",
        verseRef: "Matthieu 28:20",
      },
      {
        key: "service",
        title: "Ministère (Service)",
        subtitle: "Libérer les dons — Démontrer l'amour de Dieu",
        tagline: "Servir",
        body: "Aider chaque ambassadeur à découvrir ses dons et à servir avec passion dans l'église et la société — une vie de disciple.",
        verseRef: "1 Pierre 4:10",
      },
      {
        key: "evangelisation",
        title: "Évangélisation (Missiologie)",
        subtitle: "Porter la Lumière — illuminer la société — Communiquer la parole de Dieu",
        tagline: "Allez",
        body: "Être des témoins de la grâce partout. Étendre l'influence du royaume par des actions sociales, évangéliques, l'implantation d'autres Centres/Ambassades et le soutien aux missions, pour transformer la communauté locale et les nations.",
        verseRef: "Matthieu 28:19",
      },
    ],
  },
  en: {
    tagline: "Centre Lumière du Grand Réveil",
    subtagline: "Embassy of Grace",
    navHome: "Home",
    navDevotion: "Devotion",
    navPillars: "Pillars",
    navHeroes: "Heroes",
    navMedia: "Media",
    navMore: "More",
    backLabel: "Back",
    copyrightLabel: "Centre Lumière du Grand Réveil — Embassy of Grace. All rights reserved.",
    heroTitle: "The light rises again",
    slogan: "Grace Awakens, Light Transforms",
    heroBody:
      "A living community, carried by grace, sent to light up every nation, every language, every heart.",
    missionLabel: "Our mission",
    visionLabel: "Our vision",
    visionTagline: "Awaken hearts, release grace, illuminate the world, and reign.",
    visionBody: "To be an epicenter of spiritual awakening, an embassy of heaven where every person, whatever their story, encounters the transforming grace of God, discovers their identity in Christ, and is equipped to radiate the light of the kingdom in their sphere of influence.",
    missionBody:
      "We exist to glorify God and extend his kingdom — worshiping with fervor, cultivating authentic fellowship, making mature and committed disciples, lovingly serving the poor, the broken, and the marginalized in our community, working for justice, reconciliation, and human dignity, and proclaiming the Gospel of grace with power — until the great awakening transforms every heart, every family, and every nation.",
    verseRef: "Luke 4:18",
    verseText:
      "The Spirit of the Lord is on me, he has sent me to proclaim good news to the poor.",
    pillarsTitle: "Five pillars, one calling",
    pillarsIntro: "Grounded in Matthew 28:19, these pillars shape our whole community life.",
    heroesTitle: "Heroes of the faith",
    heroesIntro: "Lives that marked their generation and continue to inspire ours.",
    heroesLessonLabel: "Key lesson",
    heroes: [
      {
        name: "Charles Spurgeon",
        years: "1834–1892",
        role: "The \"prince of preachers\"",
        bio: "An English Baptist pastor, he preached to thousands each week at London's Metropolitan Tabernacle. His printed sermons are still read worldwide, more than a century after his death.",
        lesson: "Spurgeon began preaching at just 17, without formal theological training. His life is a reminder that God can powerfully use anyone, whatever their background, once they make themselves available.",
      },
      {
        name: "John Wesley",
        years: "1703–1791",
        role: "Founder of Methodism",
        bio: "An English theologian, he traveled England on horseback for decades, preaching outdoors to tens of thousands and founding a movement that transformed the spiritual and social life of a nation.",
        lesson: "Wesley organized converts into small groups of mutual accountability. His life teaches the importance of structured community for lasting growth in faith, beyond isolated spiritual experiences.",
      },
      {
        name: "D.L. Moody",
        years: "1837–1899",
        role: "Evangelist with no theological training",
        bio: "A former shoe salesman with no formal education, Moody became one of the most influential evangelists of the 19th century, reaching millions across America and Britain.",
        lesson: "Moody said the world had yet to see what God could do through a person fully consecrated to him. His life shows that availability of heart matters more than human qualifications.",
      },
      {
        name: "George Whitefield",
        years: "1714–1770",
        role: "Preacher of the Great Awakening",
        bio: "One of the driving forces of the First Great Awakening in America and England, he preached outdoors to crowds of tens of thousands, without a microphone, across the thirteen American colonies.",
        lesson: "Whitefield crossed the Atlantic thirteen times to preach. His endurance is a reminder that carrying the Gospel often requires real sacrifice, not just inner conviction.",
      },
      {
        name: "Smith Wigglesworth",
        years: "1859–1947",
        role: "The \"apostle of faith\"",
        bio: "A British plumber with no formal training, he became a preacher known for his healing ministry and radical faith, deeply shaping the emerging Pentecostal movement.",
        lesson: "Wigglesworth said he was moved not by what he saw or felt, but by what he believed. His life encourages us to anchor our faith in God's word rather than visible circumstances.",
      },
      {
        name: "Kathryn Kuhlman",
        years: "1907–1976",
        role: "Healing ministry",
        bio: "An American preacher known for large gatherings marked by reported healings and a strong sense of the Holy Spirit's presence, she insisted throughout her life that she herself had no power.",
        lesson: "Kuhlman refused credit for healings, consistently redirecting attention to God alone. Her posture is a reminder of the importance of remaining a simple instrument, never the source.",
      },
      {
        name: "A.A. Allen",
        years: "1911–1970",
        role: "Healing and miracle ministry",
        bio: "An American preacher associated with the 1950s-60s faith healing movement, known for large tent campaigns marked by reported healings and miracles, especially reaching marginalized communities.",
        lesson: "Allen preached with the conviction that God wanted to act powerfully today, not only in biblical accounts of the past. His life, including his well-documented personal struggles, also reminds us that no minister is beyond human weakness — grace remains necessary for all, including those who preach.",
      },
      {
        name: "Billy Graham",
        years: "1918–2018",
        role: "\"The evangelist to presidents\"",
        bio: "Widely regarded as the most influential evangelist of the 20th century, he preached in person to more than 200 million people across 185 countries during his crusades, while advising several U.S. presidents without ever becoming entangled in partisan politics.",
        lesson: "Graham maintained a reputation for personal and financial integrity across more than 60 years of public ministry, holding himself to strict standards of transparency. His life reminds us that credibility is built as much through character as through message.",
      },
      {
        name: "Oral Roberts",
        years: "1918–2009",
        role: "Pioneer of televised divine healing",
        bio: "An American preacher who pioneered televangelism, he brought the divine healing ministry to a national scale through television, and founded Oral Roberts University to train a new generation of Christian leaders.",
        lesson: "Roberts emphasized what he called \"seed faith\" — giving generously in trust that God multiplies what is sown. His life illustrates the importance of daring to innovate in how the Gospel is carried, using the tools of one's own time.",
      },
    ],
    ctaDevotion: "Read today's devotion",
    devotionLabel: "Today's devotion",
    devotionDate: "Today",
    devotionReflectionTitle: "Reflection",
    devotionPrayerTitle: "Prayer",
    devotions: [
      {
        ref: "Isaiah 14:4-5",
        verse: "The Lord has broken the rod of the wicked, the scepter of the rulers.",
        reflection: "What seemed permanent in your life — a stuck situation, an old yoke — God can overturn in an instant. The rod that oppresses you today can be broken tomorrow. Your circumstance does not have the last word; God does.",
        prayer: "Lord, I hand you what feels frozen and without a way out. Break today what oppresses me, and rise for me as you rose for your people. Amen.",
      },
      {
        ref: "Lamentations 3:22-23",
        verse: "The steadfast love of the Lord never ceases, his mercies never come to an end; they are new every morning.",
        reflection: "Whatever yesterday held — its failures, its tears, its regrets — God's grace doesn't run out. Every morning is an invitation to begin again, not because you earned it, but because his faithfulness is new each day.",
        prayer: "Father, thank you for grace renewed today. Help me leave yesterday behind and walk in your faithfulness. Amen.",
      },
      {
        ref: "Philippians 4:6-7",
        verse: "Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God.",
        reflection: "Worry promises to solve the problem but only makes it bigger. Prayer doesn't always change the situation right away — but it changes what happens inside you. God's peace doesn't depend on the answer, but on the surrender.",
        prayer: "Lord, I hand you what weighs on my heart today. Guard my heart and mind with your peace. Amen.",
      },
      {
        ref: "Joshua 1:9",
        verse: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        reflection: "Biblical courage isn't the absence of fear — it's moving forward despite it, because you are not alone. Whatever you're facing today, you don't face it by yourself.",
        prayer: "Lord, give me courage to move forward today, knowing you walk with me. Amen.",
      },
      {
        ref: "Psalm 34:18",
        verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
        reflection: "God doesn't stand far from your pain — he draws near to it. If your heart is heavy today, you are not invisible to him; you are exactly where his presence draws closest.",
        prayer: "Lord, thank you for staying close to me in hard moments. I entrust my heart to you today. Amen.",
      },
    ],
    shareBtn: "Share",
    shareCopied: "Copied!",
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
    radioSubtitle: "The light that never goes out",
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
    donateHeroBody: "Together, we do more than we could ever do alone. Your gift today becomes tomorrow's shared devotion, a family supported, a soul touched.",
    donateImpactTitle: "What your gift makes possible",
    donateImpact1: "Producing devotions and teaching for the community",
    donateImpact2: "Keeping the live stream, radio, and TV running",
    donateImpact3: "Supporting families in need",
    donateOneTime: "One-time gift",
    donateMonthly: "Monthly gift",
    donateAmountLabel: "Choose an amount",
    donateCustom: "Other amount",
    donateCta: "Give via PayPal",
    donateStripeCta: "Pay by credit or debit card (Stripe)",
    donateSecure: "Secure payment",
    donateCheckNote: "Prefer to give by check? Contact us directly via the \"Become a Member\" form and our team will let you know how to proceed.",
    donateVerse: "\"Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.\"",
    donateVerseRef: "Luke 6:38",
    streakLabel: "day streak",
    streakLabelSingular: "day streak",
    membersLabel: "Members",
    prayersLabel: "Prayers sent",
    eventsTitle: "Events",
    eventsIntro: "Upcoming community gatherings.",
    addToCalendar: "Add to calendar",
    navMember: "Become a Member",
    memberTitle: "Join the family",
    memberSubtitle: "Become a member of Centre Lumière and receive our updates.",
    memberNameLabel: "Full name",
    memberEmailLabel: "Email address",
    memberPhoneLabel: "Phone (optional)",
    memberNewsletterLabel: "I want to receive the newsletter and updates by email",
    memberSubmitBtn: "Sign up",
    memberSendingBtn: "Sending...",
    memberSuccessTitle: "Welcome to the family!",
    memberSuccessBody: "Thank you for signing up. Our team will contact you soon.",
    memberSuccessNew: "Sign up someone else",
    memberErrorBody: "Something went wrong. Please try again.",
    navBible: "Bible",
    bibleTitle: "The Bible",
    bibleSubtitle: "Search a passage — e.g. \"John 3\" or \"Psalm 23\"",
    biblePlaceholder: "E.g. John 3, Psalm 23:1-6...",
    bibleSearchBtn: "Search",
    bibleLoading: "Loading...",
    bibleErrorBody: "Passage not found. Try another format, e.g. \"John 3\" or \"Genesis 1:1-5\".",
    events: [
      { title: "Sunday Service", date: "Every Sunday, 10:00 AM", location: "Centre Lumière du Grand Réveil" },
      { title: "Prayer Night", date: "Every Wednesday, 7:00 PM", location: "Online and in person" },
      { title: "Bible Study", date: "Every Friday, 7:00 PM", location: "Centre Lumière du Grand Réveil" },
    ],
    prayerTitle: "Prayer request",
    prayerSubtitle: "Share what's on your heart — our team prays for you.",
    prayerVerse: "\"Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.\"",
    prayerVerseRef: "Matthew 7:7-8",
    navTestimony: "Testimony",
    navHistory: "Our Story",
    navFaq: "FAQ",
    navBaptism: "Baptism",
    baptismTitle: "Register for baptism",
    baptismSubtitle: "Baptism is a public witness of your faith in Jesus Christ. Fill out this form to sign up for the next session.",
    baptismNameLabel: "Full name",
    baptismContactLabel: "Email or phone",
    baptismReasonLabel: "Why do you want to be baptized? (optional)",
    baptismReasonPlaceholder: "Briefly share what motivates you...",
    baptismSubmitBtn: "Send my registration",
    baptismSendingBtn: "Sending...",
    baptismSuccessTitle: "Registration received!",
    baptismSuccessBody: "Our team will contact you soon with details for the next baptism session.",
    baptismErrorBody: "Something went wrong. Please try again.",
    navReadingPlan: "Reading Plan",
    readingPlanTitle: "Bible reading plan",
    readingPlanIntro: "30 days to discover the great truths of the Bible, one chapter at a time.",
    readingPlanReadBtn: "Read",
    readingPlanDoneLabel: "Done",
    navMessageNotes: "Message Notes",
    messageNotesTitle: "Notes from the latest message",
    messageNotesDate: "Last updated",
    messageNotesDateValue: "To be updated weekly",
    messageNotesMainTitle: "Message title",
    messageNotesMainTitleValue: "Living by faith, not by sight",
    messageNotesVerseRef: "2 Corinthians 5:7",
    messageNotesPointsLabel: "Key points",
    messageNotesPoints: [
      "Faith doesn't ignore reality — it sees beyond it.",
      "What we see changes; God's Word doesn't.",
      "Walking by faith is a daily choice, not a passing feeling.",
    ],
    navGallery: "Gallery",
    galleryTitle: "Photo gallery",
    galleryIntro: "Highlights from our community.",
    galleryCaption1: "Sunday service",
    galleryCaption2: "Baptisms",
    galleryCaption3: "Worship night",
    galleryCaption4: "Community celebration",
    faqTitle: "Frequently asked questions",
    faqIntro: "Answers to the most common questions.",
    faqItems: [
      {
        q: "How do I become a member of Centre Lumière?",
        a: "Go to the \"More\" menu → \"Become a Member\", fill out the form with your details. Our team will contact you to guide you through next steps.",
      },
      {
        q: "How do I get baptized?",
        a: "Baptism is an important step after accepting Jesus as Savior. Contact our team via the \"Become a Member\" form or during a service to sign up for the next baptism session.",
      },
      {
        q: "What are the service and activity schedules?",
        a: "Check the \"Events\" tab in the \"More\" menu for all up-to-date gatherings: Sunday service, prayer nights, Bible studies.",
      },
      {
        q: "How do I submit a prayer request?",
        a: "Go to the \"Prayer\" tab and fill out the form (you may stay anonymous if you prefer). Our intercessors and watchmen pray over every request received.",
      },
      {
        q: "How do I give a donation?",
        a: "Go to the \"More\" menu → \"Give\". You can donate by credit card (Stripe) or PayPal, as a one-time or recurring gift.",
      },
      {
        q: "Is the app free?",
        a: "Yes, entirely free — no paid content. Donations are voluntary and support the church's mission.",
      },
      {
        q: "How do I watch services live?",
        a: "Go to the \"Media\" tab → \"Live\" to follow our services live on YouTube or Facebook, whichever you prefer.",
      },
      {
        q: "Is the app available in multiple languages?",
        a: "Yes — French, English, and Haitian Creole. Switch languages using the FR / EN / HT buttons at the top of the home screen.",
      },
      {
        q: "How do I contact the church directly?",
        a: "Contact details are available on our Google listing and website centre-lumiere.org. You can also use the \"Become a Member\" form to have someone reach out to you.",
      },
    ],
    historyTitle: "Our Story",
    historyBody: "Centre Lumière du Grand Réveil was born from a clear call of God on the life of its founder. Driven by this deep conviction, he gathered around him a group of people passionate about God, united by the same desire: to see souls saved and transformed by grace.\n\nFrom this call and this small group of faith came a mission that continues to grow today — carried by the same vision of a great spiritual awakening, the same passion for the salvation of souls, and the same conviction that God is still working powerfully today.",
    testimonyEncourageTitle: "Share what God has done",
    testimonyEncourageBody: "Your testimony can encourage someone else today. Don't be afraid to share what God has done in your life.",
    testimonyTitle: "Share a testimony",
    testimonySubtitle: "Tell us what God has done in your life — your story can encourage someone else.",
    testimonyNameLabel: "Your name (optional)",
    testimonyTextLabel: "Your testimony",
    testimonyTextPlaceholder: "Share your story here...",
    testimonySubmitBtn: "Send my testimony",
    testimonySendingBtn: "Sending...",
    testimonySuccessTitle: "Thank you for sharing!",
    testimonySuccessBody: "Your testimony will encourage others. Thank you for sharing it with us.",
    testimonySuccessNew: "Share another testimony",
    testimonyErrorBody: "Something went wrong. Please try again.",
    navSalvation: "Accept Jesus",
    salvationHomeTitle: "Want to know Jesus?",
    salvationHomeBody: "You can receive Christ today — no conditions, just as you are.",
    salvationHomeBtn: "I'm taking this step today",
    salvationTitle: "Receiving Jesus Christ",
    salvationIntro: "You don't need to be perfect to come to God — just sincere. Read this prayer out loud, with your heart.",
    salvationPrayerTitle: "A prayer to receive Christ",
    salvationPrayer: "Lord Jesus, I recognize I need you. I believe you died on the cross for my sins and rose again. Today, I turn from my old life and receive you as my Savior and Lord. Thank you for forgiving me and giving me new life. Amen.",
    salvationConfirmBtn: "I prayed this prayer with my heart",
    salvationNameLabel: "Your name (optional)",
    salvationEmailLabel: "Email or phone (for follow-up)",
    salvationSubmitBtn: "Confirm my decision",
    salvationSendingBtn: "Sending...",
    salvationSuccessTitle: "Welcome to God's family!",
    salvationSuccessBody: "Heaven is rejoicing over you today. Our team will reach out to walk with you in this new life.",
    salvationNextStepsTitle: "Your first steps",
    salvationNextSteps: [
      "Read a passage of the Bible each day, even a short one",
      "Talk to God every day in prayer, like a friend",
      "Join a community — don't stay alone in your faith",
      "Tell someone you trust about this decision",
      "Consider baptism as a public witness of your faith",
    ],
    victoriousLifeTitle: "Victorious Christian Life",
    victoriousLifeIntro: "Simple truths to walk each day with strength and hope.",
    victoriousTeachings: [
      {
        title: "Your identity in Christ",
        body: "You are no longer defined by your past, your failures, or what others say about you. In Christ, you are a new creation, loved and accepted. Your worth doesn't depend on your performance.",
      },
      {
        title: "Overcoming temptation",
        body: "Temptation isn't sin — giving in is. God always provides a way out. Fleeing certain situations isn't weakness, it's wisdom.",
      },
      {
        title: "Spiritual warfare",
        body: "The battle isn't against the people around you, but a spiritual one. Prayer, God's Word, and worship are powerful weapons, not just religious habits.",
      },
      {
        title: "Walking by faith",
        body: "Faith isn't the absence of doubt — it's choosing to trust God despite uncertainty. Every small step of faith strengthens the next one.",
      },
      {
        title: "The power of forgiveness",
        body: "Forgiving doesn't mean excusing the harm done — it means freeing yourself from the poison of resentment. Forgiveness is a choice, not a feeling.",
      },
      {
        title: "Prayer that changes things",
        body: "Prayer isn't a religious formality — it's a real conversation with a Father who listens. Pray simply, honestly, regularly.",
      },
      {
        title: "The Word as foundation",
        body: "Emotions change, circumstances change — God's Word stays stable. Anchoring your life in the Bible means building on rock, not sand.",
      },
      {
        title: "Persevering through trials",
        body: "Difficulties don't mean God has abandoned you. Often, it's precisely in the trial that character is formed and faith becomes real.",
      },
    ],
    dailyEncouragements: [
      "God isn't finished with you yet — keep moving forward.",
      "You are stronger than what you're facing today.",
      "Nothing you're going through escapes God's sight.",
      "One small step of faith today can change your whole week.",
      "You are loved, not because you deserve it, but because God chose you.",
      "Discouragement lies — God's promise remains true.",
      "Every day is a new chance to begin again.",
      "Your prayer from yesterday hasn't been forgotten.",
      "God can do more with your fragments than you can with your own strength.",
      "Light shines even in the darkest nights.",
      "What you sow in secret, God rewards in public.",
      "Your story isn't over yet.",
      "God's grace is enough for today — no need to carry it all in advance.",
      "Someone needs to hear your testimony today.",
      "God repairs what seems irreparable.",
    ],
    prayerNameLabel: "Your name (optional)",
    prayerNamePlaceholder: "Anonymous",
    prayerRequestLabel: "Your request",
    prayerTopicLabel: "Topic (optional)",
    prayerTopicPlaceholder: "Choose a topic...",
    prayerTopics: [
      "Abuse", "Addictions", "Worry / Anxiety", "Bankruptcy", "Breakthrough", "Business",
      "Deliverance", "Depression / Emotional struggles", "Discouragement / Disappointment",
      "Family", "Guidance / Wisdom", "Healing", "Employment", "Marriage restoration",
      "Ministry", "Provision / Resources", "Divine protection", "Salvation of children",
      "Suicide", "Travel", "Success", "Career success",
      "Deliverance from ancestral covenants",
      "Chronic illness", "Grief / Loss of a loved one", "Immigration / Documentation",
      "Studies / Academic success", "Finances", "Pregnancy", "Inner peace",
      "Persecution", "Guidance / God's calling",
    ],
    prayerRequestPlaceholder: "Write your request here...",
    prayerSubmitBtn: "Send request",
    prayerSendingBtn: "Sending...",
    prayerSuccessTitle: "Request sent",
    prayerSuccessBody: "Thank you for trusting us. Our intercessors and watchmen are praying for you.",
    prayerSuccessNew: "Send another request",
    prayerErrorBody: "Something went wrong. Please try again.",
    pillars: [
      {
        key: "adoration",
        title: "Worship",
        subtitle: "Celebrating and glorifying God's presence",
        tagline: "Love God",
        body: "Living powerful moments of praise where we experience the presence of the God of grace.",
        verseRef: "Matthew 22:37",
      },
      {
        key: "fraternite",
        title: "Fellowship",
        subtitle: "Welcoming people into God's family — an embassy of relationship and hospitality",
        tagline: "Baptism",
        body: "Building an authentic spiritual family where everyone is loved, supported, and unconditionally accepted.",
        verseRef: "Acts 2:41",
      },
      {
        key: "discipolat",
        title: "Discipleship (Maturity)",
        subtitle: "Forming people for the Awakening — teaching God's people",
        tagline: "Teach",
        body: "Equipping every believer through the teaching of grace to become Christlike and mature.",
        verseRef: "Matthew 28:20",
      },
      {
        key: "service",
        title: "Ministry (Service)",
        subtitle: "Releasing gifts — demonstrating God's love",
        tagline: "Serve",
        body: "Helping every ambassador discover their gifts and serve with passion in the church and society — a life of discipleship.",
        verseRef: "1 Peter 4:10",
      },
      {
        key: "evangelisation",
        title: "Evangelism (Missiology)",
        subtitle: "Carrying the Light — illuminating society — communicating God's word",
        tagline: "Go",
        body: "Being witnesses of grace everywhere. Extending the kingdom's influence through social and evangelistic action, planting new Centers/Embassies, and supporting missions, to transform the local community and the nations.",
        verseRef: "Matthew 28:19",
      },
    ],
  },
  ht: {
    tagline: "Centre Lumière du Grand Réveil",
    subtagline: "Anbasad Gras la",
    navHome: "Akèy",
    navDevotion: "Devosyon",
    navPillars: "Pilye",
    navHeroes: "Ewo",
    navMedia: "Medya",
    navMore: "Plis",
    backLabel: "Tounen",
    copyrightLabel: "Centre Lumière du Grand Réveil — Anbasad Gras la. Tout dwa rezève.",
    heroTitle: "Limyè a leve ankò",
    slogan: "Gras Reveye, Limyè Transfòme",
    heroBody:
      "Yon kominote vivan, gras pote l, voye pou klere chak nasyon, chak lang, chak kè.",
    missionLabel: "Misyon nou",
    visionLabel: "Vizyon nou",
    visionTagline: "Reveye kè yo, libere gras la, klere mond lan epi renye.",
    visionBody: "Vin yon sant kote reveye espirityèl la fèt, yon anbasad syèl la kote chak moun, kèlkeswa istwa yo, rankontre gras Bondye ki transfòme a, dekouvri idantite yo an Kris, e yo ekipe pou yo klere limyè wayòm nan nan sfè enfliyans yo.",
    missionBody:
      "Nou egziste pou nou glorifye Bondye e elaji wayòm li an — nan adore avèk fèvè, nan kiltive yon vrè fratènite, nan fè disip ki mati e ki angaje, nan sèvi ak lanmou pòv yo, moun ki brize yo, ak moun ki mete sou kote nan kominote nou an, nan travay pou jistis, rekonsilyasyon, ak diyite imen, ak nan anonse Levanjil gras la avèk pouvwa — jiskaske gran reveye a transfòme chak kè, chak fanmi, ak chak nasyon.",
    verseRef: "Lik 4:18",
    verseText:
      "Lespri Senyè a sou mwen, li voye m pou m anonse bon nouvèl la bay pòv yo.",
    pillarsTitle: "Senk pilye, yon sèl apèl",
    pillarsIntro: "Baze sou Matye 28:19, pilye sa yo dirije tout lavi kominote nou an.",
    heroesTitle: "Ewo lafwa",
    heroesIntro: "Lavi ki make jenerasyon yo e ki kontinye enspire pa nou an.",
    heroesLessonLabel: "Leson kle",
    heroes: [
      {
        name: "Charles Spurgeon",
        years: "1834–1892",
        role: "\"Prens predikatè yo\"",
        bio: "Pastè batis angle, li te preche chak semèn devan dè milye moun nan Metropolitan Tabernacle Lond. Sèmon li yo enprime toujou ap li nan lemonn antye, plis pase yon syèk apre lanmò l.",
        lesson: "Spurgeon te kòmanse preche depi laj 17 an, san fòmasyon teyolojik fòmèl. Lavi l montre Bondye ka itilize yon moun avèk pouvwa, kèlkeswa background li, depi li rann tèt li disponib.",
      },
      {
        name: "John Wesley",
        years: "1703–1791",
        role: "Fondatè metodis la",
        bio: "Teyolojyen angle, li te vwayaje Angletè sou chwal pandan plizyè deseni, li preche deyò devan dè dizèn milye moun, e li fonde yon mouvman ki transfòme lavi espirityèl ak sosyal yon nasyon antye.",
        lesson: "Wesley te òganize moun ki konvèti yo an ti gwoup responsablite mityèl. Lavi l anseye enpòtans yon kominote estriktire pou yon kwasans dirab nan lafwa.",
      },
      {
        name: "D.L. Moody",
        years: "1837–1899",
        role: "Evanjelis san fòmasyon teyolojik",
        bio: "Ansyen machann soulye san edikasyon fòmèl, Moody vin youn nan evanjelis ki gen plis enfliyans nan 19yèm syèk la, li touche dè milyon moun nan Amerik ak Grann Bretay.",
        lesson: "Moody te di lemonn poko wè sa Bondye ka fè atravè yon moun ki konsakre nèt bay li. Lavi l montre disponiblite kè a konte plis pase kalifikasyon imen.",
      },
      {
        name: "George Whitefield",
        years: "1714–1770",
        role: "Predikatè Gran Reveye a",
        bio: "Youn nan moun ki te lanse Premye Gran Reveye a nan Amerik ak Angletè, li te preche deyò devan foul dè dizèn milye moun, san mikwo, atravè trèz kolòni ameriken yo.",
        lesson: "Whitefield te travèse Atlantik trèz fwa pou l preche. Andirans li montre pote Levanjil la souvan mande yon vrè sakrifis, pa sèlman yon konviksyon anndan.",
      },
      {
        name: "Smith Wigglesworth",
        years: "1859–1947",
        role: "\"Apot lafwa a\"",
        bio: "Plonbye britanik san fòmasyon fòmèl, li vin yon predikatè ke moun rekonèt pou ministè gerizon li ak lafwa radikal li, ki make mouvman pantkotis k ap kòmanse a anpil.",
        lesson: "Wigglesworth te di li pa t mache sou sa l wè oswa santi, men sou sa l kwè. Lavi l ankouraje nou ansre lafwa nou nan Pawòl Bondye a pito pase sikonstans vizib yo.",
      },
      {
        name: "Kathryn Kuhlman",
        years: "1907–1976",
        role: "Ministè gerizon",
        bio: "Predikatris ameriken ke moun konnen pou gwo rasanbleman li yo make ak gerizon rapòte ak yon fò prezans Sentespri, li te toujou ensiste li menm pa t gen pouvwa.",
        lesson: "Kuhlman te refize moun bay li kredi pou gerizon yo, li toujou redirije atansyon an sou Bondye sèl. Pozisyon l montre enpòtans pou rete yon senp enstriman, pa janm sous la.",
      },
      {
        name: "A.A. Allen",
        years: "1911–1970",
        role: "Ministè gerizon ak mirak",
        bio: "Predikatè ameriken ki asosye ak mouvman gerizon pa lafwa ane 1950-60 yo, li te konnen pou gwo kanpay anba tant ki make ak gerizon ak mirak rapòte, e ki te touche espesyalman kominote ki mete sou kote yo.",
        lesson: "Allen te preche ak konviksyon Bondye vle aji ak pouvwa jodi a, pa sèlman nan istwa biblik nan tan lontan. Lavi l, ansanm ak difikilte pèsonèl byen dokimante li yo, montre tou okenn minis pa alabri feblès imen — gras la nesesè pou tout moun, menm sa yo k ap preche.",
      },
      {
        name: "Billy Graham",
        years: "1918–2018",
        role: "\"Evanjelis prezidan yo\"",
        bio: "Konsidere kòm evanjelis ki gen plis enfliyans nan 20yèm syèk la, li te preche an pèsòn devan plis pase 200 milyon moun nan 185 peyi pandan gwo kwazad li yo, pandan l ap konseye plizyè prezidan ameriken san l pa janm mele nan politik patizan.",
        lesson: "Graham te kenbe yon repitasyon entegrite pèsonèl ak finansye san repwòch pandan plis pase 60 an nan ministè piblik, li te enpoze tèt li règ estrik transparans. Lavi l montre kredibilite yon temwayaj bati ni sou karaktè ni sou mesaj la.",
      },
      {
        name: "Oral Roberts",
        years: "1918–2009",
        role: "Pyonye gerizon divin nan televizyon",
        bio: "Predikatè ameriken ki te pyonye televanjelizasyon, li te pote ministè gerizon divin nan yon echèl nasyonal atravè televizyon, e li te fonde Oral Roberts University pou fòme yon nouvo jenerasyon lidè kretyen.",
        lesson: "Roberts te ensiste sou prensip li te rele \"lafwa semans\" — bay ak jenewozite avèk konfyans Bondye ap miltipliye sa ki simen. Lavi l montre enpòtans pou n oze inove nan fason nou pote Levanjil la, an itilize zouti epòk nou an.",
      },
    ],
    ctaDevotion: "Li devosyon jodi a",
    devotionLabel: "Devosyon jodi a",
    devotionDate: "Jodi a",
    devotionReflectionTitle: "Refleksyon",
    devotionPrayerTitle: "Priyè",
    devotions: [
      {
        ref: "Ezayi 14:4-5",
        verse: "Senyè a kase baton mechan yo, baton chèf k ap dominen yo.",
        reflection: "Sa ki te sanble pa ka chanje nan lavi w — yon sitiyasyon bloke, yon ansyen jouk — Bondye ka ranvèse l yon sèl kou. Baton k ap oprime w jodi a ka kase demen. Sitiyasyon w lan pa gen dènye mo a; se Bondye ki genyen l.",
        prayer: "Senyè, m ap remèt ou sa ki sanble bloke san chape pou mwen. Kase jodi a sa k ap oprime m, epi leve pou mwen jan ou te leve pou pèp ou a. Amèn.",
      },
      {
        ref: "Lamantasyon 3:22-23",
        verse: "Se paske Senyè a gen bon kè anpil kifè nou poko fini nèt. Konpasyon l pa janm sispann, l renouvle chak maten.",
        reflection: "Kèlkeswa sa yè te pote — echèk li yo, dlo je li yo, regrè li yo — gras Bondye pa janm fini. Chak maten se yon envitasyon pou rekòmanse, pa paske ou merite l, men paske fidelite l renouvle chak jou.",
        prayer: "Papa, mèsi pou gras ki renouvle jodi a. Ede m kite yè dèyè epi mache nan fidelite ou. Amèn.",
      },
      {
        ref: "Filipyen 4:6-7",
        verse: "Pa bay kò nou traka pou anyen. Men, nan tout bagay, pote demand nou bay Bondye nan lapriyè, nan siplikasyon, ak nan remèsiman.",
        reflection: "Enkyetid pwomèt pou rezoud pwoblèm nan men li fè l vin pi gwo sèlman. Priyè, li menm, pa toujou chanje sitiyasyon an imedyatman — men li chanje sa k ap pase anndan w. Lapè Bondye a pa depann de repons lan, men de remèt la.",
        prayer: "Senyè, m ap remèt ou sa k ap peze kè m jodi a. Gade kè m ak panse m nan lapè ou. Amèn.",
      },
      {
        ref: "Jozye 1:9",
        verse: "Mete gason sou ou, pa dekouraje. Paske Senyè a, Bondye ou a, ap avè w kèlkeswa kote ou prale.",
        reflection: "Kouraj biblik se pa absans lapè — se avanse malgre l, paske ou pa pou kont ou. Kèlkeswa sa w ap fè fas jodi a, ou pa fè fas ak li pou kont ou.",
        prayer: "Senyè, ban m kouraj pou m avanse jodi a, konnen ou mache avè m. Amèn.",
      },
      {
        ref: "Sòm 34:18",
        verse: "Senyè a toupre moun ki gen kè kraze, li sove moun ki gen lespri yo desann.",
        reflection: "Bondye pa rete lwen doulè w — li pwoche pi pre l. Si kè w lou jodi a, ou pa envizib pou li; ou egzakteman kote prezans li pi pre.",
        prayer: "Senyè, mèsi paske ou rete toupre m nan moman difisil yo. M ap remèt ou kè m jodi a. Amèn.",
      },
    ],
    shareBtn: "Pataje",
    shareCopied: "Kopye !",
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
    radioSubtitle: "Limyè ki pa janm etenn",
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
    donateHeroBody: "Ansanm, nou fè plis pase sa nou t ap ka fè pou kont nou. Don ou bay jodi a vin yon devosyon pataje demen, yon fanmi ki jwenn sipò, yon nanm ki touche.",
    donateImpactTitle: "Sa don ou fè posib",
    donateImpact1: "Pwodwi devosyon ak ansèyman pou kominote a",
    donateImpact2: "Kenbe dirèk la, radyo a, ak televizyon an sou entènèt",
    donateImpact3: "Soutni fanmi ki nan bezwen",
    donateOneTime: "Don sèl fwa",
    donateMonthly: "Don chak mwa",
    donateAmountLabel: "Chwazi yon montan",
    donateCustom: "Lòt montan",
    donateCta: "Fè yon don via PayPal",
    donateStripeCta: "Peye ak kat kredi oswa kat debi (Stripe)",
    donateSecure: "Peman sekirize",
    donateCheckNote: "Ou pito bay ak chèk? Kontakte nou dirèkteman atravè fòm « Vin Manm » epi ekip nou an ap di w kijan pou fè sa.",
    donateVerse: "« Bay, y ap ba ou. Y ap vide nan pòch ou yon bon mezi, tase, souke, ki plen rive tonbe deyò. Paske se menm mezi nou sèvi pou lòt yo, y ap sèvi pou nou. »",
    donateVerseRef: "Lik 6:38",
    streakLabel: "jou youn apre lòt",
    streakLabelSingular: "jou",
    membersLabel: "Manm",
    prayersLabel: "Priyè voye",
    eventsTitle: "Evènman",
    eventsIntro: "Pwochen rasanbleman kominote a.",
    addToCalendar: "Ajoute nan kalandriye",
    navMember: "Vin Manm",
    memberTitle: "Rejwenn fanmi an",
    memberSubtitle: "Vin manm Centre Lumière epi resevwa nouvèl nou yo.",
    memberNameLabel: "Non konplè",
    memberEmailLabel: "Adrès imèl",
    memberPhoneLabel: "Telefòn (opsyonèl)",
    memberNewsletterLabel: "Mwen vle resevwa enfolèt ak nouvèl yo pa imèl",
    memberSubmitBtn: "Enskri",
    memberSendingBtn: "N ap voye...",
    memberSuccessTitle: "Byenveni nan fanmi an !",
    memberSuccessBody: "Mèsi paske ou enskri. Ekip nou an ap kontakte w byento.",
    memberSuccessNew: "Enskri yon lòt moun",
    memberErrorBody: "Gen yon erè. Tanpri eseye ankò.",
    navBible: "Bib",
    bibleTitle: "Bib la",
    bibleSubtitle: "Chèche yon pasaj — pa egzanp « Jan 3 » oswa « Sòm 23 »",
    biblePlaceholder: "Pa egzanp Jan 3, Sòm 23:1-6...",
    bibleSearchBtn: "Chèche",
    bibleLoading: "L ap chaje...",
    bibleErrorBody: "Nou pa jwenn pasaj la. Eseye yon lòt fòma, pa egzanp « Jan 3 » oswa « Jenèz 1:1-5 ».",
    events: [
      { title: "Sèvis Dimanch", date: "Chak dimanch, 10h00", location: "Centre Lumière du Grand Réveil" },
      { title: "Sware Priyè", date: "Chak mèkredi, 19h00", location: "Anliy ak sou plas" },
      { title: "Etid Biblik", date: "Chak vandredi, 19h00", location: "Centre Lumière du Grand Réveil" },
    ],
    prayerTitle: "Demann priyè",
    prayerSubtitle: "Pataje sa k sou kè w — ekip nou an ap priye pou ou.",
    prayerVerse: "« Moun ki chèche jwenn ; moun ki mande resevwa ; y ap louvri pou moun k ap frape. »",
    prayerVerseRef: "Matye 7:7-8",
    navTestimony: "Temwayaj",
    navHistory: "Istwa nou",
    navFaq: "FAQ",
    navBaptism: "Batèm",
    baptismTitle: "Enskri pou batèm",
    baptismSubtitle: "Batèm se yon temwayaj piblik lafwa w nan Jezi Kris. Ranpli fòm sa a pou enskri pou pwochen sesyon an.",
    baptismNameLabel: "Non konplè",
    baptismContactLabel: "Imèl oswa telefòn",
    baptismReasonLabel: "Poukisa ou vle batize? (opsyonèl)",
    baptismReasonPlaceholder: "Pataje an kèk mo sa k motive w...",
    baptismSubmitBtn: "Voye enskripsyon m",
    baptismSendingBtn: "N ap voye...",
    baptismSuccessTitle: "Nou resevwa enskripsyon w!",
    baptismSuccessBody: "Ekip nou an ap kontakte w byento ak detay pou pwochen sesyon batèm nan.",
    baptismErrorBody: "Gen yon erè. Tanpri eseye ankò.",
    navReadingPlan: "Plan Lekti",
    readingPlanTitle: "Plan lekti biblik",
    readingPlanIntro: "30 jou pou dekouvri gwo verite Bib la, yon chapit alafwa.",
    readingPlanReadBtn: "Li",
    readingPlanDoneLabel: "Fini",
    navMessageNotes: "Nòt Mesaj",
    messageNotesTitle: "Nòt dènye mesaj la",
    messageNotesDate: "Dènye mizajou",
    messageNotesDateValue: "Pou mete ajou chak semèn",
    messageNotesMainTitle: "Tit mesaj la",
    messageNotesMainTitleValue: "Viv pa lafwa, pa pa sa nou wè",
    messageNotesVerseRef: "2 Korentyen 5:7",
    messageNotesPointsLabel: "Pwen kle yo",
    messageNotesPoints: [
      "Lafwa pa inyore reyalite a — li wè pi lwen pase l.",
      "Sa nou wè chanje; Pawòl Bondye a pa chanje.",
      "Mache pa lafwa se yon chwa chak jou, se pa yon santiman pasajè.",
    ],
    navGallery: "Galri",
    galleryTitle: "Galri foto",
    galleryIntro: "Gwo moman nan kominote nou an.",
    galleryCaption1: "Sèvis dimanch",
    galleryCaption2: "Batèm",
    galleryCaption3: "Sware adorasyon",
    galleryCaption4: "Selebrasyon kominotè",
    faqTitle: "Kesyon moun poze souvan",
    faqIntro: "Repons pou kesyon ki poze pi souvan yo.",
    faqItems: [
      {
        q: "Kijan pou m vin manm Centre Lumière?",
        a: "Ale nan meni « Plis » → « Vin Manm », ranpli fòm lan ak enfòmasyon w. Ekip nou an ap kontakte w pou akonpaye w nan pwochen etap yo.",
      },
      {
        q: "Kijan pou m batize?",
        a: "Batèm se yon etap enpòtan apre ou fin aksepte Jezi kòm Sovè. Kontakte ekip nou an atravè fòm « Vin Manm » a oswa pandan yon sèvis pou enskri pou pwochen sesyon batèm nan.",
      },
      {
        q: "Ki lè sèvis ak aktivite yo?",
        a: "Gade tab « Evènman » nan meni « Plis » pou wè tout rasanbleman ki ajou: sèvis dimanch, sware priyè, etid biblik.",
      },
      {
        q: "Kijan pou m soumèt yon demann priyè?",
        a: "Ale nan tab « Priyè » a epi ranpli fòm lan (ou ka rete anonim si ou pito). Entèsesè nou yo ak gadyen nou yo priye pou chak demann yo resevwa.",
      },
      {
        q: "Kijan pou m fè yon don?",
        a: "Ale nan meni « Plis » → « Don ». Ou ka bay ak kat kredi (Stripe) oswa PayPal, yon sèl fwa oswa regilyèman.",
      },
      {
        q: "Èske aplikasyon an gratis?",
        a: "Wi, li antyèman gratis — pa gen okenn kontni peye. Don yo volontè e yo sipòte misyon legliz la.",
      },
      {
        q: "Kijan pou m gade sèvis yo an dirèk?",
        a: "Ale nan tab « Medya » → « Dirèk » pou swiv sèvis nou yo an dirèk sou YouTube oswa Facebook, jan ou pito.",
      },
      {
        q: "Èske aplikasyon an disponib nan plizyè lang?",
        a: "Wi — franse, angle, ak kreyòl ayisyen. Chanje lang ak bouton FR / EN / HT anlè ekran akèy la.",
      },
      {
        q: "Kijan pou m kontakte legliz la dirèkteman?",
        a: "Enfòmasyon kontak yo disponib sou fich Google nou an ak sit entènèt nou an centre-lumiere.org. Ou ka itilize tou fòm « Vin Manm » pou yon moun kontakte w.",
      },
    ],
    historyTitle: "Istwa nou",
    historyBody: "Centre Lumière du Grand Réveil te fèt apati yon apèl klè Bondye te mete sou lavi fondatè li. Pouse pa konviksyon pwofon sa a, li te rasanble yon gwoup moun ki gen pasyon pou Bondye, ini pa menm dezi a: wè nanm sove e transfòme pa gras.\n\nApati apèl sa a ak ti gwoup lafwa sa a, yon misyon te fèt e li kontinye grandi jodi a — pote pa menm vizyon gran reveye espirityèl la, menm pasyon pou sali nanm yo, ak menm konviksyon Bondye ap toujou aji ak pouvwa jodi a.",
    testimonyEncourageTitle: "Pataje sa Bondye fè",
    testimonyEncourageBody: "Temwayaj ou ka ankouraje yon lòt moun jodi a. Pa pè rakonte sa Bondye fè nan lavi w.",
    testimonyTitle: "Pataje yon temwayaj",
    testimonySubtitle: "Rakonte nou sa Bondye fè nan lavi w — istwa w ka ankouraje yon lòt moun.",
    testimonyNameLabel: "Non ou (opsyonèl)",
    testimonyTextLabel: "Temwayaj ou",
    testimonyTextPlaceholder: "Rakonte istwa w la a...",
    testimonySubmitBtn: "Voye temwayaj mwen",
    testimonySendingBtn: "N ap voye...",
    testimonySuccessTitle: "Mèsi paske ou pataje !",
    testimonySuccessBody: "Temwayaj ou pral ankouraje lòt moun. Mèsi paske ou pataje l ak nou.",
    testimonySuccessNew: "Pataje yon lòt temwayaj",
    testimonyErrorBody: "Gen yon erè. Tanpri eseye ankò.",
    navSalvation: "Aksepte Jezi",
    salvationHomeTitle: "Ou vle konnen Jezi?",
    salvationHomeBody: "Ou ka resevwa Kris jodi a — san kondisyon, jan ou ye a.",
    salvationHomeBtn: "M ap fè pa sa a jodi a",
    salvationTitle: "Resevwa Jezi Kris",
    salvationIntro: "Ou pa bezwen pafè pou ou vin bò kot Bondye — jis sensè. Li priyè sa a byen fò, ak tout kè ou.",
    salvationPrayerTitle: "Yon priyè pou resevwa Kris",
    salvationPrayer: "Senyè Jezi, mwen rekonèt mwen bezwen ou. Mwen kwè ou mouri sou kwa a pou peche m yo epi ou leve vivan ankò. Jodi a, mwen vire do bay ansyen lavi m epi mwen resevwa ou kòm Sovè ak Senyè mwen. Mèsi paske ou padone m epi ban m yon lavi nouvo. Amèn.",
    salvationConfirmBtn: "Mwen priye priyè sa a ak tout kè m",
    salvationNameLabel: "Non ou (opsyonèl)",
    salvationEmailLabel: "Imèl oswa telefòn (pou swivi)",
    salvationSubmitBtn: "Konfime desizyon m",
    salvationSendingBtn: "N ap voye...",
    salvationSuccessTitle: "Byenveni nan fanmi Bondye a!",
    salvationSuccessBody: "Syèl la kontan pou ou jodi a. Ekip nou an pral kontakte w pou akonpaye w nan nouvo lavi sa a.",
    salvationNextStepsTitle: "Premye pa ou yo",
    salvationNextSteps: [
      "Li yon pasaj nan Bib la chak jou, menm si li kout",
      "Pale ak Bondye chak jou nan lapriyè, tankou yon zanmi",
      "Rejwenn yon kominote — pa rete pou kont ou nan lafwa ou",
      "Pale ak yon moun ou fè konfyans sou desizyon sa a",
      "Konsidere batèm kòm yon temwayaj piblik lafwa ou",
    ],
    victoriousLifeTitle: "Lavi Kretyen Viktorye",
    victoriousLifeIntro: "Verite senp pou mache chak jou ak fòs ak espwa.",
    victoriousTeachings: [
      {
        title: "Idantite ou an Kris",
        body: "Ou pa defini ankò pa tan lontan w, echèk ou yo, oswa sa lòt moun di sou ou. An Kris, ou se yon nouvo kreyati, yo renmen e yo aksepte w. Valè ou pa depann de pèfòmans ou.",
      },
      {
        title: "Venk tantasyon",
        body: "Tantasyon se pa peche — se seleman lè ou tonbe nan li a. Bondye toujou bay yon chemen pou soti. Kouri kite kèk sitiyasyon se pa feblès, se sajès.",
      },
      {
        title: "Lagè espirityèl",
        body: "Batay la se pa kont moun ki antoure w yo, men se yon batay espirityèl. Lapriyè, Pawòl Bondye a, ak adorasyon se zam pwisan, se pa jis abitid relijye.",
      },
      {
        title: "Mache nan lafwa",
        body: "Lafwa se pa absans dout — se chwazi fè konfyans nan Bondye malgre ensètitid. Chak ti pa lafwa ranfòse pwochen an.",
      },
      {
        title: "Pouvwa padon an",
        body: "Padone pa vle di eskize mal yo fè a — se libere tèt ou anba pwazon rankin. Padon se yon chwa, se pa yon santiman.",
      },
      {
        title: "Yon priyè ki chanje bagay",
        body: "Lapriyè se pa yon fòmalite relijye, se yon vrè konvèsasyon ak yon Papa ki koute. Priye senp, onètman, regilyèman.",
      },
      {
        title: "Pawòl la kòm fondasyon",
        body: "Emosyon chanje, sikonstans chanje — Pawòl Bondye a rete estab. Ansre lavi w nan Bib la vle di bati sou wòch, pa sou sab.",
      },
      {
        title: "Pèsevere nan eprèv",
        body: "Difikilte pa vle di Bondye abandone w. Souvan, se jis nan eprèv la karaktè fòme e lafwa vin reyèl.",
      },
    ],
    dailyEncouragements: [
      "Bondye poko fini travay li nan ou — kontinye avanse.",
      "Ou pi fò pase sa w ap fè fas jodi a.",
      "Anyen nan sa w ap viv pa chape anba je Bondye.",
      "Yon ti pa lafwa jodi a ka chanje tout semèn ou an.",
      "Yo renmen w, pa paske ou merite l, men paske Bondye chwazi w.",
      "Dekourajman manti — pwomès Bondye a rete vre.",
      "Chak jou se yon nouvo chans pou rekòmanse.",
      "Priyè ou te fè yè a pa bliye.",
      "Bondye ka fè plis ak moso ou yo pase ou pou kont ou ak fòs ou.",
      "Limyè klere menm nan nwit ki pi fonse yo.",
      "Sa ou simen an sekrè, Bondye rekonpanse l an piblik.",
      "Istwa w poko fini.",
      "Gras Bondye a ase pou jodi a, pa bezwen pote tout davans.",
      "Gen yon moun ki bezwen tande temwayaj ou jodi a.",
      "Bondye repare sa ki sanble san repare.",
    ],
    prayerNameLabel: "Non ou (opsyonèl)",
    prayerNamePlaceholder: "Anonim",
    prayerRequestLabel: "Demann ou",
    prayerTopicLabel: "Sijè demann lan (opsyonèl)",
    prayerTopicPlaceholder: "Chwazi yon sijè...",
    prayerTopics: [
      "Abi", "Depandans", "Enkyetid / Ankwaye", "Fayit", "Avansman", "Biznis",
      "Delivrans", "Depresyon / Pwoblèm emosyonèl", "Dekourajman / Desepsyon",
      "Fanmi", "Konsèy / Sajès", "Gerizon", "Travay", "Restorasyon maryaj",
      "Ministè", "Byen ak pwovizyon", "Pwoteksyon divin", "Sali pou pitit",
      "Swisid", "Vwayaj", "Siksè", "Reyisit pwofesyonèl",
      "Delivrans alyans zansèt yo",
      "Maladi kwonik", "Dèy / Pèdi yon moun renmen", "Imigrasyon / Papye",
      "Etid / Siksè lekòl", "Finans", "Gwosès", "Lapè anndan",
      "Pèsekisyon", "Direksyon / Apèl Bondye",
    ],
    prayerRequestPlaceholder: "Ekri demann ou la la...",
    prayerSubmitBtn: "Voye demann lan",
    prayerSendingBtn: "N ap voye...",
    prayerSuccessTitle: "Demann voye",
    prayerSuccessBody: "Mèsi paske ou fè nou konfyans. Entèsesè nou yo ak gadyen nou yo ap priye pou ou.",
    prayerSuccessNew: "Voye yon lòt demann",
    prayerErrorBody: "Gen yon erè. Tanpri eseye ankò.",
    pillars: [
      {
        key: "adoration",
        title: "Adorasyon",
        subtitle: "Selebre, glorifye prezans Bondye",
        tagline: "Renmen Bondye",
        body: "Viv rankont pwisan lwanj kote nou eksperimante prezans Bondye gras la.",
        verseRef: "Matye 22:37",
      },
      {
        key: "fraternite",
        title: "Fratènite",
        subtitle: "Enkòpore fanmi Bondye a — Anbasad Relasyon ak Akèy",
        tagline: "Batèm",
        body: "Bati yon vrè fanmi espirityèl kote chak moun renmen, sipòte, e aksepte san kondisyon.",
        verseRef: "Travay 2:41",
      },
      {
        key: "discipolat",
        title: "Disiplina (Maturite)",
        subtitle: "Fòme pou Reveye a — Anseye pèp Bondye a",
        tagline: "Anseye",
        body: "Ekipe chak kwayan atravè ansèyman gras la pou li vin sanble ak Kris e vin mati.",
        verseRef: "Matye 28:20",
      },
      {
        key: "service",
        title: "Ministè (Sèvis)",
        subtitle: "Libere don yo — Demontre lanmou Bondye",
        tagline: "Sèvi",
        body: "Ede chak anbasadè dekouvri don yo e sèvi ak pasyon nan legliz la ak nan sosyete a — yon lavi disip.",
        verseRef: "1 Pyè 4:10",
      },
      {
        key: "evangelisation",
        title: "Evanjelizasyon (Misyoloji)",
        subtitle: "Pote Limyè a — klere sosyete a — Kominike pawòl Bondye a",
        tagline: "Ale",
        body: "Vin temwen gras la toupatou. Elaji enfliyans wayòm nan atravè aksyon sosyal ak evanjelik, plante lòt Sant/Anbasad, ak sipòte misyon yo, pou transfòme kominote lokal la ak nasyon yo.",
        verseRef: "Matye 28:19",
      },
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
  videoUrl: "https://www.youtube.com/channel/UCtD9sGaj2biDHiha_TSDI6Q",
  // Remplacez par l'URL "embed" de votre chaîne YouTube (ex: https://www.youtube.com/embed/live_stream?channel=VOTRE_ID)
  youtubeEmbedUrl: "https://www.youtube.com/embed/live_stream?channel=UCtD9sGaj2biDHiha_TSDI6Q",
  // Remplacez par l'URL "embed" de votre page Facebook (via Facebook Video Plugin)
  facebookEmbedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F",
  // Remplacez par l'URL de votre flux radio en direct (Icecast/Shoutcast, ou un service comme Radio.co, Zeno.fm)
  radioStreamUrl: "https://stream.zeno.fm/a9w7o9zddjnuv",
  radioStationName: "Radio Centre Lumière",
  // Remplacez par l'URL "embed" de votre chaîne TV en continu (playlist YouTube en boucle, ou lien embed Vimeo/Facebook)
  tvEmbedUrl: "https://www.youtube.com/embed/live_stream?channel=UC_x5XG1OV2P6uZZ5FSM9Ttw",
  tvChannelName: "Télé Centre Lumière",
  // Remplacez par votre vrai lien de don (PayPal, Stripe, Zelle, GoFundMe, etc.)
  donationUrl: "https://paypal.me/clgr926",
  // Remplacez par votre lien Stripe Payment Link (créé sur dashboard.stripe.com)
  stripeUrl: "https://buy.stripe.com/test_7sY8wR8cdaT9dpAbTx8IU00",
  // Compteurs sociaux — mettez à jour ces chiffres manuellement de temps en temps
  memberCount: "500+",
  prayerCount: "1200+",
  // Remplacez par votre URL Formspree (gratuit sur formspree.io) pour recevoir les demandes de prière par email
  prayerFormEndpoint: "https://formspree.io/f/xyegwewb",
  // Créez un DEUXIÈME formulaire sur Formspree pour les inscriptions membre/infolettre, et mettez son lien ici
  memberFormEndpoint: "https://formspree.io/f/mgawzbqq",
  // Créez un TROISIÈME formulaire sur Formspree pour les témoignages, et mettez son lien ici
  testimonyFormEndpoint: "https://formspree.io/f/mljrozby",
  // Créez un QUATRIÈME formulaire sur Formspree pour les décisions de foi, et mettez son lien ici
  salvationFormEndpoint: "https://formspree.io/f/xqpzwpbj",
  // Créez un CINQUIÈME formulaire sur Formspree pour les inscriptions au baptême, et mettez son lien ici
  baptismFormEndpoint: "https://formspree.io/f/xbgrqpya",
  // Remplacez ces liens par vos vraies photos hébergées (dans public/publique/, comme les icônes)
  galleryImages: [
    { url: "/icon-512.png", captionKey: "galleryCaption1" },
    { url: "/icon-512.png", captionKey: "galleryCaption2" },
    { url: "/icon-512.png", captionKey: "galleryCaption3" },
    { url: "/icon-512.png", captionKey: "galleryCaption4" },
  ],
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
  const [mediaView, setMediaView] = useState("live"); // live | tv | radio
  const [moreView, setMoreView] = useState(null); // null | donate | heroes | pillars
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liveSource, setLiveSource] = useState("youtube");
  const [isLive, setIsLive] = useState(true); // simulation pour la démo
  const [radioPlaying, setRadioPlaying] = useState(false);
  const [prayerName, setPrayerName] = useState("");
  const [prayerText, setPrayerText] = useState("");
  const [prayerTopic, setPrayerTopic] = useState("");
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
        body: JSON.stringify({ name: prayerName || "Anonyme", sujet: prayerTopic || "—", message: prayerText, langue: lang }),
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

  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [memberNewsletter, setMemberNewsletter] = useState(true);
  const [memberStatus, setMemberStatus] = useState("idle"); // idle | sending | success | error

  const [testimonyName, setTestimonyName] = useState("");
  const [testimonyText, setTestimonyText] = useState("");
  const [testimonyStatus, setTestimonyStatus] = useState("idle"); // idle | sending | success | error

  const [salvationStep, setSalvationStep] = useState("prayer"); // prayer | form | success
  const [salvationName, setSalvationName] = useState("");
  const [salvationContact, setSalvationContact] = useState("");
  const [salvationStatus, setSalvationStatus] = useState("idle"); // idle | sending | error

  const submitSalvation = async (e) => {
    e.preventDefault();
    setSalvationStatus("sending");
    try {
      const res = await fetch(MEDIA.salvationFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ name: salvationName || "Anonyme", contact: salvationContact || "—", langue: lang }),
      });
      if (res.ok) {
        setSalvationStep("success");
        setSalvationStatus("idle");
      } else {
        setSalvationStatus("error");
      }
    } catch {
      setSalvationStatus("error");
    }
  };

  const submitTestimony = async (e) => {
    e.preventDefault();
    if (!testimonyText.trim()) return;
    setTestimonyStatus("sending");
    try {
      const res = await fetch(MEDIA.testimonyFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({ name: testimonyName || "Anonyme", message: testimonyText, langue: lang }),
      });
      if (res.ok) {
        setTestimonyStatus("success");
      } else {
        setTestimonyStatus("error");
      }
    } catch {
      setTestimonyStatus("error");
    }
  };

  const [baptismName, setBaptismName] = useState("");
  const [baptismContact, setBaptismContact] = useState("");
  const [baptismReason, setBaptismReason] = useState("");
  const [baptismStatus, setBaptismStatus] = useState("idle"); // idle | sending | success | error

  const [readingPlanDone, setReadingPlanDone] = useState([]);
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("cl_reading_plan") || "[]");
      setReadingPlanDone(stored);
    } catch {
      // localStorage indisponible — pas grave
    }
  }, []);
  const toggleReadingDay = (day) => {
    setReadingPlanDone((prev) => {
      const next = prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day];
      try {
        localStorage.setItem("cl_reading_plan", JSON.stringify(next));
      } catch {
        // localStorage indisponible — pas grave
      }
      return next;
    });
  };

  const submitBaptism = async (e) => {
    e.preventDefault();
    if (!baptismName.trim() || !baptismContact.trim()) return;
    setBaptismStatus("sending");
    try {
      const res = await fetch(MEDIA.baptismFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({
          name: baptismName,
          contact: baptismContact,
          reason: baptismReason || "—",
          langue: lang,
        }),
      });
      if (res.ok) {
        setBaptismStatus("success");
      } else {
        setBaptismStatus("error");
      }
    } catch {
      setBaptismStatus("error");
    }
  };

  // --- Bible intégrée (Louis Segond 1910, via GetBible.net) ---
  const BIBLE_BOOKS_FR = [
    { nr: 1, name: "Genèse" }, { nr: 2, name: "Exode" }, { nr: 3, name: "Lévitique" },
    { nr: 4, name: "Nombres" }, { nr: 5, name: "Deutéronome" }, { nr: 6, name: "Josué" },
    { nr: 7, name: "Juges" }, { nr: 8, name: "Ruth" }, { nr: 9, name: "1 Samuel" },
    { nr: 10, name: "2 Samuel" }, { nr: 11, name: "1 Rois" }, { nr: 12, name: "2 Rois" },
    { nr: 13, name: "1 Chroniques" }, { nr: 14, name: "2 Chroniques" }, { nr: 15, name: "Esdras" },
    { nr: 16, name: "Néhémie" }, { nr: 17, name: "Esther" }, { nr: 18, name: "Job" },
    { nr: 19, name: "Psaumes" }, { nr: 20, name: "Proverbes" }, { nr: 21, name: "Ecclésiaste" },
    { nr: 22, name: "Cantique des Cantiques" }, { nr: 23, name: "Ésaïe" }, { nr: 24, name: "Jérémie" },
    { nr: 25, name: "Lamentations" }, { nr: 26, name: "Ézéchiel" }, { nr: 27, name: "Daniel" },
    { nr: 28, name: "Osée" }, { nr: 29, name: "Joël" }, { nr: 30, name: "Amos" },
    { nr: 31, name: "Abdias" }, { nr: 32, name: "Jonas" }, { nr: 33, name: "Michée" },
    { nr: 34, name: "Nahum" }, { nr: 35, name: "Habacuc" }, { nr: 36, name: "Sophonie" },
    { nr: 37, name: "Aggée" }, { nr: 38, name: "Zacharie" }, { nr: 39, name: "Malachie" },
    { nr: 40, name: "Matthieu" }, { nr: 41, name: "Marc" }, { nr: 42, name: "Luc" },
    { nr: 43, name: "Jean" }, { nr: 44, name: "Actes" }, { nr: 45, name: "Romains" },
    { nr: 46, name: "1 Corinthiens" }, { nr: 47, name: "2 Corinthiens" }, { nr: 48, name: "Galates" },
    { nr: 49, name: "Éphésiens" }, { nr: 50, name: "Philippiens" }, { nr: 51, name: "Colossiens" },
    { nr: 52, name: "1 Thessaloniciens" }, { nr: 53, name: "2 Thessaloniciens" }, { nr: 54, name: "1 Timothée" },
    { nr: 55, name: "2 Timothée" }, { nr: 56, name: "Tite" }, { nr: 57, name: "Philémon" },
    { nr: 58, name: "Hébreux" }, { nr: 59, name: "Jacques" }, { nr: 60, name: "1 Pierre" },
    { nr: 61, name: "2 Pierre" }, { nr: 62, name: "1 Jean" }, { nr: 63, name: "2 Jean" },
    { nr: 64, name: "3 Jean" }, { nr: 65, name: "Jude" }, { nr: 66, name: "Apocalypse" },
  ];
  const [bibleBook, setBibleBook] = useState(43); // Jean par défaut
  const [bibleChapter, setBibleChapter] = useState(3);
  const [bibleResult, setBibleResult] = useState(null);
  const [bibleStatus, setBibleStatus] = useState("idle"); // idle | loading | error

  const fetchBible = async () => {
    setBibleStatus("loading");
    setBibleResult(null);
    try {
      const res = await fetch(`https://api.getbible.net/v2/ls1910/${bibleBook}/${bibleChapter}.json`);
      if (!res.ok) throw new Error("bad response");
      const data = await res.json();
      let raw = data?.book?.chapter?.verses ?? data?.chapter?.verses ?? data?.verses;
      // Normalise en tableau, que l'API renvoie une liste ou un objet indexé par numéro de verset
      const verses = Array.isArray(raw) ? raw : raw && typeof raw === "object" ? Object.values(raw) : [];
      if (verses.length > 0) {
        const bookName = BIBLE_BOOKS_FR.find((b) => b.nr === Number(bibleBook))?.name || "";
        setBibleResult({ reference: `${bookName} ${bibleChapter}`, verses });
        setBibleStatus("idle");
      } else {
        setBibleStatus("error");
      }
    } catch {
      setBibleStatus("error");
    }
  };

  const submitMember = async (e) => {
    e.preventDefault();
    if (!memberName.trim() || !memberEmail.trim()) return;
    setMemberStatus("sending");
    try {
      const res = await fetch(MEDIA.memberFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({
          name: memberName,
          email: memberEmail,
          phone: memberPhone || "—",
          newsletter: memberNewsletter ? "oui" : "non",
          langue: lang,
        }),
      });
      if (res.ok) {
        setMemberStatus("success");
      } else {
        setMemberStatus("error");
      }
    } catch {
      setMemberStatus("error");
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

  const [shareStatus, setShareStatus] = useState("idle"); // idle | copied

  // --- Streak de lecture (série de jours consécutifs) ---
  const [streak, setStreak] = useState(0);
  useEffect(() => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const stored = JSON.parse(localStorage.getItem("cl_streak") || "null");
      if (stored && stored.lastDate) {
        const last = new Date(stored.lastDate);
        const now = new Date(today);
        const diffDays = Math.round((now - last) / 86400000);
        if (diffDays === 0) {
          setStreak(stored.count);
        } else if (diffDays === 1) {
          const newCount = stored.count + 1;
          localStorage.setItem("cl_streak", JSON.stringify({ lastDate: today, count: newCount }));
          setStreak(newCount);
        } else {
          localStorage.setItem("cl_streak", JSON.stringify({ lastDate: today, count: 1 }));
          setStreak(1);
        }
      } else {
        localStorage.setItem("cl_streak", JSON.stringify({ lastDate: today, count: 1 }));
        setStreak(1);
      }
    } catch {
      // localStorage indisponible — pas grave, le streak reste simplement à 0
    }
  }, []);

  const shareDevotion = async () => {
    const appUrl = "https://centre-lumiere-app1.vercel.app";
    const text = `${todayDevotion.verse} — ${todayDevotion.ref}\n\n${todayDevotion.reflection}\n\n${t.tagline}\n${appUrl}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: t.devotionLabel, text: `${todayDevotion.verse} — ${todayDevotion.ref}\n\n${todayDevotion.reflection}\n\n${t.tagline}`, url: appUrl });
      } catch {
        // utilisateur a annulé le partage — rien à faire
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setShareStatus("copied");
        setTimeout(() => setShareStatus("idle"), 2000);
      } catch {
        // presse-papiers indisponible — rien à faire
      }
    }
  };
  const t = CONTENT[lang];

  // Choisit la dévotion du jour selon la date (change chaque jour, boucle sur la liste)
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000
  );
  const todayDevotion = t.devotions[dayOfYear % t.devotions.length];
  const todayEncouragement = t.dailyEncouragements[dayOfYear % t.dailyEncouragements.length];

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
    document.documentElement.lang = lang;
  }, [lang]);

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
                aria-label={`${LANG_LABELS[code]}${lang === code ? " (" + t.navHome + ")" : ""}`}
                aria-pressed={lang === code}
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
        <div role="main" aria-label={t.navHome} style={{ flex: 1, overflowY: "auto", position: "relative" }}>
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
                  <div
                    style={{
                      display: "inline-block",
                      marginTop: 10,
                      fontSize: 12.5,
                      fontWeight: 700,
                      letterSpacing: 0.4,
                      color: COLORS.dawn,
                      textTransform: "uppercase",
                      borderLeft: `2px solid ${COLORS.dawn}`,
                      paddingLeft: 10,
                    }}
                  >
                    {t.slogan}
                  </div>
                  <p style={{ fontSize: 14.5, color: COLORS.mist, marginTop: 14, lineHeight: 1.55, maxWidth: 300 }}>
                    {t.heroBody}
                  </p>

                  <div
                    style={{
                      marginTop: 16,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 12,
                      padding: 12,
                      maxWidth: 300,
                    }}
                  >
                    <Sparkles size={15} color={COLORS.dawn} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 12.5, lineHeight: 1.5, color: COLORS.light, fontStyle: "italic" }}>
                      {todayEncouragement}
                    </span>
                  </div>

                  {streak > 0 && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        marginTop: 16,
                        background: "rgba(232,98,44,0.14)",
                        border: `1px solid rgba(232,98,44,0.35)`,
                        borderRadius: 999,
                        padding: "6px 12px",
                      }}
                    >
                      <span style={{ fontSize: 14 }}>🔥</span>
                      <span style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.light }}>
                        {streak} {streak === 1 ? t.streakLabelSingular : t.streakLabel}
                      </span>
                    </div>
                  )}

                  <div style={{ display: "flex", gap: 20, marginTop: 18 }}>
                    <div>
                      <div className="display" style={{ fontSize: 20, fontWeight: 700, color: COLORS.dawn }}>
                        {MEDIA.memberCount}
                      </div>
                      <div style={{ fontSize: 11, color: COLORS.mist, marginTop: 1 }}>{t.membersLabel}</div>
                    </div>
                    <div>
                      <div className="display" style={{ fontSize: 20, fontWeight: 700, color: COLORS.dawn }}>
                        {MEDIA.prayerCount}
                      </div>
                      <div style={{ fontSize: 11, color: COLORS.mist, marginTop: 1 }}>{t.prayersLabel}</div>
                    </div>
                  </div>
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

                <div
                  style={{
                    marginTop: 12,
                    background: `linear-gradient(160deg, ${COLORS.ink}, ${COLORS.night})`,
                    borderRadius: 16,
                    padding: 20,
                    border: `1px solid rgba(232,98,44,0.22)`,
                  }}
                >
                  <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: COLORS.ember, fontWeight: 600 }}>
                    {t.visionLabel}
                  </div>
                  <p className="display" style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.4, marginTop: 10, color: COLORS.light }}>
                    « {t.visionTagline} »
                  </p>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 10, color: COLORS.mist }}>{t.visionBody}</p>
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
                  onClick={() => {
                    setTab("more");
                    setMoreView("salvation");
                    setSalvationStep("prayer");
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    width: "100%",
                    marginTop: 10,
                    background: COLORS.ember,
                    border: "none",
                    color: COLORS.light,
                    borderRadius: 14,
                    padding: "14px 18px",
                    fontSize: 14.5,
                    fontWeight: 700,
                    cursor: "pointer",
                    boxSizing: "border-box",
                  }}
                >
                  <Sparkles size={18} />
                  <span style={{ flex: 1, textAlign: "left" }}>{t.salvationHomeBtn}</span>
                  <ChevronRight size={18} />
                </button>

                <button
                  onClick={() => {
                    setTab("more");
                    setMoreView("donate");
                  }}
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
                  "{todayDevotion.verse}"
                </p>
                <div style={{ fontSize: 12.5, color: COLORS.dawn, marginTop: 10, fontWeight: 600 }}>{todayDevotion.ref}</div>
              </div>

              <div style={{ marginTop: 22 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.light }}>{t.devotionReflectionTitle}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: COLORS.mist, marginTop: 8 }}>{todayDevotion.reflection}</p>
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
                <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 8, color: COLORS.light }}>{todayDevotion.prayer}</p>
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
                onClick={shareDevotion}
              >
                {shareStatus === "copied" ? t.shareCopied : t.shareBtn}
              </button>
            </div>
          )}

          {tab === "media" && (
            <div style={{ padding: "20px 20px 0" }}>
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { key: "live", label: t.navLive, Icon: Video },
                  { key: "tv", label: t.navTv, Icon: Tv },
                  { key: "radio", label: t.navRadio, Icon: Radio },
                ].map(({ key, label, Icon }) => (
                  <button
                    key={key}
                    onClick={() => setMediaView(key)}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "10px 0",
                      borderRadius: 10,
                      border: `1px solid ${mediaView === key ? COLORS.dawn : "rgba(255,255,255,0.15)"}`,
                      background: mediaView === key ? "rgba(244,185,66,0.14)" : "transparent",
                      color: mediaView === key ? COLORS.dawn : COLORS.mist,
                      fontSize: 12.5,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    <Icon size={15} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {tab === "media" && mediaView === "live" && (
            <div key={lang + "-live"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
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
                      aria-label="YouTube"
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
                      aria-label="Facebook"
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
                      loading="lazy"
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

          {tab === "media" && mediaView === "radio" && (
            <div key={lang + "-radio"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
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

              <div
                style={{
                  marginTop: 16,
                  background: "rgba(244,185,66,0.08)",
                  border: "1px solid rgba(244,185,66,0.2)",
                  borderRadius: 12,
                  padding: 14,
                }}
              >
                <p className="display" style={{ fontSize: 13.5, fontStyle: "italic", lineHeight: 1.5, color: COLORS.light }}>
                  {t.prayerVerse}
                </p>
                <div style={{ fontSize: 11.5, color: COLORS.dawn, marginTop: 5, fontWeight: 600 }}>{t.prayerVerseRef}</div>
              </div>

              <button
                onClick={() => {
                  setTab("more");
                  setMoreView("testimony");
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: "100%",
                  marginTop: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: 14,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <Megaphone size={17} color={COLORS.dawn} style={{ flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.light }}>{t.testimonyEncourageTitle}</div>
                  <div style={{ fontSize: 11.5, color: COLORS.mist, marginTop: 2, lineHeight: 1.4 }}>{t.testimonyEncourageBody}</div>
                </div>
                <ChevronRight size={16} color={COLORS.mist} style={{ flexShrink: 0 }} />
              </button>

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
                      setPrayerTopic("");
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
                      {t.prayerTopicLabel}
                    </label>
                    <select
                      value={prayerTopic}
                      onChange={(e) => setPrayerTopic(e.target.value)}
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
                    >
                      <option value="" style={{ color: "#000" }}>
                        {t.prayerTopicPlaceholder}
                      </option>
                      {t.prayerTopics.map((topic) => (
                        <option key={topic} value={topic} style={{ color: "#000" }}>
                          {topic}
                        </option>
                      ))}
                    </select>
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

          {tab === "more" && moreView === null && (
            <div key={lang + "-more"} className="fade-up" style={{ padding: "28px 20px 24px" }}>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.navMore}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
                {[
                  { key: "history", label: t.navHistory, Icon: BookOpen },
                  { key: "baptism", label: t.navBaptism, Icon: HandHeart },
                  { key: "readingplan", label: t.navReadingPlan, Icon: BookOpen },
                  { key: "messagenotes", label: t.navMessageNotes, Icon: Megaphone },
                  { key: "gallery", label: t.navGallery, Icon: Sparkles },
                  { key: "faq", label: t.navFaq, Icon: HandHeart },
                  { key: "donate", label: t.navDonate, Icon: Heart },
                  { key: "events", label: t.eventsTitle, Icon: Calendar },
                  { key: "member", label: t.navMember, Icon: UserPlus },
                  { key: "bible", label: t.navBible, Icon: BookOpen },
                  { key: "salvation", label: t.navSalvation, Icon: Sparkles },
                  { key: "victorious", label: t.victoriousLifeTitle, Icon: Flame },
                  { key: "testimony", label: t.navTestimony, Icon: Megaphone },
                  { key: "heroes", label: t.navHeroes, Icon: Award },
                  { key: "pillars", label: t.navPillars, Icon: Compass },
                ].map(({ key, label, Icon }) => (
                  <button
                    key={key}
                    onClick={() => setMoreView(key)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      background: COLORS.ink,
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 14,
                      padding: "16px 16px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 11,
                        background: "rgba(244,185,66,0.14)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} color={COLORS.dawn} />
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 600, color: COLORS.light, flex: 1 }}>{label}</span>
                    <ChevronRight size={18} color={COLORS.mist} />
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 26, textAlign: "center" }}>
                <div style={{ fontSize: 10.5, color: COLORS.mist, lineHeight: 1.5 }}>
                  © {new Date().getFullYear()} {t.copyrightLabel}
                </div>
              </div>
            </div>
          )}

          {tab === "more" && moreView === "history" && (
            <div key={lang + "-history"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.historyTitle}
              </div>
              <div
                style={{
                  marginTop: 18,
                  background: COLORS.ink,
                  borderRadius: 16,
                  padding: 20,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {t.historyBody.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: COLORS.light,
                      marginTop: i === 0 ? 0 : 14,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {tab === "more" && moreView === "readingplan" && (
            <div key={lang + "-readingplan"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.readingPlanTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.readingPlanIntro}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 20 }}>
                {t.readingPlan.map((item) => {
                  const bookName = BIBLE_BOOKS_FR.find((b) => b.nr === item.bookNr)?.name || "";
                  const done = readingPlanDone.includes(item.day);
                  return (
                    <div
                      key={item.day}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        background: COLORS.ink,
                        borderRadius: 12,
                        padding: "12px 14px",
                        border: `1px solid ${done ? "rgba(244,185,66,0.35)" : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      <button
                        onClick={() => toggleReadingDay(item.day)}
                        aria-label={t.readingPlanDoneLabel}
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          border: `1.5px solid ${done ? COLORS.dawn : "rgba(255,255,255,0.25)"}`,
                          background: done ? COLORS.dawn : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          flexShrink: 0,
                        }}
                      >
                        {done && <Check size={14} color={COLORS.night} />}
                      </button>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: COLORS.mist, fontWeight: 600 }}>Jour {item.day}</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.light }}>
                          {bookName} {item.chapter}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setBibleBook(item.bookNr);
                          setBibleChapter(item.chapter);
                          setMoreView("bible");
                          fetchBible();
                        }}
                        style={{
                          background: "rgba(244,185,66,0.14)",
                          color: COLORS.dawn,
                          border: "none",
                          borderRadius: 8,
                          padding: "6px 12px",
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        {t.readingPlanReadBtn}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {tab === "more" && moreView === "messagenotes" && (
            <div key={lang + "-messagenotes"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.messageNotesTitle}
              </div>
              <div style={{ fontSize: 11.5, color: COLORS.mist, marginTop: 4 }}>
                {t.messageNotesDate} : {t.messageNotesDateValue}
              </div>

              <div
                style={{
                  marginTop: 18,
                  background: `linear-gradient(160deg, ${COLORS.ink}, ${COLORS.night})`,
                  border: "1px solid rgba(244,185,66,0.2)",
                  borderRadius: 16,
                  padding: 20,
                }}
              >
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.1, color: COLORS.dawn, fontWeight: 600 }}>
                  {t.messageNotesMainTitle}
                </div>
                <div className="display" style={{ fontSize: 19, fontWeight: 700, marginTop: 8, color: COLORS.light }}>
                  {t.messageNotesMainTitleValue}
                </div>
                <div style={{ fontSize: 12.5, color: COLORS.mist, marginTop: 4 }}>{t.messageNotesVerseRef}</div>
              </div>

              <div style={{ marginTop: 20 }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.dawn, textTransform: "uppercase", letterSpacing: 0.6 }}>
                  {t.messageNotesPointsLabel}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
                  {t.messageNotesPoints.map((point, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          background: "rgba(244,185,66,0.14)",
                          color: COLORS.dawn,
                          fontSize: 11,
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        {i + 1}
                      </div>
                      <span style={{ fontSize: 13.5, color: COLORS.light, lineHeight: 1.55 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "more" && moreView === "gallery" && (
            <div key={lang + "-gallery"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.galleryTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.galleryIntro}</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 20 }}>
                {MEDIA.galleryImages.map((img, i) => (
                  <div key={i} style={{ borderRadius: 12, overflow: "hidden", background: COLORS.ink }}>
                    <img
                      src={img.url}
                      alt={t[img.captionKey]}
                      loading="lazy"
                      style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", display: "block" }}
                    />
                    <div style={{ fontSize: 11.5, color: COLORS.mist, padding: "8px 10px" }}>{t[img.captionKey]}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "more" && moreView === "baptism" && (
            <div key={lang + "-baptism"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.baptismTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.baptismSubtitle}</p>

              {baptismStatus === "success" ? (
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
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{t.baptismSuccessTitle}</div>
                  <p style={{ fontSize: 13.5, color: COLORS.mist, marginTop: 8, lineHeight: 1.5 }}>{t.baptismSuccessBody}</p>
                </div>
              ) : (
                <form onSubmit={submitBaptism} style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.mist, display: "block", marginBottom: 6 }}>
                      {t.baptismNameLabel}
                    </label>
                    <input
                      type="text"
                      value={baptismName}
                      onChange={(e) => setBaptismName(e.target.value)}
                      required
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
                      {t.baptismContactLabel}
                    </label>
                    <input
                      type="text"
                      value={baptismContact}
                      onChange={(e) => setBaptismContact(e.target.value)}
                      required
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
                      {t.baptismReasonLabel}
                    </label>
                    <textarea
                      value={baptismReason}
                      onChange={(e) => setBaptismReason(e.target.value)}
                      placeholder={t.baptismReasonPlaceholder}
                      rows={5}
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

                  {baptismStatus === "error" && (
                    <div style={{ fontSize: 12.5, color: COLORS.ember }}>{t.baptismErrorBody}</div>
                  )}

                  <button
                    type="submit"
                    disabled={baptismStatus === "sending"}
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
                      cursor: baptismStatus === "sending" ? "default" : "pointer",
                      opacity: baptismStatus === "sending" ? 0.7 : 1,
                    }}
                  >
                    <Send size={16} />
                    {baptismStatus === "sending" ? t.baptismSendingBtn : t.baptismSubmitBtn}
                  </button>
                </form>
              )}
            </div>
          )}

          {tab === "more" && moreView === "faq" && (
            <div key={lang + "-faq"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.faqTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.faqIntro}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
                {t.faqItems.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: COLORS.ink,
                      borderRadius: 14,
                      padding: 16,
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.dawn }}>{item.q}</div>
                    <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.55 }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "more" && moreView === "donate" && (
            <div key={lang + "-donate"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.donateTitle}
              </div>
              <p style={{ fontSize: 13.5, color: COLORS.mist, marginTop: 8, lineHeight: 1.55 }}>{t.donateHeroBody}</p>

              <div
                style={{
                  marginTop: 16,
                  background: "rgba(244,185,66,0.08)",
                  border: "1px solid rgba(244,185,66,0.2)",
                  borderRadius: 12,
                  padding: 14,
                }}
              >
                <p className="display" style={{ fontSize: 13.5, fontStyle: "italic", lineHeight: 1.5, color: COLORS.light }}>
                  {t.donateVerse}
                </p>
                <div style={{ fontSize: 11.5, color: COLORS.dawn, marginTop: 5, fontWeight: 600 }}>{t.donateVerseRef}</div>
              </div>

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
                href={MEDIA.stripeUrl}
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
                {t.donateStripeCta} — ${donateAmount}
              </a>

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
                  marginTop: 10,
                  background: "transparent",
                  color: COLORS.light,
                  border: `1px solid rgba(255,255,255,0.2)`,
                  borderRadius: 14,
                  padding: "13px 18px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "none",
                  boxSizing: "border-box",
                }}
              >
                {t.donateCta}
              </a>
              <div style={{ textAlign: "center", fontSize: 11.5, color: COLORS.mist, marginTop: 10 }}>{t.donateSecure}</div>
              <div
                style={{
                  marginTop: 14,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: 12,
                  fontSize: 12,
                  color: COLORS.mist,
                  lineHeight: 1.5,
                  textAlign: "center",
                }}
              >
                {t.donateCheckNote}
              </div>
            </div>
          )}

          {tab === "media" && mediaView === "tv" && (
            <div key={lang + "-tv"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
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
                  loading="lazy"
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

          {tab === "more" && moreView === "events" && (
            <div key={lang + "-events"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.eventsTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.eventsIntro}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
                {t.events.map((ev, i) => (
                  <div
                    key={i}
                    style={{
                      background: COLORS.ink,
                      borderRadius: 14,
                      padding: 16,
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: 11,
                          background: "rgba(244,185,66,0.14)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Calendar size={17} color={COLORS.dawn} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 15, fontWeight: 700 }}>{ev.title}</div>
                        <div style={{ fontSize: 12.5, color: COLORS.dawn, marginTop: 2, fontWeight: 600 }}>{ev.date}</div>
                        <div style={{ fontSize: 12, color: COLORS.mist, marginTop: 2 }}>{ev.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "more" && moreView === "member" && (
            <div key={lang + "-member"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.memberTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.memberSubtitle}</p>

              {memberStatus === "success" ? (
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
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{t.memberSuccessTitle}</div>
                  <p style={{ fontSize: 13.5, color: COLORS.mist, marginTop: 8, lineHeight: 1.5 }}>{t.memberSuccessBody}</p>
                  <button
                    onClick={() => {
                      setMemberStatus("idle");
                      setMemberName("");
                      setMemberEmail("");
                      setMemberPhone("");
                      setMemberNewsletter(true);
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
                    {t.memberSuccessNew}
                  </button>
                </div>
              ) : (
                <form onSubmit={submitMember} style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.mist, display: "block", marginBottom: 6 }}>
                      {t.memberNameLabel}
                    </label>
                    <input
                      type="text"
                      value={memberName}
                      onChange={(e) => setMemberName(e.target.value)}
                      required
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
                      {t.memberEmailLabel}
                    </label>
                    <input
                      type="email"
                      value={memberEmail}
                      onChange={(e) => setMemberEmail(e.target.value)}
                      required
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
                      {t.memberPhoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={memberPhone}
                      onChange={(e) => setMemberPhone(e.target.value)}
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

                  <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={memberNewsletter}
                      onChange={(e) => setMemberNewsletter(e.target.checked)}
                      style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0 }}
                    />
                    <span style={{ fontSize: 13, color: COLORS.mist, lineHeight: 1.5 }}>{t.memberNewsletterLabel}</span>
                  </label>

                  {memberStatus === "error" && (
                    <div style={{ fontSize: 12.5, color: COLORS.ember }}>{t.memberErrorBody}</div>
                  )}

                  <button
                    type="submit"
                    disabled={memberStatus === "sending"}
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
                      cursor: memberStatus === "sending" ? "default" : "pointer",
                      opacity: memberStatus === "sending" ? 0.7 : 1,
                    }}
                  >
                    <UserPlus size={16} />
                    {memberStatus === "sending" ? t.memberSendingBtn : t.memberSubmitBtn}
                  </button>
                </form>
              )}
            </div>
          )}

          {tab === "more" && moreView === "bible" && (
            <div key={lang + "-bible"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.bibleTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.bibleSubtitle}</p>

              <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
                <select
                  value={bibleBook}
                  onChange={(e) => setBibleBook(Number(e.target.value))}
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 10,
                    padding: "11px 8px",
                    color: COLORS.light,
                    fontSize: 13.5,
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                >
                  {BIBLE_BOOKS_FR.map((b) => (
                    <option key={b.nr} value={b.nr} style={{ color: "#000" }}>
                      {b.name}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  min="1"
                  value={bibleChapter}
                  onChange={(e) => setBibleChapter(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && fetchBible()}
                  style={{
                    width: 70,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 10,
                    padding: "11px 10px",
                    color: COLORS.light,
                    fontSize: 14,
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  onClick={() => fetchBible()}
                  style={{
                    background: COLORS.ember,
                    color: COLORS.light,
                    border: "none",
                    borderRadius: 10,
                    padding: "0 18px",
                    fontSize: 13.5,
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.bibleSearchBtn}
                </button>
              </div>

              {bibleStatus === "loading" && (
                <div style={{ textAlign: "center", marginTop: 30, color: COLORS.mist, fontSize: 13.5 }}>{t.bibleLoading}</div>
              )}

              {bibleStatus === "error" && (
                <div style={{ textAlign: "center", marginTop: 30, color: COLORS.ember, fontSize: 13.5 }}>{t.bibleErrorBody}</div>
              )}

              {bibleResult && bibleStatus === "idle" && (
                <div
                  style={{
                    marginTop: 20,
                    background: COLORS.ink,
                    borderRadius: 16,
                    padding: 20,
                    border: "1px solid rgba(244,185,66,0.18)",
                  }}
                >
                  <div className="display" style={{ fontSize: 16, fontWeight: 700, color: COLORS.dawn, marginBottom: 12 }}>
                    {bibleResult.reference}
                  </div>
                  {bibleResult.verses.map((v, idx) => {
                    let num = idx + 1;
                    let txt = "";
                    if (typeof v === "string") {
                      txt = v;
                    } else if (v && typeof v === "object") {
                      num = v.verse_nr || v.verse || v.nr || num;
                      const candidateKeys = ["verse_text", "text", "content", "value", "verse"];
                      for (const key of candidateKeys) {
                        if (typeof v[key] === "string" && v[key].trim()) {
                          txt = v[key];
                          break;
                        }
                      }
                      if (!txt) {
                        for (const key in v) {
                          if (typeof v[key] === "string" && v[key].trim().length > 1) {
                            txt = v[key];
                            break;
                          }
                        }
                      }
                    }
                    return (
                      <p key={idx} style={{ fontSize: 14.5, lineHeight: 1.7, marginBottom: 8, color: COLORS.light }}>
                        <span style={{ color: COLORS.mist, fontSize: 11.5, verticalAlign: "super", marginRight: 4 }}>{num}</span>
                        {String(txt).trim()}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {tab === "more" && moreView === "salvation" && (
            <div key={lang + "-salvation"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => {
                  setMoreView(null);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>

              {salvationStep === "prayer" && (
                <>
                  <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                    {t.salvationTitle}
                  </div>
                  <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.salvationIntro}</p>

                  <div
                    style={{
                      marginTop: 20,
                      background: `linear-gradient(160deg, ${COLORS.ink}, ${COLORS.night})`,
                      border: "1px solid rgba(232,98,44,0.25)",
                      borderRadius: 16,
                      padding: 20,
                    }}
                  >
                    <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.1, color: COLORS.ember, fontWeight: 700 }}>
                      {t.salvationPrayerTitle}
                    </div>
                    <p className="display" style={{ fontSize: 16, lineHeight: 1.7, marginTop: 12, color: COLORS.light, fontStyle: "italic" }}>
                      {t.salvationPrayer}
                    </p>
                  </div>

                  <button
                    onClick={() => setSalvationStep("form")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      width: "100%",
                      marginTop: 20,
                      background: COLORS.ember,
                      color: COLORS.light,
                      border: "none",
                      borderRadius: 14,
                      padding: "15px 18px",
                      fontSize: 15,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    <Sparkles size={17} />
                    {t.salvationConfirmBtn}
                  </button>
                </>
              )}

              {salvationStep === "form" && (
                <>
                  <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                    {t.salvationSuccessTitle}
                  </div>
                  <form onSubmit={submitSalvation} style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.mist, display: "block", marginBottom: 6 }}>
                        {t.salvationNameLabel}
                      </label>
                      <input
                        type="text"
                        value={salvationName}
                        onChange={(e) => setSalvationName(e.target.value)}
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
                        {t.salvationEmailLabel}
                      </label>
                      <input
                        type="text"
                        value={salvationContact}
                        onChange={(e) => setSalvationContact(e.target.value)}
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
                    {salvationStatus === "error" && (
                      <div style={{ fontSize: 12.5, color: COLORS.ember }}>{t.testimonyErrorBody}</div>
                    )}
                    <button
                      type="submit"
                      disabled={salvationStatus === "sending"}
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
                        cursor: salvationStatus === "sending" ? "default" : "pointer",
                        opacity: salvationStatus === "sending" ? 0.7 : 1,
                      }}
                    >
                      {salvationStatus === "sending" ? t.salvationSendingBtn : t.salvationSubmitBtn}
                    </button>
                  </form>
                </>
              )}

              {salvationStep === "success" && (
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "rgba(244,185,66,0.16)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "20px auto 16px",
                    }}
                  >
                    <Sparkles size={28} color={COLORS.dawn} />
                  </div>
                  <div className="display" style={{ fontSize: 20, fontWeight: 700 }}>{t.salvationSuccessTitle}</div>
                  <p style={{ fontSize: 13.5, color: COLORS.mist, marginTop: 8, lineHeight: 1.55 }}>{t.salvationSuccessBody}</p>

                  <div style={{ textAlign: "left", marginTop: 24 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.dawn }}>{t.salvationNextStepsTitle}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
                      {t.salvationNextSteps.map((step, i) => (
                        <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <Check size={15} color={COLORS.dawn} style={{ marginTop: 2, flexShrink: 0 }} />
                          <span style={{ fontSize: 13, color: COLORS.light, lineHeight: 1.5 }}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === "more" && moreView === "victorious" && (
            <div key={lang + "-victorious"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.victoriousLifeTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.victoriousLifeIntro}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
                {t.victoriousTeachings.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: COLORS.ink,
                      borderRadius: 14,
                      padding: 16,
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: COLORS.dawn }}>{item.title}</div>
                    <p style={{ fontSize: 13.5, color: COLORS.mist, marginTop: 6, lineHeight: 1.55 }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "more" && moreView === "testimony" && (
            <div key={lang + "-testimony"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 22, fontWeight: 600 }}>
                {t.testimonyTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.testimonySubtitle}</p>

              {testimonyStatus === "success" ? (
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
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{t.testimonySuccessTitle}</div>
                  <p style={{ fontSize: 13.5, color: COLORS.mist, marginTop: 8, lineHeight: 1.5 }}>{t.testimonySuccessBody}</p>
                  <button
                    onClick={() => {
                      setTestimonyStatus("idle");
                      setTestimonyName("");
                      setTestimonyText("");
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
                    {t.testimonySuccessNew}
                  </button>
                </div>
              ) : (
                <form onSubmit={submitTestimony} style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.mist, display: "block", marginBottom: 6 }}>
                      {t.testimonyNameLabel}
                    </label>
                    <input
                      type="text"
                      value={testimonyName}
                      onChange={(e) => setTestimonyName(e.target.value)}
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
                      {t.testimonyTextLabel}
                    </label>
                    <textarea
                      value={testimonyText}
                      onChange={(e) => setTestimonyText(e.target.value)}
                      placeholder={t.testimonyTextPlaceholder}
                      required
                      rows={7}
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

                  {testimonyStatus === "error" && (
                    <div style={{ fontSize: 12.5, color: COLORS.ember }}>{t.testimonyErrorBody}</div>
                  )}

                  <button
                    type="submit"
                    disabled={testimonyStatus === "sending"}
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
                      cursor: testimonyStatus === "sending" ? "default" : "pointer",
                      opacity: testimonyStatus === "sending" ? 0.7 : 1,
                    }}
                  >
                    <Megaphone size={16} />
                    {testimonyStatus === "sending" ? t.testimonySendingBtn : t.testimonySubmitBtn}
                  </button>
                </form>
              )}
            </div>
          )}

          {tab === "more" && moreView === "heroes" && (
            <div key={lang + "-heroes"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
              <div className="display" style={{ fontSize: 24, fontWeight: 600 }}>
                {t.heroesTitle}
              </div>
              <p style={{ fontSize: 13, color: COLORS.mist, marginTop: 6, lineHeight: 1.5 }}>{t.heroesIntro}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
                {t.heroes.map((h, i) => (
                  <div
                    key={h.name}
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
                          flexShrink: 0,
                        }}
                      >
                        <Award size={18} color={COLORS.dawn} />
                      </div>
                      <div>
                        <div style={{ fontSize: 15.5, fontWeight: 700 }}>{h.name}</div>
                        <div style={{ fontSize: 11.5, color: COLORS.mist, marginTop: 1 }}>
                          {h.years} · {h.role}
                        </div>
                      </div>
                    </div>
                    <p style={{ fontSize: 13.5, color: COLORS.mist, marginTop: 10, lineHeight: 1.55 }}>{h.bio}</p>
                    <div
                      style={{
                        marginTop: 12,
                        paddingTop: 10,
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.ember, textTransform: "uppercase", letterSpacing: 0.6 }}>
                        {t.heroesLessonLabel}
                      </div>
                      <p style={{ fontSize: 13, color: COLORS.light, marginTop: 6, lineHeight: 1.55 }}>{h.lesson}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "more" && moreView === "pillars" && (
            <div key={lang + "-pillars"} className="fade-up" style={{ padding: "20px 20px 24px" }}>
              <button
                onClick={() => setMoreView(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "none",
                  border: "none",
                  color: COLORS.mist,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 16,
                }}
              >
                <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
                {t.backLabel}
              </button>
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
                        <div>
                          <div style={{ fontSize: 15.5, fontWeight: 700 }}>{p.title}</div>
                          {p.subtitle && (
                            <div style={{ fontSize: 11.5, color: COLORS.dawn, marginTop: 1, fontWeight: 600 }}>{p.subtitle}</div>
                          )}
                        </div>
                      </div>
                      <p style={{ fontSize: 13.5, color: COLORS.mist, marginTop: 10, lineHeight: 1.55 }}>{p.body}</p>
                      {p.verseRef && (
                        <div
                          style={{
                            marginTop: 12,
                            paddingTop: 10,
                            borderTop: "1px solid rgba(255,255,255,0.08)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: COLORS.ember,
                              background: "rgba(232,98,44,0.14)",
                              padding: "3px 9px",
                              borderRadius: 999,
                            }}
                          >
                            {p.tagline}
                          </span>
                          <span style={{ fontSize: 11.5, color: COLORS.mist }}>{p.verseRef}</span>
                        </div>
                      )}
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
        {radioPlaying && !(tab === "media" && mediaView === "radio") && (
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
            onClick={() => {
              setTab("media");
              setMediaView("radio");
            }}
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
        <nav
          aria-label={t.navMore}
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
            {
              key: "media",
              label: t.navMedia,
              Icon: Video,
              onSelect: () => {
                setTab("media");
              },
            },
            { key: "prayer", label: t.navPrayer, Icon: HandHeart },
            { key: "devotion", label: t.navDevotion, Icon: BookOpen },
            {
              key: "more",
              label: t.navMore,
              Icon: Compass,
              onSelect: () => {
                setTab("more");
                setMoreView(null);
              },
            },
          ].map(({ key, label, Icon, onSelect }) => (
            <button
              key={key}
              onClick={() => (onSelect ? onSelect() : setTab(key))}
              className="tab-btn"
              style={{
                flex: 1,
                minHeight: 44,
                background: "none",
                border: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                padding: "8px 0",
                cursor: "pointer",
                color: tab === key ? COLORS.dawn : COLORS.mist,
              }}
            >
              <Icon size={18} />
              <span style={{ fontSize: 9, fontWeight: 600, whiteSpace: "nowrap" }}>{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
