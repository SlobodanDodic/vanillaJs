// Zadatak 6:

// Pokrenuti zadatak 6 i razmotriti ispis u konzoli koji se dešava na klik dugmeta.
// Izmeniti zadatak tako da se ispisuje odgovarajući indeks dugmeta.

window.onload = function () {
  let nodes = document.getElementsByTagName("button");

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener("click", function () {
      console.log("Kliknuo si na dugme #" + i);
    });
  }
};
