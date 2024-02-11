/// <reference path="predmet.ts" />

class Ispit {
  private _predmet: Predmet;
  private _brojIndeksaStudenta: string;
  private _imeStudenta: string;
  private _prezimeStudenta: string;
  private _deoIspita: string;
  private _datum: string;
  private _brojBodova: number;

  constructor(
    predmet: Predmet,
    brojIndeksaStudenta: string,
    imeStudenta: string,
    prezimeStudenta: string,
    deoIspita: string,
    datum: string,
    brojBodova: number
  ) {
    this._predmet = predmet;
    this._brojIndeksaStudenta = brojIndeksaStudenta;
    this._imeStudenta = imeStudenta;
    this._prezimeStudenta = prezimeStudenta;
    this._deoIspita = deoIspita;
    this._datum = datum;
    this._brojBodova = brojBodova;
  }

  public get predmet(): Predmet {
    return this._predmet;
  }

  public set predmet(value: Predmet) {
    this._predmet = value;
  }

  public get brojIndeksaStudenta(): string {
    return this._brojIndeksaStudenta;
  }

  public set brojIndeksaStudenta(value: string) {
    this._brojIndeksaStudenta = value;
  }

  public get imeStudenta(): string {
    return this._imeStudenta;
  }

  public set imeStudenta(value: string) {
    this._imeStudenta = value;
  }

  public get prezimeStudenta(): string {
    return this._prezimeStudenta;
  }

  public set prezimeStudenta(value: string) {
    this._prezimeStudenta = value;
  }

  public get deoIspita(): string {
    return this._deoIspita;
  }

  public set deoIspita(value: string) {
    this._deoIspita = value;
  }

  public get datum(): string {
    return this._datum;
  }

  public set datum(value: string) {
    this._datum = value;
  }

  public get brojBodova(): number {
    return this._brojBodova;
  }

  public set brojBodova(value: number) {
    this._brojBodova = value;
  }
}
