// Zadatak 8:

// Napisati tri funkcije:
// 	- uvecaj: kao parametar prima broj, kao rezultat vraća taj broj pomnožen sa brojem 2
// 	- umanji: kao parametar prima broj, kao rezultat vraća taj broj podeljen sa brojem 2
// 	- map:
//  - - kao parametre prima niz brojeva i callback funkciju (callback funkcija treba da samo prima broj i vraća izmenjenu vrednost istog),
//  - - kao rezultat funkcija vraća novi niz brojeva dobijenih tako što je prosledjeni niz brojeva transformisan callback funkcijom
// 	Ključni tekst:
// 	- "vraća novi niz brojeva"
//  - inicijalno u map funkciji napraviti prazan niz koji će biti ujedno i povratna vrednost map funkcije i
//  - taj niz popuniti na osnovu vrednosti iz prvog niza i prosledjenje callback funkcije

// Testirati funkciju map nad nizom:
// let n = [1, 2, 3, 4, 5];

// U konzoli ispisati:
// - vrednost orginalnog niza,
// - rezultat map funkcije, kada se map funkciji pošalju orginalni niz i funkcija uvecaj,
// - rezultat map funkcije, kada se map funkciji pošalju orginalni niz i funkcija umanji,
// - rezultat map funkcije, kada se map funkciji pošalju orginalni niz i funkcija za korenovanje brojeva (Math.sqrt)

let n = [1, 2, 3, 4, 5];

function uvecaj(number) {
  return number * 2;
}

function umanji(number) {
  return number / 2;
}

function map(array, cb) {
  let noviNiz = [];

  for (value of array) {
    noviNiz.push(cb(value));
  }

  return noviNiz;
}

let resultUvecaj = map(n, uvecaj);
console.log(`Vrednost originalnog niza: ${n} \n Resultat map fn: ${resultUvecaj}`);

let resultUmanji = map(n, umanji);
console.log(`Vrednost originalnog niza: ${n} \n Resultat map fn: ${resultUmanji}`);

let resultKoren = map(n, function (number) {
  return Math.sqrt(number).toFixed(2);
});
console.log(`Vrednost originalnog niza: ${n} \n Resultat map fn: ${resultKoren}`);

// Opcija 2:
// let resultKoren = map(n, Math.sqrt);
