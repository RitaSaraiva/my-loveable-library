export const concepts = [
  {
    id: "capitalism",
    uid: "53D6ECCB940001",
    name: "Capitalism",
    definition:
      "Economic system where private individuals or businesses own capital and operate for profit.",
    suggestions: ["liberalism", "authoritarianism", "private-property"],
  },
  {
    id: "liberalism",
    uid: "536C6FCB940001",
    name: "Liberalism",
    definition:
      "Philosophy valuing individual rights, civil liberties and political freedoms under the rule of law.",
    suggestions: ["capitalism", "freedom"],
  },
  {
    id: "authoritarianism",
    uid: "538A78CB940001",
    name: "Authoritarianism",
    definition:
      "System of governance where power is concentrated in a single authority.",
    suggestions: ["capitalism"],
  },
  {
    id: "equity",
    uid: "53CD7FCB940001",
    name: "Equity",
    definition:
      "Fairness in the distribution of resources accounting for differing needs and circumstances.",
    suggestions: ["private-property", "socialism"],
  },
  {
    id: "private-property",
    uid: "53798CCB940001",
    name: "Private property",
    definition:
      "Something owned by an individual, group, or institution, including land, objects, or resources.",
    suggestions: ["equity", "capitalism"],
  },
  {
    id: "socialism",
    uid: "5336A4CB940001",
    name: "Socialism",
    definition:
      "System where means of production are owned and regulated collectively to reduce inequality.",
    suggestions: ["equity"],
  },
  {
    id: "freedom",
    uid: "53EAB0CB940001",
    name: "Freedom",
    definition:
      "The power or right to speak, act or think without undue restraint or coercion.",
    suggestions: ["liberalism", "anarchy", "neoliberalism"],
  },
  {
    id: "neoliberalism",
    uid: "532CB8CB940001",
    name: "Neoliberalism",
    definition:
      "Economic approach emphasizing free markets, privatization and limited government intervention.",
    suggestions: ["state", "freedom"],
  },
  {
    id: "communism",
    uid: "53B893CB940001",
    name: "Communism",
    definition:
      "Classless system where all property is collectively owned and distributed according to need.",
    suggestions: ["democracy"],
  },
  {
    id: "democracy",
    uid: "539AC8CB940001",
    name: "Democracy",
    definition:
      "System of government where power is held by the people through elected representatives.",
    suggestions: ["communism", "anarchy", "state"],
  },
  {
    id: "anarchy",
    uid: "5344D5CB940001",
    name: "Anarchy",
    definition:
      "Political philosophy advocating for a society without government or authority.",
    suggestions: ["democracy", "freedom"],
  },
  {
    id: "state",
    uid: "538043CD940001",
    name: "State",
    definition:
      "Organized political entity with authority to govern a territory and population.",
    suggestions: ["neoliberalism", "democracy"],
  },
];

export const getConceptByUid = (uid: string) =>
  concepts.find((concept) => concept.uid === uid);

export const getConceptById = (id: string) =>
  concepts.find((concept) => concept.id === id);