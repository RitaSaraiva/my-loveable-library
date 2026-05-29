export const people = [
  {
    id: "adam-smith",
    name: "Adam Smith",
    role: "Economist",
    color: "#79B8EC",
    image: "/images/people/adam-smith.jpg",
    explanation:
      "Adam Smith is often considered the intellectual father of modern capitalism because he argued that economic prosperity emerges when individuals are free to pursue their own interests within competitive markets. His ideas also connect strongly to liberalism through individual autonomy, economic freedom, justice, and rights.",
  },
  {
    id: "deng-xiaoping",
    name: "Deng Xiaoping",
    role: "Politician",
    color: "#EC3832",
    image: "/images/people/deng-xiaoping.jpg",
    explanation:
      "Deng Xiaoping led reforms that transformed China’s economy by introducing market mechanisms, private entrepreneurship, foreign investment, and greater competition while maintaining one-party political control.",
  },
  {
    id: "augusto-pinochet",
    name: "Augusto Pinochet",
    role: "President",
    color: "#EC3832",
    image: "/images/people/augusto-pinochet.jpg",
    explanation:
      "Augusto Pinochet came to power after the 1973 military coup in Chile. His regime restricted political freedoms while adopting free-market reforms including privatization, reduced trade barriers, and market competition.",
  },
  {
    id: "lee-kuan-yew",
    name: "Lee Kuan Yew",
    role: "Prime Minister",
    color: "#EC3832",
    image: "/images/people/lee-kuan-yew.jpg",
    explanation:
      "Lee Kuan Yew transformed Singapore into one of the world’s most prosperous economies through foreign investment, business development, and market competitiveness, while also restricting political opposition and public dissent.",
  },
  {
    id: "john-rawls",
    name: "John Rawls",
    role: "Philosopher",
    color: "#E351A6",
    image: "/images/people/john-rawls.jpg",
    explanation:
      "John Rawls argued that a fair society should guarantee equal basic rights while allowing inequalities only when they benefit the least advantaged. His work reconciled individual liberty with social fairness.",
  },
  {
    id: "william-beveridge",
    name: "William Beveridge",
    role: "Economist",
    color: "#E351A6",
    image: "/images/people/william-beveridge.jpg",
    explanation:
      "William Beveridge proposed extensive welfare reforms to address poverty, poor health, and unemployment while maintaining private property and markets alongside strong public institutions.",
  },
  {
    id: "salvador-allende",
    name: "Salvador Allende",
    role: "President",
    color: "#F2CC50",
    image: "/images/people/salvador-allende.jpg",
    explanation:
      "Salvador Allende became president of Chile in 1970 and attempted to implement socialist reforms through democratic institutions, expanding public ownership and reducing economic inequality.",
  },
  {
    id: "thomas-sankara",
    name: "Thomas Sankara",
    role: "President",
    color: "#F2CC50",
    image: "/images/people/thomas-sankara.jpg",
    explanation:
      "Thomas Sankara led Burkina Faso from 1983 to 1987 and promoted education, healthcare, women’s rights, and agricultural self-sufficiency as part of a socialist project focused on ordinary people.",
  },
  {
    id: "alexander-dubcek",
    name: "Alexander Dubček",
    role: "President",
    color: "#F27850",
    image: "/images/people/alexander-dubcek.jpg",
    explanation:
      "Alexander Dubček led Czechoslovakia during the Prague Spring and promoted reforms that sought to combine socialism with greater freedom of expression, political participation, and civil liberties.",
  },
  {
    id: "margaret-thatcher",
    name: "Margaret Thatcher",
    role: "Prime Minister",
    color: "#634EE9",
    image: "/images/people/margaret-thatcher.jpg",
    explanation:
      "Margaret Thatcher promoted privatization, deregulation, and market competition in Britain. Her government used state power and legislation to implement neoliberal reforms.",
  },
  {
    id: "ronald-reagan",
    name: "Ronald Reagan",
    role: "President",
    color: "#634EE9",
    image: "/images/people/ronald-reagan.jpg",
    explanation:
      "Ronald Reagan advocated lower taxes, deregulation, and free-market economics, implementing market-oriented reforms through state institutions and legislation.",
  },
  {
    id: "milton-friedman",
    name: "Milton Friedman",
    role: "Economist",
    color: "#634EE9",
    image: "/images/people/milton-friedman.jpg",
    explanation:
      "Milton Friedman was one of the most influential economists associated with neoliberal thought. He supported market freedom while recognizing the state’s role in maintaining legal systems and property rights.",
  },
  {
    id: "mikhail-bakunin",
    name: "Mikhail Bakunin",
    role: "Philosopher",
    color: "#35DDD4",
    image: "/images/people/mikhail-bakunin.jpg",
    explanation:
      "Mikhail Bakunin was one of the founders of modern anarchism. He rejected centralized authority and supported voluntary association, collective decision-making, and direct democracy.",
  },
  {
    id: "peter-kropotkin",
    name: "Peter Kropotkin",
    role: "Geographer",
    color: "#35DDD4",
    image: "/images/people/peter-kropotkin.jpg",
    explanation:
      "Peter Kropotkin developed a vision of anarchism based on cooperation, mutual aid, and decentralized organization, emphasizing participation and local collective decision-making.",
  },
  {
    id: "john-locke",
    name: "John Locke",
    role: "Philosopher",
    color: "#58BE69",
    image: "/images/people/john-locke.jpg",
    explanation:
      "John Locke argued that individuals possess natural rights including life, liberty, and property. His ideas helped establish liberal thought and the view that political authority should safeguard freedom.",
  },
  {
    id: "nelson-mandela",
    name: "Nelson Mandela",
    role: "President",
    color: "#58BE69",
    image: "/images/people/nelson-mandela.jpg",
    explanation:
      "Nelson Mandela opposed apartheid and later emphasized reconciliation, constitutional rights, equal citizenship, and civil liberties in South Africa.",
  },
];

export const getPersonById = (id: string) =>
  people.find((person) => person.id === id);