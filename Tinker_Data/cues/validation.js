// OPCIJA 1:
var upozorenje = {
  poruka: "Grad mora biti velikim slovima",
};

function inputValidation(field, text, jmbg = false, grad = false) {
  let submitBtn = document.getElementById("submitBtn");
  let label = document.getElementById("jmbg_label");

  if (field.value === "") {
    alert(text);
    field.focus();
    return false;
  }

  if (jmbg) {
    let jmbgCondition = /^[0-9]+$/.test(field.value) && field.value.length === 13;
    if (!jmbgCondition) {
      alert(`Invalid input for the JMBG!\nJMBG must have exactly 13 digits and must contain only numbers.`);
      field.focus();
      label.classList.add("redText");
      submitBtn.disabled = true;
      return false;
    } else {
      label.classList.remove("redText");
      submitBtn.disabled = false;
    }
  }

  if (grad) {
    if (field.value !== field.value.toUpperCase()) {
      callAlertFunction(upozorenje, ispisiPoruku);
      field.focus();
      return false;
    }
  }

  if (field.value[0] !== field.value[0].toUpperCase()) {
    alert("The first letter must be uppercase.");
    field.focus();
    return false;
  }

  return true;
}

function proveraForme(form) {
  return (
    inputValidation(form.ime, "Niste uneli ime") &&
    inputValidation(form.ime, "Ime mora poceti velikim slovom!") &&
    inputValidation(form.prezime, "Niste uneli prezime") &&
    inputValidation(form.prezime, "Prezime mora poceti velikim slovom!") &&
    inputValidation(form.jmbg, "JMBG nije pravilno unet!", true) &&
    inputValidation(form.grad, "Niste uneli grad!", false, true) &&
    inputValidation(form.grad, "Grad mora pisati velikim slovima!", false, true)
  );
}

function callAlertFunction(param, cb) {
  cb(param);
}

function ispisiPoruku(param) {
  alert(param.poruka);
}

// ------------------------------------------------------------------------
// OPCIJA 2:
var upozorenje = {
  poruka: "Grad mora biti velikim slovima",
};

function callAlertFunction(param, cb) {
  cb(param);
}

function ispisiPoruku(param) {
  alert(param.poruka);
}

function proveraForme(form) {
  // Polje IME:
  if (form.ime.value === "") {
    alert(`Polje IME ne sme da bude prazno.`);
    form.ime.focus();
    return false;
  }
  if (form.ime.value[0] !== form.ime.value[0].toUpperCase()) {
    alert("Prvo slovo polja IME mora biti veliko.");
    form.ime.focus();
    return false;
  }

  // Polje PREZIME:
  if (form.prezime.value === "") {
    alert(`Polje PREZIME ne sme da bude prazno.`);
    form.prezime.focus();
    return false;
  }
  if (form.prezime.value[0] !== form.prezime.value[0].toUpperCase()) {
    alert("Prvo slovo polja PREZIMENA mora biti veliko.");
    form.prezime.focus();
    return false;
  }

  // Polje JMBG:
  if (!(/^[0-9]+$/.test(form.jmbg.value) && form.jmbg.value.length === 13)) {
    alert(`Polje JMBG mora imati tačno 13 cifara.`);
    form.jmbg.focus();
    return false;
  }

  // Polje GRAD:
  if (form.grad.value === "" || form.grad.value !== form.grad.value.toUpperCase()) {
    callAlertFunction(upozorenje, ispisiPoruku);
    form.grad.focus();
    return false;
  }

  return true;
}

// ------------------------------------------------------------------------
// OPCIJA 3:
var upozorenje = {
  poruka: "Grad mora biti velikim slovima",
};

function callAlertFunction(param, cb) {
  cb(param);
}

function ispisiPoruku(param) {
  alert(param.poruka);
}

function proveraForme(form) {
  // Polje IME:
  if (form.ime.value === "") {
    alert(`Polje IME ne sme da bude prazno.`);
    form.ime.focus();
    return false;
  }
  if (form.ime.value[0] !== form.ime.value[0].toUpperCase()) {
    alert("Prvo slovo polja IME mora biti veliko.");
    form.ime.focus();
    return false;
  }

  // Polje PREZIME:
  if (form.prezime.value === "") {
    alert(`Polje PREZIME ne sme da bude prazno.`);
    form.prezime.focus();
    return false;
  }
  if (form.prezime.value[0] !== form.prezime.value[0].toUpperCase()) {
    alert("Prvo slovo polja PREZIMENA mora biti veliko.");
    form.prezime.focus();
    return false;
  }

  // Polje JMBG:
  if (!(/^[0-9]+$/.test(form.jmbg.value) && form.jmbg.value.length === 13)) {
    alert(`Polje JMBG mora imati tačno 13 cifara.`);
    form.jmbg.focus();
    return false;
  }

  // Polje GRAD:
  if (form.grad.value === "" || form.grad.value !== form.grad.value.toUpperCase()) {
    callAlertFunction(upozorenje, ispisiPoruku);
    form.grad.focus();
    return false;
  }

  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  let submitBtn = document.getElementById("submitBtn");
  let labelJmbg = document.getElementById("jmbg_label");
  let labelGrad = document.getElementById("grad_label");

  // eventListener: "change" || "blur"
  document.getElementById("jmbg").addEventListener("blur", (e) => {
    if (!(/^[0-9]+$/.test(e.target.value) && e.target.value.length === 13)) {
      // alert(`Polje JMBG mora imati tačno 13 cifara.`);
      labelJmbg.classList.add("redText");
      submitBtn.disabled = true;
      return false;
    } else {
      labelJmbg.classList.remove("redText");
      submitBtn.disabled = false;
    }
  });

  document.getElementById("grad").addEventListener("blur", (e) => {
    if (e.target.value !== e.target.value.toUpperCase()) {
      // alert(`Polje GRAD mora imati velika slova.`);
      labelGrad.classList.add("redText");
      submitBtn.disabled = true;
      return false;
    } else {
      labelGrad.classList.remove("redText");
      submitBtn.disabled = false;
    }
  });
});

// ------------------------------------------------------------------------
// OPCIJA 4:
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
