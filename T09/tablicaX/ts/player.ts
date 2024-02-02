/// <reference path="person.ts" />

class Player extends Person {
  private _highScore: number;

  constructor(name: string, highScore: number) {
    super(name);

    this._highScore = highScore;
  }

  public formatName(): string {
    return super.formatName() + this._highScore;
  }

}