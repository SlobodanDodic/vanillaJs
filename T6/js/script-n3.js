// Napisati funkciju klikniMe, funkcija klikniMe se poziva kao rezultat klika na dugme maloprodajni i dugme veleprodajni
// povezati onclick dogadjaj dugmica sa funkcijom klikniMe. Poziv funkcije klikni me se vrsi iz index.html stranice!

// Kao parametar funkcija klikniMe prima callback funkciju.
// Za klik na dugme maloprodajni prosledjeni funkcija bi trebala da bude funkcija proveraMaloprodaja iz prethodno napisanog modula.
// Za klik na dugme veleprodajni prosledjeni funkcija bi trebala da bude funkcija proveraVeleprodaja iz prethodno napisanog modula.

// Funkcija klikni me preuzima vrednost input polja sa id-jem kolicina, i proverava da li je unet broj.
// Ukoliko nije unet broj u input polje u polje sa id-jem output upisati tekst: Uneli ste vrednost koja nije broj!
// Ukoliko je uneta vrednost broj, proveriti da li prosledjena cb fn vraca true i upisati u polje sa id-jem output tekst: Kupovina uspesna!
// Ukoliko callback funkcija vraca false, upisati u polje sa id-jem output tekst: Kupovina neuspesna!

function klikniMe(param) {
  let btn = param.innerText;
  let input = param.value;

  console.log(Modul.proveraMaloprodaja(input));

  console.log(input);
  console.log(btn);

  if (input === "") {
    alert("Polje za unos količine je prazno!");
    return;
  }
  if (isNaN(input)) {
    alert("Uneli ste vrednost koja nije broj!");
  }

  // document.getElementById("output").innerText = "Kupovina neuspesna!";

  if (btn == "Maloprodajni") {
    Modul.proveraMaloprodaja(input);
    console.log(input);
    document.getElementById("output").innerText = "Kupovina uspesna!";
  } else if (btn == "Veleprodajni") {
    Modul.proveraVeleprodaja(input);
    document.getElementById("output").innerText = "Kupovina uspesna!";
  }
}

// Provera Modul-a:
// console.log(Modul.proveraMaloprodaja(199));
// console.log(Modul.proveraVeleprodaja(179));
