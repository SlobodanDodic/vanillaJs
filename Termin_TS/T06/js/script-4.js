// Zadatak 4:

// Napraviti program koji ispisuje elemente niza koji su mi prosledjeni na sledeći način:
// Ukoliko niz sadrži Pera, Djura, Mika ispis će biti:
// 1. Pera
// 2. Djura
// 3. Mika
// Koristiti callbacke: funkcija koja treba da implementira zadatak treba da kao parametar primi callback funkciju za ispis,
// pri pozivu kao callback funkciju proslediti ili console.log ili alert.

let spisak = ["Pera", "Djura", "Mika"];

function arrayFn(array, cb) {
  let call = "";

  for (let i in array) {
    call += `${Number(i) + 1} ${array[i]} \n`;
  }

  cb(call);
}

arrayFn(spisak, console.log);
arrayFn(spisak, alert);
