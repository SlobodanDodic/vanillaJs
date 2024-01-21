// Zadatak n1:

// Napraviti funkciju koja prima osnovu za sabiranje i vraca funkciju koja sabira broj sa osnovom za sabiranje.

// saberi5(3); //8
// saberi5(7); //13

// Closure Function:

function outerFn(osnova) {
  function innerFn(broj) {
    return broj + osnova;
  }
  return innerFn;
}

const saberi5 = outerFn(5);

console.log(saberi5(3));
console.log(saberi5(7));
