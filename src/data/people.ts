import adamSmithImage from "@/assets/people/adam-smith.jpeg";
import alexanderDubcekImage from "@/assets/people/alexander-dubcek.jpg";
import augustoPinochetImage from "@/assets/people/augusto-pinochet.jpg";
import dengXiaopingImage from "@/assets/people/deng-xiaoping.jpg.webp";
import johnLockeImage from "@/assets/people/john-locke.jpg";
import johnRawlsImage from "@/assets/people/john-rawls.jpg";
import leeKuanYewImage from "@/assets/people/lee-kuan-yew.jpg";
import margaretThatcherImage from "@/assets/people/margaret-tatcher.jpg";
import miltonFriedmanImage from "@/assets/people/milton-friedman.jpeg";
import mikhailBakuninImage from "@/assets/people/mikhail-bakunin.jpg.webp";
import nelsonMandelaImage from "@/assets/people/nelson-mandela.jpg.webp";
import peterKropotkinImage from "@/assets/people/peter-kropotkin.jpg";
import ronaldReaganImage from "@/assets/people/ronald-reagan.avif";
import salvadorAllendeImage from "@/assets/people/salvador-allende.jpg";
import thomasSankaraImage from "@/assets/people/thomas-sankara.jpg";
import williamBeveridgeImage from "@/assets/people/william-beveridge.jpg";


export const people = [
  {
    id: "adam-smith",
    name: "Adam Smith",
    role: "Economist",
    color: "#79B8EC",
    image: adamSmithImage,
    explanation:
      "Adam Smith is often considered the intellectual father of modern capitalism because he argued that economic prosperity emerges when individuals are free to pursue their own interests within competitive markets. His ideas also connect strongly to liberalism through individual autonomy, economic freedom, justice, and rights.",
  },
  {
    id: "deng-xiaoping",
    name: "Deng Xiaoping",
    role: "Politician",
    color: "#EC3832",
    image: dengXiaopingImage,
    explanation:
      "Deng Xiaoping led reforms that transformed China’s economy by introducing market mechanisms, private entrepreneurship, foreign investment, and greater competition while maintaining one-party political control.",
  },
  {
    id: "augusto-pinochet",
    name: "Augusto Pinochet",
    role: "President",
    color: "#EC3832",
    image: augustoPinochetImage,
    explanation:
      "Augusto Pinochet came to power after the 1973 military coup in Chile. His regime restricted political freedoms while adopting free-market reforms including privatization, reduced trade barriers, and market competition.",
  },
  {
    id: "lee-kuan-yew",
    name: "Lee Kuan Yew",
    role: "Prime Minister",
    color: "#EC3832",
    image: leeKuanYewImage,
    explanation:
      "Lee Kuan Yew transformed Singapore into one of the world’s most prosperous economies through foreign investment, business development, and market competitiveness, while also restricting political opposition and public dissent.",
  },
  {
    id: "john-rawls",
    name: "John Rawls",
    role: "Philosopher",
    color: "#E351A6",
    image: johnRawlsImage,
    explanation:
      "John Rawls argued that a fair society should guarantee equal basic rights while allowing inequalities only when they benefit the least advantaged. His work reconciled individual liberty with social fairness.",
  },
  {
    id: "william-beveridge",
    name: "William Beveridge",
    role: "Economist",
    color: "#E351A6",
    image: williamBeveridgeImage,
    explanation:
      "William Beveridge proposed extensive welfare reforms to address poverty, poor health, and unemployment while maintaining private property and markets alongside strong public institutions.",
  },
  {
    id: "salvador-allende",
    name: "Salvador Allende",
    role: "President",
    color: "#F2CC50",
    image: salvadorAllendeImage,
    explanation:
      "Salvador Allende became president of Chile in 1970 and attempted to implement socialist reforms through democratic institutions, expanding public ownership and reducing economic inequality.",
  },
  {
    id: "thomas-sankara",
    name: "Thomas Sankara",
    role: "President",
    color: "#F2CC50",
    image: thomasSankaraImage,
    explanation:
      "Thomas Sankara led Burkina Faso from 1983 to 1987 and promoted education, healthcare, women’s rights, and agricultural self-sufficiency as part of a socialist project focused on ordinary people.",
  },
  {
    id: "alexander-dubcek",
    name: "Alexander Dubček",
    role: "President",
    color: "#F27850",
    image: alexanderDubcekImage,
    explanation:
      "Alexander Dubček led Czechoslovakia during the Prague Spring and promoted reforms that sought to combine socialism with greater freedom of expression, political participation, and civil liberties.",
  },
  {
    id: "margaret-thatcher",
    name: "Margaret Thatcher",
    role: "Prime Minister",
    color: "#634EE9",
    image: margaretThatcherImage,
    explanation:
      "Margaret Thatcher promoted privatization, deregulation, and market competition in Britain. Her government used state power and legislation to implement neoliberal reforms.",
  },
  {
    id: "ronald-reagan",
    name: "Ronald Reagan",
    role: "President",
    color: "#634EE9",
    image: ronaldReaganImage,
    explanation:
      "Ronald Reagan advocated lower taxes, deregulation, and free-market economics, implementing market-oriented reforms through state institutions and legislation.",
  },
  {
    id: "milton-friedman",
    name: "Milton Friedman",
    role: "Economist",
    color: "#634EE9",
    image: miltonFriedmanImage,
    explanation:
      "Milton Friedman was one of the most influential economists associated with neoliberal thought. He supported market freedom while recognizing the state’s role in maintaining legal systems and property rights.",
  },
  {
    id: "mikhail-bakunin",
    name: "Mikhail Bakunin",
    role: "Philosopher",
    color: "#35DDD4",
    image: mikhailBakuninImage,
    explanation:
      "Mikhail Bakunin was one of the founders of modern anarchism. He rejected centralized authority and supported voluntary association, collective decision-making, and direct democracy.",
  },
  {
    id: "peter-kropotkin",
    name: "Peter Kropotkin",
    role: "Geographer",
    color: "#35DDD4",
    image: peterKropotkinImage,
    explanation:
      "Peter Kropotkin developed a vision of anarchism based on cooperation, mutual aid, and decentralized organization, emphasizing participation and local collective decision-making.",
  },
  {
    id: "john-locke",
    name: "John Locke",
    role: "Philosopher",
    color: "#58BE69",
    image: johnLockeImage,
    explanation:
      "John Locke argued that individuals possess natural rights including life, liberty, and property. His ideas helped establish liberal thought and the view that political authority should safeguard freedom.",
  },
  {
    id: "nelson-mandela",
    name: "Nelson Mandela",
    role: "President",
    color: "#58BE69",
    image: nelsonMandelaImage,
    explanation:
      "Nelson Mandela opposed apartheid and later emphasized reconciliation, constitutional rights, equal citizenship, and civil liberties in South Africa.",
  },
];

export const getPersonById = (id: string) =>
  people.find((person) => person.id === id);