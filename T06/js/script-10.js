// Zadatak 10:

// Napraviti program koji, uz pomoć forEach funkcije, prolazi kroz niz brojeva i
// ispisuje njihove stepenovane vrednosti (Funkcija Math.pow), a za vrednosti stepena koristiti drugi niz.

// Ukoliko niz1 sadrži [1, 2, 3, 4 , 5], niz2 sadrži vrednosti [2, 3, 4, 5, 6] ispis će biti:
// 1. 1
// 2. 1.4142135623730951
// 3. 1.7320508075688772
// 4. 2
// 5. 2.23606797749979

// Koristiti callback (funkciju proslediti for each):
// - funkcija koja treba da implementira zadatak treba da kao parametar primi callback funkciju za ispis,
// - pri pozivu kao callback funkciju proslediti ili console.log ili alert.

let niz1 = [1, 2, 3, 4, 5];
let niz2 = [2, 3, 4, 5, 6];

// Opcija 1:
niz1.forEach(cb);

function cb(broj, index) {
  for (let i in niz2) {
    if (index == i) {
      // rezultat kao iz primera, ali sa func Math.sqrt() umesto sa Math.pow():
      // console.log(`${index + 1}. ${Math.sqrt(broj, niz2[i])}`);
      console.log(`${index + 1}. ${Math.pow(broj, niz2[i])}`);
    }
  }
}
