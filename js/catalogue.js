/* ==========================================================================
   Affichage des rayons, des univers et des produits.
   Les produits viennent de js/produits-data.js.
   ========================================================================== */

(function () {
  var S = window.SITE;
  var I = window.ICONES;
  var PRODUITS = window.PRODUITS || [];

  var ICONE_UNIVERS = { chasse: I.chasse, tir: I.cible, nature: I.nature };

  var MENTIONS = {
    B: "Catégorie B : produit soumis à autorisation préfectorale. Vente en magasin sur présentation de l’autorisation en cours de validité et d’une pièce d’identité.",
    C: "Catégorie C : produit soumis à déclaration. Vente en magasin sur présentation d’une pièce d’identité et d’un permis de chasser validé ou d’une licence de tir en cours de validité.",
    D: "Catégorie D : vente libre, réservée aux personnes majeures, sur présentation d’une pièce d’identité."
  };

  function esc(texte) {
    return String(texte == null ? "" : texte).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function sansAccent(texte) {
    return String(texte || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function rayon(id) {
    return S.rayons.find(function (r) { return r.id === id; });
  }

  function produit(id) {
    return PRODUITS.find(function (p) { return p.id === id; });
  }

  /* ---------- Briques d'affichage ---------- */

  function visuel(p) {
    if (p.image) {
      return '<img src="' + esc(p.image) + '" alt="' + esc((p.marque ? p.marque + " " : "") + p.nom) + '" loading="lazy">';
    }
    return I[p.rayon] || "";
  }

  function carteProduit(p, lien) {
    var meta = [p.type, p.calibre].filter(Boolean).join(" · ");
    return '<li><a class="produit" href="' + lien + "#p=" + esc(p.id) + '">' +
      '<div class="produit__visuel' + (p.image ? " produit__visuel--photo" : "") + '">' + visuel(p) +
        (p.etiquette ? '<span class="produit__etiquette">' + esc(p.etiquette) + "</span>" : "") +
      "</div>" +
      '<div class="produit__corps">' +
        (p.marque ? '<span class="produit__marque">' + esc(p.marque) + "</span>" : "") +
        '<span class="produit__nom">' + esc(p.nom) + "</span>" +
        '<span class="produit__meta">' + esc(meta) + "</span>" +
        '<span class="produit__pied">' +
          (p.classement ? '<span class="classement">Catégorie ' + esc(p.classement) + "</span>" : "<span></span>") +
          '<span class="produit__voir">Voir la fiche' + I.fleche + "</span>" +
        "</span>" +
      "</div></a></li>";
  }

  /* ---------- Accueil : univers, rayons, sélection ---------- */

  document.querySelectorAll("[data-univers]").forEach(function (el) {
    el.innerHTML = S.univers.map(function (u) {
      return '<li><a href="produits.html?univers=' + u.id + '">' +
        '<span class="univers__icone cadre">' + ICONE_UNIVERS[u.id] + "</span>" +
        "<span>" +
          '<span class="univers__nom">' + esc(u.nom) + "</span>" +
          '<span class="univers__texte">' + esc(u.resume) + "</span>" +
        "</span></a></li>";
    }).join("");
  });

  document.querySelectorAll("[data-rayons]").forEach(function (el) {
    el.innerHTML = S.rayons.map(function (r) {
      return '<li><a class="rayon" href="produits.html?rayon=' + r.id + '">' +
        '<span class="rayon__icone">' + I[r.id] + "</span>" +
        "<span>" +
          '<span class="rayon__nom">' + esc(r.nom) + "</span>" +
          '<span class="rayon__texte">' + esc(r.resume) + "</span>" +
        "</span></a></li>";
    }).join("");
  });

  document.querySelectorAll('[data-produits="vedette"]').forEach(function (el) {
    el.innerHTML = PRODUITS
      .filter(function (p) { return p.vedette; })
      .map(function (p) { return carteProduit(p, "produits.html"); })
      .join("");
  });

  /* ---------- Page catalogue ---------- */

  var liste = document.getElementById("liste-produits");
  if (!liste) return;

  var elRayons = document.getElementById("filtre-rayons");
  var elUnivers = document.getElementById("filtre-univers");
  var elClassement = document.getElementById("filtre-classement");
  var elRecherche = document.getElementById("recherche");
  var elCompteur = document.getElementById("compteur");
  var elTitre = document.getElementById("rayon-titre");
  var elVide = document.getElementById("aucun-produit");
  var fiche = document.getElementById("fiche");

  var params = new URLSearchParams(location.search);
  var etat = {
    rayon: rayon(params.get("rayon")) ? params.get("rayon") : "",
    univers: ICONE_UNIVERS[params.get("univers")] ? params.get("univers") : "",
    classement: "",
    recherche: ""
  };

  elRayons.innerHTML =
    '<button type="button" class="puce" data-rayon="">Tous les rayons</button>' +
    S.rayons.map(function (r) {
      return '<button type="button" class="puce" data-rayon="' + r.id + '">' + esc(r.nom) + "</button>";
    }).join("");

  elUnivers.innerHTML = '<option value="">Tous les univers</option>' +
    S.univers.map(function (u) { return '<option value="' + u.id + '">' + esc(u.nom) + "</option>"; }).join("");
  elUnivers.value = etat.univers;

  function correspond(p) {
    if (etat.rayon && p.rayon !== etat.rayon) return false;
    if (etat.univers && (p.univers || []).indexOf(etat.univers) === -1) return false;
    if (etat.classement === "libre" && p.classement) return false;
    if (etat.classement && etat.classement !== "libre" && p.classement !== etat.classement) return false;
    if (etat.recherche) {
      var texte = sansAccent([p.nom, p.marque, p.type, p.calibre, p.description].join(" "));
      var mots = sansAccent(etat.recherche).split(/\s+/).filter(Boolean);
      for (var i = 0; i < mots.length; i++) {
        if (texte.indexOf(mots[i]) === -1) return false;
      }
    }
    return true;
  }

  function majAdresse() {
    var q = new URLSearchParams();
    if (etat.rayon) q.set("rayon", etat.rayon);
    if (etat.univers) q.set("univers", etat.univers);
    var suite = q.toString();
    try {
      history.replaceState(null, "", location.pathname + (suite ? "?" + suite : "") + location.hash);
    } catch (e) { /* ouverture directe du fichier : sans importance */ }
  }

  function afficher() {
    var resultats = PRODUITS.filter(correspond);
    var r = rayon(etat.rayon);

    elRayons.querySelectorAll(".puce").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-rayon") === etat.rayon));
    });

    elTitre.innerHTML = r
      ? "<h2>" + esc(r.nom) + "</h2><p>" + esc(r.resume) + "</p>"
      : "<h2>Tous les produits</h2><p>Une sélection des références présentées en magasin. Pour toute autre demande, contactez-nous.</p>";

    elCompteur.textContent = resultats.length === 0 ? "Aucun produit"
      : resultats.length + (resultats.length > 1 ? " produits" : " produit");

    liste.innerHTML = resultats.map(function (p) { return carteProduit(p, ""); }).join("");
    elVide.hidden = resultats.length > 0;
  }

  elRayons.addEventListener("click", function (e) {
    var bouton = e.target.closest(".puce");
    if (!bouton) return;
    etat.rayon = bouton.getAttribute("data-rayon");
    majAdresse();
    afficher();
  });
  elUnivers.addEventListener("change", function () { etat.univers = elUnivers.value; majAdresse(); afficher(); });
  elClassement.addEventListener("change", function () { etat.classement = elClassement.value; afficher(); });
  elRecherche.addEventListener("input", function () { etat.recherche = elRecherche.value; afficher(); });

  var reinit = document.getElementById("reinitialiser");
  if (reinit) {
    reinit.addEventListener("click", function () {
      etat = { rayon: "", univers: "", classement: "", recherche: "" };
      elUnivers.value = "";
      elClassement.value = "";
      elRecherche.value = "";
      majAdresse();
      afficher();
    });
  }

  /* ---------- Fiche produit ---------- */

  function ouvrirFiche(p) {
    var r = rayon(p.rayon);
    var titre = (p.marque ? p.marque + " " : "") + p.nom;
    var specs = (p.caracteristiques || []).map(function (c) {
      return "<div><dt>" + esc(c[0]) + "</dt><dd>" + esc(c[1]) + "</dd></div>";
    }).join("");
    var sujet = encodeURIComponent("Demande de disponibilité – " + titre);

    fiche.innerHTML =
      '<div class="fiche__in">' +
        '<button type="button" class="fiche__fermer" aria-label="Fermer la fiche">' +
          '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/></svg>' +
        "</button>" +
        '<div class="fiche__visuel' + (p.image ? " fiche__visuel--photo" : "") + '">' + visuel(p) + "</div>" +
        '<div class="fiche__corps">' +
          '<p class="fiche__rayon">' + esc([r ? r.nom : "", p.type].filter(Boolean).join(" · ")) + "</p>" +
          '<h2 class="fiche__nom" id="fiche-titre">' + esc(titre) + "</h2>" +
          '<p class="fiche__desc">' + esc(p.description) + "</p>" +
          (specs ? '<dl class="specs">' + specs + "</dl>" : "") +
          '<p class="fiche__prix">' + (p.prix ? esc(p.prix) + " <span>– disponibilité à confirmer en magasin</span>" : "Prix et disponibilité en magasin") + "</p>" +
          (p.classement ? '<p class="note">' + MENTIONS[p.classement] +
            ' <a href="demarches.html#categorie-' + p.classement.toLowerCase() + '">Voir les démarches</a></p>' : "") +
          '<div class="actions">' +
            '<a class="btn btn--sombre" href="tel:' + S.telephoneLien + '">' + I.telephone + "Appeler le magasin</a>" +
            '<a class="btn btn--trait" href="mailto:' + S.email + "?subject=" + sujet + '">Envoyer un e-mail</a>' +
          "</div>" +
        "</div>" +
      "</div>";

    fiche.setAttribute("aria-labelledby", "fiche-titre");
    if (!fiche.open) fiche.showModal();
    fiche.scrollTop = 0;
  }

  function lireAncre() {
    var m = /^#p=(.+)$/.exec(location.hash);
    var p = m && produit(decodeURIComponent(m[1]));
    if (p) ouvrirFiche(p);
    else if (fiche.open) fiche.close();
  }

  fiche.addEventListener("click", function (e) {
    if (e.target === fiche || e.target.closest(".fiche__fermer")) fiche.close();
  });
  fiche.addEventListener("close", function () {
    if (!/^#p=/.test(location.hash)) return;
    try {
      history.replaceState(null, "", location.pathname + location.search);
    } catch (e) {
      location.hash = "";
    }
  });
  window.addEventListener("hashchange", lireAncre);

  afficher();
  lireAncre();
})();
