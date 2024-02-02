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
