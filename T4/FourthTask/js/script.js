// Zadatak 0:
// document.getElementById("resultBtn0").addEventListener("click", function () {
//   let hoteli = [
//     {
//       naziv: "Hotel Park",
//       adresa: "Novosadskog sajma 35",
//       brojSoba: 140,
//       rezervisano: 57,
//       teretana: true,
//       brojSlobodnihSoba: function () {
//         let slobodno = this.brojSoba - this.rezervisano;
//         return slobodno;
//       },
//       reservation: function () {
//         this.rezervisano++;
//       },
//     },
//     {
//       naziv: "Centar",
//       adresa: "Uspenska 1",
//       brojSoba: 90,
//       rezervisano: 68,
//       teretana: false,
//       brojSlobodnihSoba: function () {
//         let slobodno = this.brojSoba - this.rezervisano;
//         return slobodno;
//       },
//     },
//   ];

//   console.log(hoteli[0].rezervisano);
//   console.log(hoteli[0].reservation());

//   for (let i = 0; i < hoteli.length; i++) {
//     let hotel = hoteli[i];
//     console.log(hoteli[i]);

//     document.write("<br><b>Podaci o hotelu:</b><br>");
//     document.write("Naziv: " + hotel.naziv + "<br>");
//     document.write("Adresa: " + hotel.adresa + "<br>");
//     document.write("Kapacitet: " + hotel.brojSoba + "<br>");
//     document.write("Teretana: ");

//     if (hotel.teretana == true) {
//       document.write("DA<br>");
//     } else {
//       document.write("NE<br>");
//     }

//     document.write("Broj slobodnih soba: " + hotel.brojSlobodnihSoba() + "<br>");
//   }
// });

// Zadatak 4
// 	4.1. Proveriti da li su sva polja forme popunjena. Ukoliko sva polja forme nisu popunjena
// 	zabraniti submit forme i prebaciti fokus na polje koje nije popunjeno.

// 	4.2. Proveriti da li su pocetna slova imena i prezimena napisana velikim slovom i da li JMBG ima 13 brojeva.

// 	4.3. Red Tip vozila ima combo box sa dve vrednosti: "Motorno" i "Elektricno",
// napraviti tako da se paragraf "Eko klasa" prikazuje prilikom ulaska kursora u taj red,
// a da se sakriva prilikom njegovog izlaska

// 	4.4. Ukoliko je odabran elektricni tip vozila obojiti paragraf "Eko klasa" zelenom bojom,
// ukoliko je odabran motorni tip vozila obojiti isti paragraf crvenom bojom

// 	4.5. Preuzeti parametre forme iz Zadatak1.html i uneti ih u tabelu Zadatak2.html
