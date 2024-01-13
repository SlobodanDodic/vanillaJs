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
  let d = new Date();
  let godina = d.getFullYear();
});
