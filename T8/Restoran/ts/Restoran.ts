/// <reference path="StavkaJelovnika.ts" />
/// <reference path="Porudzbina.ts" />
/// <reference path="StavkaPorudzbine.ts" />

class Restoran {
  static readonly BODOVI_PO_TIPU = { Predjelo: 1, "Glavno jelo": 3, Desert: 1 };
  static readonly BODOVI_ZA_GOLD = 10;

  private _naziv: string;
  private _jelovnik: StavkaJelovnika[] = [];
  private _porudzbine: Porudzbina[] = [];

  constructor(naziv: string) {
    this._naziv = naziv;
    this._jelovnik = [];
    this._porudzbine = [];
  }

  public get naziv() {
    return this._naziv;
  }
  public get jelovnik() {
    return this._jelovnik;
  }
  public get porudzbine() {
    return this._porudzbine;
  }
  public set naziv(value: string) {
    this._naziv = value;
  }
  public set jelovnik(value: StavkaJelovnika[]) {
    this._jelovnik = value;
  }
  public set porudzbine(value: Porudzbina[]) {
    this._porudzbine = value;
  }

  public dodajStavkuJelovnika(stavkaJelovnika: StavkaJelovnika): void {
    this._jelovnik.push(stavkaJelovnika);
    this.refreshJelovnik();
  }

  public refreshJelovnik(): void {
    let out = "";

    for (let stavkaJelovnika of this._jelovnik) {
      out += `<li class="list-group-item list-group-item-action d-flex justify-content-between align-items-start" onclick="clickedMenu(${stavkaJelovnika.id})">`;
      out += `<div class="ms-2 me-auto fw-bold">`;
      out += `${stavkaJelovnika.naziv} (${stavkaJelovnika.cena})`;
      out += `</div>`;
      out += `<span class="badge bg-primary rounded-pill" id="spanJelovnik${stavkaJelovnika.id}"></span>`;
      out += `</li>`;
    }

    document.getElementById("listajelovnik").innerHTML = out;
  }

  public napraviPorudzbinu(imeKlijenta: string, datum: Date): Porudzbina {
    let order = new Porudzbina(imeKlijenta, datum);
    this._porudzbine.push(order);
    return order;
  }

  public getStavkaJelovnikaById(id: number): StavkaJelovnika {
    const foundStavka = this._jelovnik.filter((stavka) => stavka.id === id)[0];
    return foundStavka || null;
  }

  public zlatniKlijenti(): string {
    let skorKlijenta = {};

    for (let porudzbina of this._porudzbine) {
      if (porudzbina.status != "Zatvorena") continue;

      if (!(porudzbina.imeKlijenta in skorKlijenta)) {
        skorKlijenta[porudzbina.imeKlijenta] = 0;
      }

      for (let stavka of porudzbina.stavke) {
        skorKlijenta[porudzbina.imeKlijenta] += Restoran.BODOVI_PO_TIPU[stavka.stavkaJelovnika.tip] * stavka.kolicina;
      }
    }

    let hasGold = false;
    let out = "Spisak GOLD klijenata: <br/>";
    for (let klijent in skorKlijenta) {
      if (skorKlijenta[klijent] > Restoran.BODOVI_ZA_GOLD) {
        hasGold = true;
        out += `${klijent} sa ${skorKlijenta[klijent]} ukupno bodova. <br/>`;
      }
    }

    if (hasGold) return out;

    return "Restoran trenutno nema GOLD klijente";
  }

  public najProfitabilnijiTipPoKlijentu(): string {
    let klijenti = {};

    for (let porudzbina of this._porudzbine) {
      if (porudzbina.status != "Zatvorena") continue;

      if (!(porudzbina.imeKlijenta in klijenti)) {
        klijenti[porudzbina.imeKlijenta] = {};
      }

      for (let stavka of porudzbina.stavke) {
        if (!(stavka.stavkaJelovnika.tip in klijenti[porudzbina.imeKlijenta])) {
          klijenti[porudzbina.imeKlijenta][stavka.stavkaJelovnika.tip] = 0;
        }
        klijenti[porudzbina.imeKlijenta][stavka.stavkaJelovnika.tip] += stavka.stavkaJelovnika.cena * stavka.kolicina;
      }
    }

    let out = "";
    for (let klijent in klijenti) {
      let potroseno = klijenti[klijent];
      let maxTip = "";
      let maxCena = Number.NEGATIVE_INFINITY;
      for (let tip in potroseno) {
        if (potroseno[tip] > maxCena) {
          maxCena = potroseno[tip];
          maxTip = tip;
        }
      }

      out += `${klijent} je najviše potrošio na tip "${maxTip}" (${maxCena}) <br/>`;
    }

    return out;
  }
}
