// Zadatak 1:
document.getElementById("resultBtn1").addEventListener("click", function () {
  let vocke1 = ["banana", "kruska", "jabuka"];
  let vocke2 = ["tresnja", "sljiva", "jagoda"];

  let vockeSum = [];

  for (let i = 0; i < vocke1.length; i++) {
    vockeSum.push(vocke1[i]);
  }
  for (let i in vocke2) {
    vockeSum.push(vocke2[i]);
  }

  alert(vockeSum);
});

// Zadatak 2:
document.getElementById("resultBtn2").addEventListener("click", function () {
  let vocke1 = ["banana", "kruska", "jabuka", "sljiva"];
  let vocke2 = ["tresnja", "sljiva", "jagoda", "kupina", "malina"];

  let vockeSum = [];

  for (let i in vocke1) {
    vockeSum.push(vocke1[i]);
  }
  for (let i in vocke2) {
    if (!vockeSum.includes(vocke2[i])) {
      vockeSum.push(vocke2[i]);
    }
  }
  alert(vockeSum);
});

// Zadatak 3:
document.getElementById("resultBtn3").addEventListener("click", function () {
  let cars = [
    ["mercedes", "b"],
    ["opel", "d"],
    ["toyota", "d"],
    ["bmw", "b"],
    ["volvo", "d"],
  ];

  let dizel = [];
  let benzin = [];

  for (let i in cars) {
    if (cars[i][1] === "d") {
      dizel.push(cars[i][0]);
    } else {
      benzin.push(cars[i][0]);
    }
  }

  alert("dizels: " + dizel + " & " + "benzin: " + benzin);
});

// Zadatak 4:
document.getElementById("resultBtn4").addEventListener("click", function () {
  let zaposleni = [
    ["pera", "jova", "marko"],
    [28, 31, 19],
  ];

  let employees = [];
  for (let i = 0; i < zaposleni[0].length; i++) {
    employees.push(zaposleni[0][i] + " ima godina " + zaposleni[1][i]);
  }
  alert(employees);
});

// Zadatak 5:
document.getElementById("resultBtn5").addEventListener("click", function () {
  let employees = [
    ["pera", "jova", "marko"],
    [28, 31, 19],
  ];

  for (let i = 0; i < employees[0].length; i++) {
    if (employees[0][i] === "jova") {
      alert("Employee Jova is " + employees[1][i] + " years old.");
      break;
    }
  }
});

// Zadatak 6:
document.getElementById("resultBtn6").addEventListener("click", function () {
  let employees = [
    ["pera", "jova", "marko"],
    [28, 31, 19],
  ];

  let ageSum = 0;
  for (let i = 0; i < employees[1].length; i++) {
    ageSum += employees[1][i];
  }
  let averageAge = ageSum / employees[1].length;

  alert("Average age of employees: " + averageAge);
});

// Zadatak 7:
document.getElementById("resultBtn7").addEventListener("click", function () {
  let employees = [
    ["pera", "jova", "marko"],
    [28, 31, 39],
    ["inzenjer", "tehnicar", "doktor"],
    [700, 0, 0],
  ];

  let plata_inzenjer = 0;
  let plata_tehnicar = 0;
  let plata_doktor = 0;

  for (let i = 0; i < employees.length; i++) {
    for (let j = 0; j < employees[i].length; j++) {
      if (employees[i][j] == "inzenjer") {
        plata_inzenjer = employees[i + 1][j];
        plata_tehnicar = Math.round(plata_inzenjer * 0.7);
        plata_doktor = Math.round(plata_tehnicar + plata_inzenjer * 0.5);
      }
    }
  }

  for (let i = 0; i < employees.length; i++) {
    for (let j = 0; j < employees[i].length; j++) {
      if (employees[i][j] == "tehnicar") {
        employees[i + 1][j] = plata_tehnicar;
      }
      if (employees[i][j] == "doktor") {
        employees[i + 1][j] = plata_doktor;
      }
    }
  }

  alert(employees);
});

