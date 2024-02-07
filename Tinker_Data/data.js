let knjige = [
  {
    id: 1,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Penguin Random House",
    genre: "Classic",
    price: 15.89,
    sold: 15,
  },
  {
    id: 2,
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "HarperCollins Publishers",
    genre: "Fiction",
    price: 12.99,
    sold: 10,
  },
  {
    id: 3,
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    publisher: "Simon & Schuster",
    genre: "Fantasy",
    price: 18.99,
    sold: 34,
  },
  {
    id: 4,
    name: "1984",
    author: "George Orwell",
    publisher: "Macmillan Publishers",
    genre: "Dystopian",
    price: 14.99,
    sold: 12,
  },
  {
    id: 5,
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publisher: "Penguin Random House",
    genre: "Fiction",
    price: 11.99,
    sold: 7,
  },
  {
    id: 6,
    name: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publisher: "HarperCollins Publishers",
    genre: "Fantasy",
    price: 19.99,
    sold: 63,
  },
  {
    id: 7,
    name: "The Da Vinci Code",
    author: "Dan Brown",
    publisher: "Simon & Schuster",
    genre: "Mystery",
    price: 16.99,
    sold: 18,
  },
  {
    id: 8,
    name: "Educated",
    author: "Tara Westover",
    publisher: "Macmillan Publishers",
    genre: "Memoir",
    price: 21.99,
    sold: 5,
  },
  {
    id: 9,
    name: "Little House on the Prairie Bookset",
    author: "Laura Elizabeth Ingalls Wilder",
    publisher: "Macmillan Publishers",
    genre: "Fiction",
    price: 122.67,
    sold: 5,
  },
];

let bolnice = [
  {
    naziv: "Jovan Jovanovic Zmaj",
    grad: "Novi Sad",
    pacijenti: [
      {
        id: 1,
        ime: "Pera",
        prezime: "Peric",
        telesnaTemperatura: 36.4,
        pcrTest: "Pozitivan",
        ostaliSimptomi: [],
      },
      {
        id: 2,
        ime: "Mika",
        prezime: "Mikic",
        telesnaTemperatura: 37.2,
        pcrTest: "Negativan",
        ostaliSimptomi: ["kasalj", "bol u grlu", "glavobolja"],
      },
      {
        id: 3,
        ime: "Zika",
        prezime: "Zikic",
        telesnaTemperatura: 37.4,
        pcrTest: "Nije radio",
        ostaliSimptomi: ["kasalj", "bol u grlu", "glavobolja"],
      },
      {
        id: 4,
        ime: "Jovan",
        prezime: "Jovanovic",
        telesnaTemperatura: 36.4,
        pcrTest: "Pozitivan",
        ostaliSimptomi: ["anosmia", "ageusia"],
      },
      {
        id: 5,
        ime: "Marko",
        prezime: "Markovic",
        telesnaTemperatura: 38.0,
        pcrTest: "Pozitivan",
        ostaliSimptomi: ["bol u grlu", "kasalj", "glavobolja"],
      },
      {
        id: 6,
        ime: "Nikola",
        prezime: "Nikolic",
        telesnaTemperatura: 38.0,
        pcrTest: "Pozitivan",
        ostaliSimptomi: [],
      },
      {
        id: 7,
        ime: "Milan",
        prezime: "Milanovic",
        telesnaTemperatura: 38.0,
        pcrTest: "Nije radio",
        ostaliSimptomi: [],
      },
      {
        id: 8,
        ime: "Djordje",
        prezime: "Djordjevic",
        telesnaTemperatura: 38.9,
        pcrTest: "Nije radio",
        ostaliSimptomi: ["bol u grlu", "kasalj", "glavobolja", "gusenje"],
      },
      {
        id: 9,
        ime: "Aleksandar",
        prezime: "Aleksandrovi",
        telesnaTemperatura: 38.9,
        pcrTest: "Pozitivan",
        ostaliSimptomi: [],
      },
      {
        id: 10,
        ime: "Marijan",
        prezime: "Marijanovic",
        telesnaTemperatura: 35.9,
        pcrTest: "Pozitivan",
        ostaliSimptomi: [],
      },
    ],
  },
  {
    naziv: "KBC Zvezdara",
    grad: "Beograd",
    pacijenti: [
      {
        id: 1,
        ime: "Pera",
        prezime: "Mikic",
        telesnaTemperatura: 36.4,
        pcrTest: "Pozitivan",
        ostaliSimptomi: ["glavobolja"],
      },
      {
        id: 2,
        ime: "Mika",
        prezime: "Peric",
        telesnaTemperatura: 37.2,
        pcrTest: "Pozitivan",
        ostaliSimptomi: ["kasalj", "bol u grlu", "glavobolja"],
      },
      {
        id: 3,
        ime: "Zika",
        prezime: "Jovanovic",
        telesnaTemperatura: 37.4,
        pcrTest: "Nije radio",
        ostaliSimptomi: ["kasalj", "bol u grlu", "glavobolja"],
      },
      {
        id: 4,
        ime: "Jovan",
        prezime: "Zikic",
        telesnaTemperatura: 37.4,
        pcrTest: "Nije radio",
        ostaliSimptomi: ["anosmia", "ageusia"],
      },
      {
        id: 5,
        ime: "Marko",
        prezime: "Nikolic",
        telesnaTemperatura: 38.0,
        pcrTest: "Pozitivan",
        ostaliSimptomi: ["bol u grlu", "kasalj", "glavobolja"],
      },
      {
        id: 6,
        ime: "Nikola",
        prezime: "Markovic",
        telesnaTemperatura: 38.0,
        pcrTest: "Pozitivan",
        ostaliSimptomi: [],
      },
      {
        id: 7,
        ime: "Milan",
        prezime: "Djordjevic",
        telesnaTemperatura: 38.0,
        pcrTest: "Pozitivan",
        ostaliSimptomi: [],
      },
      {
        id: 8,
        ime: "Djordje",
        prezime: "Milanovic",
        telesnaTemperatura: 38.9,
        pcrTest: "Nije radio",
        ostaliSimptomi: ["bol u grlu", "kasalj", "glavobolja", "gusenje"],
      },
    ],
  },
  {
    naziv: "KC Nis",
    grad: "Nis",
    pacijenti: [
      {
        id: 1,
        ime: "Pera",
        prezime: "Jovanovic",
        telesnaTemperatura: 36.4,
        pcrTest: "Negativan",
        ostaliSimptomi: ["glavobolja"],
      },
      {
        id: 2,
        ime: "Mika",
        prezime: "Zikic",
        telesnaTemperatura: 37.2,
        pcrTest: "Negativan",
        ostaliSimptomi: ["kasalj", "bol u grlu", "glavobolja"],
      },
      {
        id: 3,
        ime: "Zika",
        prezime: "Mikic",
        telesnaTemperatura: 37.4,
        pcrTest: "Nije radio",
        ostaliSimptomi: ["kasalj", "bol u grlu", "glavobolja"],
      },
      {
        id: 4,
        ime: "Jovan",
        prezime: "Peric",
        telesnaTemperatura: 37.4,
        pcrTest: "Nije radio",
        ostaliSimptomi: ["anosmia", "ageusia"],
      },
      {
        id: 5,
        ime: "Marko",
        prezime: "Djordjervic",
        telesnaTemperatura: 38.0,
        pcrTest: "Pozitivan",
        ostaliSimptomi: [],
      },
    ],
  },
  {
    naziv: "Dr Dragisa Misovic",
    grad: "Beograd",
    pacijenti: [
      {
        id: 1,
        ime: "Aleksandar",
        prezime: "Marijanovic",
        telesnaTemperatura: 37.9,
        pcrTest: "Pozitivan",
        ostaliSimptomi: [],
      },
      {
        id: 2,
        ime: "Marijan",
        prezime: "Aleksandrovi",
        telesnaTemperatura: 35.9,
        pcrTest: "Pozitivan",
        ostaliSimptomi: [],
      },
    ],
  },
];

