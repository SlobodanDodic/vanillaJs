// Napisati funkciju klikniMe, funkcija klikniMe se poziva kao rezultat klika na dugme maloprodajni i dugme veleprodajni
// povezati onclick dogadjaj dugmica sa funkcijom klikniMe. Poziv funkcije klikni me se vrsi iz index.html stranice!

// Kao parametar funkcija klikniMe prima callback funkciju.
// Za klik na dugme maloprodajni prosledjeni funkcija bi trebala da bude funkcija proveraMaloprodaja iz prethodno napisanog modula.
// Za klik na dugme veleprodajni prosledjeni funkcija bi trebala da bude funkcija proveraVeleprodaja iz prethodno napisanog modula.

// Funkcija klikni me preuzima vrednost input polja sa id-jem kolicina, i proverava da li je unet broj.
// Ukoliko nije unet broj u input polje u polje sa id-jem output upisati tekst: Uneli ste vrednost koja nije broj!
// Ukoliko je uneta vrednost broj, proveriti da li prosledjena cb fn vraca true i upisati u polje sa id-jem output tekst: Kupovina uspesna!
// Ukoliko callback funkcija vraca false, upisati u polje sa id-jem output tekst: Kupovina neuspesna!

// HELP COMMENT:
// Funkcija klikniMe kao parametar prima callback, a u sebi sa querySelectorom ili po IDju selektuje input polje i preuzima vrednost.
// Pa tu vrednost prosledjuje callback funkciji.
// U htmlu na dugmetu onda treba da stavite:
// <button type="button" class="btn btn-primary col-sm-5" onclick="klikniMe(Modul.proveraMaloprodaja)">Maloprodajni</button>

function klikniMe(btn, cb) {
  let input = document.getElementById("kolicina");
  let outputText = cb(input.value) ? "Kupovina uspesna!" : "Kupovina neuspesna!";

  if (input.value === "") {
    alert("Polje za unos količine je prazno!");
    input.value = "";
    return;
  }

  if (isNaN(input.value)) {
    alert("Uneli ste vrednost koja nije broj!");
    input.value = "";
    return;
  }

  console.log(`${btn.textContent}: ${input.value}`);
  document.getElementById("output").innerText = outputText;
}
