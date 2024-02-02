//Zadatak 4:

// Napisati klasu Pas.
// Svaki pas ima ime, starost (u psećim godinama), podatak da li je vakcinisan i naziv rase.
// Napisati konstruktor (sa podrazumevanim vrednostima za parametre), gettere i settere.
// Psa je moguće vakcinisati, ispisati njegovu starost u ljudskim godinama* - Jedna pseća godina je 7 ljudskih.
// Ispisati sve podatke o psu, (napraviti metode za navedene funkcionalnosti)

// Kreirati posebnu Kennel klasu. Kennel klasa ima naziv, adresu, i niz Pasa.
// Napisati konstruktor koji kao parametre prima samo naziv i adresu.
// Implementirati getere i setere, kao i metodu za dodavanje pasa u niz.
// Prilikom testiranja u taj niz dodati barem 7 pasa.

// Implementirati metode koje omogucuju sledece funkcionalnosti:
// 	-pronaći najstarijeg psa
// 	-pronaci najmladjeg psa
// 	-ispisati imena vakcinisanih pasa.

class Pas {
  private _ime: string;
  private _starost: number;
  private _vakcinisan: boolean;
  private _rasa: string;

  public constructor(_ime: string, _starost: number, _rasa: string, _vakcinisan: boolean = false) {
    this._ime = _ime;
    this._starost = _starost;
    this._vakcinisan = _vakcinisan;
    this._rasa = _rasa;
  }

  public get ime(): string {
    return this._ime;
  }

  public get starost(): number {
    return this._starost;
  }

  public get rasa(): string {
    return this._rasa;
  }

  public get vakcinisan(): boolean {
    return this._vakcinisan;
  }

  public set ime(value: string) {
    this._ime = value;
  }

  public set starost(value: number) {
    this._starost = value;
  }

  public set rasa(value: string) {
    this._rasa = value;
  }

  public set vakcinisan(value: boolean) {
    this._vakcinisan = value;
  }

  public vakcinacija() {
    return (this._vakcinisan = true);
  }

  public starostLjudskeGodine() {
    return this._starost * 7;
  }

  public ispisPodataka(_ime: string, _starost: number, _rasa: string, _vakcinisan: boolean = false) {
    return `Ime: ${_ime}, starost: ${_starost}, rasa: ${_rasa}, vakcinisan: ${_vakcinisan}`;
  }
}

class Kennel {
  private _naziv: string;
  private _adresa: string;
  private _nizPasa: Pas[] = [];

  public constructor(_naziv: string, _adresa: string) {
    this._naziv = _naziv;
    this._adresa = _adresa;
  }

  public get naziv(): string {
    return this._naziv;
  }

  public set naziv(value: string) {
    this._naziv = value;
  }

  public get adresa(): string {
    return this._adresa;
  }

  public set adresa(value: string) {
    this._adresa = value;
  }

  public dodajPsa(pas: Pas) {
    this._nizPasa.push(pas);
  }

  // public pronađiNajstarijegPsa(): Pas {
  //   let najstarijiPas: Pas | null = null;

  //   for (let pas of this._nizPasa) {
  //     if (!najstarijiPas || pas.starost > najstarijiPas.starost) {
  //       najstarijiPas = pas;
  //     }
  //   }
  //   return najstarijiPas!;
  // }

  public pronađiNajstarijegPsa(): Pas {
    return this._nizPasa.reduce((najstarijiPas: Pas | null, pas: Pas) => {
      if (!najstarijiPas || pas.starost > najstarijiPas.starost) {
        return pas;
      } else {
        return najstarijiPas;
      }
    }, this._nizPasa[0]!);
  }

  // public pronađiNajmlađegPsa(): Pas {
  //   let najmlađiPas: Pas | null = null;

  //   for (let pas of this._nizPasa) {
  //     if (!najmlađiPas || pas.starost < najmlađiPas.starost) {
  //       najmlađiPas = pas;
  //     }
  //   }
  //   return najmlađiPas!;
  // }

  public pronađiNajmlađegPsa(): Pas {
    return this._nizPasa.reduce((najmlađiPas: Pas | null, pas: Pas) => {
      if (!najmlađiPas || pas.starost < najmlađiPas.starost) {
        return pas;
      } else {
        return najmlađiPas;
      }
    }, this._nizPasa[0]!);
  }

  public ispisiVakcinisanePse(): string[] {
    const vakcinisaniPsi: string[] = [];

    for (let pas of this._nizPasa) {
      if (pas.vakcinisan) {
        vakcinisaniPsi.push(pas.ime);
      }
    }
    return vakcinisaniPsi;
  }
}

// Provera:
// const mojPas = new Pas("Buddy", 3, "Labrador");
// mojPas.vakcinacija();

// console.log(mojPas.starostLjudskeGodine())
// console.log(mojPas.starost)

// const podaci = mojPas.ispisPodataka(mojPas.ime, mojPas.starost, mojPas.rasa, mojPas.vakcinisan);
// console.log(podaci);

// Testiranje:
const kennel = new Kennel("Patrolne šape", "Glavna 12, Novi Sad");

const pas1 = new Pas("David", 3, "Labrador", true);
const pas2 = new Pas("Roger", 5, "German Shepherd", false);
const pas3 = new Pas("Rick", 2, "Beagle", true);
const pas4 = new Pas("Nick", 4, "Poodle", false);
const pas5 = new Pas("Jimmy", 6, "Boxer", true);
const pas6 = new Pas("SRV", 1, "Golden Retriever", true);
const pas7 = new Pas("Eric", 8, "Bulldog", false);

kennel.dodajPsa(pas1);
kennel.dodajPsa(pas2);
kennel.dodajPsa(pas3);
kennel.dodajPsa(pas4);
kennel.dodajPsa(pas5);
kennel.dodajPsa(pas6);
kennel.dodajPsa(pas7);

console.log("Najstariji pas:", kennel.pronađiNajstarijegPsa().ime);
console.log("Najmlađi pas:", kennel.pronađiNajmlađegPsa().ime);
console.log("Imena vakcinisanih pasa:", kennel.ispisiVakcinisanePse());
console.log(kennel.naziv + " - " + kennel.adresa);
