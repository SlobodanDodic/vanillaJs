class Person {
  protected _name: string;

  constructor(name: string) {
    this._name = name;
  };

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public formatName(): string {
    return this._name.charAt(0).toUpperCase() + this._name.slice(1);
  }
}