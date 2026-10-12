/* ==========================================================================
   Informations du magasin
   Tout ce qui est modifié ici est repris partout sur le site
   (en-tête, pied de page, page contact, données pour Google).
   ========================================================================== */

window.SITE = {
  nom: "Armurerie Cadjee",
  enseigne: "Pisteurs",
  baseline: ["Chasse", "Tir", "Nature"],

  /* Bandeau affiché tout en haut tant que le site est une maquette.
     Mettre "" pour le retirer. */
  maquette: "Maquette – contenus et produits d’exemple, non contractuels",

  adresse: {
    rue: "122 bis rue du Maréchal Leclerc",
    complement: "B.P. 174",
    codePostal: "97400",
    ville: "Saint-Denis",
    region: "La Réunion"
  },
  gps: { lat: -20.879163, lon: 55.454519 },

  telephone: "02 62 30 46 78",
  telephoneLien: "+262262304678",
  email: "armureriecadjee@yahoo.fr",
  facebook: "https://www.facebook.com/p/Armurerie-Cadjee-61560253376351/",

  /* Horaires affichés */
  horaires: [
    { jours: "Lundi – samedi", heures: "7h30 – 12h · 14h – 18h" },
    { jours: "Dimanche", heures: "Fermé" }
  ],
  horairesCourt: "Lun – sam · 7h30 – 12h / 14h – 18h",

  /* Mêmes horaires, au format lu par les moteurs de recherche */
  horairesDonnees: {
    jours: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    plages: [["07:30", "12:00"], ["14:00", "18:00"]]
  },

  /* Les trois univers de l'enseigne */
  univers: [
    { id: "chasse", nom: "Chasse", resume: "Fusils, carabines, munitions et équipement du chasseur." },
    { id: "tir", nom: "Tir", resume: "Tir sportif et de loisir : armes, optiques, cibles et protections." },
    { id: "nature", nom: "Nature", resume: "Coutellerie, optique d’observation, éclairage et vêtements." }
  ],

  /* Les rayons, dans l'ordre de l'enseigne */
  rayons: [
    { id: "armes", nom: "Armes", resume: "Fusils et carabines de chasse, armes de poing et carabines de tir sportif." },
    { id: "tir", nom: "Tir", resume: "Air comprimé, CO₂, airsoft, cibles et matériel de stand." },
    { id: "defense", nom: "Défense", resume: "Aérosols et moyens de défense de catégorie D." },
    { id: "munitions", nom: "Munitions", resume: "Cartouches de chasse, munitions métalliques, plombs et billes." },
    { id: "optique", nom: "Optique", resume: "Lunettes de tir, points rouges, jumelles et montages." },
    { id: "coutellerie", nom: "Coutellerie", resume: "Couteaux pliants, couteaux de chasse et outils multifonctions." },
    { id: "accessoires", nom: "Accessoires", resume: "Entretien, housses et mallettes, éclairage, protections auditives." },
    { id: "securite", nom: "Sécurité", resume: "Coffres et armoires fortes, verrous de pontet, câbles." },
    { id: "habillement", nom: "Habillement", resume: "Vestes, pantalons, chaussures et casquettes pour la chasse et la nature." }
  ]
};

/* ==========================================================================
   Pictogrammes (tracé au trait, grille 48 × 48)
   ========================================================================== */

window.ICONES = (function () {
  function svg(contenu) {
    return '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + contenu + "</svg>";
  }

  return {
    /* Rayons */
    armes: svg('<path d="M4 20h26l5-1 9 3v8l-10-4-3 1h-5l-2-4H13v-3"/><path d="M27 27c0 3 4 3 4 0M20 16h10M22 16v4M28 16v4"/>'),
    tir: svg('<circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="11"/><circle cx="24" cy="24" r="4"/>'),
    defense: svg('<path d="M24 5l15 5v11c0 10-6 17-15 22-9-5-15-12-15-22V10z"/><path d="M24 15v18"/>'),
    munitions: svg('<path d="M9 41V22c0-6 2-11 4-14 2 3 4 8 4 14v19zM9 26h8M20 41V22c0-6 2-11 4-14 2 3 4 8 4 14v19zM20 26h8M31 41V22c0-6 2-11 4-14 2 3 4 8 4 14v19zM31 26h8"/>'),
    optique: svg('<path d="M3 17h9l4 3h6v-5h4v5h6l4-3h9v13h-9l-4-3H16l-4 3H3z"/><path d="M19 27v6M29 27v6"/>'),
    coutellerie: svg('<g transform="rotate(-35 24 24)"><path d="M3 20c9 6 17 8 25 8v-8z"/><path d="M28 17v14M28 20h14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H28"/></g>'),
    accessoires: svg('<rect x="5" y="15" width="38" height="24" rx="2"/><path d="M17 15v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M5 26h38M15 23v6M33 23v6"/>'),
    securite: svg('<rect x="8" y="6" width="32" height="34" rx="2"/><circle cx="24" cy="23" r="7"/><path d="M24 16v3M24 27v3M17 23h3M28 23h3M13 40v3M35 40v3"/>'),
    habillement: svg('<path d="M18 6L7 12v13h6v17h22V25h6V12L30 6c-1 3-3 5-6 5s-5-2-6-5z"/><path d="M24 11v31M17 33h3M28 33h3"/>'),

    /* Univers */
    chasse: svg('<path d="M19 29l5 14 5-14-5-2zM19 29l-6-2M29 29l6-2"/><path d="M22 27c-1-6-8-7-11-15M15 20c-3 0-6-1-8-4M18 22.5c0-5 1-9 3-13M26 27c1-6 8-7 11-15M33 20c3 0 6-1 8-4M30 22.5c0-5-1-9-3-13"/>'),
    cible: svg('<circle cx="24" cy="24" r="15"/><path d="M24 3v12M24 33v12M3 24h12M33 24h12"/><circle cx="24" cy="24" r="1.5" fill="currentColor" stroke="none"/>'),
    nature: svg('<circle cx="24" cy="18" r="13"/><path d="M24 44V22M24 33l6-6M24 28l-5-5M15 44h18"/>'),

    /* Interface */
    fleche: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',
    telephone: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 2.5h2.5l1 3-1.5 1a7 7 0 0 0 4.5 4.5l1-1.5 3 1V13a1.5 1.5 0 0 1-1.5 1.5C6.5 14.5 1.5 9.5 1.5 4A1.5 1.5 0 0 1 3 2.5z"/></svg>',
    logo: '<svg viewBox="0 0 32 32" fill="none" stroke-width="2" stroke-linecap="square" aria-hidden="true" focusable="false"><path d="M21 3h8v8M11 29H3v-8" stroke="#f0602b"/><circle cx="16" cy="16" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M16 7v5M16 20v5M7 16h5M20 16h5" stroke="currentColor" stroke-width="1.5"/></svg>'
  };
})();
