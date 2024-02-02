/// <reference path="StavkaPorudzbine.ts" />

class Porudzbina {
  private _id: number = Porudzbina.LAST_ID;
  private _imeKlijenta: string;
  private _datum: Date;
  private _status: string;
  private _stavke: StavkaPorudzbine[];
  static LAST_ID: number = 0;

  constructor(imeKlijenta: string, datum: Date, status: string = "Otvorena") {
    this._imeKlijenta = imeKlijenta;
    this._datum = datum;
    this._status = status;
    this._id = Porudzbina.LAST_ID;
    this._stavke = [];
    Porudzbina.LAST_ID += 1;
  }
  public get id() {
    return this._id;
  }
  public get imeKlijenta() {
    return this._imeKlijenta;
  }
  public get datum() {
    return this._datum;
  }
  public get status() {
    return this._status;
  }
  public get stavke() {
    return this._stavke;
  }
  public set id(value: number) {
    this._id = value;
  }
  public set imeKlijenta(value: string) {
    this._imeKlijenta = value;
  }
  public set datum(value: Date) {
    this._datum = value;
  }
  public set status(value: string) {
    this._status = value;
  }
  public set stavke(value: StavkaPorudzbine[]) {
    this._stavke = value;
  }

  public cenaPorudzbine() {
    return this._stavke.reduce((acc, curr) => acc + curr.kolicina * curr.stavkaJelovnika.cena, 0);
  }
}
