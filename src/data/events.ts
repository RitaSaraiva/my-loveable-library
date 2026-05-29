export const events = [
  {
    id: "industrial-revolution",
    name: "Industrial Revolution",
    date: "1800s",
    color: "#79B8EC",
    image: "/images/events/industrial-revolution.jpg",
    explanation:
      "The Industrial Revolution transformed economies through large-scale industry, mechanized manufacturing, factories, new technologies, and expanding trade networks. It helped establish modern capitalist economies and grew alongside liberal movements for rights and representative government.",
  },
  {
    id: "american-revolution",
    name: "American Revolution",
    date: "1775",
    color: "#79B8EC",
    image: "/images/events/american-revolution.jpg",
    explanation:
      "The American Revolution drew on liberal ideas about individual rights, consent of the governed, and limited government. The new political system also protected private property and encouraged economic freedom.",
  },
  {
    id: "chinese-economic-reform",
    name: "Chinese Economic Reform",
    date: "1978",
    color: "#EC3832",
    image: "/images/events/chinese-economic-reform.jpg",
    explanation:
      "Beginning in 1978, China introduced reforms that moved it away from a strictly planned economy. Private businesses emerged, farmers gained more control over production, and international trade expanded, all while political control remained centralized.",
  },
  {
    id: "chilean-coup",
    name: "Chilean Coup",
    date: "1973",
    color: "#EC3832",
    image: "/images/events/chilean-coup.jpg",
    explanation:
      "The Chilean Coup overthrew Salvador Allende’s democratically elected government and established military rule under Augusto Pinochet. The regime restricted civil liberties while introducing major market-oriented reforms.",
  },
  {
    id: "nhs-creation",
    name: "NHS Creation",
    date: "1948",
    color: "#E351A6",
    image: "/images/events/nhs-creation.jpg",
    explanation:
      "The NHS was established in the United Kingdom to provide healthcare free at the point of use. It represented an effort to ensure access to medical treatment based on need rather than personal wealth while maintaining a capitalist economy.",
  },
  {
    id: "beveridge-report",
    name: "Beveridge Report",
    date: "1942",
    color: "#E351A6",
    image: "/images/events/beveridge-report.jpg",
    explanation:
      "The Beveridge Report proposed a comprehensive welfare system to address poverty, disease, unemployment, and insecurity. Rather than replacing capitalism, it sought to make it fairer and more inclusive.",
  },
  {
    id: "cuban-revolution",
    name: "Cuban Revolution",
    date: "1959",
    color: "#F2CC50",
    image: "/images/events/cuban-revolution.jpg",
    explanation:
      "The Cuban Revolution brought Fidel Castro and his allies to power. The new government introduced land redistribution, universal healthcare, and expanded education as part of a socialist project aimed at reducing inequality.",
  },
  {
    id: "prague-spring",
    name: "Prague Spring",
    date: "1968",
    color: "#F27850",
    image: "/images/events/prague-spring.jpg",
    explanation:
      "The Prague Spring was a reform movement in communist Czechoslovakia that sought greater freedom of expression, reduced censorship, and increased political participation.",
  },
  {
    id: "thatcherism",
    name: "Thatcherism",
    date: "1980s",
    color: "#634EE9",
    image: "/images/events/thatcherism.jpg",
    explanation:
      "Thatcherism refers to economic and political reforms in Britain during the 1980s, including privatization, deregulation, and reductions in the power of trade unions.",
  },
  {
    id: "reaganomics",
    name: "Reaganomics",
    date: "1980s",
    color: "#634EE9",
    image: "/images/events/reaganomics.jpg",
    explanation:
      "Reaganomics promoted tax reductions, deregulation, and market-oriented reforms in the United States. These reforms were implemented through federal institutions, legislation, and executive action.",
  },
  {
    id: "paris-commune",
    name: "Paris Commune",
    date: "1871",
    color: "#35DDD4",
    image: "/images/events/paris-commune.jpg",
    explanation:
      "The Paris Commune organized local governance through elected councils and participatory institutions. It inspired many anarchists as an example of decentralized and democratic political organization.",
  },
  {
    id: "end-of-apartheid",
    name: "End of Apartheid",
    date: "1992",
    color: "#58BE69",
    image: "/images/events/end-of-apartheid.jpg",
    explanation:
      "The end of apartheid transformed South Africa from a racially segregated political system into a democratic society with universal voting rights, constitutional protections, equal rights, and civil liberties.",
  },
];

export const getEventById = (id: string) =>
  events.find((event) => event.id === id);