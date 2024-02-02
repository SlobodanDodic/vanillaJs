// Stranica - index.html

// 1. Validirati polja forme (ime i prezime) tako da se ne moze odraditi submit dok se oni ne popune.
// 2. Pocetno slovo imena i prezimena mora biti veliko.
function inputValidation(polje, tekst, jmbg = false) {
  if (polje.value === "") {
    alert(tekst);
    polje.focus();
    return false;
  }

  if (jmbg) {
    let jmbgCondition = /^[0-9]+$/.test(polje.value) && polje.value.length === 13;
    if (!jmbgCondition) {
      alert(`Invalid input for the JMBG!\nJMBG must have exactly 13 digits and must contain only numbers.`);
      polje.focus();
      return false;
    }
  }

  if (polje.value[0] !== polje.value[0].toUpperCase()) {
    alert("The first letter must be uppercase.");
    polje.focus();
    return false;
  }

  return true;
}

function proveraForme(form) {
  return (
    inputValidation(form.usr, "Niste uneli ime") &&
    inputValidation(form.usr, "Ime mora poceti velikim slovom!") &&
    inputValidation(form.prz, "Niste uneli prezime") &&
    inputValidation(form.prz, "Prezime mora poceti velikim slovom!")
  );
}

// 3. Inicijalno je "Membership" select onemogucen (disabled). Klikom na checkbox "Premium" omoguciti pomenuti select.
// 	  - Takodje, ukoliko se checkbox "Premium" klikne opet, onemoguciti select.
function handleCheckbox(param) {
  let checkbox = document.getElementById("sel1");
  checkbox.disabled = !param.checked;

  handleSelect();
}

// 4. Pozadina Submit dugmeta je inicijalno bela, dok "Premium" checkbox nije stikliran.
//    - nakon stikliranja checkboxa promeniti pozadinu dugmeta u skladu sa odabranom opcijom na selectu:
// 		  Silver    -> pozadina treba da je : "silver"
// 		  Gold 	    -> pozadina treba da je : "gold"
// 		  Platinum  -> pozadina treba da je : "skyblue"
// 5. Ukoliko se checkbox odstiklira, vratiti pozadinu na belu boju.

function handleSelect() {
  let checkbox = document.getElementById("sel1");
  let submitbtn = document.getElementById("submitbtn");

  if (checkbox.disabled) {
    submitbtn.style.backgroundColor = "white";
  } else {
    if (checkbox.value === "1") {
      submitbtn.style.backgroundColor = "silver";
    } else if (checkbox.value === "2") {
      submitbtn.style.backgroundColor = "gold";
    } else {
      submitbtn.style.backgroundColor = "skyblue";
    }
  }
}

// Stranica - next.html

// 6. Prilikom ucitavanja stranice pokupiti iz search-a parametre forme.
//    Formirati recnik koji za kljuceve i njihove vrednosti ima parametre forme. Npr:
// 		?ime=Pera&prezime=Peric&status=Premium&klasa=1
// 		recnik bi bio
// 		recnik = {
// 			"ime": "Pera",
// 			"prezime" : "Peric",
// 			"status" : "Premium",
// 			"klasa" : "1"
// 		};

// 7. Dobaviti h1 tag sa id-om "welcome_user" i u njega upisati vrednosti iz recnika, npr:
// 		"Hello, Pera Peric"

// 8. Dobaviti h4 tag sa id-om "premium_member" i u njega upisati, npr:
// 		"You are our premium member, with Silver membership!"
// 	  Gde je Silver promenljivo, odnosno ako je gold member pisace Gold, itd.
//    Obratiti paznju ukoliko nije stikliran checkbox "Premium", ovaj tag ne treba biti popunjen,
//    odnosno "status" parametar se nece slati na sledecu stranicu

// 9. Na stranici next.html nalaze se objekti sa informacijama o nekim destinacijama, koji su ubaceni u listu destinations.
// 	Prilikom ucitavanja stranice, potrebno je popuniti select sa id-om: "sel1" sa informacijama o tim destinacijama.
// 	Npr, ukoliko hocemo da dodamo informaciju u sel1, to mozemo uraditi na sledeci nacin:
// 	sel1.options[sel1.options.length] = new Option("Text", "Value");
// 	Obratiti paznju da svaka destinacija ima atribut type, koji moze biti ordinary, silver, gold, platinum.
// 	Dakle, ako je korisnik na prethodnoj stranici odabrano da je korisnik silver, on ima pristup destinacijama ordinary i silver.
// 	Za gold ima pristup ordinary, silver i gold. Na kraju za platinum ima pristup svim destinacijama.
// 	Ukoliko na prethodnoj stranici nije cekirano premium prikazati samo ordinary destinacije.