let autoSkole = [
  {
    naziv: "Auto škola Prvi korak",
    instruktori: [
      {
        ime: "Marko",
        prezime: "Marković",
        jmbg: "0101999800101",
      },
      {
        ime: "Petar",
        prezime: "Petrović",
        jmbg: "1212000800101",
      },
    ],
    ispiti: [
      {
        imeKandidata: "Jovan",
        prezimeKandidata: "Jovanović",
        jmbgKandidata: "1212000800111",
        instruktor: { ime: "Marko", prezime: "Marković", jmbg: "0101999800100" },
        nacinPolaganja: "Praktično",
        datum: "2023-12-20",
        brojBodova: 85,
      },
      {
        imeKandidata: "Ana",
        prezimeKandidata: "Anić",
        jmbgKandidata: "1212000800112",
        instruktor: { ime: "Petar", prezime: "Petrović", jmbg: "1212000800100" },
        nacinPolaganja: "Teorijsko",
        datum: "2023-12-21",
        brojBodova: 90,
      },
    ],
  },
  {
    naziv: "Auto škola L Team",
    instruktori: [
      {
        ime: "Nikola",
        prezime: "Kokotovic",
        jmbg: "0101999800100",
      },
      {
        ime: "Mitar",
        prezime: "Mitrandir",
        jmbg: "1212000800100",
      },
    ],
    ispiti: [
      {
        imeKandidata: "Jokan",
        prezimeKandidata: "Jokanovic",
        jmbgKandidata: "1212000800112",
        instruktor: { ime: "Nikola", prezime: "Kokotovic", jmbg: "0101999800100" },
        nacinPolaganja: "Praktično",
        datum: "2023-12-20",
        brojBodova: 100,
      },
      {
        imeKandidata: "Ana",
        prezimeKandidata: "Anić",
        jmbgKandidata: "1212000800112",
        instruktor: { ime: "Mitar", prezime: "Mitrandir", jmbg: "1212000800100" },
        nacinPolaganja: "Teorijsko",
        datum: "2023-12-21",
        brojBodova: 70,
      },
    ],
  },
];
