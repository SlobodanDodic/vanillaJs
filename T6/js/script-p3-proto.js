// Funkcija za ispisivanje poruka na stranici, poziva je metoda stampaj od korisnika:
// Funkcija stampaj se dodaje u prototip korisnika (dodati metodu stampaj koja poziva writeMessage)

//TODO Napraviti korisnika
let korisnik = {
  ime: "",
  lozinka: "",

  stampaj: function (message) {
    var p = document.getElementById("poruka");
    p.innerHTML = message;
  },

  ispis: function (message) {
    console.log(message.value);
  },
};

//Nasledjujemo korisnika i podesavamo mu konstruktor
//TODO maloprodajni korisnik
let maloprodajniKorisnik = Object.create(korisnik);

maloprodajniKorisnik.ispis = function (number) {
  console.log(number);
};

// korisnik.ispis(this) - Ova funkcija se poziva klikom na dugme dodaj na html stranici
// U ovoj funkciji se racuna cena za proizvod, identicna je i za veleprodajnog korisnika uz popust od 15% za neki proizvod
//TODO metoda isipis, izracunati vrednost i pozvati write message.

//TODO VeleprodajniKorisnik
let veleprodajniKorisnik = Object.create(korisnik);

veleprodajniKorisnik.ispis = function (number) {
  console.log(number * 0.15);
};
