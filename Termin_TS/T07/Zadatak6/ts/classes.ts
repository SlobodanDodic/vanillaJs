// Zadatak 6:

// Zadatak implementirati upotrebom klasa.
// Na osvnovu datog teksta, odrediti kako klasa koja treba da resi zadatak treba da izgleda.
// Na osvnovu objekta i niza odrediti atribute klase, na osnovu funkcija odrediti metode klase.

// Posto koristimo klase, ocena bi trebalo da bude deo klase Predmet, pri cemu polozene predmete dodajemo u niz koji se nalazi u studentu.
// Predmet se sastoji od (id-ja, naziva predmeta, imena profesora, ocene)

// Za zadatog studenta dodati dve metode:
// - Prva metoda se zove predstaviSe() i treba da vrati osnovne podatke o studentu, npr:
// -- "Ja sam Pera Peric i studiram na FTN, sa prosecnom ocenom ...(ocena)"
// - Druga metoda se zove izracunajProsecnuOcenu().
// -- Ta metoda racuna prosecnu ocenu i upisuje u atribut prosecna_ocena.

//Napraviti metodu omiljeni profesori koja vraca niz sa imenima profesora kod koga student ima ocenu 11.

class Student {
  private _ime: string;
  private _prezime: string;
  private _fakultet: string;
  private _broj_indeksa: string;
  private _polozeni_predmeti: Predmet[];
  private _prosecna_ocena: number;

  public constructor(_ime: string, _prezime: string, _fakultet: string, _broj_indeksa: string) {
    this._ime = _ime;
    this._prezime = _prezime;
    this._fakultet = _fakultet;
    this._broj_indeksa = _broj_indeksa;
    this._polozeni_predmeti = [];
    this._prosecna_ocena = 0;
  }

  public dodajPolozeniPredmet(predmet: Predmet): void {
    this._polozeni_predmeti.push(predmet);
  }

  // public izracunajProsecnuOcenu(): void {
  //   if (this._polozeni_predmeti.length === 0) {
  //     this._prosecna_ocena = 0;
  //     return;
  //   }

  //   let sumaOcena = 0;

  //   for (let i = 0; i < this._polozeni_predmeti.length; i++) {
  //     sumaOcena += this._polozeni_predmeti[i].ocena;
  //   }

  //   this._prosecna_ocena = sumaOcena / this._polozeni_predmeti.length;
  //   this._prosecna_ocena = parseFloat(this._prosecna_ocena.toFixed(2));
  // }

  public izracunajProsecnuOcenu(): void {
    if (this._polozeni_predmeti.length === 0) {
      this._prosecna_ocena = 0;
      return;
    }

    this._prosecna_ocena = this._polozeni_predmeti.reduce((acc, curr, i, array) => acc + curr.ocena / array.length, 0);
    this._prosecna_ocena = parseFloat(this._prosecna_ocena.toFixed(2));
  }

  public predstaviSe(): string {
    return `Ja sam ${this._ime} ${this._prezime} i studiram na ${this._fakultet}, sa prosecnom ocenom ${this._prosecna_ocena}`;
  }

  public imaTriDevetke(): string {
    if (this._polozeni_predmeti.filter((predmet) => predmet.ocena === 9).length >= 3) {
      return `${this._ime} ima bar tri devetke!`;
    }
  }

  public predstaviSeTekst(): string {
    return `Ime: ${this._ime}, Prezime: ${this._prezime}, Fakultet: ${this._fakultet}, Indeks: ${this._broj_indeksa}, Prosecna ocena: ${this._prosecna_ocena}`;
  }

  // public omiljeniProfesori(): string[] {
  //   const omiljeniProfesori: string[] = [];

  //   for (let predmet of this._polozeni_predmeti) {
  //     if (predmet.ocena === 11) {
  //       omiljeniProfesori.push(predmet.ime_profesora);
  //     }
  //   }
  //   return omiljeniProfesori;
  // }
  public omiljeniProfesori(): string[] {
    return this._polozeni_predmeti.filter((predmet) => predmet.ocena === 11).map((predmet) => predmet.ime_profesora);
  }
}

class Predmet {
  private _id: string;
  private _naziv_predmeta: string;
  private _ime_profesora: string;
  private _ocena: number;

  public constructor(_id: string, _naziv_predmeta: string, _ime_profesora: string, _ocena: number) {
    this._id = _id;
    this._naziv_predmeta = _naziv_predmeta;
    this._ime_profesora = _ime_profesora;
    this._ocena = _ocena;
  }

  public get ocena(): number {
    return this._ocena;
  }

  public get ime_profesora(): string {
    return this._ime_profesora;
  }
}
