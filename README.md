# Centre Lumière du Grand Réveil — App

## Contenu du projet
- `src/App.jsx` — toute l'application (écrans, contenu, styles)
- /src/main.jsx` — point d'entrée technique (ne pas modifier)
- `index.html` — page HTML (titre, couleur de la barre du navigateur)
- `package.json` — liste des dépendances

## Avant de déployer : personnaliser le contenu
Ouvrez `src/App.jsx` et modifiez :
- L'objet `MEDIA` (en haut du fichier) : vos vrais liens YouTube, Facebook, flux radio
- L'objet `CONTENT` : vos textes réels (mission, piliers, dévotions) en français, anglais, créole

## Déploiement (gratuit) sur Vercel
1. Créez un compte sur vercel.com (gratuit)
2. Créez un dépôt sur GitHub et déposez-y ce dossier
3. Sur Vercel, cliquez "Add New Project", sélectionnez le dépôt
4. Vercel détecte Vite automatiquement — cliquez "Deploy"
5. Votre app est en ligne en 1-2 minutes, avec une URL du type `votre-projet.vercel.app`

## Déploiement (gratuit) sur Netlify — alternative
1. Créez un compte sur netlify.com
2. Glissez-déposez le dossier `dist` (après avoir lancé `npm run build`) sur Netlify Drop
   OU connectez votre dépôt GitHub pour un déploiement automatique

## Tester en local avant de déployer
```
npm install
npm run dev
```
Puis ouvrez l'adresse affichée dans le terminal (généralement http://localhost:5173)
