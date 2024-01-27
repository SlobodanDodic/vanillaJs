/// <reference path="person.ts" />

class Player extends Person {
  private _hightScore: number;

  constructor(name: string, highScore: number) {
    super(name);

    this._hightScore = highScore;
  }

  public formatName(): string {
    return super.formatName() + this._hightScore;
  }

}