// Zadatak p2:

// Kreirate objekat poruka koji od atributa ima naziv posiljaoca, naziv primaoca i sadrzaj poruke.
// Ima metodu stampaj koja na stranicu ispisuje pomenute atribute.

// Kreirati objekat SMSPoruka koji nasledjuje Poruku. Od dodatnih atributa ima broj telefona posiljaoca i primaoca.
// Redefinise metodu stampaj tako da ukljucuje pomenute atribute.

// Kreirate objekat Email poruka koji nasledjuje poruku.
// Od dodatnih atributa ima email adrese posiljaoca i primaoca i redefinise metodu stampaj tako da ukljucuje pomenute atribute.
// Pored toga ima jos jednu metodu koja se zove potpisPosiljaoca i koja ima jedan parametar koji ce biti ispisan kao potpis.

let Poruka = {
  posiljaoc: "Poslanko",
  primaoc: "Primalac",
  poruka: "Moja poruka",
  stampaj: function () {
    document.write(`Poruka: ${this.posiljaoc} ${this.primaoc} ${this.poruka} <br />`);
  },
};

let SMSPoruka = Object.create(Poruka);
SMSPoruka.telefon = "067 5147 355";

SMSPoruka.stampaj = function () {
  Poruka.stampaj.call(this);
  document.write(`SMSPoruka: ${this.posiljaoc} ${this.primaoc} ${this.poruka} ${this.telefon}<br />`);
};

let Email = Object.create(Poruka);
SMSPoruka.adresaPosiljaoca = "adresa posiljaoca";
SMSPoruka.adresaPrimaoca = "adresa primaoca";

SMSPoruka.stampaj = function () {
  Poruka.stampaj.call(this);
  document.write(
    `SMSPoruka: ${this.posiljaoc} ${this.primaoc} ${this.poruka} ${this.telefon} ${this.adresaPosiljaoca} ${this.adresaPrimaoca}<br />`
  );
};

SMSPoruka.potpisPosiljaoca = function (potpis) {
  document.write(`Potpis posiljaoca: ${potpis} <br />`);
};

Poruka.stampaj();
SMSPoruka.stampaj();
SMSPoruka.potpisPosiljaoca("Slobodan");
