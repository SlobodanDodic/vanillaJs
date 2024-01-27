/// <reference path="result.ts" />

class Scoreboard {
  private _result: Result[];

  // constructor(result:Result[]){
  //   this._result = result;
  // }

  public addResult(newResult: Result) {
    this._result.push(newResult);
  }

  public updateScoreBoard() {

    let scoreBoard: string = '';
    for (let i = 1; i < this._result.length; i++) {
      let r = this._result[i];
      scoreBoard += `<h2 class="form-group">Scoreboard</h2>`;
      scoreBoard += `<h4 class="form-group">${r.playerName} : ${r.score} / ${r.problemCount} for ${r.factor}</h4>`;
    }

    let scoreElement: HTMLElement = document.getElementById('game')!;
    scoreElement.innerHTML = scoreBoard;

  }
};