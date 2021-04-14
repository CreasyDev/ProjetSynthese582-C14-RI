const utilisateurs = [
  {
    id: 1,
    nom: "Tremblay",
    prenom: "Jean-Sébastien",
    estUneEntreprise: false,
    nomEntreprise: "na",
    adresse: "...",
    ville: "Trois-Rivières",
    region: "...",
    logo: "na",
    courriel: "js-trembley@cegep-trs.ca",
    telephone: "818-850-0014",
    siteWeb: "...",
    cv: "mon cv",
    motDePasse: "2816",
    etablissementScolaire: "Cégep de Trois-Rivières",
    description: "Programmation web",
    secteursActivite: null,
    actif: true,
    estSupprime: false,
    valide: true,
    niveauAcces: 111,
  },
  {
    id: 2,
    nom: "Campagnes",
    prenom: "Alexis",
    estUneEntreprise: false,
    nomEntreprise: "na",
    adresse: "...",
    ville: "Sherbrooke",
    region: "...",
    logo: "na",
    courriel: "al-campagnes@usherbrooke.ca",
    telephone: "819-638-8714",
    siteWeb: "...",
    cv: "mon cv",
    motDePasse: "2816",
    etablissementScolaire: "Cégep de Sherbrooke",
    description: "Programmation web",
    secteursActivite: null,
    actif: true,
    estSupprime: false,
    valide: true,
    niveauAcces: 111,
  },
  {
    id: 3,
    nom: "Gagné",
    prenom: "Davis",
    estUneEntreprise: false,
    nomEntreprise: "na",
    adresse: "...",
    ville: "Montréal",
    region: "...",
    logo: "na",
    courriel: "davis.gagne@uqam.ca",
    telephone: "514-523-8954",
    siteWeb: "...",
    cv: "mon cv",
    motDePasse: "2816",
    etablissementScolaire: "UQAM",
    description: "Programmation web",
    secteursActivite: null,
    actif: true,
    estSupprime: false,
    valide: true,
    niveauAcces: 111,
  },
  {
    id: 4,
    nom: "Dubois",
    prenom: "Pierre",
    estUneEntreprise: false,
    nomEntreprise: "na",
    adresse: "...",
    ville: "Montréal",
    region: "...",
    logo: "na",
    courriel: "pierre.dubois@udem.ca",
    telephone: "438-323-3245",
    siteWeb: "...",
    cv: "mon cv",
    motDePasse: "2816",
    etablissementScolaire: "UdeM",
    description: "Programmation logiciel",
    secteursActivite: null,
    actif: true,
    estSupprime: false,
    valide: true,
    niveauAcces: 111,
  },
  {
    id: 5,
    nom: "Lavois",
    prenom: "Sydney",
    estUneEntreprise: false,
    nomEntreprise: "na",
    adresse: "...",
    ville: "Trois-Rivières",
    region: "...",
    logo: "na",
    courriel: "sydney.lavois@cegep-trs.ca",
    telephone: "819-434-4323",
    siteWeb: "...",
    cv: "mon cv",
    motDePasse: "2816",
    etablissementScolaire: "Cégep de Trois-Rivières",
    description: "Programmation web",
    secteursActivite: null,
    actif: true,
    estSupprime: false,
    valide: true,
    niveauAcces: 111,
  },
  {
    id: 6,
    nom: "Laporte",
    prenom: "Amélie",
    estUneEntreprise: false,
    nomEntreprise: "na",
    adresse: "...",
    ville: "Trois-Rivières",
    region: "...",
    logo: "na",
    courriel: "amelie.laporte@cegep-trs.ca",
    telephone: "819-267-2134",
    siteWeb: "...",
    cv: "mon cv",
    motDePasse: "2816",
    etablissementScolaire: "Cégep de Trois-Rivières",
    description: "Programmation web",
    secteursActivite: null,
    actif: true,
    estSupprime: false,
    valide: true,
    niveauAcces: 111,
  },
  {
    id: 7,
    nom: "Denis",
    prenom: "Roy",
    estUneEntreprise: true,
    nomEntreprise: "ATRIUM INNOVATIONS",
    adresse: "1405 Blv du Parc-Technologique, Québec, Québec, Canada, G1P 4P5",
    ville: "Ville de Québec",
    region: "Québec",
    logo:
      "https://defientreprises.com/remote.axd?https://defientreprises.blob.core.windows.net/uploads/8c3e89ef/sss.png?width=250",
    courriel: "js-trembley@cegep-trs.ca",
    telephone: "818-850-0014",
    siteWeb: "https://www.atrium-innovations.com/",
    cv: null,
    motDePasse: "2816",
    etablissementScolaire: null,
    description:
      "Atrium Innovations est reconnu à travers le monde comme un leader dans le développement, la fabrication et la commercialisation de produits de santé nutritionnelle scientifiquement innovants.",
    secteursActivite: [1, 2, 4],
    actif: true,
    estSupprime: false,
    valide: true,
    niveauAcces: 333,
  },
  {
    id: 8,
    nom: "Oscar",
    prenom: "Varun",
    estUneEntreprise: true,
    nomEntreprise: "ABB",
    adresse: "500, Rue du Binôme, Québec, Québec, Canada, G1P 4P1",
    ville: "Ville de Québec",
    region: "Québec",
    logo:
      "https://defientreprises.com/remote.axd?https://defientreprises.blob.core.windows.net/uploads/4738ec11/abblogo3.png?width=250",
    courriel: "js-trembley@cegep-trs.ca",
    telephone: "818-850-0014",
    siteWeb: "https://global.abb/group/en",
    cv: null,
    motDePasse: "2816",
    etablissementScolaire: null,
    description:
      "ABB is a leading global technology company that energizes the transformation of society and industry to achieve a more productive, sustainable future.",
    secteursActivite: [5, 6, 1],
    actif: true,
    estSupprime: false,
    valide: true,
    niveauAcces: 333,
  },
  {
    id: 9,
    nom: "Bernad",
    prenom: "Boucher",
    estUneEntreprise: true,
    nomEntreprise: "ADNIA CONSEILS",
    adresse:
      "2299 boulevard du versant nord bureau 250, Québec, Québec, Canada, G1N4G2",
    ville: "Ville de Québec",
    region: "Québec",
    logo:
      "https://defientreprises.com/remote.axd?https://defientreprises.blob.core.windows.net/uploads/016f6a4a/adnia_logo.png?width=250",
    courriel: "js-trembley@cegep-trs.ca",
    telephone: "818-850-0014",
    siteWeb: "https://adniaconseils.ca/",
    cv: null,
    motDePasse: "2816",
    etablissementScolaire: null,
    description:
      "L’intelligence d’affaires et l’analytique représentent le savoir-faire d’une organisation à tirer tout le potentiel des données afin d’améliorer sa performance. Ainsi, la volonté d’ADNia Conseils est d’être un partenaire de proximité et d’amener ses clients à développer l’intelligence d’affaires et l'analytique.",
    secteursActivite: [8, 2, 6],
    actif: true,
    estSupprime: false,
    valide: true,
    niveauAcces: 333,
  },
];

export default utilisateurs;
