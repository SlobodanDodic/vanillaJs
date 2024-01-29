class Namestaj {
  private _sifra: number;
  private _naziv: string;
  private _jedinicnaCena: number;
  private _kolicinaUMagacinu: number;

  constructor(sifra: number, naziv: string, jedinicnaCena: number, kolicinaUMagacinu: number) {
    this._sifra = sifra;
    this._naziv = naziv;
    this._jedinicnaCena = jedinicnaCena;
    this._kolicinaUMagacinu = kolicinaUMagacinu;
  }

  // Getters:
  public get sifra() {
    return this._sifra;
  }
  public get naziv() {
    return this._naziv;
  }
  public get jedinicnaCena() {
    return this._jedinicnaCena;
  }
  public get kolicinaUMagacinu() {
    return this._kolicinaUMagacinu;
  }

  // Setters:
  public set sifra(value: number) {
    this._sifra = value;
  }
  public set naziv(value: string) {
    this._naziv = value;
  }
  public set jedinicnaCena(value: number) {
    this._jedinicnaCena = value;
  }
  public set kolicinaUMagacinu(value: number) {
    this._kolicinaUMagacinu = value;
  }
}

class Salon {
  private _naziv: string;
  private _adresa: string;
  private _telefon: string;
  private _namestaj: Namestaj[];

  constructor(naziv: string, adresa: string, telefon: string) {
    this._naziv = naziv;
    this._adresa = adresa;
    this._telefon = telefon;
    this._namestaj = [];
  }

  // Getters:
  public get naziv() {
    return this._naziv;
  }
  public get adresa() {
    return this._adresa;
  }
  public get telefon() {
    return this._telefon;
  }
  public get namestaj() {
    return this._namestaj;
  }

  // Setters:
  public set naziv(value: string) {
    this._naziv = value;
  }
  public set adresa(value: string) {
    this._adresa = value;
  }
  public set telefon(value: string) {
    this._telefon = value;
  }
  public set namestaj(value: Namestaj[]) {
    this._namestaj = value;
  }

  public ispisiNamestajNaStanju(): void {
    for (let i = 0; i < this.namestaj.length; i++) {
      if (this.namestaj[i].kolicinaUMagacinu > 0) {
        console.log(
          `${i + 1} ${this.namestaj[i].sifra}. ${this.namestaj[i].naziv} ${this.namestaj[i].kolicinaUMagacinu} ${
            this.namestaj[i].jedinicnaCena
          }`
        );
      }
    }
  }

  public dodajNaLager(sifra: number, kolicina: number): void {
    for (let i = 0; i < this.namestaj.length; i++) {
      if (this.namestaj[i].sifra === sifra) {
        this.namestaj[i].kolicinaUMagacinu += kolicina;
      }
    }
  }

  public dodajNamestaj(namestaj: Namestaj): void {
    for (let i = 0; i < this.namestaj.length; i++) {
      if (this.namestaj[i].sifra === namestaj.sifra) {
        console.log("Vec postoji namestaj sa tom siform!");
        console.log("Dodavanje nije uspesno!");
        return;
      } else {
        this.namestaj.push(namestaj);
      }
    }
  }

  public prodajKomad(sifra: number, kolicina: number): void {
    for (let i = 0; i < this._namestaj.length; i++) {
      if (this._namestaj[i].sifra == sifra) {
        if (this.namestaj[i].kolicinaUMagacinu <= kolicina) {
          console.log("Prodaja nije uspesna! Nema dovoljno komada namestaja u magacinu!");
          return;
        } else {
          this._namestaj[i].kolicinaUMagacinu -= kolicina;
          console.log(
            "Uspesno ste kupili " +
              kolicina +
              " namestaja " +
              this._namestaj[i].naziv +
              " za " +
              kolicina * this._namestaj[i].jedinicnaCena +
              "RSD!"
          );
          return;
        }
      }
    }
    console.log("Ne postoji namestaj sa tom sifrom!");
  }
}

let n1: Namestaj = new Namestaj(111, "Ester Komoda", 50386.5, 15);
let n2: Namestaj = new Namestaj(123, "Rita Lezaj", 41127.12, 5);
let n3: Namestaj = new Namestaj(143, "Fiona Lezaj", 41127.12, 0);
let n4: Namestaj = new Namestaj(144, "Kloe Klub Sto", 20241, 2);

let s: Salon = new Salon("Simpo", "Bulevar Oslobodjenja BB", "021/000111");
s.namestaj = [n1, n2, n3, n4];
s.ispisiNamestajNaStanju();

s.dodajNaLager(3, 144);

s.ispisiNamestajNaStanju();

let n5: Namestaj = new Namestaj(254, "Fira Klub Sto", 30360.83, 11);
s.dodajNamestaj(n5);

n5.sifra = 5;
s.dodajNamestaj(n5);

s.prodajKomad(111, 20);

s.prodajKomad(111, 11);
s.ispisiNamestajNaStanju();
