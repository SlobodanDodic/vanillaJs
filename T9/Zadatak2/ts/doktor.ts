/// <reference path="radnik.ts" />

class Doktor extends Radnik {
  constructor(name: string, age: number, osnovica: number) {
    super(name, age, osnovica);
  }

  public get plata(): number {
    return this.osnovica * 1.13;
  }
}