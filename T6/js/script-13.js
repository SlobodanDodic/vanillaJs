// Zadatak 13:

// Za svaku boju koja je prisutna u nizu ispisati koliko karti procentualno su slike ("A", "J", "Q", "K").
const karte = [
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

let mapaA = {};
let mapaJ = {};
let mapaQ = {};
let mapaK = {};

const ukupnoTref = karte.filter((word) => word.boja === "tref").length;
const ukupnoHerc = karte.filter((word) => word.boja === "herc").length;
const ukupnoPik = karte.filter((word) => word.boja === "pik").length;
const ukupnoKaro = karte.filter((word) => word.boja === "karo").length;

// console.log(ukupnoTref, ukupnoHerc, ukupnoPik, ukupnoKaro);

for (let card of karte) {
  if (!(card.boja in mapaA)) {
    mapaA[card.boja] = 0;
  }
  if (!(card.boja in mapaJ)) {
    mapaJ[card.boja] = 0;
  }
  if (!(card.boja in mapaQ)) {
    mapaQ[card.boja] = 0;
  }
  if (!(card.boja in mapaK)) {
    mapaK[card.boja] = 0;
  }

  if (card.broj == "A") {
    mapaA[card.boja] += 1;
  } else if (card.broj == "J") {
    mapaJ[card.boja] += 1;
  } else if (card.broj == "Q") {
    mapaQ[card.boja] += 1;
  } else if (card.broj == "K") {
    mapaK[card.boja] += 1;
  }
}

let sumaA = 0;
for (let key in mapaA) {
  sumaA += mapaA[key];
}
// console.log(`Suma svih A u svim bojama: ${sumaA}`);

let sumaJ = 0;
for (let key in mapaJ) {
  sumaJ += mapaJ[key];
}
// console.log(`Suma svih J u svim bojama: ${sumaJ}`);

let sumaQ = 0;
for (let key in mapaQ) {
  sumaQ += mapaQ[key];
}
// console.log(`Suma svih Q u svim bojama: ${sumaQ}`);

let sumaK = 0;
for (let key in mapaK) {
  sumaK += mapaK[key];
}
// console.log(`Suma svih K u svim bojama: ${sumaK}`);

// console.log(mapaA);
// console.log(`Broj tref karti A: ${mapaA.tref}`);

// console.log(mapaJ);
// console.log(`Broj tref karti J: ${mapaJ.tref}`);

// console.log(mapaQ);
// console.log(`Broj tref karti Q: ${mapaQ.tref}`);

// console.log(mapaK);
// console.log(`Broj tref karti K: ${mapaK.tref}`);

// TREF Results:
console.log(`Procenat tref A u odnosu na ukupan broj svih tref karti: ${(mapaA.tref / ukupnoTref).toFixed(2) * 100}%`);
console.log(`Procenat tref J u odnosu na ukupan broj svih tref karti: ${(mapaJ.tref / ukupnoTref).toFixed(2) * 100}%`);
console.log(`Procenat tref Q u odnosu na ukupan broj svih tref karti: ${(mapaQ.tref / ukupnoTref).toFixed(2) * 100}%`);
console.log(`Procenat tref K u odnosu na ukupan broj svih tref karti: ${(mapaK.tref / ukupnoTref).toFixed(2) * 100}%`);

// HERC Results:
console.log(`Procenat herc A u odnosu na ukupan broj svih herc karti: ${(mapaA.herc / ukupnoHerc).toFixed(2) * 100}%`);
console.log(`Procenat herc J u odnosu na ukupan broj svih herc karti: ${(mapaJ.herc / ukupnoHerc).toFixed(2) * 100}%`);
console.log(`Procenat herc Q u odnosu na ukupan broj svih herc karti: ${(mapaQ.herc / ukupnoHerc).toFixed(2) * 100}%`);
console.log(`Procenat herc K u odnosu na ukupan broj svih herc karti: ${(mapaK.herc / ukupnoHerc).toFixed(2) * 100}%`);

// PIK Results:
console.log(`Procenat pik A u odnosu na ukupan broj svih pik karti: ${(mapaA.pik / ukupnoPik).toFixed(2) * 100}%`);
console.log(`Procenat pik J u odnosu na ukupan broj svih pik karti: ${(mapaJ.pik / ukupnoPik).toFixed(2) * 100}%`);
console.log(`Procenat pik Q u odnosu na ukupan broj svih pik karti: ${(mapaQ.pik / ukupnoPik).toFixed(2) * 100}%`);
console.log(`Procenat pik K u odnosu na ukupan broj svih pik karti: ${(mapaK.pik / ukupnoPik).toFixed(2) * 100}%`);

// KARO Results:
console.log(`Procenat karo A u odnosu na ukupan broj svih karo karti: ${(mapaA.karo / ukupnoKaro).toFixed(2) * 100}%`);
console.log(`Procenat karo J u odnosu na ukupan broj svih karo karti: ${(mapaJ.karo / ukupnoKaro).toFixed(2) * 100}%`);
console.log(`Procenat karo Q u odnosu na ukupan broj svih karo karti: ${(mapaQ.karo / ukupnoKaro).toFixed(2) * 100}%`);
console.log(`Procenat karo K u odnosu na ukupan broj svih karo karti: ${(mapaK.karo / ukupnoKaro).toFixed(2) * 100}%`);

// Prethodni radovi:

// let maxBojaA = "";
// let maxBrojA = -1;
// let counterA = 0;

// let maxBojaJ = "";
// let maxBrojJ = -1;
// let counterJ = 0;

// let maxBojaQ = "";
// let maxBrojQ = -1;
// let counterQ = 0;

// let maxBojaK = "";
// let maxBrojK = -1;
// let counterK = 0;

// for (let boja in mapaA) {
//   if (mapaA[boja] > maxBrojA) {
//     maxBrojA = mapaA[boja];
//     maxBojaA = boja;
//   }
// }

// for (let boja in mapaJ) {
//   if (mapaJ[boja] > maxBrojJ) {
//     maxBrojJ = mapaJ[boja];
//     maxBojaJ = boja;
//   }
// }

// for (let boja in mapaQ) {
//   if (mapaQ[boja] > maxBrojQ) {
//     maxBrojQ = mapaQ[boja];
//     maxBojaQ = boja;
//   }
// }

// for (let boja in mapaK) {
//   if (mapaK[boja] > maxBrojK) {
//     maxBrojK = mapaK[boja];
//     maxBojaK = boja;
//   }
// }

// for (let karta of karte) {
//   if (karta.boja == maxBojaA) {
//     counterA++;
//   }
//   if (karta.boja == maxBojaJ) {
//     counterJ++;
//   }
//   if (karta.boja == maxBojaQ) {
//     counterQ++;
//   }
//   if (karta.boja == maxBojaK) {
//     counterK++;
//   }
// }

// let procenatA = ((counterA / karte.length) * 100).toFixed(2);
// let procenatJ = ((counterJ / karte.length) * 100).toFixed(2);
// let procenatQ = ((counterQ / karte.length) * 100).toFixed(2);
// let procenatK = ((counterK / karte.length) * 100).toFixed(2);

// console.log(`Procentualno u odnosu na kompletan špil imamo ${procenatA}% ${maxBojaA} karti 'A'.`);
// console.log(`Procentualno u odnosu na kompletan špil imamo ${procenatJ}% ${maxBojaJ} karti 'J'.`);
// console.log(`Procentualno u odnosu na kompletan špil imamo ${procenatQ}% ${maxBojaQ} karti 'Q'.`);
// console.log(`Procentualno u odnosu na kompletan špil imamo ${procenatK}% ${maxBojaK} karti 'K'.`);
