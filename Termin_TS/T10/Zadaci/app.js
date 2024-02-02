// 1. Za zadati niz brojeva, uz pomoc map funkcije, napraviti niz kvadratnih korena tih brojeva.
let arr1 = [1, 2, 3, 4, 5];
let arr1Sq = arr1.map((el) => el * Math.sqrt(el));
console.log(arr1Sq);

// 2. Pomnoziti sve vrednosti niza pomocu reduce funkcije.
let arr2 = [2, 3, 4];
let arr2Red = arr2.reduce((prev, curr) => prev * curr, 1);
console.log(arr2Red);

// 3. Konkatenirati stringove niza pomocu reduce funkcije.
let arr3 = ["x", "y", "z"];
let arr3Red = arr3.reduce((prev, curr) => prev + curr);
console.log(arr3Red);

// 4. Napisati funkciju koja prima niz imena i vraca cestitku (koristiti reduce kao deo funkcije).
// 	output: 'Congratulations Steve, Sally, George, Gina!'
let arr4 = ["Steve", "Sally", "George", "Gina"];

let arr4Red = arr4.reduce((prev, curr, i, arr) => {
  if (i === arr.length - 1) {
    x = "!";
  } else {
    x = ", ";
  }
  return prev + (curr + x);
}, "Congratulations ");

console.log(arr4Red);

// 5. Iskorititi map funkciju za transformisanje niza items na niz stringova koji sadrzi samo name predmeta.
var items = [
  { name: "ball", points: 2 },
  { name: "coin", points: 3 },
  { name: "candy", points: 4 },
];

let item = items.map((item) => {
  return item.name;
});

console.log(item);

