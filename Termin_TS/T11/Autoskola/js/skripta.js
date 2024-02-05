var boje = {
  cekiran: "Crimson",
  necekiran: "Teal",
};

function proveraForme(form) {
  let name = form.ime.value;
  let lastname = form.prezime.value;

  if (name === "" || lastname === "") {
    alert(`Polja ne smeju da budu prazna!`);
    return false;
  }
}

// Opcija 1:
document.addEventListener("DOMContentLoaded", function () {
  let select1 = document.getElementById("sel1");
  let select2 = document.getElementById("sel2");
  let poruka = document.getElementById("poruka");
  let premium = document.getElementById("cb1");
  let submitbtn = document.getElementById("submitbtn");

  select1.addEventListener("change", function (e) {
    if (e.target.value === "2") {
      select2.classList.remove("sel2"); // or: select2.style.visibility = "visible";
      select2.disabled = false;
    } else {
      select2.classList.add("sel2"); // or: select2.style.visibility = "hidden";
      select2.disabled = true;
      premium.disabled = true;
      submitbtn.style.backgroundColor = "white";
      poruka.innerHTML = "";
    }
  });

  select2.addEventListener("change", function (e) {
    if (e.target.value === "10") {
      poruka.innerHTML = "10% popusta";
      premium.disabled = true;
      premium.checked = false;
      submitbtn.style.backgroundColor = "white";
    } else if (e.target.value === "20") {
      poruka.innerHTML = "20% popusta";
      premium.disabled = true;
      premium.checked = false;
      submitbtn.style.backgroundColor = "white";
    } else {
      poruka.innerHTML = "30% popusta";
      premium.disabled = false;
      submitbtn.style.backgroundColor = boje.necekiran;
    }
  });

  premium.addEventListener("click", function (e) {
    e.target.checked === true
      ? (submitbtn.style.backgroundColor = boje.cekiran)
      : (submitbtn.style.backgroundColor = boje.necekiran);
  });
});

// Opcija 2:
// function handlePopust(param) {
//   let select2 = document.getElementById("sel2");
//   let poruka = document.getElementById("poruka");
//   let premium = document.getElementById("cb1");
//   let submitbtn = document.getElementById("submitbtn");

//   if (param.value === "2") {
//     select2.style.visibility = "visible";
//     select2.disabled = false;
//   }
//   if (param.value === "1") {
//     select2.style.visibility = "hidden";
//     select2.disabled = true;
//     premium.disabled = true;
//     submitbtn.style.backgroundColor = "white";
//     poruka.innerHTML = "";
//   }
// }

// function handleProcenat(param) {
//   let poruka = document.getElementById("poruka");
//   let premium = document.getElementById("cb1");
//   let submitbtn = document.getElementById("submitbtn");

//   if (param.value === "10") {
//     poruka.innerHTML = "10% popusta";
//     premium.disabled = true;
//     premium.checked = false;
//     submitbtn.style.backgroundColor = "white";
//   }
//   if (param.value === "20") {
//     poruka.innerHTML = "20% popusta";
//     premium.disabled = true;
//     premium.checked = false;
//     submitbtn.style.backgroundColor = "white";
//   }
//   if (param.value === "30") {
//     poruka.innerHTML = "30% popusta";
//     premium.disabled = false;
//     submitbtn.style.backgroundColor = boje.necekiran;
//   }
// }

// function handleCheck(param) {
//   let submitbtn = document.getElementById("submitbtn");

//   param.checked === true ? (submitbtn.style.backgroundColor = boje.cekiran) : (submitbtn.style.backgroundColor = boje.necekiran);
// }
