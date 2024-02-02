//Zadatak 1
// Prepraviti zadatak 3 sa termina 6 da koristi typescript:

// Napraviti program koji pravi pozdrave u zavisnosti od parametara koji su mu prosledjeni. 
// Ukoliko se funkciji prosledi npr "John", "Smith", "Man" program ce ispisati:
// Hello, Mr. John Smith.
// Koristiti callbacke.

function hello(name: string, surname: string, gender: string): void {
  if (gender == "Man") {
    console.log("Hello, Mr. " + name + " " + surname);
  } else {
    console.log("Hello, Ms. " + name + " " + surname);
  }
}

function sayHello(fullname: string, gender: string, helloFunction: (name: string, surname: string, gender: string) => void) {
  //Kao u zadatku 2. parametre dobijamo splitovanjem stringa
  var parts = fullname.split(" ");
  //provera tipa parametra helloFunction, ako je funkcija pozivamo (ova provera nije obavezna)
  if (typeof helloFunction === "function") {
    helloFunction(parts[0], parts[1], gender);
  }
}

sayHello("John Smith", "Man", hello);