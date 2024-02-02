/// <reference path="result.ts" />

class Scoreboard {
  private _result: Result[];

  constructor() {
    this._result = [];
  }

  public addResult(newResult: Result) {
    this._result.push(newResult);
  }

  public updateScoreBoard() {
    let scoreBoard: string = '<h2 class="form-group">Scoreboard</h2>';

    console.log(this._result);

    for (let i = 0; i < this._result.length; i++) {
      let r = this._result[i];
      scoreBoard += `<h4 class="form-group">${r.playerName} : ${r.score} / ${r.problemCount} for ${r.factor}</h4>`;
    }

    let scoreElement: HTMLElement = document.getElementById('game')!;
    scoreElement.innerHTML = scoreBoard;

    console.log(scoreBoard);

  }
};