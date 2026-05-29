export interface Concept {
  id: string;
  uid: string;
  name: string;
  definition: string;
  suggestions: string[];
}

export interface Pair {
  id: string;
  concepts: string[];
  title: string;
  color: string;
  explanation: string;
  people: string[];
  events: string[];
}

export interface Person {
  id: string;
  name: string;
  role: string;
  color: string;
  image: string;
  explanation: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  color: string;
  image: string;
  explanation: string;
}