var city1 = {
  name: "Novi Sad",
  country: "RS",
  capital: false,
};

var city2 = {
  name: "Beograd",
  country: "RS",
  capital: true,
};

var city3 = {
  name: "Manchester",
  country: "UK",
  capital: false,
};

var city4 = {
  name: "London",
  country: "UK",
  capital: true,
};

var city5 = {
  name: "Valencia",
  country: "ESP",
  capital: false,
};

var city6 = {
  name: "Barcelona",
  country: "ESP",
  capital: false,
};

var city7 = {
  name: "Nis",
  country: "RS",
  capital: false,
};

var city8 = {
  name: "Madrid",
  country: "ESP",
  capital: true,
};

var city9 = {
  name: "Leeds",
  country: "UK",
  capital: false,
};

var cities = [];
cities.push(city2);
cities.push(city1);
cities.push(city3);
cities.push(city4);
cities.push(city5);
cities.push(city6);
cities.push(city7);
cities.push(city8);
cities.push(city9);

var countries = ["RS", "UK", "ESP"];

window.onload = function () {
  let sel1 = document.getElementById("sel1");
  let sel2 = document.getElementById("sel2");
  let capital = document.getElementById("capital");

  // Populate countries select
  for (let country of countries) {
    sel1.add(new Option(country));
  }

  // Handle change event for countries select
  sel1.addEventListener("change", function (e) {
    let selectedCountry = e.target.value;
    let citiesInCountry = cities.filter((city) => city.country === selectedCountry);

    // Clear previous options
    sel2.innerHTML = "";

    // Populate cities select based on selected country
    for (let city of citiesInCountry) {
      sel2.add(new Option(city.name));
    }

    // Show and enable cities select
    sel2.classList.remove("sel2");
    sel2.disabled = false;

    // Update capital checkbox based on selected city
    updateCapitalCheckbox();
  });

  // Handle change event for cities select
  sel2.addEventListener("change", function () {
    // Update capital checkbox based on selected city
    updateCapitalCheckbox();
  });

  function updateCapitalCheckbox() {
    let selectedCity = sel2.value;
    let selectedCountry = sel1.value;

    // Find the corresponding city object
    let city = cities.find((city) => city.name === selectedCity && city.country === selectedCountry);

    // Update capital checkbox based on the city's capital status
    if (city) {
      capital.checked = city.capital;
    }
  }
};

function proveraForme(form) {
  let inputIme = form.name.value;
  let inputCountry = form.country.value;

  if (inputIme === "" || inputCountry === "") {
    alert(`Fields cannot be empty.`);
    return false;
  }

  if (inputCountry[0] !== inputCountry[0].toUpperCase()) {
    alert("First letter of Country field must be uppercase.");
    form.country.focus();
    return false;
  }

  if (inputCountry.length > 3) {
    alert("Country field must have a maximum of 3 characters.");
    form.country.focus();
    return false;
  }
}
