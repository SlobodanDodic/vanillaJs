/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />

class Game {
  private scoreboard: Scoreboard = new Scoreboard();

  constructor(public player: Player, public problemCount: number, public factor: number) {
  }

  displayGame(): void {

    let gameForm: string = '';
    for (let i = 1; i <= this.problemCount; i++) {
      gameForm += '<div class="form-group">';
      gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
      gameForm += String(this.factor) + ' x ' + i + ' = </label>';
      gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
      gameForm += '</div>';
    }

    let gameElement: HTMLElement = document.getElementById('game')!;
    gameElement.innerHTML = gameForm;

    document.getElementById('calculate')!.removeAttribute('disabled');
  }

  calculateScore(): void {
    //TODO 5 Izracunati skor (proci kroz svako input polje sa idjem answer + i (answer1, answer2....))
    //I u vakom korak proveriti da li je i*fakotr == vrednosti polja answer
    let answers: number[] = [];

    for (let i = 1; i <= this.problemCount; i++) {
      let inputId = document.getElementById(`answer${i}`) as HTMLInputElement;
      let faktor = this.factor;

      if (inputId.value && parseInt(inputId.value) === i * faktor) {
        answers.push(1);
      } else {
        answers.push(0);
      }
    }
    //TODO 6 napraviti objekat rezultata koji zadovoljva intrfejs results i dodati ga u 
    //this.scoreboard i pozvati updateScoreboared metodu
    let score = answers.reduce((acc, val) => acc + val, 0);

    let result = new Result(this.player.name, score, this.problemCount, this.factor);

    this.scoreboard.addResult(result);

    this.scoreboard.updateScoreBoard();

    console.log(result);

    //TODO 7 Onemogucti klik na calculate dugme
    document.getElementById('calculate')!.setAttribute('disabled', 'true');
  }
}
