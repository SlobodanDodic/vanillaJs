/// <reference path="Instruktor.ts" />

class Ispit {
  private _instruktor: Instruktor;
  private _imeKandidata: string;
  private _prezimeKandidata: string;
  private _jmbgKandidata: number;
  private _nacinPolaganja: string;
  private _datum: string;
  private _brojBodova: number;

  constructor(
    instruktor: Instruktor,
    imeKandidata: string,
    prezimeKandidata: string,
    jmbgKandidata: number,
    nacinPolaganja: string,
    datum: string,
    brojBodova: number
  ) {
    this._instruktor = instruktor;
    this._imeKandidata = imeKandidata;
    this._prezimeKandidata = prezimeKandidata;
    this._jmbgKandidata = jmbgKandidata;
    this._nacinPolaganja = nacinPolaganja;
    this._datum = datum;
    this._brojBodova = brojBodova;
  }

  public get instruktor(): Instruktor {
    return this._instruktor;
  }

  public get imeKandidata(): string {
    return this._imeKandidata;
  }

  public get prezimeKandidata(): string {
    return this._prezimeKandidata;
  }

  public get nacinPolaganja(): string {
    return this._nacinPolaganja;
  }

  public get datum(): string {
    return this._datum;
  }

  public get brojBodova(): number {
    return this._brojBodova;
  }

  public set instruktor(value: Instruktor) {
    this._instruktor = value;
  }

  public set imeKandidata(value: string) {
    this._imeKandidata = value;
  }

  public set prezimeKandidata(value: string) {
    this._prezimeKandidata = value;
  }

  public set nacinPolaganja(value: string) {
    this._nacinPolaganja = value;
  }

  public set datum(value: string) {
    this._datum = value;
  }

  public set brojBodova(value: number) {
    this._brojBodova = value;
  }

  public get jmbgKandidata(): number {
    return this._jmbgKandidata;
  }

  public set jmbgKandidata(value: number) {
    this._jmbgKandidata = value;
  }
}
