export const pairs = [
  {
    id: "capitalism-liberalism",
    concepts: ["capitalism", "liberalism"],
    title: "Capitalism & Liberalism",
    color: "#79B8EC",
    explanation:
      "Liberalism promotes individual rights, private property, and economic freedom. These principles support capitalist markets and private enterprise. The United States combines a market economy with liberal democratic institutions and protections for individual rights.",
    people: ["adam-smith"],
    events: ["industrial-revolution", "american-revolution"],
  },
  {
    id: "authoritarianism-capitalism",
    concepts: ["capitalism", "authoritarianism"],
    title: "Capitalism & Authoritarianism",
    color: "#EC3832",
    explanation:
      "Authoritarian governments may permit private businesses and market competition while restricting political participation and civil liberties. China has combined strong state control over politics with extensive market-oriented economic reforms.",
    people: ["deng-xiaoping", "augusto-pinochet", "lee-kuan-yew"],
    events: ["chinese-economic-reform", "chilean-coup"],
  },
  {
    id: "equity-private-property",
    concepts: ["equity", "private-property"],
    title: "Equity & Private Property",
    color: "#E351A6",
    explanation:
      "A society can protect private ownership while using laws, taxation, and public services to reduce inequalities and promote fair opportunities. Sweden maintains private property rights alongside policies aimed at greater social equity.",
    people: ["john-rawls", "william-beveridge"],
    events: ["nhs-creation", "beveridge-report"],
  },
  {
    id: "equity-socialism",
    concepts: ["equity", "socialism"],
    title: "Equity & Socialism",
    color: "#F2CC50",
    explanation:
      "Socialism seeks a more equal distribution of resources and opportunities, making equity one of its central goals. Cuba has historically emphasized universal access to education and healthcare as expressions of social equity.",
    people: ["salvador-allende", "thomas-sankara"],
    events: ["cuban-revolution"],
  },
  {
    id: "communism-democracy",
    concepts: ["democracy", "communism"],
    title: "Democracy & Communism",
    color: "#F27850",
    explanation:
      "Some political movements have argued that democratic participation can coexist with collective ownership and socialist economic organization. Chile pursued socialist reforms through democratic institutions during the government of Salvador Allende.",
    people: ["alexander-dubcek"],
    events: ["prague-spring"],
  },
  {
    id: "neoliberalism-state",
    concepts: ["neoliberalism", "state"],
    title: "Neoliberalism & State",
    color: "#634EE9",
    explanation:
      "Although neoliberalism favors markets, it still relies on the state to enforce laws, protect property rights, and maintain economic institutions. The United Kingdom implemented market-oriented reforms through state policies and legislation.",
    people: ["margaret-thatcher", "ronald-reagan", "milton-friedman"],
    events: ["thatcherism", "reaganomics"],
  },
  {
    id: "anarchy-democracy",
    concepts: ["anarchy", "democracy"],
    title: "Anarchy & Democracy",
    color: "#35DDD4",
    explanation:
      "Many anarchist traditions support direct participation in decision-making without a central authority. Decisions are made collectively rather than by elected rulers or governments. During the Spanish Revolution, many anarchist communities organized themselves through local assemblies, worker collectives, and direct democracy.",
    people: ["mikhail-bakunin", "peter-kropotkin"],
    events: ["paris-commune"],
  },
  {
    id: "freedom-liberalism",
    concepts: ["freedom", "liberalism"],
    title: "Freedom & Liberalism",
    color: "#58BE69",
    explanation:
      "Liberalism places individual freedom at the center of political life, protecting rights such as free speech, religion, and association. Canada protects a wide range of individual freedoms through democratic institutions and constitutional rights.",
    people: ["john-locke", "nelson-mandela"],
    events: ["end-of-apartheid"],
  },
];

export const getPairKey = (conceptA: string, conceptB: string) =>
  [conceptA, conceptB].sort().join("-");

export const getPairByConcepts = (conceptA: string, conceptB: string) => {
  const key = getPairKey(conceptA, conceptB);
  return pairs.find((pair) => getPairKey(pair.concepts[0], pair.concepts[1]) === key);
};