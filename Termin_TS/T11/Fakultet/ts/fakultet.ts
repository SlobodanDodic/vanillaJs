/// <reference path="ispit.ts" />

class Fakultet {
  private _naziv: string;
  private _predmeti: Predmet[];
  private _ispiti: Ispit[];

  constructor(naziv: string) {
    this._naziv = naziv;
    this._predmeti = [];
    this._ispiti = [];
  }

  public get naziv() {
    return this._naziv;
  }
  public get predmeti() {
    return this._predmeti;
  }
  public get ispiti() {
    return this._ispiti;
  }
  public set naziv(value: string) {
    this._naziv = value;
  }
  public set predmeti(value: Predmet[]) {
    this._predmeti = value;
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
                <td>${ispit.imeStudenta} ${ispit.prezimeStudenta}</td>
                <td>${ispit.predmet.nazivPredmeta}</td>
                <td>${ispit.deoIspita}</td>
                <td>${ispit.datum}</td>
                <td class=${
                  (ispit.deoIspita === "teorija" && ispit.brojBodova > 10) ||
                  (ispit.deoIspita === "kolokvijum" && ispit.brojBodova > 35)
                    ? "green"
                    : "red"
                }>${ispit.brojBodova}</td>
              </tr>`;
    }

    document.getElementById("tbody").innerHTML = view;
  }

  public izracunajProlaznostPoPredmetu(deoIspita: string, predmet: Predmet): void {
    let izabraniPredmet = this._predmeti.filter((p) => p.idPredmeta === predmet.idPredmeta)[0];
    let procenat = this._ispiti
      .filter((p) => p.deoIspita === deoIspita)
      .filter((d) => d.brojBodova >= 10)
      .reduce((a, b, i, array) => a + b.brojBodova / array.length, 0);

    let view = `<h3>Prolaznost za ${deoIspita} za predmet ${izabraniPredmet.nazivPredmeta} je ${procenat.toFixed(2)}%</h3>`;
    document.getElementById("podaci").innerHTML = view;
  }

  // public najlaksiProfesorPoNacinuPolaganja() {
  //   let teorija = this.ispiti.filter((ispit) => ispit.deoIspita === "teorija").filter((ispit) => ispit.brojBodova >= 10);
  //   let kolok = this.ispiti.filter((ispit) => ispit.deoIspita === "kolokvijum").filter((ispit) => ispit.brojBodova >= 35);

  //   console.log(teorija);
  //   console.log(teorija.map((i) => i.predmet.imeProfesora + " " + i.predmet.prezimeProfesora));

  //   console.log(kolok);
  //   console.log(kolok.map((i) => i.predmet.imeProfesora + " " + i.predmet.prezimeProfesora));

  //   const teorijaCount = teorija.reduce((accumulator, value) => {
  //     return {
  //       ...accumulator,
  //       [value.predmet.imeProfesora + " " + value.predmet.prezimeProfesora]:
  //         (accumulator[value.predmet.imeProfesora + " " + value.predmet.prezimeProfesora] || 0) + 1,
  //     };
  //   }, {});

  //   const kolokCount = kolok.reduce((accumulator, value) => {
  //     return {
  //       ...accumulator,
  //       [value.predmet.imeProfesora + " " + value.predmet.prezimeProfesora]:
  //         (accumulator[value.predmet.imeProfesora + " " + value.predmet.prezimeProfesora] || 0) + 1,
  //     };
  //   }, {});

  //   console.log(teorijaCount);
  //   console.log(kolokCount);
  // }

  public najlaksiProfesorPoNacinuPolaganja(): void {
    const teorija = this._ispiti.filter((ispit) => ispit.deoIspita === "teorija" && ispit.brojBodova >= 10);
    const kolok = this._ispiti.filter((ispit) => ispit.deoIspita === "kolokvijum" && ispit.brojBodova >= 35);

    const countPolozeneIspite = (ispiti: Ispit[]): { [key: string]: number } => {
      return ispiti.reduce((acc, ispit) => {
        const key = `${ispit.predmet.imeProfesora} ${ispit.predmet.prezimeProfesora}`;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});
    };

    const najlaksiProfesor = (counts: { [key: string]: number }): string => {
      let maxCount = 0;
      let maxProfesor = "";
      for (const profesor in counts) {
        if (counts.hasOwnProperty(profesor)) {
          if (counts[profesor] > maxCount) {
            maxCount = counts[profesor];
            maxProfesor = profesor;
          }
        }
      }
      return maxProfesor;
    };

    const teorijaCount = countPolozeneIspite(teorija);
    const kolokCount = countPolozeneIspite(kolok);

    const najlaksiTeorijaProfesor = najlaksiProfesor(teorijaCount);
    const najlaksiKolokProfesor = najlaksiProfesor(kolokCount);

    const view = `
        <h3>Profesor sa najlaksim teoretskim ispitom je ${najlaksiTeorijaProfesor} sa ukupno ${teorijaCount[najlaksiTeorijaProfesor]} polozenih ispita.</h3>
        <br>
        <h3>Profesor sa najlaksim kolokvijumom je ${najlaksiKolokProfesor} sa ukupno ${kolokCount[najlaksiKolokProfesor]} polozenih kolokvijuma.</h3>
    `;
    document.getElementById("podaci").innerHTML = view;
  }

  public polozenPredmet(predmet: Predmet): void {
    const teorija = [];
    const kolok = [];

    for (let i = 0; i < this._ispiti.length; i++) {
      const ispit = this._ispiti[i];
      if (ispit.predmet.idPredmeta === predmet.idPredmeta) {
        if (ispit.deoIspita === "teorija" && ispit.brojBodova >= 10) {
          teorija.push(ispit);
        } else if (ispit.deoIspita === "kolokvijum" && ispit.brojBodova >= 35) {
          kolok.push(ispit);
        }
      }
    }

    const polozeniIspiti = [];

    for (let i = 0; i < teorija.length; i++) {
      const teorijaIspit = teorija[i];
      for (let j = 0; j < kolok.length; j++) {
        const kolokIspit = kolok[j];
        if (
          teorijaIspit.brojIndeksaStudenta === kolokIspit.brojIndeksaStudenta &&
          teorijaIspit.brojBodova + kolokIspit.brojBodova > 50
        ) {
          polozeniIspiti.push(teorijaIspit);
          polozeniIspiti.push(kolokIspit);
          break;
        }
      }
    }

    let view = "";

    for (let i = 0; i < polozeniIspiti.length; i++) {
      const ispit = polozeniIspiti[i];
      view += `<tr>
                <td>${ispit.brojIndeksaStudenta}</td>
                <td>${ispit.imeStudenta} ${ispit.prezimeStudenta}</td>
                <td>${ispit.predmet.nazivPredmeta}</td>
                <td>${ispit.deoIspita}</td>
                <td>${ispit.datum}</td>
                <td>${ispit.brojBodova}</td>
              </tr>`;
    }

    document.getElementById("tbody").innerHTML = view;
  }
}
