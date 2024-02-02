/// <reference path="kamera.ts" />
/// <reference path="videokamera.ts" />

let k = new Kamera(5, 10, 0);
console.log(k)
console.log(k.freeSpace)
console.log(k.photoCounter)
console.log(k.slikaj())
console.log(k.freeSpace)
console.log(k.photoCounter)
console.log(k.slikaj())
console.log(k.freeSpace)
console.log(k.photoCounter)
console.log(k.slikaj())

let vk = new VideoKamera(5, 10, 0, 0);
console.log(vk.freeSpace)
console.log(vk.photoCounter)
console.log(vk.snimaj(10));
console.log(vk.freeSpace)
console.log(vk.photoCounter)
console.log(vk.snimaj(10));
console.log(vk.freeSpace)
console.log(vk.photoCounter)
console.log(vk.snimaj(10));


//Zadatak 1

// Napisati klasu Kamera koja ima polja: megaPikseli (number), freeSpace (number) i photoCounter (number). U klasi 
// implementirati:
// - Konstruktor sa parametrima
// - Getere i setere
// - Metod bool slikaj() - umanjuje vrednost polja freeSpace za vrednost polja megaPikseli pod uslovom da ima dovoljno 
//   memorije i u tom slučaju vraća true. U suprotnom, metod vraća false. Svaki uspesni poziv metode slikaj povecava photoCounter za jedan.
// Iz klase Kamera izvesti klasu VideoKamera koja sadrži polje videoCounter (number). U klasi implementirati:
// - Konstruktor sa parametrima
// - Geter i stere
// - Metod bool snimaj(number sekunde) - umanjuje vrednost polja freeSpace za proizvod vrednosti polja megaPikseli i vrednosti parametra sekunde pod uslovom da ima dovoljno memorije i u tom slučaju vraća true. 
//   U suprtonom, metod vraća false. Svaki uspesni poziv metode snimaj uvecava vrednost polja videoCounter za jedan.
