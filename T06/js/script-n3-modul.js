// Napisati modul koji u sebi ima dve promenljive:
// - maloprodajniLimit (inicijalizovati na vrednost 100) i
// - veleprodajniLimit (inicijalizovati na vrednost 80)

// proveraMaloprodaja function:
// - prima kao ulaz kolicinu (broj), kao rezultat vraca boolean vrednost true ako kolicina nije veca od promenljive maloprodajniLimit

// proveraVeleprodaja function:
// - prima kao ulaz kolicinu (broj), kao rezultat vraca boolean vrednost true ako kolicina nije manja od promenljive veleprodajniLimit

// Promenljive treba da budu privatne u modulu, funkcije napraviti javnim

let Modul = (function () {
  let maloprodajniLimit = 100;
  let veleprodajniLimit = 80;

  return {
    proveraMaloprodaja: function (broj) {
      if (broj < maloprodajniLimit) {
        return true;
      } else {
        return false;
      }
    },
    proveraVeleprodaja: function (broj) {
      if (broj < veleprodajniLimit) {
        return true;
      } else {
        return false;
      }
    },
  };
})();
