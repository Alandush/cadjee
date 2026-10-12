/* Petit serveur pour consulter le site en local :  node outils/serveur-local.js
   Le site fonctionne aussi en ouvrant directement index.html. */

const http = require("http");
const fs = require("fs");
const path = require("path");

const racine = path.resolve(__dirname, "..");
const port = Number(process.env.PORT) || 5173;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

http.createServer((req, res) => {
  let chemin = decodeURIComponent(req.url.split("?")[0]);
  if (chemin.endsWith("/")) chemin += "index.html";

  const fichier = path.join(racine, chemin);
  if (!fichier.startsWith(racine)) {
    res.writeHead(403).end();
    return;
  }

  fs.readFile(fichier, (erreur, contenu) => {
    if (erreur) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Page introuvable");
      return;
    }
    res.writeHead(200, {
      "Content-Type": types[path.extname(fichier).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store"
    }).end(contenu);
  });
}).listen(port, () => {
  console.log("Site disponible sur http://localhost:" + port);
});
