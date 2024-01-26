/// <reference path="vinarija.ts" />
let vina: any;
let vinarija = new Vinarija(vina);


evaluiraj(); //Provera CRUD funkcionalnosti funkcija na dnu.



window.onload = function () {
  //TODO 1. b) Pozvati printWines metodu vinarije.
  vinarija.printWines();



  vinarija.najstariji();





  //TODO 1. c) Dodati reakciju na submit dogadjaj frome sa id-jem unosForma

  document.getElementById("unosForma").addEventListener("submit", function (e) {
    e.preventDefault();

    let forma = this as HTMLFormElement;

    // let id = ((forma.id as unknown) as HTMLInputElement);
    let id = forma.id as any;
    let name = forma.id as any;
    let description = forma.id as any;
    let grapes = forma.id as any;
    let country = forma.id as any;
    let region = forma.id as any;
    let year = forma.id as any;
    let picture = forma.id as any;

    let obj = {
      "id": id.value,
      "name": name.value,
      "description": description.value,
      "grapes": grapes.value,
      "country": country.value,
      "region": region.value,
      "year": year.value,
      "picture": picture.value,
    }

    let vino = new Vino(obj);
    vinarija.add(vino);
    vinarija.printWines();
    wireEvents();
  });
  //TODO 1. d) pozvati wire events.
  wireEvents();
}

function wireEvents(): void {

  //TODO 1. d) Implementirati reakciju na submit dogadjaj formi za brisanje.
  let formeZaBrisanje = document.getElementsByClassName("deleteForm");
  for (let i = 0; i < formeZaBrisanje.length; i++) {
    formeZaBrisanje[i].addEventListener("submit", function (e) {
      e.preventDefault();
      let forma = this as HTMLFormElement;
      let idVina = Number(((forma.id as unknown) as HTMLInputElement).value);
      vinarija.remove(idVina);

      vinarija.printWines();
      wireEvents();
    });
  }

  //TODO 1. e) Implementirati reakciju na submit dogadjaj formi za izmenu.  
  let formeZaEditovanje = document.getElementsByClassName("editForm");
  let visibilityInput = document.getElementById("id");
  let innerH1 = document.getElementById("header");
  let nameId = document.getElementById("name");

  for (let i = 0; i < formeZaEditovanje.length; i++) {
    formeZaEditovanje[i].addEventListener("submit", function (e) {
      e.preventDefault();
      let forma = this as HTMLFormElement;
      let idVina = Number(((forma.id as unknown) as HTMLInputElement).value);
      vinarija.get(idVina);
      let vino = (vinarija.get(idVina))
      console.log(vino)
      vinarija.update(vino);

      visibilityInput.style.visibility = "visible";
      innerH1.textContent = "Izmena vina";

      // Postaviti vrednosti input polja da imaju vrednost iz preuzetog objekta vina.

      nameId.focus();

      vinarija.printWines();
      wireEvents();
    });
  }



}



/**
 * Funkcija evaluiraj proverava CRUD funkcionalnosti.
 * Ukoliko nije ispisana poruka "GRESKA! ..." CRUD funkcionalnosti su dobro odradjene.
 */
function evaluiraj() {
  if (vinarija.lastId == 12) {
    console.log("Uspesno dodati elementi!")
  } else {
    console.log("GRESKA! Poslednji index nije 12 nakon dodavanja");
  }

  let vino = vinarija.get(3);
  if (vino.name == "MARGERUM SYBARITE") {
    console.log("Get je vratio ispravno vino!");
  } else {
    console.log("GRESKA! Get nije vratio ispravno vino!");
  }

  let vino_null = vinarija.get(23);
  if (vino_null == null) {
    console.log("Get je vratio ispravno rezultat!");
  } else {
    console.log("GRESKA! Get nije vratio ispravan rezultat!");
  }

  let novo = {
    "id": 0,
    "name": "SVB Rosa",
    "year": 2010,
    "grapes": "Prokupac & Cabarnet Sauvignon",
    "country": "RS",
    "region": "Župa, Zapadna [West] Morava Region, Serbia",
    "description": "Svb Rosa is a specific blend of Serbian Prokupac and Cabernet Sauvignon. Color: Deep, dark purple which almost becomes black in color with purple and black reflections.",
    "picture": ""
  }

  let novoVino = new Vino(novo);
  vinarija.add(novoVino);
  if (vinarija.lastId == 13 && vinarija.get(13).name == novoVino.name) {
    console.log("Novo Vino je uspeseno dodato!");
  } else {
    console.log("GRESKA! Greska pri dodavanju novog vina!");
  }

  let vinoZaIzmenu = vinarija.get(13);
  vinoZaIzmenu.year = 2007;
  vinarija.update(vinoZaIzmenu);
  if (vinarija.get(13).year == 2007) {
    console.log("Vino je uspeseno izmenjeno!");
  } else {
    console.log("GRESKA! Vino nije uspesno izmenjeno!");
  }


  vinarija.remove(4);
  if (vinarija.spisakVina.length == 12 && vinarija.get(4) == null) {
    console.log("Vino uspesno uklonjeno!");
  } else {
    console.log("GRESKA! Greska pri uklanjanju vina!");
  }
}