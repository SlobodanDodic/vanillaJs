// Zadatak 1:
document.getElementById("resultBtn1").addEventListener("click", function () {
  function getHello() {
    let resultContainer = document.getElementById("resultContainer1");

    resultContainer.innerHTML = `
      <p style="color: #21d921">Hello world!</p>
    `;
  }

  getHello();
});

// Zadatak 2:
document.getElementById("resultBtn2").addEventListener("click", function () {
  let name = prompt("Your name");
  let lastname = prompt("Your lastname");

  function getHelloName(name, lastname) {
    let resultContainer = document.getElementById("resultContainer2");

    resultContainer.innerHTML = `
      <p style="color: #21d921">Hello ${name} ${lastname}!</p>
    `;
  }

  getHelloName(name, lastname);
});

// Zadatak 3:

function insert(param) {
  const button = document.getElementById("inputBtn");

  if (!!param.value.length) {
    button.disabled = false;
  }

  document.getElementById("placeholder").value = param.value;
}

function handleInsert() {
  let tmp = document.getElementById("placeholder").value;
  document.getElementById("secret").innerHTML = tmp;
  document.getElementById("secret").style.visibility = "visible";
}
