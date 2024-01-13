// Zadatak 1:
document.getElementById("resultBtn1").addEventListener("click", function () {
  let x = 3;
  let y = -4;
  let z = x - y;

  let resultMessage = "";

  if (x + y > 0) {
    resultMessage = "Zbir prva dva broja je pozitivan broj";
  } else if (x - y > 0) {
    resultMessage = "Razlika prva dva broja je pozitivan broj";
  }

  if (x * z > 15 && y < 0) {
    resultMessage += "\nProizvod prve i trece je veci od 15 i druga varijable je negativna";
  } else if (x * z > 15 || y > 0) {
    resultMessage += "\nProizvod prve i trece je broj veci od 15 ili je druga varijabla pozitivna";
  }

  alert(resultMessage);
});

// Zadatak 2:
// Napisati switch petlju tako da ako je zadata vrednost izmedju 1 i 5 ispisati: "Zadata vrednost je izmedju 1 i 5 i zadata vrednost je (X)"
// Ukoliko je zadata vrednost izmedju 8 i 10 ispisati: "Zadata vrednost je izmedju 8 i 10"
// U suprotnom ispisati zadata vrednost nije u navedenom opsegu
x = 7;

switch (x) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Zadata vrednost je izmedju 1 i 5 i zadata vrednost je " + x);
    break;
  case 8:
  case 9:
  case 10:
    console.log("Zadata vrednost je izmedju 8 i 10 i zadata vrednost je " + x);
    break;
  default:
    console.log("Zadata vrednost nije u navedenom opsegu");
}

// Zadatak 3 (Napisati while petlju tako da se izvrsava sve dok zbir promenljivih x i y ne postane pozitivan broj.
// Napomena: x = -7, y = 1, u while petlji u svakoj iteraciji uvecavati y za 1):
let o = -5;
let p = 1;

while (o + p < 1) {
  p++;
  console.log("Vrednost p je " + p);
}

// Zadatak 4 (Napisati for petlju tako da broji od 1 do 10 i da se ispisuju samo brojevi koji su deljivi sa 2):
let i = 10;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Zadatak 5 (Napisati for petlju koja prolazi kroz zadati niz i ispisuje elemente niza):
var array = ["saab", "volvo", "mercedes"];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Zadatak 6 (Napisati for petlju koja prolazi kroz zadati niz i ispisuje ga, ali prekida sa izvrsavanjem ukoliko naidje na element "volvo"):
var array = ["saab", "volvo", "mercedes"];

for (let i = 0; i < array.length; i++) {
  if (array[i] === "volvo") {
    break;
  }
  console.log(array[i]);
}

// Zadatak 7 (Napisati for petlju koja prolazi kroz zadati niz i ispisuje ga, ali preskace se ispisivanje ukoliko naidje na element "volvo"):
var array = ["saab", "volvo", "mercedes"];

for (let i = 0; i < array.length; i++) {
  if (array[i] === "volvo") {
    continue;
  }
  console.log(array[i]);
}

// Zadatak 8 (Napisati program koji ispisuje one brojeve između 1 i 20 koji su deljivi sa 3):
for (let i = 1; i < 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Zadatak 9 (Napisati program koji računa srednju vrednost niza celih brojeva):
let arrayOne = [2, 2, 2, 2, 2, 2];
let suma = 0;
for (let i = 0; i < arrayOne.length; i++) {
  suma += arrayOne[i];
}

let mid = suma / arrayOne.length;
console.log(mid);

// Zadatak 10 (Napisati program koji utvrđuje da li se u datom nizu celih brojeva nalazi broj 5):
let containFive = [1, 4, 7, 5, 87, 134];
console.log(containFive.includes(5));

// Zadatak 11 (Napisati program koji određuje da li je niz simetričan):
let nums = [2, 7, 9, 9, 7, 2];
let isSymmetric = true;

for (let i = 0; i < nums.length / 2; i++) {
  if (nums[i] !== nums[nums.length - i - 1]) {
    isSymmetric = false;
    break;
  }
}
if (isSymmetric) {
  console.log("The array is symmetric!");
} else {
  console.log("The array is NOT symmetric!");
}

// Zadatak 12 (Napisati program koji za svaki red matrice ispisuje koliko ima nula u tom redu):
let matrix = [
  [1, 2, 3, 4],
  [1, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 0, 0, 0],
];

for (let i = 0; i < matrix.length; i++) {
  let zeroCount = 0;

  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === 0) {
      zeroCount++;
    }
  }
  console.log(`Row ${i + 1}: ${zeroCount} zero(s)`);
}

// Zadatak 13 (Napisati program koji pronalazi najveci element u nizu decimalnih brojeva):
var decimals = [0.01, 0.001, 0.2, 0.002];
var biggest = decimals[0];

for (let i = 1; i < decimals.length; i++) {
  if (decimals[i] > biggest) {
    biggest = decimals[i];
  }
}
console.log("Biggest: " + biggest);

// Zadatak 14 (Napisati program koji pronalazi najmanji element u nizu decimalnih brojeva):
var decimals = [0.01, 0.001, 0.2, 0.0002];
var smallest = decimals[0];

for (let i = 1; i < decimals.length; i++) {
  if (decimals[i] < smallest) {
    smallest = decimals[i];
  }
}
console.log("Smallest: " + smallest);

// Zadatak 15 (Napisati program koji pronalazi najveci element na glavnoj dijagonali matrice):
let matrixDiagonal = [
  [7, 1, 4, 7],
  [1, 4, 7, 6],
  [9, 7, 9, 9],
  [9, 7, 9, 5],
];
let largest = matrixDiagonal[0][0];

for (let i = 0; i < matrixDiagonal.length; i++) {
  if (matrixDiagonal[i][i] > largest) {
    largest = matrixDiagonal[i][i];
  }
}
console.log("Largest element on the main diagonal:", largest);

let largestSecondFn = matrixDiagonal[0][0];

for (let i = 0; i < matrixDiagonal.length; i++) {
  for (let j = 0; j < matrixDiagonal[i].length; j++) {
    if (i === j && matrixDiagonal[i][j] > largestSecondFn) {
      largestSecondFn = matrixDiagonal[i][j];
    }
  }
}
console.log("LargestSecondFn element on the main diagonal:", largestSecondFn);

// Zadatak 16 (Napisati program koji za proizvoljne n i m kreira i popunjava matricu čiji su elementi jednaki poziciji kolone):
