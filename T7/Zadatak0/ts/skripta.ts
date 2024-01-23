//Zadatak 0
// Prepraviti JavaScript kod u folderu Zadatak 0 da koristi typescript.
// Pri selektovanju elemenata koristiti TypeAssertion za odgovarajuce DOM Elemente.

window.onload = function () {
  document.getElementById("forma").addEventListener("submit", function (event) {
    let forma = document.getElementById("forma");
    let ime = document.getElementById("ime") as HTMLInputElement;
    let prezime = document.getElementById("prezime") as HTMLInputElement;
    let jmbg = document.getElementById("jmbg") as HTMLInputElement;
    let registracija = document.getElementById("registracija") as HTMLInputElement;
    let flag = true;

    if (ime.value.trim() == "" || ime.value[0] != ime.value[0].toUpperCase()) {
      flag = false;
    }
    if (prezime.value.trim() == "" || prezime.value[0] != prezime.value[0].toUpperCase()) {
      flag = false;
    }
    if (jmbg.value.trim() == "" || jmbg.value.length != 13) {
      flag = false;
    }
    if (registracija.value.trim() == "") {
      flag = false;
    }
    if (!flag) {
      event.preventDefault();
    }
  });
};