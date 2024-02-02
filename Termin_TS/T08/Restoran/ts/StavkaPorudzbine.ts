/// <reference path="StavkaJelovnika.ts" />
// T8 - Zadatak 03, upotreba reduce-a za prosek

class StavkaPorudzbine {
  private _stavkaJelovnika: StavkaJelovnika;
  private _kolicina: number;

  constructor(stavkaJelovnika: StavkaJelovnika, kolicina: number) {
    this._stavkaJelovnika = stavkaJelovnika;
    this._kolicina = kolicina;
  }

  public get stavkaJelovnika() {
    return this._stavkaJelovnika;
  }
  public get kolicina() {
    return this._kolicina;
  }
  public set stavkaJelovnika(value: StavkaJelovnika) {
    this._stavkaJelovnika = value;
  }
  public set kolicina(value: number) {
    this._kolicina = value;
  }
}
