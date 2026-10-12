/* ==========================================================================
   Éléments communs à toutes les pages : en-tête, pied de page, coordonnées.
   Les contenus viennent de js/config.js.
   ========================================================================== */

(function () {
  var S = window.SITE;
  var I = window.ICONES;

  var NAV = [
    { id: "accueil", nom: "Accueil", href: "index.html" },
    { id: "produits", nom: "Produits", href: "produits.html" },
    { id: "demarches", nom: "Démarches", href: "demarches.html" },
    { id: "magasin", nom: "Le magasin", href: "contact.html" }
  ];

  var adresseLigne = S.adresse.rue + ", " + S.adresse.codePostal + " " + S.adresse.ville;
  var lienItineraire = "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(S.nom + ", " + adresseLigne + ", " + S.adresse.region);

  function lienRayon(id) {
    return "produits.html?rayon=" + id;
  }

  function marque() {
    return '<a class="marque" href="index.html" aria-label="' + S.nom + ' – accueil">' +
      '<span class="marque__logo">' + I.logo + "</span>" +
      '<span class="marque__texte">' +
        '<span class="marque__nom">' + S.nom + "</span>" +
        '<span class="marque__sous">' + S.enseigne + " <i>·</i> " + S.baseline.join(" <i>·</i> ") + "</span>" +
      "</span></a>";
  }

  /* ---------- En-tête ---------- */

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      var page = this.getAttribute("page");

      var liens = NAV.map(function (n) {
        var courant = n.id === page ? ' aria-current="page"' : "";
        return '<li><a href="' + n.href + '"' + courant + ">" + n.nom + "</a></li>";
      }).join("");

      var rayons = S.rayons.map(function (r) {
        return '<li><a href="' + lienRayon(r.id) + '">' + r.nom + "</a></li>";
      }).join("");

      this.innerHTML =
        '<a class="evitement" href="#contenu">Aller au contenu</a>' +
        (S.maquette ? '<p class="maquette">' + S.maquette + "</p>" : "") +
        '<div class="bandeau"><div class="wrap bandeau__in">' +
          '<span class="bandeau__adresse">' + adresseLigne + ", " + S.adresse.region + "</span>" +
          "<span>" + S.horairesCourt + "</span>" +
        "</div></div>" +
        '<header class="entete"><div class="wrap entete__in">' +
          marque() +
          '<button class="menu-bouton" type="button" aria-expanded="false" aria-controls="menu">' +
            '<span class="menu-bouton__traits" aria-hidden="true"></span>Menu' +
          "</button>" +
          '<nav class="menu" id="menu" aria-label="Navigation principale">' +
            '<ul class="menu__liens">' + liens + "</ul>" +
            '<a class="btn btn--accent" href="tel:' + S.telephoneLien + '">' + I.telephone + S.telephone + "</a>" +
          "</nav>" +
        "</div></header>" +
        '<nav class="rayons-barre" aria-label="Rayons"><div class="wrap"><ul>' + rayons + "</ul></div></nav>";

      var bouton = this.querySelector(".menu-bouton");
      var menu = this.querySelector(".menu");
      bouton.addEventListener("click", function () {
        var ouvert = menu.classList.toggle("est-ouvert");
        bouton.setAttribute("aria-expanded", String(ouvert));
      });
    }
  }

  /* ---------- Pied de page ---------- */

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      var rayons = S.rayons.map(function (r) {
        return '<li><a href="' + lienRayon(r.id) + '">' + r.nom + "</a></li>";
      }).join("");

      var horaires = S.horaires.map(function (h) {
        return "<li>" + h.jours + " : " + h.heures + "</li>";
      }).join("");

      this.innerHTML =
        '<footer class="pied"><div class="wrap">' +
          '<div class="pied__grille">' +
            '<div class="pied__marque">' + marque() +
              "<p>Armurerie du réseau " + S.enseigne + ", au centre de " + S.adresse.ville + ". " +
              "Armes de chasse et de tir, munitions, optique, coutellerie et équipement.</p>" +
            "</div>" +
            '<div><h2>Rayons</h2><ul class="pied__rayons">' + rayons + "</ul></div>" +
            "<div><h2>Informations</h2><ul>" +
              '<li><a href="demarches.html">Acheter une arme : les démarches</a></li>' +
              '<li><a href="contact.html">Le magasin et l’accès</a></li>' +
              '<li><a href="mentions-legales.html">Mentions légales</a></li>' +
              '<li><a href="' + S.facebook + '" rel="noopener">Page Facebook</a></li>' +
            "</ul></div>" +
            "<div><h2>Contact</h2><ul>" +
              "<li>" + S.adresse.rue + "<br>" + S.adresse.codePostal + " " + S.adresse.ville + ", " + S.adresse.region + "</li>" +
              '<li><a href="tel:' + S.telephoneLien + '">' + S.telephone + "</a></li>" +
              '<li><a href="mailto:' + S.email + '">' + S.email + "</a></li>" +
              horaires +
            "</ul></div>" +
          "</div>" +
          '<div class="pied__bas">' +
            "<p>La vente d’armes et de munitions est réservée aux personnes majeures et soumise à la réglementation en vigueur. " +
            "Site de présentation : aucune vente en ligne.</p>" +
            "<p>© " + new Date().getFullYear() + " " + S.nom + "</p>" +
          "</div>" +
        "</div></footer>";
    }
  }

  /* ---------- Coordonnées (accueil et page magasin) ---------- */

  class SiteInfos extends HTMLElement {
    connectedCallback() {
      var horaires = S.horaires.map(function (h) {
        return "<li><span>" + h.jours + "</span><span>" + h.heures + "</span></li>";
      }).join("");

      this.innerHTML =
        '<dl class="infos">' +
          "<div><dt>Adresse</dt><dd>" + S.adresse.rue + "<br>" + S.adresse.complement + "<br>" +
            S.adresse.codePostal + " " + S.adresse.ville + ", " + S.adresse.region + "</dd></div>" +
          '<div><dt>Téléphone</dt><dd><a href="tel:' + S.telephoneLien + '">' + S.telephone + "</a></dd></div>" +
          '<div><dt>E-mail</dt><dd><a href="mailto:' + S.email + '">' + S.email + "</a></dd></div>" +
          '<div><dt>Horaires</dt><dd><ul class="horaires">' + horaires + "</ul></dd></div>" +
        "</dl>";
    }
  }

  class SiteCarte extends HTMLElement {
    connectedCallback() {
      var lat = S.gps.lat, lon = S.gps.lon;
      var bbox = [lon - 0.0045, lat - 0.0026, lon + 0.0045, lat + 0.0026].join(",");
      this.innerHTML =
        '<div class="carte">' +
          '<iframe title="Plan d’accès : ' + adresseLigne + '" loading="lazy" ' +
            'src="https://www.openstreetmap.org/export/embed.html?bbox=' + encodeURIComponent(bbox) +
            "&layer=mapnik&marker=" + lat + "," + lon + '"></iframe>' +
        "</div>";
    }
  }

  customElements.define("site-header", SiteHeader);
  customElements.define("site-footer", SiteFooter);
  customElements.define("site-infos", SiteInfos);
  customElements.define("site-carte", SiteCarte);

  /* ---------- Liens téléphone / e-mail / itinéraire dans les pages ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-site]").forEach(function (el) {
      var type = el.getAttribute("data-site");
      if (type === "tel") {
        el.href = "tel:" + S.telephoneLien;
        if (!el.textContent.trim()) el.textContent = S.telephone;
      } else if (type === "email") {
        el.href = "mailto:" + S.email;
        if (!el.textContent.trim()) el.textContent = S.email;
      } else if (type === "itineraire") {
        el.href = lienItineraire;
      }
    });

    /* Données structurées pour les moteurs de recherche */
    var donnees = {
      "@context": "https://schema.org",
      "@type": "Store",
      name: S.nom,
      telephone: S.telephoneLien,
      email: S.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: S.adresse.rue,
        postalCode: S.adresse.codePostal,
        addressLocality: S.adresse.ville,
        addressRegion: S.adresse.region,
        addressCountry: "FR"
      },
      geo: { "@type": "GeoCoordinates", latitude: S.gps.lat, longitude: S.gps.lon },
      openingHoursSpecification: S.horairesDonnees.plages.map(function (p) {
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: S.horairesDonnees.jours,
          opens: p[0],
          closes: p[1]
        };
      }),
      sameAs: [S.facebook]
    };
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(donnees);
    document.head.appendChild(script);
  });
})();
