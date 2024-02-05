class Instruktor {
  private _ime: string;
  private _prezime: string;
  private _jmbg: number;

  constructor(ime: string, prezime: string, jmbg: number) {
    this._ime = ime;
    this._prezime = prezime;
    this._jmbg = jmbg;
  }

  public get ime() {
    return this._ime;
  }
  public get prezime() {
    return this._prezime;
  }
  public get jmbg() {
    return this._jmbg;
  }

  public set ime(value: string) {
    this._ime = value;
  }
  public set prezime(value: string) {
    this._prezime = value;
  }
  public set jmbg(value: number) {
    this._jmbg = value;
  }
}
