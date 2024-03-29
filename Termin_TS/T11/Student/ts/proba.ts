let studenti: Student[] = [];
let aktivanStudent: Student = null;

function promeniAktivnog(selekt: HTMLSelectElement) {
  //TODO Implement
}

class Predmet {
  private _naziv: string;
  private _ocena: number;

  constructor(naziv: string, ocena: number) {
    this._naziv = naziv;
    this._ocena = ocena;
  }

  public get naziv() {
    return this._naziv;
  }

  public get ocena() {
    return this._ocena;
  }
}

class Student {
  private _ime: string;
  private _prezime: string;
  private _jmbg: number;
  private _predmeti: Predmet[];

  constructor(ime: string, prezime: string, jmbg: number) {
    this._ime = ime;
    this._prezime = prezime;
    this._jmbg = jmbg;
    this._predmeti = [];
  }

  public get ime() {
    return this._ime;
  }
  public set ime(value: string) {
    this._ime = value;
  }
  public get jmbg() {
    return this._jmbg;
  }
  public set jmbg(value: number) {
    this._jmbg = value;
  }
  public get prezime() {
    return this._prezime;
  }
  public set prezime(value: string) {
    this._prezime = value;
  }

  public refreshPredmeti() {
    let view: string = "";

    for (let i = 0; i < this._predmeti.length; i++) {
      let predmet = this._predmeti[i];

      view += `<div">
                  <p>Predmet: ${predmet.naziv}</p>
                  <p>Ocena: ${predmet.ocena}</p>
                </div>`;
    }

    document.getElementById("predmeti").innerHTML = view;
  }

  public dodajPredmet(predmet: Predmet) {
    this._predmeti.push(predmet);
    this.refreshPredmeti();
  }

  public getProsek(): number {
    // return this._predmeti.reduce((prev, next) => prev + next.ocena, 0) / this._predmeti.length;
    let sum = 0;
    for (let i = 0; i < this._predmeti.length; i++) {
      sum += this._predmeti[i].ocena;
    }

    return sum / this._predmeti.length;
  }
}

function wireEvents() {
  document.getElementById("dodajPredmet").addEventListener("click", () => {
    let naziv: HTMLInputElement = document.getElementById("naziv") as HTMLInputElement;
    let ocena: HTMLInputElement = document.getElementById("ocena") as HTMLInputElement;
    let p: Predmet = new Predmet(naziv.value, Number(ocena.value));
    aktivanStudent.dodajPredmet(p);
  });

  document.getElementById("izracunajProsecnuOcenu").addEventListener("click", () => {
    let prosekOut: HTMLElement = document.getElementById("prosecnaOcena");

    prosekOut.innerHTML = `Prosecna ocena za studenta: ${aktivanStudent.ime} ${
      aktivanStudent.prezime
    } je ${aktivanStudent.getProsek()}`;
  });
}

//OVAJ KOD OSTAVITI NA DNU FAJLA
window.onload = function () {
  initStudenti.forEach((elem) => {
    let s: Student = new Student(elem.ime, elem.prezime, Number(elem.jmbg));
    elem.predmeti.forEach((elem) => {
      let p: Predmet = new Predmet(elem.naziv, elem.ocena);
      s.dodajPredmet(p);
    });
    studenti.push(s);
    if (aktivanStudent == null) {
      aktivanStudent = s;
    }
  });
  if (QueryString["ime"] != null) {
    var student = new Student(QueryString["ime"], QueryString["prezime"], Number(QueryString["jmbg"]));
    studenti.push(student);
  }
  let selekt: HTMLElement = document.getElementById("student");
  let output: string = "";
  for (let i = 0; i < studenti.length; i++) {
    let optionElem = `<option value=${studenti[i].jmbg}>${studenti[i].ime} ${studenti[i].prezime}</option>`;
    output += optionElem;
  }
  selekt.innerHTML = output;
  aktivanStudent.refreshPredmeti();
  wireEvents();
};

var initStudenti = [
  {
    ime: "Pera",
    prezime: "Peric",
    jmbg: "1123456789000",
    predmeti: [
      {
        naziv: "Predmet1",
        ocena: 10,
      },
      {
        naziv: "Predmet2",
        ocena: 8,
      },
      {
        naziv: "Predmet3",
        ocena: 9,
      },
      {
        naziv: "Predmet4",
        ocena: 9,
      },
    ],
  },
  {
    ime: "Mika",
    prezime: "Mikic",
    jmbg: "1123456789001",
    predmeti: [
      {
        naziv: "Predmet1",
        ocena: 7,
      },
      {
        naziv: "Predmet2",
        ocena: 10,
      },
      {
        naziv: "Predmet3",
        ocena: 8,
      },
    ],
  },
];

var QueryString = (function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
})();
