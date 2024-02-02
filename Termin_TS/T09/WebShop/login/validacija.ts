function validiraj(forma: HTMLFormElement): boolean {
  if (ime == "pera") {
    forma.ime = ime;
  }
  if (ime == "mika") {
    forma.ime = ime;
  }

  // let cena1 = document.getElementById("itemCount1").value;
  // let cena2 = document.getElementById("itemCount2").value;
  // let cena3 = document.getElementById("itemCount3").value;

  // let suma = cena1 + cena2 + cena3;

  console.log(forma);
  //TODO:
  //Preuziteti ime i lozinku sa forme
  //Ukoliko je ime == "pera" && lozina == "peric"
  //Ili ime == "mika" && lozina == "mikic" forma je validna.
  //Ukoliko nije validna izmeniti html elemnt sa id-jem poruka da ima vrednost:
  //"Neispravno korisnicko ime i/ili lozinka"
}
