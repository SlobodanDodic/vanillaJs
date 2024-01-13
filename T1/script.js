// Zadatak 1:
document.getElementById("resultBtn1").addEventListener("click", function () {
  let x = prompt("Enter the number x:");
  let y = prompt("Enter the number y:");
  let z = x - y;

  x = parseInt(x);
  y = parseInt(y);

  if (isNaN(x) || isNaN(y)) {
    alert("Invalid input. Please enter a numbers for x and y.");
    return;
  }

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
document.getElementById("resultBtn2").addEventListener("click", function () {
  let x = prompt("Enter the number x:");

  if (isNaN(x)) {
    alert("Invalid input. Please enter a numbers for x.");
    return;
  }

  x = parseInt(x);

  let resultMessage = "";

  switch (x) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      resultMessage = "Zadata vrednost je izmedju 1 i 5 i zadata vrednost je " + x;
      break;
    case 8:
    case 9:
    case 10:
      resultMessage = "Zadata vrednost je izmedju 8 i 10 i zadata vrednost je " + x;
      break;
    default:
      resultMessage = "Zadata vrednost nije u navedenom opsegu";
  }

  alert(resultMessage);
});

// Zadatak 3:
document.getElementById("resultBtn3").addEventListener("click", function () {
  let x = -7;
  let y = 1;
  let resultMessage = "";

  while (x + y < 1) {
    y++;
    resultMessage = "Vrednost y je " + y;
  }

  alert(resultMessage);
});

// Zadatak 4:
document.getElementById("resultBtn4").addEventListener("click", function () {
  let i = 10;
  let resultMessage = [];

  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      resultMessage.push(i);
    }
  }

  alert(resultMessage);
});

// Zadatak 5:
document.getElementById("resultBtn5").addEventListener("click", function () {
  let array = ["saab", "volvo", "mercedes"];

  for (let i = 0; i < array.length; i++) {
    alert(i + " " + array[i]);
  }
});

// Zadatak 6:
document.getElementById("resultBtn6").addEventListener("click", function () {
  let array = ["saab", "volvo", "mercedes"];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "volvo") {
      break;
    }
    alert(array[i]);
  }
});

// Zadatak 7:
document.getElementById("resultBtn7").addEventListener("click", function () {
  let array = ["saab", "volvo", "mercedes"];
  let resultMessage = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "volvo") {
      continue;
    }
    resultMessage.push(array[i]);
  }
  alert(resultMessage);
});

// Zadatak 8:
document.getElementById("resultBtn8").addEventListener("click", function () {
  let resultMessage = [];

  for (let i = 1; i < 20; i++) {
    if (i % 3 === 0) {
      resultMessage.push(i);
    }
  }
  alert(resultMessage);
});

// Zadatak 9:
document.getElementById("resultBtn9").addEventListener("click", function () {
  let arrayOne = [12, 24, 17, 19, 79, 47];
  let suma = 0;

  for (let i = 0; i < arrayOne.length; i++) {
    suma += arrayOne[i];
  }

  let mid = suma / arrayOne.length;
  alert(mid);
});

// Zadatak 10:
document.getElementById("resultBtn10").addEventListener("click", function () {
  let containFive = [1, 4, 7, 5, 87, 134];
  alert(containFive.includes(5));
});

// Zadatak 11:
document.getElementById("resultBtn11").addEventListener("click", function () {
  let nums = [2, 7, 9, 9, 7, 2];
  let isSymmetric = true;

  for (let i = 0; i < nums.length / 2; i++) {
    if (nums[i] !== nums[nums.length - i - 1]) {
      isSymmetric = false;
      break;
    }
  }
  if (isSymmetric) {
    alert("The array is symmetric!");
  } else {
    alert("The array is NOT symmetric!");
  }
});

// Zadatak 12:
document.getElementById("resultBtn12").addEventListener("click", function () {
  let matrix = [
    [1, 2, 3, 4],
    [1, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 0, 0, 0],
  ];
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    let zeroCount = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroCount++;
      }
    }
    result.push(` Row ${i + 1}: ${zeroCount} zeros`);
  }
  alert(result);
});

// Zadatak 13:
document.getElementById("resultBtn13").addEventListener("click", function () {
  var decimals = [0.01, 0.001, 0.2, 0.002];
  var biggest = decimals[0];

  for (let i = 1; i < decimals.length; i++) {
    if (decimals[i] > biggest) {
      biggest = decimals[i];
    }
  }
  alert("Biggest: " + biggest);
});

// Zadatak 14:
document.getElementById("resultBtn14").addEventListener("click", function () {
  var decimals = [0.01, 0.001, 0.2, 0.0002];
  var smallest = decimals[0];

  for (let i = 1; i < decimals.length; i++) {
    if (decimals[i] < smallest) {
      smallest = decimals[i];
    }
  }
  alert("Smallest: " + smallest);
});

// Zadatak 15:
document.getElementById("resultBtn15").addEventListener("click", function () {
  let matrixDiagonal = [
    [7, 1, 4, 7],
    [1, 4, 7, 6],
    [9, 7, 8, 9],
    [9, 7, 9, 5],
  ];

  // let largestFirstFn = matrixDiagonal[0][0];
  // for (let i = 0; i < matrixDiagonal.length; i++) {
  //   if (matrixDiagonal[i][i] > largestFirstFn) {
  //     largestFirstFn = matrixDiagonal[i][i];
  //   }
  // }
  // console.log("Largest element (FirstFn) on the main diagonal: " + largestFirstFn);

  let largest = matrixDiagonal[0][0];

  for (let i = 0; i < matrixDiagonal.length; i++) {
    for (let j = 0; j < matrixDiagonal[i].length; j++) {
      if (i === j && matrixDiagonal[i][j] > largest) {
        largest = matrixDiagonal[i][j];
      }
    }
  }
  alert("Largest element on the main diagonal: " + largest);
});

// Zadatak 16:
document.getElementById("resultBtn16").addEventListener("click", function () {
  let n = prompt("Enter the number of rows (n):");
  let m = prompt("Enter the number of columns (m):");

  // Convert input to numbers
  n = parseInt(n);
  m = parseInt(m);

  if (isNaN(n) || isNaN(m) || n <= 0 || m <= 0) {
    alert("Invalid input. Please enter positive numbers for n and m.");
    return;
  }

  let matrix = [];

  for (let i = 1; i <= n; i++) {
    let row = [];

    for (let j = 1; j <= m; j++) {
      row.push(j);
    }

    matrix.push(row);
  }
  alert("Generated matrix:\n" + JSON.stringify(matrix));
});
