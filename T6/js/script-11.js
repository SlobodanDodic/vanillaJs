// Zadatak 11:

// U okviru foldera 11. events, implementirati reakciju na sledeće događaje:
// 	1. click: kada se klikne na HTML DOM element sa id-jem "kockica" promeniti stil backgroundColor na "orange",
// - a ukoliko je stil backgroundColor "orange" promeniti backgroundColor na "" (prazan string)

// 	2. mouseenter: kada se miš postavi na HTML DOM element sa id-jem "kockica" promeniti stil backgroundColor na "green"

// 	3. mouseleave: kada se miš postavi na HTML DOM element sa id-jem "kockica" promeniti stil backgroundColor na "" (prazan string)

// 	Prilikom svakog događaja, u HTML DOM element sa id-jem "dynamicLabel" kao innerHTML postaviti tekst naziva događaja.
// 	Zadatak rešavati u okviru window.onload događaja (prokomentarisati zašto).
// 	Za rešavanje koristiti funkciju addEventListner kao što je iskorišćena u primeru 1_this.

// --------------------------------------------------------------------------------------------------------------------------------
// window.onload = () => {} event
// - nam je neophodan da bi se eventi pokrenuli automatski nakon upload-a html stranice:

window.onload = () => {
  const kockica = document.getElementById("kockica");
  const dynamicLabel = document.getElementById("dynamicLabel");

  let clickCount = 1;

  kockica.addEventListener("click", function () {
    const backgroundColor = kockica.style.backgroundColor;

    if (backgroundColor === "orange") {
      kockica.style.backgroundColor = "";
      dynamicLabel.innerHTML = `Click number: ${clickCount++}`;
    } else {
      kockica.style.backgroundColor = "orange";
      dynamicLabel.innerHTML = `Click number: ${clickCount++}`;
    }
  });

  kockica.addEventListener("mouseenter", function () {
    kockica.style.backgroundColor = "green";
    dynamicLabel.innerHTML = "mouseenter";
  });

  kockica.addEventListener("mouseleave", function () {
    kockica.style.backgroundColor = "";
    dynamicLabel.innerHTML = "mouseleave";
  });
};
