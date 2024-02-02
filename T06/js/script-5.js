// Zadatak 5:

// Napraviti program koji ispisuje elemente dva niza koji su mi prosledjeni na sledeći način:
// niz1 = sadrži Pera, Djura, Mika
// niz2  = sadrži Peric, Djuric, Mikic

// Ispis će biti:
// 1. Pera Peric
// 2. Djura Djuric
// 3. Mika Mikic

// Koristiti callback:
// Funkcija koja treba da implementira zadatak treba da kao parametar primi callback funkciju za ispis,
// Pri pozivu kao callback funkciju proslediti ili console.log ili alert.

let niz1 = ["Pera", "Djura", "Mika"];
let niz2 = ["Peric", "Djuric", "Mikic"];

function ispisiElemente(niz1, niz2, ispisCb) {
  let noviIspis = "";

  niz1.forEach((element, index) => {
    noviIspis += `${index + 1}. ${element} ${niz2[index]} \n`;
  });

  ispisCb(noviIspis);
}

function consoleIspis(param) {
  console.log(param);
}

function alertIspis(param) {
  alert(param);
}

ispisiElemente(niz1, niz2, consoleIspis);

// ispisiElemente(niz1, niz2, alertIspis);
