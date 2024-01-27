/// <reference path="tehnicar.ts" />
/// <reference path="inzenjer.ts" />
/// <reference path="doktor.ts" />


// Zadatak 2:

// Na osnovu niza napraviti klase (Radnik i podklase Inzenjer, Tehnicar, Doktor).
// Onemoguciti instanciranje klase Radnik, svi radnici bi umesto atributa plata trebali da imaju atribut osnovica. 
// var zaposleni = [
//   ["pera",      "jova",     "marko"],
//   [28,          31,         39],
//   ["inzenjer",  "tehnicar", "doktor"],
//   [700,         0,        0]
// ];

// Za zadate zaposlene implementirati da se plata prikazuje tako da: 
// - tehnicar ima osnovicu
// - izenjer ima osnovicu + 12 %
// - doktor ima platu osnovica + 13%

// Napomena: Ispis plata vrsiti putem gettera za platu

let t = new Tehnicar("Enzo", 20, 100);
let i = new Inzenjer("ing Enzo", 30, 100);
let d = new Doktor("Dr Enzo", 40, 100);

console.log(t.plata.toFixed(2));
console.log(i.plata.toFixed(2));
console.log(d.plata.toFixed(2));

// Zadatak 3:

// Napisati funkciju koja pronalazi srednju vrednost godina svih radnika. 
let obj = [];
obj.push(t);
obj.push(i);
obj.push(d);

d.avgAge(obj);

// Zadatak 4:

// Napisati metodu koja za radnika racuna godinu rodjenja na osnovu trenutnih godina
// Napomena: Za dobijanje trenutne godine mozete iskoristiti sledeci kod
// var d = new Date();
// var godina = d.getFullYear();

t.dateOfBirth();
i.dateOfBirth();
d.dateOfBirth();