// Zadatak p3

// Prosiriti zadatak sa webshopom tako da se omoguci login dve vrste korisnika.
// Prva vrsta korisnika je MaloprodajniKorisnik, a druga VeleprodajniKorisnik.

// VeloprodajniKorisnik i MaloprodajniKorisnik nasledjuju korisnika koji kao parametre ima ime i prezime.

// Kada korisnik doda odredjeni proizvod u korpu na stranici treba da mu se ispise ukupna cena tih proizvoda,
// uz to da veleprodajni korisnik ima popust od 15%.

//

// Prilikom ucitavanja stranice uzimamo parametre iz browsera gde nam se nalaze korisnicko ime i lozinka
window.onload = function () {
  let podaci = window.location.search.substring(1).split("&");
  if (podaci == "") {
    window.location = "login.html";
  }
  // Obradjujemo te podatke tako da izvucemo i korisnicko ime i lozinku
  let ime = podaci[0].split("=")[1];
  let lozinka = podaci[1].split("=")[1];

  // U zavisnosti od korisnickog imena kreiramo maloprodajnog ili veleprodajnog korisnika
  if (ime == "pera") {
    maloprodajniKorisnik.ime = ime;
  }
  if (ime == "mika") {
    veleprodajniKorisnik.ime = ime;
  }

  // let cena1 = document.getElementById("itemCount1").value;
  // let cena2 = document.getElementById("itemCount2").value;
  // let cena3 = document.getElementById("itemCount3").value;

  // let suma = cena1 + cena2 + cena3;

  console.log(maloprodajniKorisnik);

  //Poziv metode stampaj
  korisnik.stampaj();
};
