var korisnik;

// Funkcija za ispisivanje poruka na stranici, poziva je metoda stampaj od korisnika
function writeMessage(message) {
  var p = document.getElementById("poruka");
  p.innerHTML = message;
}

//TODO Napraviti korisnika

// Funkcija stampaj se dodaje u prototip korisnika
//TODO dodati metodu stampaj koja poziva writeMessage

//Nasledjujemo korisnika i podesavamo mu konstruktor

//TODO maloprodajni korisnik

// Ova funkcija se poziva klikom na dugme dodaj na html stranici
// korisnik.ispis(this)
//  U ovoj funkciji se racuna cena za proizvod, identicna je i za veleprodajnog korisnika uz popust od 15% za neki proizvod

//TODO metoda isipis, izracunati vrednost i pozvati wrtie message.

//TODO VeleprodajniKorisnik
