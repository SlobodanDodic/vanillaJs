// document.write("<p>" + "Happy birthday dear" + " " + name + "</p>");
// Zadatak 1:
document.getElementById("resultBtn1").addEventListener("click", function () {
  let users = [];

  function user(input) {
    let inputSplit = input.split("|");
    users.push(inputSplit);
  }

  let userM = "marko|mark123";
  let userS = "steva|stev123";

  user(userM);
  user(userS);

  for (let i in users) {
    alert("Korisnicko ime je: " + users[i][0]);
    alert("Lozinka je: " + users[i][1]);
    console.log(users[i]);
  }

  console.log(users);
});

// Zadatak 2:
document.getElementById("resultBtn2").addEventListener("click", function () {
  let prvi = "abcdef";
  let drugi = "ghijkl";

  function newString(str1, str2) {
    let strPrvi = str1.substring(0, 3);
    let strDrugi = str2.substring(str2.length - 3);
    alert(strPrvi + strPrvi + strDrugi);
  }

  newString(prvi, drugi);
});

// Zadatak 3:
document.getElementById("resultBtn3").addEventListener("click", function () {
  function acronym(param) {
    let firstLetters = param.split(" ");
    let letters = "";

    for (let i in firstLetters) {
      letters += firstLetters[i][0];
    }
    return letters.toUpperCase();
  }

  let result = acronym("random access memory");
  alert(result);
});

// Zadatak 4:
document.getElementById("resultBtn4").addEventListener("click", function () {
  let ocene = [8, 7, 6, 9, 8, 10, 8];
  let ime_prez = ["Marko", "Markovic"];

  function averageRate(str, user) {
    let average = 0;

    for (let i = 0; i < str.length; i++) {
      average += str[i];
    }
    let mid = average / str.length;

    alert(`Student ${user[0]} ${user[1]} ima prosek ${mid}`);
  }

  averageRate(ocene, ime_prez);
});

// Zadatak 5:
document.getElementById("resultBtn5").addEventListener("click", function () {
  let drzave = {
    1: "RS",
    2: "RU",
    3: "UK",
    4: "ESP",
  };
  let gradovi = [
    ["London", 3],
    ["Novi Sad", 1],
    ["Moskva", 2],
    ["Madrid", 4],
  ];

  function cityCodes(states, cities) {
    for (let i in cities) {
      let city = cities[i];
      let state = states[city[1]];

      alert(city[0] + " - " + state);
    }
  }

  cityCodes(drzave, gradovi);
});

// Zadatak 6:
document.getElementById("resultBtn6").addEventListener("click", function () {
  let usersAndRoles = ["markec|admin", "godzz|webmaster", "nikola123|admin", "nennad|moderator"];

  function userRole(input) {
    let roles = [];

    for (let i in input) {
      roles.push(input[i].split("|")[1]);
    }
    return new Set(roles);
  }

  let results = userRole(usersAndRoles);
  console.log(results);
});

// Zadatak 7:
document.getElementById("resultBtn7").addEventListener("click", function () {
  function isOver18(korisnici) {
    for (let i in korisnici) {
      let result = korisnici[i].split(":");
      if (result[1] > 18) {
        alert(`${result[0].toUpperCase()} - da`);
      } else {
        alert(`${result[0].toUpperCase()} - ne`);
      }
    }
  }

  let korisnici = ["marko:17", "nikola:28", "pera:23", "nenad:15"];
  isOver18(korisnici);
});

// Zadatak 8:

// 1.	Kreirati funkciju koja ce za zadani broj od 1 - 6 kreirati HTML naslove do prosledjenog nivoa. Elemente kreirati uz
// 	pomoc for petlje i ispisati u HTML dokument pomocu document.write() funkcije.
// 		PRIMER: Ako je funkciji prosledjen broj 3, treba da se izgenerisu naslovi od h1 do h3.
// 		REZULTAT:
// 			<h1>Ovo je generisani naslov</h1>
// 			<h2>Ovo je generisani naslov</h2>
// 			<h3>Ovo je generisani naslov</h2>

// 2.	Izmeniti funkciju iz 1. zadatka tako da kao parametar prima 2 broja i generise naslove izmedju ta dva broja.
// 		PRIMER: Ako su funkciju prosledjeni brojevi 2 i 4, generisu se naslovi od h2 do h4.
// 		REZULTAT:
// 			<h2>Ovo je generisani naslov</h2>
// 			<h3>Ovo je generisani naslov</h3>
// 			<h4>Ovo je generisani naslov</h4>

// 3.	Kreirati funkciju koja ce uz oslonac na ugradjenu funkciju 'indexOf' proveravati da li prvi prosledjeni string sadrzi
// 	drugi.
// 		PRIMER: Ako su funkciji prosledjeni stringovi 'Dobar dan' i 'dan', funkcija treba da vrati vrednost true,
// 		jer je string 'dan' sadrzan u stringu 'Dobar dan'.

// 4.	Izmeniti funkciju iz 3. zadatka, tako da se ignorisu velika i mala slova prilikom provere.

// 5.	Kreirati program koji analizira JMBG koji je definisan kao string (kao u primerima '10. numbers' i '11. string').
// 	Znacajne delove JMBG-a izdvojiti putem funkcije substring.
// 	JMBG je broj formata 'DDMMGGGRRBBBK' i sastoji se od sledecih informacija:

// 		DD - dan rođenja
// 		MM - mesec rođenja
// 		GGG - zadnje tri cifre godine rođenja
// 		RR - region rođenja, odn. prebivalište za građane rođene pre 1976. godine.
// 		BBB - pol:
// 		    	000-499 - muški
// 		    	500-999 - ženski
// 		K - kontrolna cifra

// 	U zadatku ispisati datum rodjenja i pol osobe za zadani JMBG.

// 6.	Uz pomoc funkcije split() kreirati funckiju koja ce za zadati deo URL-a izvuci vrednosti HTTP GET parametara.
// 	PRIMER:	Zadat je deo urla: '?ime=sinisa&prezime=mihajlovic'
// 	REZULTAT: Rezultat je sledeci ispis u HTML dokument:
// 		ime=sinisa
// 		prezime=mihajlovic

// 7.	Kreirati JavaScript program koji u HTML dokument ispisuje koliko je dana ostalo do vikenda u odnosu na trenutni dan.
// 	Napomena: Trenutni dan mozete dobiti na sledeci nacin:
// 	var danas = new Date();
// 	var dan = danas.getDay(); // 0 - nedelja, 6 - subota
