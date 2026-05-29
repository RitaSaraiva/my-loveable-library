export type Concept = {
  id: string;
  name: string;
  description: string;
  color: "blue" | "red" | "pink" | "purple";
  people: string[];
  events: string[];
};

export type Person = {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
};

export type EventItem = {
  id: string;
  title: string;
  position: string;
  description: string;
  image: string;
};

export type Pair = {
  id: string;
  number: number;
  conceptA: string;
  conceptB: string;
  compatible: boolean | null;
  colorA: "blue" | "red" | "pink" | "purple" | "gray";
  colorB: "blue" | "red" | "pink" | "purple" | "gray";
};

export const people: Record<string, Person> = {
  mlk: { id: "mlk", name: "Martin L. King", position: "Activist", bio: "American Baptist minister and activist who became the most visible spokesperson and leader in the civil rights movement.", image: "https://images.unsplash.com/photo-1591622180780-c9b8a8c43056?w=400" },
  carter: { id: "carter", name: "Jimmy Carter", position: "39th President", bio: "American politician who served as the 39th president of the United States from 1977 to 1981.", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400" },
  jfk: { id: "jfk", name: "John F. Kennedy", position: "35th President", bio: "American politician who served as the 35th president of the United States.", image: "https://images.unsplash.com/photo-1580130544577-e7c1a9526f6e?w=400" },
  reagan: { id: "reagan", name: "Ronald Reagan", position: "40th President", bio: "American politician and actor who served as the 40th president of the United States.", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400" },
};

export const events: Record<string, EventItem> = {
  mural: { id: "mural", title: "Madison Mural Project", position: "Street Art, 2020", description: "A large-scale mural commenting on the relationship between state power and individual liberty.", image: "https://images.unsplash.com/photo-1551913902-c92207136625?w=800" },
  monument: { id: "monument", title: "Lincoln Memorial Vigil", position: "Washington, 2019", description: "A public gathering at the Lincoln Memorial reflecting on liberty and unity.", image: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=800" },
};

export const concepts: Record<string, Concept> = {
  liberty: {
    id: "liberty",
    name: "Libety",
    description: "Philosophy valuing individual rights, civil liberties and political freedoms under the rule of law",
    color: "blue",
    people: ["mlk", "carter", "jfk", "reagan"],
    events: ["mural", "monument"],
  },
  state: {
    id: "state",
    name: "State",
    description: "Organized political community under one government, exercising authority over a territory.",
    color: "blue",
    people: ["jfk", "reagan"],
    events: ["monument"],
  },
  democracy: {
    id: "democracy",
    name: "Democracy",
    description: "A system of government by the whole population, typically through elected representatives.",
    color: "pink",
    people: ["carter", "jfk"],
    events: ["monument"],
  },
  property: {
    id: "property",
    name: "Property",
    description: "The right to possess, use, and transfer material things and resources.",
    color: "pink",
    people: ["reagan"],
    events: [],
  },
  capitalism: {
    id: "capitalism",
    name: "Capitalism",
    description: "An economic system based on private ownership of the means of production.",
    color: "purple",
    people: ["reagan"],
    events: [],
  },
  freedom: {
    id: "freedom",
    name: "Freedom",
    description: "The power or right to act, speak, or think as one wants without hindrance.",
    color: "purple",
    people: ["mlk", "carter"],
    events: ["mural"],
  },
  authoritarianism: {
    id: "authoritarianism",
    name: "Authoritarianism",
    description: "Enforcement or advocacy of strict obedience to authority at the expense of personal freedom.",
    color: "red",
    people: [],
    events: [],
  },
  liberalism: {
    id: "liberalism",
    name: "Liberalism",
    description: "Political philosophy founded on liberty, consent of the governed and equality before the law.",
    color: "red",
    people: ["jfk"],
    events: [],
  },
  serenity: {
    id: "serenity",
    name: "Serenity",
    description: "The state of being calm, peaceful, and untroubled.",
    color: "blue",
    people: [],
    events: ["monument"],
  },
};

export const pairs: Pair[] = [
  { id: "p1", number: 1, conceptA: "democracy", conceptB: "property", compatible: true, colorA: "pink", colorB: "pink" },
  { id: "p2", number: 2, conceptA: "capitalism", conceptB: "freedom", compatible: true, colorA: "purple", colorB: "purple" },
  { id: "p3", number: 3, conceptA: "authoritarianism", conceptB: "liberalism", compatible: false, colorA: "red", colorB: "red" },
  { id: "p4", number: 4, conceptA: "equity", conceptB: "communism", compatible: null, colorA: "gray", colorB: "gray" },
  { id: "p5", number: 5, conceptA: "communism", conceptB: "freedom", compatible: null, colorA: "gray", colorB: "gray" },
  { id: "p6", number: 6, conceptA: "serenity", conceptB: "liberty", compatible: true, colorA: "blue", colorB: "blue" },
];

export const colorClass = (c: string) => {
  switch (c) {
    case "blue": return "var(--concept-blue)";
    case "red": return "var(--concept-red)";
    case "pink": return "var(--concept-pink)";
    case "purple": return "var(--concept-purple)";
    case "gray": return "oklch(0.35 0 0)";
    default: return "oklch(0.5 0 0)";
  }
};
