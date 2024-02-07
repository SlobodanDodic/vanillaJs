var boje = {
  rucak: "Crimson",
  pice: "Teal",
};

var osobe = [
  { ime: "Pera", prezime: "Peric" },
  { ime: "Marko", prezime: "Markovic" },
  { ime: "Jovo", prezime: "Jovic" },
];

function proveraForme(form) {
  let inputIme = form.ime.value.trim();
  let inputPrezime = form.prezime.value.trim();

  if (inputIme === "") {
    alert(`Polje IME ne sme da bude prazno.`);
    form.ime.focus();
    return false;
  }
  if (inputIme[0] !== inputIme[0].toUpperCase()) {
    alert("Prvo slovo polja IME mora biti veliko.");
    form.ime.focus();
    return false;
  }

  if (inputPrezime === "") {
    alert(`Polje PREZIME ne sme da bude prazno.`);
    form.prezime.focus();
    return false;
  }
  if (inputPrezime[0] !== inputPrezime[0].toUpperCase()) {
    alert("Prvo slovo polja PREZIMENA mora biti veliko.");
    form.prezime.focus();
    return false;
  }

  let validOsoba = osobe.find((osoba) => osoba.ime === inputIme && osoba.prezime === inputPrezime);
  if (!validOsoba) {
    alert(`Osoba nije autorizovana!`);
    return false;
  }

  return true;
}

function box(param) {
  let sel1 = document.getElementById("sel1");
  let sel2 = document.getElementById("sel2");
  let poruka = document.getElementById("poruka");

  if (param.checked === true) {
    sel1.disabled = false;
  } else {
    sel1.disabled = true;
    sel2.disabled = true;
    sel2.classList.add("sel2");
    poruka.innerText = "";
  }
}

function test(param) {
  let sel2 = document.getElementById("sel2");

  if (param.value === "3") {
    sel2.disabled = false;
    sel2.classList.remove("sel2");
  } else {
    sel2.disabled = true;
    sel2.classList.add("sel2");
  }
}

function selekt2(param) {
  let paragraf = document.getElementById("select_paragraf");
  let submit = document.getElementById("submitbtn");
  let poruka = document.getElementById("poruka");

  if (param.value === "rucak") {
    poruka.innerText = param.value;
    paragraf.style.backgroundColor = boje.rucak;
    submit.style.backgroundColor = boje.rucak;
  } else {
    poruka.innerText = param.value;
    paragraf.style.backgroundColor = boje.pice;
    submit.style.backgroundColor = boje.pice;
  }
}
