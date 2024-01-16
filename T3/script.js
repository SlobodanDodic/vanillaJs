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
// let paragraph = document.createElement("p");
// paragraph.textContent = "Happy birthday";
// document.getElementById("resultBtn8").appendChild(paragraph);
document.getElementById("resultBtn8").addEventListener("click", function () {
  let x = prompt("Enter the number between 1 and 6:");

  function generateTitles(y) {
    y = parseInt(y);

    if (!isNaN(y) && typeof y === "number" && y <= 6 && y > 0) {
      for (let i = 1; i <= y; i++) {
        document.write(`<h${i}>` + "Ovo je generisani naslov" + `</h${i}>`);
      }
    } else {
      alert("Invalid input. Please enter a number between 1 and 6.");
    }
  }

  generateTitles(x);
});

// Zadatak 9:
document.getElementById("resultBtn9").addEventListener("click", function () {
  let x = prompt("Enter the number between 1 and 6:");
  let y = prompt("Enter the number between 1 and 6:");

  function generateTitles(param1, param2) {
    let parsedParam1 = parseInt(param1);
    let parsedParam2 = parseInt(param2);

    let conditionOne = typeof parsedParam1 === "number" && parsedParam1 <= 6 && parsedParam1 > 0;
    let conditionTwo = typeof parsedParam2 === "number" && parsedParam2 <= 6 && parsedParam2 > 0;

    if (conditionOne) {
      if (conditionTwo) {
        for (let i = param1; i <= param2; i++) {
          document.write(`<h${i}>` + "Ovo je generisani naslov" + `</h${i}>`);
        }
        // Option with writing in the same page:
        // let resultContainer = document.getElementById("resultContainer9");
        // let htmlContent = "";
        // for (let i = param1; i <= param2; i++) {
        //   htmlContent += `<h${i}>` + "Ovo je generisani naslov" + `</h${i}> `;
        // }
        // resultContainer.innerHTML = htmlContent;
      } else {
        alert(
          `Invalid input for the second number. It must be between 1 and 6.\n
          Your input was: ${param2}`
        );
      }
    } else {
      alert(
        `Invalid input for the first number. It must be between 1 and 6.\n
        Your input was: ${param1}`
      );
    }
  }

  generateTitles(x, y);
});

// Zadatak 10:
document.getElementById("resultBtn10").addEventListener("click", function () {
  let stringOneInput = prompt("Enter the first string:");
  let stringTwoInput = prompt("Enter the second string:");

  function isContained(stringOne, stringTwo) {
    let splitStringOne = stringOne.split(" ");

    if (splitStringOne.indexOf(stringTwo) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  let result = isContained(stringOneInput, stringTwoInput);
  alert(result);
});

// Zadatak 11:
document.getElementById("resultBtn11").addEventListener("click", function () {
  let stringOneInput = prompt("Enter the first string:");
  let stringTwoInput = prompt("Enter the second string:");

  function isContained(stringOne, stringTwo) {
    let lowerStringOne = stringOne.toLowerCase();
    let splitStringOne = lowerStringOne.split(" ");
    stringTwo = stringTwo.toLowerCase();

    if (splitStringOne.indexOf(stringTwo) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  let result = isContained(stringOneInput, stringTwoInput);
  alert(result);
});

// Zadatak 12:
document.getElementById("resultBtn12").addEventListener("click", function () {
  let jmbg = prompt("Enter the JMBG:");

  function isContained(jmbg) {
    let condition = /^[0-9]+$/.test(jmbg) && jmbg.length === 13;

    if (condition) {
      let dd = jmbg.substring(0, 2);
      let mm = jmbg.substring(2, 4);
      let ggg = jmbg.substring(4, 7);

      let bbb = "";
      if (jmbg.substring(9, jmbg.length - 1) >= 500) {
        bbb = "Female";
      } else {
        bbb = "Male";
      }

      alert(`
        Date of birth: ${dd}.${mm}.1${ggg}.\n
        Gender: ${bbb}\n
        `);
    } else if (jmbg.length !== 13) {
      alert(
        `Invalid input for the JMBG!\n
        The number must have exactly 13 digits.\n
        Your input had ${jmbg.length} digits`
      );
    } else {
      alert(
        `Invalid input for the JMBG!\n
        JMBG must contain only numbers.\n
        Your input was: ${jmbg}`
      );
    }
  }

  isContained(jmbg);
});

// Zadatak 13:
document.getElementById("resultBtn13").addEventListener("click", function () {
  let stringOneInput = prompt("Enter the first string:");

  function getParameters(param) {
    let splitParam = param.split("&");
    let resultContainer = document.getElementById("resultContainer13");

    resultContainer.innerHTML = `
    <p>${splitParam[0].substring(1)}</p>\n
    <p>${splitParam[1]}</p>
  `;
  }

  getParameters(stringOneInput);
});

// Zadatak 14:
document.getElementById("resultBtn14").addEventListener("click", function () {
  let today = new Date();

  function getWorkdays(param) {
    let day = param.getDay();
    let daysToWeekend = 5 - day;
    let resultContainer = document.getElementById("resultContainer14");

    resultContainer.innerHTML = `
      <p>Days to weekend: ${daysToWeekend} day(s)</p>
    `;
  }

  getWorkdays(today);
});