// 10. U selectu sel1, sada je moguce odabrati odredjene destinacije. Kada korisnik odabere neku od dozvoljenih destinacija i klikne na
// 	dugme submit, potrebno je pararagraf sa id-om: "paragraph" popuniti sa informacijom o ceni karte do te destinacije.
// 	Npr: Price for your selected destination is 4500.
if (window.location.pathname === "/T5/Membership/next.html") {
  if (!window.location.search) {
    window.history.back();
  } else {
    var dest1 = {
      name: "beograd",
      price: 1500,
      type: "ordinary",
    };

    var dest2 = {
      name: "vienna",
      price: 2500,
      type: "ordinary",
    };

    var dest3 = {
      name: "budapest",
      price: 1800,
      type: "ordinary",
    };

    var dest4 = {
      name: "london",
      price: 3500,
      type: "silver",
    };

    var dest5 = {
      name: "madrid",
      price: 1500,
      type: "silver",
    };

    var dest6 = {
      name: "moscow",
      price: 3500,
      type: "gold",
    };

    var dest7 = {
      name: "rome",
      price: 3900,
      type: "gold",
    };

    var dest8 = {
      name: "Tokyo",
      price: 4500,
      type: "platinum",
    };

    var dest9 = {
      name: "new york",
      price: 4800,
      type: "platinum",
    };

    var destinations = [];
    destinations.push(dest1);
    destinations.push(dest2);
    destinations.push(dest3);
    destinations.push(dest4);
    destinations.push(dest5);
    destinations.push(dest6);
    destinations.push(dest7);
    destinations.push(dest8);
    destinations.push(dest9);

    window.onload = function () {
      let search = window.location.search;
      let items = search.substring(1).split("&");

      let obj = {};
      for (let i in items) {
        let tmp = items[i].split("=");
        obj[tmp[0]] = tmp[1];
      }

      let hello = document.getElementById("welcome_user");
      hello.innerHTML = "Hello, " + obj.ime + " " + obj.prezime;

      let passenger_status = obj.status;
      if (passenger_status) {
        let premium_member = document.getElementById("premium_member");
        premium_member.innerHTML = "You are our premium member, with " + getMembership(obj.klasa) + " membership!";
      }

      // Select koji sadrzi moguce destinacije:
      // let select2 = document.getElementById("select2");

      // if (passenger_status) {
      //   let membership = getMembership(obj.klasa);

      //   for (let i in destinations) {
      //     let canAdd = false;
      //     let destination = destinations[i];

      //     if (destination.type == "platinum" && membership == "Platinum") {
      //       canAdd = true;
      //     } else if (destination.type == "gold" && (membership == "Gold" || membership == "Platinum")) {
      //       canAdd = true;
      //     } else if (
      //       destination.type == "silver" &&
      //       (membership == "Gold" || membership == "Platinum" || membership == "Silver")
      //     ) {
      //       canAdd = true;
      //     } else if (destination.type == "ordinary") {
      //       canAdd = true;
      //     } else {
      //       canAdd = false;
      //     }

      //     if (canAdd) {
      //       select2.options[select2.options.length] = new Option(destinations[i].name, destinations[i].name);
      //     }
      //   }
      // } else {
      //   for (let i in destinations) {
      //     let destination = destinations[i];
      //     if (destination.type == "ordinary") {
      //       select2.options[select2.options.length] = new Option(destinations[i].name, destinations[i].name);
      //     }
      //   }
      // }

      let select2 = document.getElementById("select2");
      let membership = getMembership(obj.klasa);

      let ordinary = destinations.filter((destination) => destination.type === "ordinary");
      let silverAndOrdinary = destinations.filter(
        (destination) => destination.type === "silver" || destination.type === "ordinary"
      );
      let gold = destinations.filter((destination) => destination.type !== "platinum");
      let platinum = destinations.filter((destination) => destination);

      if (passenger_status) {
        if (membership === "Silver") {
          addOptionsToSelect(silverAndOrdinary);
        } else if (membership === "Gold") {
          addOptionsToSelect(gold);
        } else if (membership === "Platinum") {
          addOptionsToSelect(platinum);
        }
      } else {
        addOptionsToSelect(ordinary);
      }
    };

    // Popunjava options u select-u sa destination:
    function addOptionsToSelect(options) {
      options.forEach((destination) => {
        select2.add(new Option(destination.name, destination.name));
      });
    }

    // Metoda getMembership() vraca odgovarajuci string za prosledjeni broj:
    function getMembership(value) {
      if (value == 1) {
        return "Silver";
      } else if (value == 2) {
        return "Gold";
      } else {
        return "Platinum";
      }
    }

    // Metoda koja prikazuje cenu leta do destinacije:
    function calculate() {
      let select2 = document.getElementById("select2");
      let dest = select2.options[select2.selectedIndex].value;

      for (let i in destinations) {
        if (dest == destinations[i].name) {
          let price = document.getElementById("price");
          price.innerHTML = `Price for your selected destinations is  ${destinations[i].price} INR`;
        }
      }
    }
  }
}
