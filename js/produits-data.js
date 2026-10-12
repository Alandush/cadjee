/* ==========================================================================
   Catalogue des produits
   --------------------------------------------------------------------------
   ATTENTION : hormis le CZ Scorpion EVO 3 (annoncé en arrivage sur la page
   Facebook du magasin), les fiches ci-dessous sont des EXEMPLES de
   démonstration. Elles sont à remplacer par le stock réel du magasin.

   Pour ajouter un produit, copier un bloc { ... } et modifier les champs :

     id               identifiant unique, sans espace ni accent
     nom, marque      marque peut rester vide ("")
     rayon            armes | tir | defense | munitions | optique |
                      coutellerie | accessoires | securite | habillement
     type             ex. "Carabine à verrou"
     univers          un ou plusieurs parmi "chasse", "tir", "nature"
     classement       "B", "C", "D" ou null (produit non classé)
     calibre          facultatif
     description      une ou deux phrases, factuelles
     caracteristiques liste de [libellé, valeur]
     etiquette        facultatif : "Arrivage", "Nouveauté"...
     vedette          true pour l'afficher sur la page d'accueil
     image            facultatif : chemin d'une photo,
                      ex. "assets/produits/tikka-t3x.jpg"
                      (sans photo, le pictogramme du rayon est affiché)
     prix             facultatif : ex. "1 290 €"
   ========================================================================== */

