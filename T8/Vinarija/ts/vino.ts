class Vino {
  private _id: number;
  private _country: string;
  private _description: string;
  private _grapes: string;
  private _name: string;
  private _picture: string;
  private _region: string;
  private _year: number;

  //TODO 1. a) Implementirati konstruktor kopije ... _atribut = atribut
  constructor(obj?: any) {
    //Videti primer sa slajdova.
    this._id = obj && obj.id || null;
    this._country = obj && obj.country || null;
    this._description = obj && obj.description || null;
    this._grapes = obj && obj.grapes || null;
    this._name = obj && obj.name || null;
    this._picture = obj && obj.picture || null;
    this._region = obj && obj.region || null;
    this._year = obj && obj.year || null;
  }


  public get country(): string {
    return this._country;
  }

  public set country(value: string) {
    this._country = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get grapes(): string {
    return this._grapes;
  }

  public set grapes(value: string) {
    this._grapes = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get picture(): string {
    return this._picture;
  }

  public set picture(value: string) {
    this._picture = value;
  }

  public get region(): string {
    return this._region;
  }

  public set region(value: string) {
    this._region = value;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get year(): number {
    return this._year;
  }

  public set year(value: number) {
    this._year = value;
  }



}