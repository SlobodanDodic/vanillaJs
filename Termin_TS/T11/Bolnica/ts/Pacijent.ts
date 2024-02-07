/// <reference path="Simptom.ts" />

class Pacijent {
  private _id: number;
  private _ime: string;
  private _prezime: string;
  private _telesnaTemperatura: number;
  private _pcrTest: string;
  private _ostaliSimptomi: Simptom[];

  constructor(id: number, ime: string, prezime: string, telesnaTemperatura: number, pcrTest: string) {
    this._id = id;
    this._ime = ime;
    this._prezime = prezime;
    this._telesnaTemperatura = telesnaTemperatura;
    this._pcrTest = pcrTest;
    this._ostaliSimptomi = [];
  }

  public get id() {
    return this._id;
  }
  public get ime() {
    return this._ime;
  }
  public get prezime() {
    return this._prezime;
  }
  public get telesnaTemperatura() {
    return this._telesnaTemperatura;
  }
  public get pcrTest() {
    return this._pcrTest;
  }
  public get ostaliSimptomi() {
    return this._ostaliSimptomi;
  }
  public set id(value: number) {
    this._id = value;
  }
  public set ime(value: string) {
    this._ime = value;
  }
  public set prezime(value: string) {
    this._prezime = value;
  }
  public set telesnaTemperatura(value: number) {
    this._telesnaTemperatura = value;
  }
  public set pcrTest(value: string) {
    this._pcrTest = value;
  }
  public set ostaliSimptomi(value: Simptom[]) {
    this._ostaliSimptomi = value;
  }

  public dodajSimptom(simptom: Simptom) {
    this._ostaliSimptomi.push(simptom);
  }
}
