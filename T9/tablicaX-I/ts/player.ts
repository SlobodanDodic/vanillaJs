/// <reference path="person.ts" />

class Player implements Person {
  name: string;
  highScore: number;

  constructor(name: string, highScore: number) {
    this.name = name;
    this.highScore = highScore;
  }

  formatName(): string {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }
};