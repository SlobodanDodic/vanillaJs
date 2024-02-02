//  Q1:
//  - Kako napraviti da btn bude disabled i proveriti da li je unos user-a tacan.
//    const submitBtn = document.getElementById("submitBtn");
//    submitBtn.disabled = true;

//  Q2:
//  - Da li ipak dovoljno: document.getElementById("eco").style.visibility = "visible";
//  function ecoClassOn() {
//    let eco = document.getElementById("eco");
//    if (eco.className == "eco") {
//      document.getElementById("eco").style.visibility = "visible";
//    }
//  }

// Zadatak 4
// 1. Proveriti da li su sva polja forme popunjena.
// 2. Ukoliko sva polja forme nisu popunjena zabraniti submit forme i prebaciti fokus na polje koje nije popunjeno.
// 3. Proveriti da li su pocetna slova imena i prezimena napisana velikim slovom i da li JMBG ima 13 brojeva.
// 4. Napraviti da se paragraf "Eko klasa" prikazuje prilikom ulaska kursora u taj red Tip vozila, a da se sakriva prilikom izlaska.
// 5. Ukoliko je odabran elektricni tip vozila obojiti paragraf "Eko klasa" zelenom bojom, odnosno crvenom bojom ako je motorni tip vozila.
// 6. Preuzeti parametre forme iz index.html i uneti ih u tabelu table.html

if (window.location.pathname === "/T4/FourthTask/table.html") {
  if (!window.location.search) {
    window.history.back();
  } else {
    let table = document.getElementById("table");

    let search = window.location.search;
    let removeFirstChar = search.substring(1);
    let splitSearch = removeFirstChar.split("&");

    let name = splitSearch[0].split("=")[1];
    let lastName = splitSearch[1].split("=")[1];
    let jmbg = splitSearch[2].split("=")[1];

    if (table) {
      let tableStorage = JSON.parse(localStorage.getItem("table")) || [];

      if (tableStorage.length > 0) {
        for (let i in tableStorage) {
          let newRow = document.createElement("tr");
          newRow.innerHTML = `<td> ${tableStorage[i].name} </td><td> ${tableStorage[i].lastName} </td><td> ${tableStorage[i].jmbg} </td>`;
          table.appendChild(newRow);
        }
      }

      let newRow = document.createElement("tr");
      newRow.innerHTML = `<td> ${name} </td><td> ${lastName} </td><td> ${jmbg} </td>`;
      table.appendChild(newRow);

      tableStorage.push({
        name: name,
        lastName: lastName,
        jmbg: jmbg,
      });

      localStorage.setItem("table", JSON.stringify(tableStorage));
    } else {
      console.error("Table element not found");
    }
  }
}

function selectedType(type) {
  if (type.value === "2") {
    document.getElementById("eco").style.color = "green";
  } else {
    document.getElementById("eco").style.color = "red";
  }
}

function ecoClassOn() {
  document.getElementById("eco").style.visibility = "visible";
}

function ecoClassOff() {
  document.getElementById("eco").style.visibility = "hidden";
}

function proveraPolja(polje, tekst, jmbg = false) {
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
    proveraPolja(form.ime, "Niste uneli ime") &&
    proveraPolja(form.ime, "Ime mora poceti velikim slovom!") &&
    proveraPolja(form.prezime, "Niste uneli prezime") &&
    proveraPolja(form.prezime, "Prezime mora poceti velikim slovom!") &&
    proveraPolja(form.jmbg, "Niste uneli JMBG", true) &&
    proveraPolja(form.registracija, "Niste uneli registraciju")
  );
}
