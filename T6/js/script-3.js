// Zadatak 3:

// Napraviti program koji pravi pozdrave u zavisnosti od parametara koji su mu prosledjeni.
// - Ukoliko se funkciji prosledi npr "John", "Smith", "Man" program ce ispisati: Hello, Mr. John Smith.

// Koristiti callbacke:
// -Napisati funkciju hello, funkcija prima tri parametra:
//  - name, surname, gender (kao vrednost parametra gender šalje se string "Man" ili "Woman").
//  Funkcija na osnovu parametra gender ispisuje pozdrav sa Mr. ili Ms.

// -Napisati funkciju višeg reda sayHello, funkcija prima tri parametra: fullname (puno ime osobe, npr: "John Smith"), gender, helloFunction.
// - helloFunction je callback funkcija, u pozivu sayHello kao helloFunction proslediti hello funkciju.

// -Funkcija sayHello poziva helloFunction tako što joj prosledjuje tri parametra
// - ime (dobijeno iz fullname parametra), prezime (dobijeno iz fullname parametra) i gender.

function hello(name, surname, gender) {
  let title = "";

  if (gender === "Man") {
    title = "Mr.";
  } else if (gender === "Woman") {
    title = "Ms.";
  } else {
    title = "";
  }
  console.log(`Hello, ${title} ${name} ${surname}`);
}

hello("John", "Smith", "Man");

function sayHello(fullname, gender, helloFunction) {
  let name = fullname.split(" ")[0];
  let surname = fullname.split(" ")[1];

  helloFunction(name, surname, gender);
}

sayHello("Galadriel Elves", "Woman", hello);
