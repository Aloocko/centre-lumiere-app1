import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Enregistrement du service worker pour un fonctionnement hors-ligne de base
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/publique/sw.js").catch(() => {});
  });
}
