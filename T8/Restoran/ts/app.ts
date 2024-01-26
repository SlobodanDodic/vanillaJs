/// <reference path="Restoran.ts" />
let stavkeJelovnikaInit: any;
let porudzbineInit: any;

let otvorenaPorudzbina: Porudzbina = null;
let aktivanRestoran = new Restoran("Kod Raspevanog Italijana");











































window.onload = function() {
    ucitajPodatke();
    aktivanRestoran.refreshJelovnik();
}


function ucitajPodatke() {
    for(let i = 0; i < stavkeJelovnikaInit.length; i++) {
        let st = new StavkaJelovnika(stavkeJelovnikaInit[i].naziv, stavkeJelovnikaInit[i].cena, stavkeJelovnikaInit[i].tip);
        aktivanRestoran.dodajStavkuJelovnika(st);
    }

    for(let i=0; i < porudzbineInit.length; i++) {
        let p = new Porudzbina(porudzbineInit[i].imeKlijenta, new Date(porudzbineInit[i].datum), porudzbineInit[i].status);
        for(let stavka of porudzbineInit[i].stavke) {
            let st = aktivanRestoran.getStavkaJelovnikaById(stavka.idstavke);
            let kolicina: number = stavka.kolicina;
            let stpor = new StavkaPorudzbine(st, kolicina);
            p.stavke.push(stpor);
        }
        aktivanRestoran.porudzbine.push(p);
    }
}