// 6. Primeniti filter funkciju na nizu vehicles kako bi vratili niz vozila cija imena pocinju sa slovom 'C'.
var vehicles = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
  { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
  { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
];

let vehicle = vehicles.filter((vehicle) => vehicle.model.charAt(0) === "C");
console.log(vehicle);

// 7. Napisati funkciju koja prima dva parametra: niz stringova i upit (string).
// Funkcija treba da vrati novi niz stringova ciji elementi sadrze upit u sebi kao podstring.
// Funkcija treba da bude case insensitive. Koristit funkciju filter u implementaciji.
// output: ['apple', 'grapes']

let str = "Ap";
let niz = ["apple", "banana", "grapes", "mango", "orange"];
function twoParams(arrs, str) {
  str = str.toLowerCase();
  return arrs.filter((arr) => arr.toLowerCase().includes(str));
}
console.log(twoParams(niz, str));

// 8. Kombinovanjem funkcija filter, map i reduce izracunati prosecnu vrednost svih vozila koja su tipa 'suv'.
// output: 33399

let sumAvg = vehicle
  .filter((vehicle) => vehicle.type === "suv")
  .map((vehicle) => vehicle.price)
  .reduce((p, e, i, a) => p + e / a.length, 0);
console.log(sumAvg);

// 9. Za dati niz brojeva:
// a) pronaci uz pomoc filter funkcije, sve brojeve koji su deljivi sa 3
// b) pronaci uz pomoc filter funkcije, sve parne pozitivne brojeve

let n = [-21, -17, -3, -1, 2, 3, 5, 8, 9, 12, 14, 15];

let even = n.filter((el) => el % 2 === 0);
let three = n.filter((el) => el % 3 === 0);
console.log(even);
console.log(three);

// 10. Za dati niz filmova, vartiti niz title-ova svih filmova ciji je rating veci od 8.5. Koristiti filter i map funkciju.
let filmovi = [
  {
    id: 19404,
    original_title: "दिलवाले दुल्हनिया ले जायेंगे",
    title: "Dilwale Dulhania Le Jayenge",
    release_date: "1995-10-20",
    rating: 9.1,
  },
  {
    id: 278,
    original_title: "The Shawshank Redemption",
    title: "The Shawshank Redemption",
    release_date: "1994-09-23",
    rating: 8.6,
  },
  {
    id: 238,
    original_title: "The Godfather",
    title: "The Godfather",
    release_date: "1972-03-14",
    rating: 8.6,
  },
  {
    id: 372058,
    original_title: "君の名は。",
    title: "Your Name.",
    release_date: "2016-08-26",
    rating: 8.6,
  },
  {
    id: 324857,
    original_title: "Spider-Man: Into the Spider-Verse",
    title: "Spider-Man: Into the Spider-Verse",
    release_date: "2018-12-07",
    rating: 8.5,
  },
  {
    id: 424,
    original_title: "Schindler's List",
    title: "Schindler's List",
    release_date: "1993-12-15",
    rating: 8.5,
  },
  {
    id: 240,
    original_title: "The Godfather: Part II",
    title: "The Godfather: Part II",
    release_date: "1974-12-20",
    rating: 8.5,
  },
  {
    id: 129,
    original_title: "千と千尋の神隠し",
    title: "Spirited Away",
    release_date: "2001-07-20",
    rating: 8.5,
  },
  {
    id: 497,
    original_title: "The Green Mile",
    title: "The Green Mile",
    release_date: "1999-12-10",
    rating: 8.4,
  },
  {
    id: 637,
    original_title: "La vita è bella",
    title: "Life Is Beautiful",
    release_date: "1997-12-20",
    rating: 8.4,
  },
];

let rating = filmovi.filter((film) => film.rating > 8.5).map((film) => film.title);
console.log(rating);

// 11. Za niz filmova iz zadatka 10, vratiti niz objekata koje sadrze samo title i release_date. Koristiti map funkciju.

let titleDate = filmovi.map((film) => ({ title: film.title, release_date: film.release_date }));
console.log(titleDate);

// 12. Za niz filmova iz zadatka 10, uz pomoc reduce funkcije, izracunati prosecan rating.
let avgRating = filmovi.reduce((acc, curr, i, array) => acc + curr.rating / array.length, 0);
console.log(avgRating.toFixed(2));

// 14. Dat je niz karti za igranje: Uz pomoc reduce funkcije grupisati karte po boji.
let karte = [
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
];

let cardsByColor = karte.reduce((p, el) => {
  if (!(el.boja in p)) {
    p[el.boja] = [];
  }
  p[el.boja].push(el);
  return p;
}, {});
console.log(cardsByColor);

// 15. Dat je niz nizova brojeva, uz pomoc reduce funkcije pretvoriti ga u niz brojeva (flatten).
// Resenje je moguce uz pomoc spread sintakse (...).

let nizNizova = [[1, 2, 3], [4, 5], [6, 7, 8], [9], [10, 11]];
console.log(nizNizova.flat());

let flatArray = [].concat.apply([], nizNizova);
console.log(flatArray);

let flatArraySpread = [].concat(...nizNizova);
console.log(flatArraySpread);

let flatArrayReduce = nizNizova.reduce((acc, curVal) => acc.concat(curVal), []);
console.log(flatArrayReduce);

// 16. Za niz brojeva pronaci sumu kvadrata parnih brojeva.
let arr16 = [1, 2, 3, 4, 5];
let arr16Res = arr16
  .filter((x) => x % 2 === 0)
  .map((x) => x * x)
  .reduce((acc, x) => acc + x);
console.log(arr16Res);

// 17. Dat je niz ocena studenata. Pronaci prosecnu ocenu studenata koji su polozili predmet.
// Student je polozio predmet ukoliko mu je ocena veca od 5.

let studenti = [
  { ime: "Pera", ocena: 8 },
  { ime: "Mika", ocena: 5 },
  { ime: "Zika", ocena: 10 },
  { ime: "Marko", ocena: 4 },
  { ime: "Darko", ocena: 9 },
];

let pass = studenti.filter((s) => s.ocena > 5).reduce((acc, curr, i, arr) => acc + curr.ocena / arr.length, 0);
console.log(pass);
