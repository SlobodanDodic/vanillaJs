/// <reference path="Ispit.ts" />

class AutoSkola {
  private _naziv: string;
  private _instruktori: Instruktor[];
  private _ispiti: Ispit[];

  constructor(naziv: string) {
    this._naziv = naziv;
    this._instruktori = [];
    this._ispiti = [];
  }

  public get naziv() {
    return this._naziv;
  }
  public get instruktori() {
    return this._instruktori;
  }
  public get ispiti() {
    return this._ispiti;
  }

  public set naziv(value: string) {
    this._naziv = value;
  }
  public set instruktori(value: Instruktor[]) {
    this._instruktori = value;
  }
  public set ispiti(value: Ispit[]) {
    this._ispiti = value;
  }

  public dodajIspit(ispit: Ispit) {
    this._ispiti.push(ispit);
  }

  public refreshIspis() {
    let view: string = "";

    for (let i = 0; i < this._ispiti.length; i++) {
      let ispit = this._ispiti[i];

      view += `<tr key=${i + 1}>
                <td>${i + 1}</td>
                <td>${ispit.imeKandidata} ${ispit.prezimeKandidata}</td>
                <td>${ispit.instruktor.ime} ${ispit.instruktor.prezime}</td>
                <td>${ispit.nacinPolaganja}</td>
                <td>${ispit.datum}</td>
                <td class=${ispit.brojBodova > 55 ? "green" : "red"}>${ispit.brojBodova}</td>
              </tr>`;
    }

    document.getElementById("tbody").innerHTML = view;
  }

  public najslabijiKandidatPoInstruktoru(nacinPolaganja: string, instruktor: Instruktor): void {
    let result = this._ispiti
      .filter((ispit) => ispit.instruktor.jmbg === instruktor.jmbg && ispit.nacinPolaganja === nacinPolaganja)
      .sort((a, b) => a.brojBodova - b.brojBodova)[0];

    let view = `<h3>Najslabiji kandidat za ${nacinPolaganja} kod instruktora ${result.instruktor.ime} ${result.instruktor.prezime} je ${result.imeKandidata} ${result.prezimeKandidata}.</h3>`;

    document.getElementById("podaci").innerHTML = view;
  }

  public najboljiInstruktoriPoNacinuPolaganja(): void {
    let teorija = this._ispiti.filter((el) => el.nacinPolaganja == "Teorija");
    let najInstruktorTeorije: Instruktor | undefined;
    let maxAvgTeorije: number = -Infinity;

    this._instruktori.forEach((instruktor) => {
      let avg = teorija
        .filter((el) => el.instruktor.jmbg == instruktor.jmbg)
        .map((el, i, arr) => el.brojBodova / arr.length)
        .reduce((sum, val) => sum + val, 0);

      if (avg > maxAvgTeorije) {
        maxAvgTeorije = avg;
        najInstruktorTeorije = instruktor;
      }
    });

    let prakticno = this._ispiti.filter((el) => el.nacinPolaganja == "Prakticno");
    let najInstruktorPrakse: Instruktor | undefined;
    let maxAvgPrakse: number = -Infinity;

    this._instruktori.forEach((instruktor) => {
      let avg = prakticno
        .filter((el) => el.instruktor.jmbg == instruktor.jmbg)
        .map((el, i, arr) => el.brojBodova / arr.length)
        .reduce((sum, val) => sum + val, 0);

      if (avg > maxAvgPrakse) {
        maxAvgPrakse = avg;
        najInstruktorPrakse = instruktor;
      }
    });

    let div = document.getElementById("podaci");
    div.innerHTML = `<h3>Instruktor sa najboljom prolaznosti za teoriju je ${najInstruktorTeorije.ime} ${najInstruktorTeorije.prezime} sa prosekom od ${maxAvgTeorije} boda. </h3><br/>`;
    div.innerHTML += `<h3>Instruktor sa najboljom prolaznosti za prakticno je ${najInstruktorPrakse.ime} ${najInstruktorPrakse.prezime} sa prosekom od ${maxAvgPrakse} boda.</h3>`;
  }
}