// Zadatak 8:
document.getElementById("resultBtn8").addEventListener("click", function () {
  let employees = [
    ["pera", "jova", "marko"],
    [28, 31, 39],
  ];

  let zaposleni = [];

  for (let i = 0; i < employees[0].length; i++) {
    let ime = employees[0][i];
    let godinaRodjenja = new Date().getFullYear() - employees[1][i];
    zaposleni.push({ ime, godinaRodjenja });
  }

  console.log(zaposleni);
});

// Zadatak 9:
document.getElementById("resultBtn9").addEventListener("click", function () {
  let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let sumMain = 0;
  let sumAnti = 0;

  for (let i = 0; i < a.length; i++) {
    sumMain += a[i][i];
    sumAnti += a[i][a.length - 1 - i];
  }

  alert(`Sum of main and anti diagonal: ${sumMain + sumAnti}`);
});
// Zadatak 10:
document.getElementById("resultBtn10").addEventListener("click", function () {
  let a = [
    [1, 2, 3, 5],
    [4, 5, 6, 8],
    [7, 8, 9, 9],
    [8, 5, 3, 1],
  ];

  let sumCol = 0;
  let sumRow = 0;

  for (let i = 0; i < a.length; i++) {
    sumCol += a[i][1];
  }
  for (let i = 0; i < a[2].length; i++) {
    sumRow += a[2][i];
  }
  alert(`Sum of main and anti diagonal: ${sumCol + sumRow}`);
});

// Zadatak 11:
document.getElementById("resultBtn11").addEventListener("click", function () {
  let a = [
    [1, 2, 3, 5],
    [4, 5, 6, 8],
    [7, 8, 9, 9],
    [8, 5, 3, 1],
  ];

  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] % 2 == 0) {
        sum += a[i][j];
      }
    }
  }

  alert(`Sum of elements divisible by 2: ${sum}`);
});

// Zadatak 12:
document.getElementById("resultBtn12").addEventListener("click", function () {
  let a = [
    [1, 2, 3, 5],
    [3, 5, 6, 8],
    [7, 8, 9, 3],
    [8, 5, 3, 1],
  ];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === 3) {
        a[i][j] = 0;
        console.log(a[i][j]);
      } else if (a[i][j] === 5) {
        a[i][j] = -1;
      }
    }
  }

  let formattedString = a.map((row) => row.join(" ")).join("\n");
  alert(formattedString);

  console.log(a);
});

// Zadatak 13:
// Short version that calculates only Fahrenheit to Celsius:
// document.getElementById("resultBtn13").addEventListener("click", function () {
//   let fahrenheit = prompt("Enter the temperature in ℉:");
//   fahrenheit = parseFloat(fahrenheit);

//   if (!isNaN(fahrenheit)) {
//     alert(fahrenheitToCelsius(fahrenheit));
//   } else {
//     alert("Invalid input. Please enter a valid number for temperature.");
//   }

//   function fahrenheitToCelsius(fahrenheit) {
//     let temperature = ((fahrenheit - 32) * 5) / 9;
//     return `${fahrenheit.toFixed(2)}℉ = ${temperature.toFixed(2)}℃`;
//   }
// });
// Long version that calculates both options depending on user's choice:
document.getElementById("resultBtn13").addEventListener("click", function () {
  let conversionType = prompt("Choose conversion type:\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit");

  if (conversionType === "1" || conversionType === "2") {
    let temperatureInput = prompt("Enter the temperature:");
    let temperature = parseFloat(temperatureInput);

    if (!isNaN(temperature)) {
      if (conversionType === "1") {
        alert(fahrenheitToCelsius(temperature));
      } else {
        alert(celsiusToFahrenheit(temperature));
      }
    } else {
      alert("Invalid input. Please enter a valid number for temperature.");
    }
  } else {
    alert("Invalid conversion type. Please choose 1 or 2.");
  }

  function fahrenheitToCelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    return `${fahrenheit.toFixed(2)}℉ = ${celsius.toFixed(2)}℃`;
  }

  function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    return `${celsius.toFixed(2)}℃ = ${fahrenheit.toFixed(2)}℉`;
  }
});

// Zadatak 14:
document.getElementById("resultBtn14").addEventListener("click", function () {
  let temp = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 10 === 0) {
      temp += `● ${i}℃ is ${(i * 9) / 5 + 32}℉ \n`;
    }
  }
  alert(temp);
});
