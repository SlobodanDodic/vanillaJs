/// <reference path="Pacijent.ts" />

class Bolnica {
  private _naziv: string;
  private _grad: string;
  private _pacijenti: Pacijent[];

  constructor(naziv: string, grad: string) {
    this._naziv = naziv;
    this._grad = grad;
    this._pacijenti = [];
  }

  public get naziv() {
    return this._naziv;
  }
  public get grad() {
    return this._grad;
  }
  public get pacijenti() {
    return this._pacijenti;
  }
  public set naziv(value: string) {
    this._naziv = value;
  }
  public set grad(value: string) {
    this._grad = value;
  }
  public set pacijenti(value: Pacijent[]) {
    this._pacijenti = value;
  }

  public refreshHTML(): void {
    let view: string = "";

    for (let i = 0; i < this.pacijenti.length; i) {
      let pacijent = this.pacijenti[i];
      view = `<tr key=${pacijent.id}>
                <td>${pacijent.id}</td>
                <td>${pacijent.ime}</td>
                <td>${pacijent.prezime}</td>
                <td>${pacijent.telesnaTemperatura} °C</td>
                <td>${pacijent.pcrTest}</td>
                <td>
                  <ul>
                  ${pacijent.ostaliSimptomi.map((simp) => {
                    `<li>${simp.naziv}</li>`;
                  })}
                  </ul>
                </td>
              </tr>`;
    }
    document.getElementById("tbody").innerHTML = view;
  }

  public dodajPacijenta(pacijent: Pacijent): void {
    this._pacijenti.push(pacijent);
    this.refreshHTML();
  }

  public procentualnoObolelih(): number {
    let oboleli: Pacijent[] = this._pacijenti.filter((el) => el.pcrTest == "Pozitivan");
    let prosek: number = (oboleli.length / this._pacijenti.length) * 100;

    return prosek;
  }
}
