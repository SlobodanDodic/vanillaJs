// Zadatak 1:
// Data su dva niza. U oba niza nalaze se nazivi odredjenih vocaka.
// Potrebno je formirati treci niz koji ce da sadrzi sve elemente prvog i drugog niza.

let vocke1 = ["banana", "kruska", "jabuka"];
let vocke2 = ["tresnja", "sljiva", "jagoda"];

let vockeSum = [];

for (let i = 0; i < vocke1.length; i++) {
  vockeSum.push(vocke1[i]);
}
for (let i in vocke2) {
  vockeSum.push(vocke2[i]);
}

console.log(vockeSum);

// Zadatak 2
// Data su dva niza i oba niza nalaze se nazivi odredjenih vocaka, medjutim moze se desiti da jedna vocka postoji i u prvom i u drugom nizu.
// Potrebno je formirati treci niz, koji ce imati samo jedinstvene vocke.

let vocke11 = ["banana", "kruska", "jabuka", "sljiva"];
let vocke22 = ["tresnja", "sljiva", "jagoda", "kupina", "malina"];

let vockeSumTwo = [];

for (let i in vocke11) {
  vockeSumTwo.push(vocke11[i]);
}
for (let i in vocke22) {
  if (!vockeSumTwo.includes(vocke22[i])) {
    vockeSumTwo.push(vocke22[i]);
  }
}
console.log(vockeSumTwo);

// Zadatak 3
// Dat je niz koji sadrzi automobile. Automobili mogu u zavisnosti od vrste motora, da budu na dizel ili benzin.
// Formirati dva niza, jedan koji ce da sadrzi automobile na dizel i drugi na benzin.
// Uociti u zadatom nizu, kako je moguce odrediti da li je auto na dizel ili na benzin.

let cars = [
  ["mercedes", "b"],
  ["opel", "d"],
  ["toyota", "d"],
  ["bmw", "b"],
  ["volvo", "d"],
];

let dizel = [];
let benzin = [];

for (let i in cars) {
  if (cars[i][1] === "d") {
    dizel.push(cars[i][0]);
  } else {
    benzin.push(cars[i][0]);
  }
}

console.log(dizel);
console.log(benzin);

// Zadatak 4 - Za zadate zaposlene ispisati svakog zaposlenog i koliko svaki zaposleni ima godina:
let zaposleni = [
  ["pera", "jova", "marko"],
  [28, 31, 19],
];

let employees = [];
for (let i = 0; i < zaposleni[0].length; i++) {
  employees.push(zaposleni[0][i] + " ima godina " + zaposleni[1][i]);
}
console.log(employees);

// Zadatak 5 - U spisku zaposlenih naci koliko jova ima godina:

// Zadatak 6 - Naci srednju vrednost godina zaposlenih:

// Zadatak 7 - Za zadate zaposlene izracunati i podesiti plate ostalih zaposlenih tako da:
// - tehnicar ima 70% plate inzenjera
// - doktor ima platu tehnicara + pola plate inzenjera
// - nakon toga proci kroz spisak zaposlenih i ispisati njihova imena, njihove radne pozicije i njihove plate

let employees2 = [
  ["pera", "jova", "marko"],
  [28, 31, 39],
  ["inzenjer", "tehnicar", "doktor"],
  [700, 0, 0],
];

let plata_inzenjer = 0;
let plata_tehnicar = 0;
let plata_doktor = 0;

for (let i = 0; i < employees2.length; i++) {
  for (let j = 0; j < employees2[i].length; j++) {
    if (employees2[i][j] == "inzenjer") {
      plata_inzenjer = employees2[i + 1][j];
      plata_tehnicar = Math.round(plata_inzenjer * 0.7);
      plata_doktor = Math.round(plata_tehnicar + plata_inzenjer * 0.5);
    }
  }
}

for (let i = 0; i < employees2.length; i++) {
  for (let j = 0; j < employees2[i].length; j++) {
    if (employees2[i][j] == "tehnicar") {
      employees2[i + 1][j] = plata_tehnicar;
    }
    if (employees2[i][j] == "doktor") {
      employees2[i + 1][j] = plata_doktor;
    }
  }
}

console.log(employees2);

// Zadatak 8 - Za zadatu listu zaposlenih izracunati
// - godinu rodjenja na osnovu trenutnih godina:
// - godinu rodjenja za svakog zaposlenog i dobijene rezultate smestiti u niz koji je potrebno ubaciti u let zaposleni.

let d = new Date();
let godina = d.getFullYear();
