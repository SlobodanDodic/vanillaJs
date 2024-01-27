class Radnik {
  protected _name: string;
  protected _age: number;
  protected _osnovica: number;

  protected constructor(name: string, age: number, osnovica: number) {
    this._name = name;
    this._age = age;
    this._osnovica = osnovica;
  }

  public get name(): string {
    return this._name;
  }

  public get age(): number {
    return this._age;
  }

  public get osnovica(): number {
    return this._osnovica;
  }

  public set name(value: string) {
    this._name = value;
  }

  public set age(value: number) {
    this._age = value;
  }

  public set osnovica(value: number) {
    this._osnovica = value;
  }

  public get plata(): number {
    return this._osnovica;
  }

  avgAge(obj: Radnik[]): number {
    let sum = 0;
    for (let i = 0; i < obj.length; i++) {
      sum += obj[i]._age;
    }
    console.log(sum / obj.length);
    return sum;
  }

  dateOfBirth(): Number {
    let date = new Date();
    let godina = date.getFullYear();
    console.log(godina - this._age);
    return godina - this._age;
  }

}