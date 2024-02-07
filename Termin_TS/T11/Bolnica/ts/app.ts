/// <reference path="Bolnica.ts" />

let bolnice: Bolnica[] = [];
let aktivnaBolnica: Bolnica = null;

function promeniAktivnu(selekt: HTMLSelectElement): void {
  aktivnaBolnica = bolnice.filter((el) => el.naziv == selekt.value)[0];
  aktivnaBolnica.refreshHTML();
}

function wireEvents(): void {
  document.getElementById("dodajPacijenta").addEventListener("click", () => {
    let ids: number = +Date.now();
    let ime: string = (document.getElementById("ime") as HTMLInputElement).value;
    let prezime: string = (document.getElementById("prezime") as HTMLInputElement).value;
    let temperatura: number = +(document.getElementById("temperatura") as HTMLInputElement).value;
    let test: string = (document.getElementById("test") as HTMLInputElement).value;

    let noviPacijent = new Pacijent(ids, ime, prezime, temperatura, test);

    console.log(noviPacijent);

    aktivnaBolnica.dodajPacijenta(noviPacijent);
    aktivnaBolnica.refreshHTML();
  });

  document.getElementById("dodajSimptom").addEventListener("click", () => {
    let id: number = +(document.getElementById("ids") as HTMLInputElement).value;
    let simptom: string = (document.getElementById("simptom") as HTMLInputElement).value;

    let noviSimptom = new Simptom(simptom);
    console.log(noviSimptom);

    aktivnaBolnica.pacijenti.filter((el) => el.id === id)[0].dodajSimptom(noviSimptom);
    aktivnaBolnica.refreshHTML();
  });

  document.getElementById("procenat").addEventListener("click", () => {
    let view = document.getElementById("podaci") as HTMLElement;

    view.innerHTML = `
    <h2>
      Procenutala broj obolelih u bolnici: 
      ${aktivnaBolnica.naziv} je 
      ${aktivnaBolnica.procentualnoObolelih()}%
    <h2>
    `;
  });

  document.getElementById("bezSimptoma").addEventListener("click", () => {});
}

window.onload = () => {
  // Po potrebi zakomentarisati initializeData();
  // initializeData();

  wireEvents();
};

function initializeData() {
  let bol = (window as any).bol;
  let selekt = document.getElementById("bolnica") as HTMLSelectElement;

  for (let i = 0; i < bol.length; i++) {
    let naziv = bol[i].naziv;
    let grad = bol[i].grad;
    let pacijenti: Pacijent[] = [];

    for (let j = 0; j < bol[i].pacijenti.length; j++) {
      let id = Number(bol[i].pacijenti[j].id);
      let ime = bol[i].pacijenti[j].ime;
      let prezime = bol[i].pacijenti[j].prezime;
      let temperatura = Number(bol[i].pacijenti[j].telesnaTemperatura);
      let pcrTest = bol[i].pacijenti[j].pcrTest;
      let simptomi: Simptom[] = [];
      for (let k = 0; k < bol[i].pacijenti[j].ostaliSimptomi.length; k++) {
        let s = new Simptom(bol[i].pacijenti[j].ostaliSimptomi[k]);
        simptomi.push(s);
      }
      let p = new Pacijent(id, ime, prezime, temperatura, pcrTest);
      p.ostaliSimptomi = simptomi;
      pacijenti.push(p);
    }

    let b = new Bolnica(naziv, grad);
    b.pacijenti = pacijenti;

    if (aktivnaBolnica == null) {
      aktivnaBolnica = b;
      b.refreshHTML();
    }

    bolnice.push(b);
    let option = document.createElement("option");
    option.text = b.naziv;
    selekt.add(option);
  }
}