window.PRODUITS = [

  /* ------------------------------ Armes ------------------------------ */
  {
    id: "cz-scorpion-evo-3",
    nom: "Scorpion EVO 3 S1 avec compensateur",
    marque: "CZ",
    rayon: "armes",
    type: "Carabine semi-automatique",
    univers: ["tir"],
    classement: "B",
    calibre: "9 × 19 mm",
    description: "Carabine semi-automatique en 9 × 19 mm, livrée avec compensateur. Plateforme compacte pour le tir sportif.",
    caracteristiques: [
      ["Calibre", "9 × 19 mm"],
      ["Fonctionnement", "Semi-automatique"],
      ["Bouche", "Compensateur"],
      ["Carcasse", "Polymère"]
    ],
    etiquette: "Arrivage",
    vedette: true,
    image: ""
  },
  {
    id: "browning-b525-sporter",
    nom: "B525 Sporter 1",
    marque: "Browning",
    rayon: "armes",
    type: "Fusil superposé",
    univers: ["chasse", "tir"],
    classement: "C",
    calibre: "12/76",
    description: "Fusil superposé polyvalent pour le ball-trap et la chasse, canons de 76 cm à bande ventilée et chokes interchangeables.",
    caracteristiques: [
      ["Calibre", "12/76"],
      ["Canons", "76 cm, bande ventilée"],
      ["Chokes", "Interchangeables"],
      ["Crosse", "Noyer"]
    ],
    image: ""
  },
  {
    id: "beretta-686-silver-pigeon",
    nom: "686 Silver Pigeon I",
    marque: "Beretta",
    rayon: "armes",
    type: "Fusil superposé",
    univers: ["chasse"],
    classement: "C",
    calibre: "12/76",
    description: "Fusil superposé de chasse à bascule acier, canons de 71 cm et chokes interchangeables.",
    caracteristiques: [
      ["Calibre", "12/76"],
      ["Canons", "71 cm"],
      ["Chokes", "Interchangeables"],
      ["Crosse", "Noyer"]
    ],
    image: ""
  },
  {
    id: "tikka-t3x-lite",
    nom: "T3x Lite",
    marque: "Tikka",
    rayon: "armes",
    type: "Carabine à verrou",
    univers: ["chasse"],
    classement: "C",
    calibre: ".308 Winchester",
    description: "Carabine à verrou légère à crosse synthétique et chargeur amovible, prévue pour recevoir une lunette.",
    caracteristiques: [
      ["Calibre", ".308 Winchester"],
      ["Canon", "57 cm"],
      ["Chargeur", "Amovible, 3 coups"],
      ["Crosse", "Synthétique"]
    ],
    vedette: true,
    image: ""
  },
  {
    id: "cz-457-varmint",
    nom: "457 Varmint",
    marque: "CZ",
    rayon: "armes",
    type: "Carabine à verrou",
    univers: ["tir"],
    classement: "C",
    calibre: ".22 LR",
    description: "Carabine à verrou en .22 LR à canon lourd, adaptée au tir de précision à 50 mètres.",
    caracteristiques: [
      ["Calibre", ".22 LR"],
      ["Canon", "Lourd, 52,5 cm"],
      ["Chargeur", "Amovible, 5 coups"],
      ["Crosse", "Noyer"]
    ],
    image: ""
  },
  {
    id: "glock-17-gen5",
    nom: "17 Gen5",
    marque: "Glock",
    rayon: "armes",
    type: "Pistolet semi-automatique",
    univers: ["tir"],
    classement: "B",
    calibre: "9 × 19 mm",
    description: "Pistolet semi-automatique à carcasse polymère, format standard pour le tir sportif.",
    caracteristiques: [
      ["Calibre", "9 × 19 mm"],
      ["Canon", "114 mm"],
      ["Carcasse", "Polymère"],
      ["Chargeur", "17 coups"]
    ],
    image: ""
  },
  {
    id: "cz-shadow-2",
    nom: "Shadow 2",
    marque: "CZ",
    rayon: "armes",
    type: "Pistolet semi-automatique",
    univers: ["tir"],
    classement: "B",
    calibre: "9 × 19 mm",
    description: "Pistolet de tir sportif à carcasse acier, simple et double action, conçu pour les disciplines de tir sportif de vitesse.",
    caracteristiques: [
      ["Calibre", "9 × 19 mm"],
      ["Canon", "120 mm"],
      ["Carcasse", "Acier"],
      ["Détente", "Simple et double action"]
    ],
    image: ""
  },
  {
    id: "smith-wesson-686",
    nom: "686",
    marque: "Smith & Wesson",
    rayon: "armes",
    type: "Revolver",
    univers: ["tir"],
    classement: "B",
    calibre: ".357 Magnum",
    description: "Revolver en acier inoxydable à barillet 6 coups, simple et double action.",
    caracteristiques: [
      ["Calibre", ".357 Magnum"],
      ["Canon", "4 pouces"],
      ["Barillet", "6 coups"],
      ["Finition", "Acier inoxydable"]
    ],
    image: ""
  },

  /* ------------------------------- Tir ------------------------------- */
  {
    id: "weihrauch-hw30s",
    nom: "HW 30 S",
    marque: "Weihrauch",
    rayon: "tir",
    type: "Carabine à air comprimé",
    univers: ["tir"],
    classement: "D",
    calibre: "4,5 mm",
    description: "Carabine à air comprimé à canon basculant, légère et précise, pour le tir de loisir à 10 mètres.",
    caracteristiques: [
      ["Calibre", "4,5 mm"],
      ["Puissance", "Inférieure à 20 joules"],
      ["Armement", "Canon basculant"],
      ["Crosse", "Hêtre"]
    ],
    image: ""
  },
  {
    id: "replique-airsoft-aeg",
    nom: "Réplique airsoft électrique (AEG)",
    marque: "",
    rayon: "tir",
    type: "Airsoft",
    univers: ["tir"],
    classement: null,
    calibre: "6 mm",
    description: "Réplique électrique d’une puissance inférieure à 2 joules, pour la pratique de l’airsoft. Vente réservée aux personnes majeures.",
    caracteristiques: [
      ["Calibre", "Billes 6 mm"],
      ["Propulsion", "Électrique (AEG)"],
      ["Puissance", "Inférieure à 2 joules"]
    ],
    image: ""
  },
  {
    id: "porte-cible-recuperateur",
    nom: "Porte-cible récupérateur de plombs",
    marque: "",
    rayon: "tir",
    type: "Cible",
    univers: ["tir"],
    classement: null,
    description: "Porte-cible métallique avec récupérateur de plombs, pour cibles carton de 14 × 14 cm.",
    caracteristiques: [
      ["Format", "Cibles 14 × 14 cm"],
      ["Matière", "Acier"],
      ["Usage", "Air comprimé jusqu’à 20 joules"]
    ],
    image: ""
  },

  /* ----------------------------- Défense ----------------------------- */
  {
    id: "aerosol-gel-poivre-50",
    nom: "Aérosol de défense gel poivre 50 ml",
    marque: "",
    rayon: "defense",
    type: "Aérosol de défense",
    univers: [],
    classement: "D",
    description: "Aérosol de défense au gel poivre, format de poche de 50 ml.",
    caracteristiques: [
      ["Contenance", "50 ml"],
      ["Agent actif", "Gel poivre (OC)"]
    ],
    image: ""
  },
  {
    id: "umarex-t4e-hdr50",
    nom: "T4E HDR 50",
    marque: "Umarex",
    rayon: "defense",
    type: "Revolver CO₂",
    univers: [],
    classement: "D",
    calibre: ".50",
    description: "Revolver à CO₂ de calibre .50 à barillet 6 coups, pour projectiles en caoutchouc.",
    caracteristiques: [
      ["Calibre", ".50"],
      ["Puissance", "11 joules"],
      ["Propulsion", "Capsule CO₂ 12 g"],
      ["Barillet", "6 coups"]
    ],
    image: ""
  },

  /* ---------------------------- Munitions ---------------------------- */
  {
    id: "winchester-super-speed-g2",
    nom: "Super Speed G2 – calibre 12",
    marque: "Winchester",
    rayon: "munitions",
    type: "Cartouches de chasse",
    univers: ["chasse"],
    classement: "C",
    calibre: "12/70",
    description: "Cartouches de chasse en calibre 12/70, charge de 36 g. Boîte de 25.",
    caracteristiques: [
      ["Calibre", "12/70"],
      ["Charge", "36 g"],
      ["Conditionnement", "Boîte de 25"]
    ],
    image: ""
  },
  {
    id: "cci-standard-22lr",
    nom: "Standard Velocity .22 LR",
    marque: "CCI",
    rayon: "munitions",
    type: "Munitions à percussion annulaire",
    univers: ["tir"],
    classement: "C",
    calibre: ".22 LR",
    description: "Munitions .22 LR à vitesse standard, balle plomb de 40 grains. Boîte de 50.",
    caracteristiques: [
      ["Calibre", ".22 LR"],
      ["Balle", "Plomb, 40 grains"],
      ["Conditionnement", "Boîte de 50"]
    ],
    image: ""
  },
  {
    id: "geco-9x19-fmj",
    nom: "9 × 19 FMJ 124 grains",
    marque: "Geco",
    rayon: "munitions",
    type: "Munitions d’arme de poing",
    univers: ["tir"],
    classement: "B",
    calibre: "9 × 19 mm",
    description: "Munitions 9 × 19 mm à balle blindée de 124 grains, pour l’entraînement. Boîte de 50.",
    caracteristiques: [
      ["Calibre", "9 × 19 mm"],
      ["Balle", "Blindée (FMJ), 124 grains"],
      ["Conditionnement", "Boîte de 50"]
    ],
    image: ""
  },
  {
    id: "jsb-exact-45",
    nom: "Exact 4,5 mm",
    marque: "JSB",
    rayon: "munitions",
    type: "Plombs",
    univers: ["tir"],
    classement: null,
    calibre: "4,5 mm",
    description: "Plombs à tête ronde pour carabine à air comprimé. Boîte de 500.",
    caracteristiques: [
      ["Calibre", "4,5 mm"],
      ["Forme", "Tête ronde"],
      ["Conditionnement", "Boîte de 500"]
    ],
    image: ""
  },

  /* ----------------------------- Optique ----------------------------- */
  {
    id: "vortex-crossfire-ii-3-9x40",
    nom: "Crossfire II 3-9 × 40",
    marque: "Vortex",
    rayon: "optique",
    type: "Lunette de tir",
    univers: ["chasse", "tir"],
    classement: null,
    description: "Lunette à grossissement variable 3 à 9 fois, objectif de 40 mm. Montage et réglage possibles en magasin.",
    caracteristiques: [
      ["Grossissement", "3 à 9 ×"],
      ["Objectif", "40 mm"],
      ["Tube", "25,4 mm"],
      ["Réticule", "Dead-Hold BDC"]
    ],
    vedette: true,
    image: ""
  },
  {
    id: "holosun-hs403b",
    nom: "HS403B",
    marque: "Holosun",
    rayon: "optique",
    type: "Viseur point rouge",
    univers: ["tir"],
    classement: null,
    description: "Viseur point rouge compact à point de 2 MOA, avec mise en veille et réveil automatiques.",
    caracteristiques: [
      ["Point", "2 MOA"],
      ["Alimentation", "Pile CR2032"],
      ["Montage", "Rail Picatinny"]
    ],
    image: ""
  },
  {
    id: "vortex-diamondback-hd-10x42",
    nom: "Diamondback HD 10 × 42",
    marque: "Vortex",
    rayon: "optique",
    type: "Jumelles",
    univers: ["chasse", "nature"],
    classement: null,
    description: "Jumelles à prismes en toit, étanches, pour l’observation et l’approche.",
    caracteristiques: [
      ["Grossissement", "10 ×"],
      ["Objectif", "42 mm"],
      ["Construction", "Prismes en toit, étanches"]
    ],
    image: ""
  },

  /* --------------------------- Coutellerie --------------------------- */
  {
    id: "opinel-n08-carbone",
    nom: "N°08 Carbone",
    marque: "Opinel",
    rayon: "coutellerie",
    type: "Couteau pliant",
    univers: ["nature"],
    classement: null,
    description: "Couteau pliant à lame en acier carbone de 8,5 cm, manche en hêtre et virole de sécurité.",
    caracteristiques: [
      ["Lame", "8,5 cm, acier carbone"],
      ["Manche", "Hêtre"],
      ["Blocage", "Virole tournante"]
    ],
    vedette: true,
    image: ""
  },
  {
    id: "morakniv-companion",
    nom: "Companion",
    marque: "Morakniv",
    rayon: "coutellerie",
    type: "Couteau à lame fixe",
    univers: ["chasse", "nature"],
    classement: null,
    description: "Couteau à lame fixe en acier inoxydable, livré avec son étui.",
    caracteristiques: [
      ["Lame", "10,4 cm, acier inoxydable"],
      ["Manche", "Antidérapant"],
      ["Étui", "Fourni"]
    ],
    image: ""
  },
  {
    id: "victorinox-huntsman",
    nom: "Huntsman",
    marque: "Victorinox",
    rayon: "coutellerie",
    type: "Couteau suisse",
    univers: ["nature"],
    classement: null,
    description: "Couteau suisse de 91 mm à 15 fonctions, dont deux lames, une scie à bois et des ciseaux.",
    caracteristiques: [
      ["Longueur fermé", "91 mm"],
      ["Fonctions", "15"]
    ],
    image: ""
  },

  /* --------------------------- Accessoires --------------------------- */
  {
    id: "kit-nettoyage-universel",
    nom: "Kit de nettoyage universel",
    marque: "",
    rayon: "accessoires",
    type: "Entretien",
    univers: ["chasse", "tir"],
    classement: null,
    description: "Baguette, écouvillons et embouts pour l’entretien des armes longues et des armes de poing, en mallette.",
    caracteristiques: [
      ["Contenu", "Baguette, écouvillons, embouts"],
      ["Rangement", "Mallette"]
    ],
    image: ""
  },
  {
    id: "housse-arme-longue-130",
    nom: "Housse pour arme longue 130 cm",
    marque: "",
    rayon: "accessoires",
    type: "Transport",
    univers: ["chasse", "tir"],
    classement: null,
    description: "Housse matelassée à fermeture à glissière pour le transport d’un fusil ou d’une carabine.",
    caracteristiques: [
      ["Longueur", "130 cm"],
      ["Fermeture", "Glissière"]
    ],
    image: ""
  },
  {
    id: "peltor-sporttac",
    nom: "Peltor SportTac",
    marque: "3M",
    rayon: "accessoires",
    type: "Protection auditive",
    univers: ["chasse", "tir"],
    classement: null,
    description: "Casque antibruit électronique : atténue les détonations tout en laissant passer les voix.",
    caracteristiques: [
      ["Type", "Casque électronique"],
      ["Alimentation", "2 piles AAA"]
    ],
    image: ""
  },

  /* ----------------------------- Sécurité ---------------------------- */
  {
    id: "armoire-forte-7-armes",
    nom: "Armoire forte 7 armes",
    marque: "",
    rayon: "securite",
    type: "Armoire forte",
    univers: ["chasse", "tir"],
    classement: null,
    description: "Armoire forte pour 7 armes longues, avec coffre intérieur pour les munitions.",
    caracteristiques: [
      ["Capacité", "7 armes longues"],
      ["Coffre intérieur", "Oui"],
      ["Fermeture", "Serrure à clé"]
    ],
    image: ""
  },
  {
    id: "verrou-de-pontet",
    nom: "Verrou de pontet à clé",
    marque: "",
    rayon: "securite",
    type: "Verrou",
    univers: ["chasse", "tir"],
    classement: null,
    description: "Verrou de pontet à clé, pour neutraliser l’arme au domicile ou pendant le transport.",
    caracteristiques: [
      ["Fermeture", "À clé"],
      ["Compatibilité", "Armes longues et armes de poing"]
    ],
    image: ""
  },

  /* ---------------------------- Habillement -------------------------- */
  {
    id: "veste-chasse-impermeable",
    nom: "Veste de chasse imperméable",
    marque: "",
    rayon: "habillement",
    type: "Veste",
    univers: ["chasse", "nature"],
    classement: null,
    description: "Veste imperméable et respirante, silencieuse au frottement, avec poches à cartouches.",
    caracteristiques: [
      ["Membrane", "Imperméable et respirante"],
      ["Poches", "Cartouchières et poche dorsale"]
    ],
    image: ""
  },
  {
    id: "chaussures-marche-montantes",
    nom: "Chaussures de marche montantes",
    marque: "",
    rayon: "habillement",
    type: "Chaussures",
    univers: ["chasse", "nature"],
    classement: null,
    description: "Chaussures montantes à semelle crantée pour les terrains accidentés.",
    caracteristiques: [
      ["Tige", "Montante"],
      ["Semelle", "Crantée"]
    ],
    image: ""
  },
  {
    id: "casquette-camouflage",
    nom: "Casquette camouflage",
    marque: "",
    rayon: "habillement",
    type: "Casquette",
    univers: ["chasse", "nature"],
    classement: null,
    description: "Casquette légère à visière, taille réglable.",
    caracteristiques: [
      ["Taille", "Réglable"]
    ],
    image: ""
  }
];
