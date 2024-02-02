//Zadatak 7:
// Omoguciti unos novih studenata putem forme kao i predstavljanje unetog studenta pomocu diva #tekst.
// U taj div se ispisuje rezultat poziva metode predstaviSe.
// Kako bi podrzali unos studenata putem forme, napraviti globalnu promenljivu studenti (niz studenata) na pocetku ts fajla.

//Zadatak 8:
// Napisati funkciju koja prolazi kroz niz studenata i vraca one koje imaju barem 3 ocene 9.

//Zadatak 9:
// Implementirati funkcionalnosti za dugmice:
// 	1. "Predstavi sve studente" 
//  -- prolazi se kroz niz studenata i rezultat metode predstaviSe se upisuje u div #tekst za svakog studenta.

// 	2. "Predstavi devetke" 
//  -- ispisuje rezultat metode predstaviSe za studente koje pronalazi funkcija iz zadatka 8 (logovati u konzolu te objekte).

// 	3. "Studenti sa omiljenim profesorima" 
//  -- prolazi kroz niz studenata i upisuje njihovo ime i prezime i omiljene profesore npr: 
//  -- "Pera Peric ima omiljene profesore NazivProfesroa, Naziv profesora." (ovo odraditi samo za studente koji imaju omiljene profesore)

let studenti = [];

type IPolje = {
  value: string,
  focus: () => void;
}

type IForm = {
  ime: IPolje;
  prezime: IPolje;
  fakultet: IPolje;
  indeks: IPolje
}

function inputValidation(polje: IPolje, tekst: string) {
  if (polje.value === "") {
    alert(tekst);
    polje.focus();
    return false;
  }

  if (polje.value[0] !== polje.value[0].toUpperCase()) {
    alert("The first letter must be uppercase.");
    polje.focus();
    return false;
  }

  return true;
}

function proveraForme(form: IForm) {
  return (
    inputValidation(form.ime, "Niste uneli ime") &&
    inputValidation(form.ime, "Ime mora poceti velikim slovom!") &&
    inputValidation(form.prezime, "Niste uneli prezime") &&
    inputValidation(form.prezime, "Prezime mora poceti velikim slovom!") &&
    inputValidation(form.fakultet, "Niste uneli prezime") &&
    inputValidation(form.indeks, "Niste uneli prezime")
  );
}

function handleSubmit(form: IForm) {
  if (proveraForme(form)) {
    const ime = form.ime.value;
    const prezime = form.prezime.value;
    const fakultet = form.fakultet.value;
    const indeks = form.indeks.value;

    const noviStudent = new Student(ime, prezime, fakultet, indeks);
    studenti.push(noviStudent);

    const tekstDiv = document.getElementById("tekst") as HTMLDivElement;
    tekstDiv.innerHTML = noviStudent.predstaviSe();
  }
};

function handleFormSubmission(form: IForm) {
  if (proveraForme(form)) {
    handleSubmit(form);
  }
  return false;
};

function prikaziStudenteSaTriDevetke() {
  const studentiSaTriDevetke = studenti.filter((student) => student.imaTriDevetke());
  const tekstDiv = document.getElementById("tekst") as HTMLDivElement;
  tekstDiv.innerHTML = "";

  if (studentiSaTriDevetke.length === 0) {
    tekstDiv.innerHTML = "Nema studenata sa tri ocene 9.";
  } else {
    studentiSaTriDevetke.forEach((student) => {
      const div = document.createElement("div");
      div.innerHTML = student.imaTriDevetke();
      tekstDiv.appendChild(div);
    });
  }
}

function predstaviSve() {
  const tekstDiv = document.getElementById("tekst") as HTMLDivElement;
  tekstDiv.innerHTML = "";

  studenti.forEach((student) => {
    const div = document.createElement("div");
    div.innerHTML = student.predstaviSeTekst();
    tekstDiv.appendChild(div);
  });
}

function prikaziOmiljeneProfesore() {
  const omiljeniProfesori = studenti.map((student) => ({
    ime: student._ime,
    prezime: student._prezime,
    omiljeniProfesori: student.omiljeniProfesori(),
  }));

  const tekstDiv = document.getElementById("tekst") as HTMLDivElement;
  tekstDiv.innerHTML = "";

  omiljeniProfesori.forEach((student) => {
    const div = document.createElement("div");
    if (student.omiljeniProfesori.length === 0) {
      div.innerHTML = `${student.ime} ${student.prezime} nema studenata sa omiljenim profesorima.`;
    }
    if (student.omiljeniProfesori.length !== 0) {
      div.innerHTML = `${student.ime} ${student.prezime} ima omiljene profesore: ${student.omiljeniProfesori.join(", ")}`;
    }
    tekstDiv.appendChild(div);
  });
}