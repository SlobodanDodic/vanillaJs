class StavkaJelovnika {
  private _id: number;
  private _naziv: string;
  private _cena: number;
  private _tip: string;
  static LAST_ID: number = 0;

  constructor(naziv: string, cena: number, tip: string) {
    this._naziv = naziv;
    this._cena = cena;
    this._tip = tip;
    StavkaJelovnika.LAST_ID += 1;
    this._id = StavkaJelovnika.LAST_ID;
  }

  public get id() {
    return this._id;
  }
  public get naziv() {
    return this._naziv;
  }
  public get cena() {
    return this._cena;
  }
  public get tip() {
    return this._tip;
  }
  public set id(value: number) {
    this._id = value;
  }
  public set naziv(value: string) {
    this._naziv = value;
  }
  public set cena(value: number) {
    this._cena = value;
  }
  public set tip(value: string) {
    this._tip = value;
  }
}
