const movies = [
  /* {
        id: ,
        title: ,
        price: ,
        stock: 200,
        category: ,
        imglocal: ,
        description: ,

    }, */
  {
    id: 1,
    title: "back to the future",
    price: 3.5,
    stock: 200,
    category: "adventure",
    imglocal: "backtothefuture.jpg",
    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
  },
  {
    id: 2,
    title: "back to the future II",
    price: 3.8,
    stock: 200,
    category: "adventure",
    imglocal: "backtothefuture2.jpg",
    description:
      "After visiting 2015, Marty McFly must repeat his visit to 1955 to prevent disastrous changes to 1985...without interfering with his first trip.",
  },
  {
    id: 3,
    title: "back to the future III",
    price: 4.2,
    stock: 200,
    category: "adventure",
    imglocal: "backtothefuture3.jpg",
    description:
      "Stranded in 1955, Marty McFly learns about the death of Doc Brown in 1885 and must travel back in time to save him. With no fuel readily available for the DeLorean, the two must figure how to escape the Old West before Emmett is murdered.",
  },
  {
    id: 4,
    title: "jurassic park",
    price: 3.6,
    stock: 200,
    category: "adventure",
    imglocal: "jurassicpark.jpg",
    description:
      "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
  },
  {
    id: 5,
    title: "jurassic park: the lost world",
    price: 3.8,
    stock: 200,
    category: "adventure",
    imglocal: "jurassicpark2.jpg",
    description:
      "A research team is sent to the Jurassic Park Site B island to study the dinosaurs there, while an InGen team approaches with another agenda.",
  },
  {
    id: 6,
    title: "jurassic park III",
    price: 3.2,
    stock: 200,
    category: "adventure",
    imglocal: "jurassicpark3.jpg",
    description:
      "A decidedly odd couple with ulterior motives convince Dr. Grant to go to Isla Sorna for a holiday, but their unexpected landing startles the island's new inhabitants.",
  },
  {
    id: 7,
    title: "Indiana Jones and the Raiders of the Lost Ark",
    price: 2.9,
    stock: 200,
    category: "adventure",
    imglocal: "indianajones.jpg",
    description:
      "Archaeology professor Indiana Jones ventures to seize a biblical artefact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis.",
  },
  {
    id: 8,
    title: "Indiana Jones and the Temple of Doom",
    price: 3.2,
    stock: 200,
    category: "adventure",
    imglocal: "indianajones2.jpg",
    description:
      "A skirmish in Shanghai puts archaeologist Indiana Jones, his partner Short Round and singer Willie Scott crossing paths with an Indian village desperate to reclaim a rock stolen by a secret cult beneath the catacombs of an ancient palace.",
  },
  {
    id: 9,
    title: "Indiana Jones and the Last Crusade",
    price: 3.2,
    stock: 200,
    category: "adventure",
    imglocal: "indianajones3.jpg",
    description:
      "In 1938, after his father Professor Henry Jones, Sr. goes missing while pursuing the Holy Grail, Professor Henry 'Indiana' Jones, Jr. finds himself up against Adolf Hitler's Nazis again to stop them from obtaining its powers.",
  },
  {
    id: 10,
    title: "Indiana Jones and the Kingdom of the Crystal Skull",
    price: 2.9,
    stock: 200,
    category: "adventure",
    imglocal: "indianajones4.jpg",
    description:
      "In 1957, archaeologist and adventurer Dr. Henry 'Indiana' Jones, Jr. is called back into action and becomes entangled in a Soviet plot to uncover the secret behind mysterious artifacts known as the Crystal Skulls.",
  },
  {
    id: 11,
    title: "The amityville horror (1979)",
    price: 4.5,
    stock: 200,
    category: "horror",
    imglocal: "theamityvillehorror.jpg",
    description:
      "Newlyweds and their three children move into a large house where a mass murder was committed. They start to experience strange, inexplicable manifestations which have strong effects on everyone living in or visiting the house.",
  },
  {
    id: 12,
    title: "The Shining",
    price: 5.5,
    stock: 200,
    category: "horror",
    imglocal: "theshining.jpg",
    description:
      "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
  },
  {
    id: 13,
    title: "the exorcist (1973)",
    price: 5.6,
    stock: 200,
    category: "horror",
    imglocal: "theexorcist.jpg",
    description:
      "When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.",
  },
  {
    id: 14,
    title: "a nightmare on elm street",
    price: 5.8,
    stock: 200,
    imglocal: "anightmareonelmstreet.jpg",
    description:
      "Teenager Nancy Thompson must uncover the dark truth concealed by her parents after she and her friends become targets of the spirit of a serial killer with a bladed glove in their dreams, in which if they die, it kills them in real life.",
  },
  {
    id: 15,
    title: "carrie (1976)",
    price: 5.8,
    stock: 200,
    imglocal: "carrie.jpg",
    description:
      "Carrie White, a shy, friendless teenage girl who is sheltered by her domineering, religious mother, unleashes her telekinetic powers after being humiliated by her classmates at her senior prom.",
  },
  {
    id: 16,
    title: "scream (1996)",
    price: 5.4,
    stock: 200,
    imglocal: "scream.jpg",
    description:
      "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.",
  },
  {
    id: 17,
    title: "the silence of the lambs",
    price: 5.8,
    stock: 200,
    imglocal: "thesilenceofthelambs.jpg",
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
  },
  {
    id: 18,
    title: "poltergeist (1982)",
    price: 5.5,
    stock: 200,
    imglocal: "poltergeist.jpg",
    description: "A family's home is haunted by a host of demonic ghosts.",
  },
];

export default movies;
