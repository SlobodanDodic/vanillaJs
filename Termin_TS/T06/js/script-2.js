// Zadatak 2

// Izmeniti happy birthday zadatak, tako da sada upućuje generičku čestitku za proizvoljnu osobu, koristiti callbacke:
// -Napisati funkciju generickaCestitka koja prima dva parametra: person (osoba kojoj se čestita), event (šta se osobi čestita)
// -Funkcija generickaCestitka u sebi sadrži document.write-ove iz happy birthday zadatka izmenjene tako da koriste parametre funkcije
// -Napisati funkciju greeter, funkcija greeter treba da bude funkcija višeg reda, prima dva parametra:
// - text (podaci za prosledjivanje callback funkciji) i callback (callback funkcija)
// -Parametar tekst je string koji u sebi sadrži osobu kojoj treba da se česita i event koji treba da se čestita odvojen zarezom npr: "pera,birthday"
// -Funkcija greeter u posebne promenljive iz parametra text izvlači potrebne podatke,
// - proverava da li je parametra callback funkcija (uz pomoc typeof) i sa tim podacima poziva callback funkciju
// -Pozvati greeter funkciju
// -Napisati funkciju generickaCestitkaKonzola, funkcija treba da bude identična funkciji generickaCestitka
// - sa razlikom da se umesto document.write u njoj koristi console.log funkcija

// function generickaCestitka(person, event) {
//   document.write(`Happy ${event} to you.<br>`);
//   document.write(`Happy ${event} to you.<br>`);
//   document.write(`Happy ${event} dear ${person}.<br>`);
//   document.write(`Happy ${event} to you.<br>`);
// }
// generickaCestitka("Piter", "new year");

function greeter(txt, cb) {
  let name = txt.split(",")[0];
  let event = txt.split(",")[1];

  if (typeof cb === "function") {
    cb(name, event);
  }
}

function generickaCestitkaKonzola(person, event) {
  console.log(`Happy ${event} to you.<br>`);
  console.log(`Happy ${event} to you.<br>`);
  console.log(`Happy ${event} dear ${person}.<br>`);
  console.log(`Happy ${event} to you.<br>`);
}
generickaCestitkaKonzola("Piter", "new year");
