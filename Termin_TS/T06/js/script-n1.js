// Zadatak n1:

// Napraviti funkciju koja prima osnovu za sabiranje i vraca funkciju koja sabira broj sa osnovom za sabiranje.

// saberi5(3); //8
// saberi5(7); //13

// Closure Function:
// -- Closure je sposobnost funkcije da uskladišti promenljivu za dalju referencu čak i nakon što je izvršena.
// -- Closure omogućava funkciji da zadrži pristup promenljivama iz okoline u kojoj je bila kreirana, čak i kada je pozvana izvan te okoline.
// -- Korisno je u situacijama kada želimo sačuvati određeno stanje ili informacije koje će biti korišćene u budućim pozivima te funkcije.

function outerFn(osnova) {
  function innerFn(broj) {
    return broj + osnova;
  }
  return innerFn;
}

const saberi5 = outerFn(5);

console.log(saberi5(3));
console.log(saberi5(7));
