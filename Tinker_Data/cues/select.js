document.addEventListener("DOMContentLoaded", function () {
  let select1 = document.getElementById("select1");
  let select2 = document.getElementById("select2");
  let toggle = document.getElementById("toggle");
  let submitbtn = document.getElementById("submitbtn");

  select1.addEventListener("change", function (e) {
    if (e.target.value === "2") {
      // code
    } else {
      // code
    }
  });

  select2.addEventListener("change", function (e) {
    if (e.target.value === "something") {
      // code
    } else if (e.target.value === "something else") {
      // code
    } else {
      // code
    }
  });

  toggle.addEventListener("click", function (e) {
    e.target.checked === true
      ? (submitbtn.style.backgroundColor = boje.cekiran)
      : (submitbtn.style.backgroundColor = boje.necekiran);
  });
});
