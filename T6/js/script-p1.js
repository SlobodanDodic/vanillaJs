// Zadatak p1:

// Kreirati objekat smestaj koji od atributa ima naziv, adresu i grad.
// Od funkcija ima jednu funkciju stampaj koja na stranicu ispisuje pomenute atribute.

// Kreirati objekat hotel koji nasledjuje smestaj i koji pored postojecih atributa iz smestaj ima atribut broj zvezdica (hotela).
// Hotel redefinise metodu stampaj tako da jos ispisuje broj zvezdica i ima jos jednu dodatnu metodu predstaviSe koja ukratko opisuje hotel.

class Smestaj {
  constructor(naziv, adresa, grad) {
    this.naziv = naziv;
    this.adresa = adresa;
    this.grad = grad;
  }
  stampaj() {
    document.write(`Smestaj: ${this.naziv} ${this.adresa} ${this.grad} <br />`);
  }
}

class Hotel extends Smestaj {
  constructor(naziv, adresa, grad, zvezdica) {
    super(naziv, adresa, grad);
    this.zvezdica = zvezdica;
  }

  predstaviSe() {
    document.write(`Opis hotela: ${this.naziv} ${this.adresa} ${this.grad} ${this.zvezdica}<br />`);
  }

  stampaj() {
    super.stampaj();
    document.write(`Hotel: ${this.naziv} ${this.adresa} ${this.grad} ${this.zvezdica}<br />`);
  }
}

let smestajInn = new Smestaj("SmestajInn", "Bulevar Liberta 47", "Sombor");
smestajInn.stampaj();

let hotelInn = new Hotel("HotelInn", "Bulevar Liberta 39", "Novi Sad", "4❇");
hotelInn.stampaj();
hotelInn.predstaviSe();
