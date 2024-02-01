/// <reference path="Restoran.ts" />
let stavkeJelovnikaInit: any;
let porudzbineInit: any;

let otvorenaPorudzbina: Porudzbina = null;
let aktivanRestoran = new Restoran("Kod Raspevanog Italijana");

function clickedMenu(menuId: number) {
  let stavkaJelovnika = aktivanRestoran.getStavkaJelovnikaById(menuId);
  let stavkaPorudzbine = null;
  for (let stavka of otvorenaPorudzbina.stavke) {
    if (stavka.stavkaJelovnika.id == menuId) {
      stavkaPorudzbine = stavka;
      break;
    }
  }
  if (stavkaPorudzbine == null) {
    stavkaPorudzbine = new StavkaPorudzbine(stavkaJelovnika, 0);
    otvorenaPorudzbina.stavke.push(stavkaPorudzbine);
  }
  stavkaPorudzbine.kolicina += 1;
  document.getElementById("spanJelovnik" + menuId).innerHTML = stavkaPorudzbine.kolicina;
}

function otvoriPorudzbinu(forma: HTMLFormElement) {
  let ime = (forma.ime as HTMLInputElement).value.trim();
  let porudzbina = aktivanRestoran.napraviPorudzbinu(ime, new Date());
  otvorenaPorudzbina = porudzbina;

  (document.getElementById("idp") as HTMLInputElement).value = porudzbina.id.toString();
  (document.getElementById("imep") as HTMLInputElement).value = porudzbina.imeKlijenta;
  (document.getElementById("datump") as HTMLInputElement).value = porudzbina.datum.toString();
  document.getElementById("otvorenaporudzbinadiv").removeAttribute("hidden");

  aktivanRestoran.refreshJelovnik();
  document.getElementById("jelovnikdiv").removeAttribute("hidden");
  document.getElementById("ispis").innerHTML = "";
  (document.getElementById("otvoribtn") as HTMLButtonElement).disabled = true;

  return false;
}

function otkaziPorudzbinu() {
  document.getElementById("otvorenaporudzbinadiv").setAttribute("hidden", "");
  document.getElementById("jelovnikdiv").setAttribute("hidden", "");

  otvorenaPorudzbina.status = "Otkazana";
  (document.getElementById("otvoribtn") as HTMLButtonElement).disabled = false;

  otvorenaPorudzbina = null;
}

function zatvoriPorudzbinu() {
  document.getElementById("otvorenaporudzbinadiv").setAttribute("hidden", "");
  document.getElementById("jelovnikdiv").setAttribute("hidden", "");

  otvorenaPorudzbina.status = "Zatvorena";

  let out = `Porudzbina broj: ${otvorenaPorudzbina.id} <br/>`;
  out += `Klijent: ${otvorenaPorudzbina.imeKlijenta} <br/>`;
  out += `Datum: ${otvorenaPorudzbina.datum} <br/><br/>`;
  out += `Naručeno: <br/>`;

  for (let stavka of otvorenaPorudzbina.stavke) {
    out += `${stavka.stavkaJelovnika.naziv} (${stavka.stavkaJelovnika.cena} x ${stavka.kolicina}) ---- ${
      stavka.kolicina * stavka.stavkaJelovnika.cena
    } <br/>`;
  }

  out += `<br/>Ukupna za naplatu: <b>${otvorenaPorudzbina.cenaPorudzbine()}</b>`;

  document.getElementById("ispis").innerHTML = out;
  (document.getElementById("otvoribtn") as HTMLButtonElement).disabled = false;

  otvorenaPorudzbina = null;
}

function zlatniKlijenti() {
  document.getElementById("ispis").innerHTML = aktivanRestoran.zlatniKlijenti();
}

function jelaPoKlijentu() {
  document.getElementById("ispis").innerHTML = aktivanRestoran.najProfitabilnijiTipPoKlijentu();
}

window.onload = function () {
  ucitajPodatke();
  aktivanRestoran.refreshJelovnik();
};

function ucitajPodatke() {
  for (let i = 0; i < stavkeJelovnikaInit.length; i++) {
    let st = new StavkaJelovnika(stavkeJelovnikaInit[i].naziv, stavkeJelovnikaInit[i].cena, stavkeJelovnikaInit[i].tip);
    aktivanRestoran.dodajStavkuJelovnika(st);
  }

  for (let i = 0; i < porudzbineInit.length; i++) {
    let p = new Porudzbina(porudzbineInit[i].imeKlijenta, new Date(porudzbineInit[i].datum), porudzbineInit[i].status);
    for (let stavka of porudzbineInit[i].stavke) {
      let st = aktivanRestoran.getStavkaJelovnikaById(stavka.idstavke);
      let kolicina: number = stavka.kolicina;
      let stpor = new StavkaPorudzbine(st, kolicina);
      p.stavke.push(stpor);
    }
    aktivanRestoran.porudzbine.push(p);
  }
}
