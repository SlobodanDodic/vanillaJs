//TODO Implement Knjiga

class Knjiga {
  private _id: number;
  private _name: string;
  private _author: string;
  private _publisher: string;
  private _genre: string;
  private _price: number;
  private _sold: number;

  constructor(obj?: any) {
    this._id = obj && obj.id || null;
    this._name = obj && obj.name || null;
    this._author = obj && obj.author || null;
    this._publisher = obj && obj.publisher || null;
    this._genre = obj && obj.genre || null;
    this._price = obj && obj.price || null;
    this._sold = obj && obj.sold || 0;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get author(): string {
    return this._author;
  }

  public get publisher(): string {
    return this._publisher;
  }

  public get genre(): string {
    return this._genre;
  }

  public get price(): number {
    return this._price;
  }

  public get sold(): number {
    return this._sold;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set name(value: string) {
    this._name = value;
  }

  public set author(value: string) {
    this._author = value;
  }

  public set publisher(value: string) {
    this._publisher = value;
  }

  public set genre(value: string) {
    this._genre = value;
  }

  public set price(value: number) {
    this._price = value;
  }

  public set sold(value: number) {
    this._sold = value;
  }
};