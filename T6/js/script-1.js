// Zadatak 1:

var karte = [
  { boja: "tref", broj: "4" },
  { boja: "herc", broj: "4" },
  { boja: "tref", broj: "1" },
  { boja: "herc", broj: "J" },
  { boja: "herc", broj: "1" },
  { boja: "pik", broj: "4" },
  { boja: "karo", broj: "Q" },
  { boja: "karo", broj: "9" },
  { boja: "herc", broj: "A" },
  { boja: "karo", broj: "9" },
  { boja: "tref", broj: "1" },
  { boja: "herc", broj: "1" },
  { boja: "pik", broj: "J" },
  { boja: "pik", broj: "4" },
  { boja: "karo", broj: "9" },
  { boja: "pik", broj: "3" },
  { boja: "pik", broj: "1" },
  { boja: "tref", broj: "6" },
  { boja: "pik", broj: "7" },
  { boja: "karo", broj: "8" },
  { boja: "pik", broj: "3" },
  { boja: "tref", broj: "7" },
  { boja: "karo", broj: "J" },
  { boja: "karo", broj: "2" },
  { boja: "herc", broj: "A" },
  { boja: "tref", broj: "7" },
  { boja: "pik", broj: "A" },
  { boja: "pik", broj: "3" },
  { boja: "tref", broj: "K" },
  { boja: "herc", broj: "A" },
  { boja: "karo", broj: "2" },
  { boja: "tref", broj: "J" },
  { boja: "herc", broj: "J" },
  { boja: "herc", broj: "K" },
  { boja: "herc", broj: "4" },
  { boja: "tref", broj: "9" },
  { boja: "herc", broj: "7" },
  { boja: "karo", broj: "9" },
  { boja: "karo", broj: "2" },
  { boja: "herc", broj: "8" },
  { boja: "tref", broj: "3" },
  { boja: "herc", broj: "3" },
  { boja: "tref", broj: "4" },
  { boja: "karo", broj: "A" },
  { boja: "pik", broj: "7" },
  { boja: "tref", broj: "10" },
  { boja: "herc", broj: "Q" },
  { boja: "karo", broj: "1" },
  { boja: "herc", broj: "4" },
  { boja: "herc", broj: "9" },
  { boja: "pik", broj: "Q" },
  { boja: "herc", broj: "K" },
  { boja: "karo", broj: "J" },
  { boja: "karo", broj: "Q" },
  { boja: "herc", broj: "1" },
  { boja: "pik", broj: "6" },
  { boja: "herc", broj: "9" },
  { boja: "herc", broj: "6" },
  { boja: "herc", broj: "9" },
  { boja: "tref", broj: "5" },
  { boja: "herc", broj: "J" },
  { boja: "tref", broj: "7" },
  { boja: "karo", broj: "A" },
  { boja: "herc", broj: "2" },
  { boja: "herc", broj: "10" },
  { boja: "pik", broj: "4" },
  { boja: "tref", broj: "3" },
  { boja: "pik", broj: "Q" },
  { boja: "pik", broj: "10" },
  { boja: "herc", broj: "2" },
  { boja: "herc", broj: "3" },
  { boja: "pik", broj: "2" },
  { boja: "pik", broj: "3" },
  { boja: "herc", broj: "8" },
  { boja: "herc", broj: "4" },
  { boja: "pik", broj: "3" },
  { boja: "pik", broj: "8" },
  { boja: "pik", broj: "9" },
  { boja: "pik", broj: "1" },
  { boja: "herc", broj: "6" },
  { boja: "karo", broj: "4" },
  { boja: "tref", broj: "J" },
  { boja: "karo", broj: "3" },
  { boja: "herc", broj: "1" },
  { boja: "herc", broj: "10" },
  { boja: "pik", broj: "6" },
  { boja: "herc", broj: "4" },
  { boja: "herc", broj: "Q" },
  { boja: "karo", broj: "10" },
  { boja: "karo", broj: "K" },
  { boja: "herc", broj: "5" },
  { boja: "tref", broj: "2" },
  { boja: "pik", broj: "1" },
  { boja: "tref", broj: "4" },
  { boja: "tref", broj: "7" },
  { boja: "karo", broj: "7" },
  { boja: "herc", broj: "J" },
  { boja: "herc", broj: "4" },
  { boja: "pik", broj: "1" },
  { boja: "herc", broj: "2" },
  { boja: "karo", broj: "Q" },
  { boja: "herc", broj: "Q" },
  { boja: "pik", broj: "4" },
  { boja: "tref", broj: "10" },
];

// Dat je niz objekata karti za igranje. U nizu je dozvoljeno da postoje duplikati.
// Pronaci koliko procenutalno ima karti u boji koja najvise puta ima ponovljenu kartu sa brojem 7.

// Npr. ukoliko imamo dve herc sedmice, jednu tref sedmicu i 3 pik sedimice potrebno je prikazati koliko
// procentualno imamo pik karta u nizu (suma svih pik karti podeljena sa ukupnom kolicinom karti).

let mapa = {};

for (card of karte) {
  if (!(card.boja in mapa)) {
    mapa[card.boja] = 0;
  }

  if (card.broj == "7") {
    mapa[card.boja] += 1;
  }
}

console.log(mapa);

let maxBoja = "";
let maxBroj = -1;

for (let boja in mapa) {
  if (mapa[boja] > maxBroj) {
    maxBroj = mapa[boja];
    maxBoja = boja;
  }
}

console.log(maxBoja);
console.log(maxBroj);

let counter = 0;
for (let karta of karte) {
  if (karta.boja == maxBoja) {
    counter++;
  }
}

let procenat = ((counter / karte.length) * 100).toFixed(2);

console.log(`Procentualno imamo ${procenat}% ${maxBoja} karti.`);
