class Predmet {
  private _imeProfesora: string;
  private _prezimeProfesora: string;
  private _idPredmeta: number;
  private _nazivPredmeta: string;

  constructor(imeProfesora: string, prezimeProfesora: string, idPredmeta: number, nazivPredmeta: string) {
    this._imeProfesora = imeProfesora;
    this._prezimeProfesora = prezimeProfesora;
    this._idPredmeta = idPredmeta;
    this._nazivPredmeta = nazivPredmeta;
  }

  public get imeProfesora() {
    return this._imeProfesora;
  }
  public get prezimeProfesora() {
    return this._prezimeProfesora;
  }
  public get idPredmeta() {
    return this._idPredmeta;
  }
  public get nazivPredmeta() {
    return this._nazivPredmeta;
  }
  public set imeProfesora(value: string) {
    this._imeProfesora = value;
  }
  public set prezimeProfesora(value: string) {
    this._prezimeProfesora = value;
  }
  public set idPredmeta(value: number) {
    this._idPredmeta = value;
  }
  public set nazivPredmeta(value: string) {
    this._nazivPredmeta = value;
  }
}
