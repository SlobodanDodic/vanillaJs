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
var studenti = [];
function inputValidation(polje, tekst) {
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
function proveraForme(form) {
    return (inputValidation(form.ime, "Niste uneli ime") &&
        inputValidation(form.ime, "Ime mora poceti velikim slovom!") &&
        inputValidation(form.prezime, "Niste uneli prezime") &&
        inputValidation(form.prezime, "Prezime mora poceti velikim slovom!") &&
        inputValidation(form.fakultet, "Niste uneli prezime") &&
        inputValidation(form.indeks, "Niste uneli prezime"));
}
function handleSubmit(form) {
    if (proveraForme(form)) {
        var predmetiElement = document.getElementById("predmeti");
        var ime = form.ime.value;
        var prezime = form.prezime.value;
        var fakultet = form.fakultet.value;
        var indeks = form.indeks.value;
        var predmeti = predmetiElement.value;
        var arrayPredmeti = predmeti && predmeti.split(";");
        var predmetiObjekti = arrayPredmeti && arrayPredmeti.map(function (predmetString) {
            var _a = predmetString.split(", "), idT = _a[0], naziv_predmetaT = _a[1], profesorT = _a[2], ocenaStrT = _a[3];
            var id = idT.replace("id", "").trim();
            var naziv_predmeta = naziv_predmetaT.replace("naziv", "").trim();
            var profesor = profesorT.replace("profesor", "").trim();
            var ocenaStr = ocenaStrT.replace("ocena", "").trim();
            var ocena = Number(ocenaStr);
            return new Predmet(id, naziv_predmeta, profesor, ocena);
        });
        var sumaOcena = 0;
        var prosecnaOcena = 0;
        for (var _i = 0, predmetiObjekti_1 = predmetiObjekti; _i < predmetiObjekti_1.length; _i++) {
            var predmet = predmetiObjekti_1[_i];
            sumaOcena += predmet.ocena;
            prosecnaOcena = sumaOcena / predmetiObjekti.length;
            prosecnaOcena = parseFloat(prosecnaOcena.toFixed(2));
        }
        var noviStudent = new Student(ime, prezime, fakultet, indeks, prosecnaOcena, predmetiObjekti);
        studenti.push(noviStudent);
        var tekstDiv = document.getElementById("tekst");
        tekstDiv.innerHTML = noviStudent.predstaviSe();
    }
}
;
function handleFormSubmission(form) {
    if (proveraForme(form)) {
        handleSubmit(form);
    }
    return false;
}
;
function prikaziStudenteSaTriDevetke() {
    var studentiSaTriDevetke = studenti.filter(function (student) { return student.imaTriDevetke(); });
    var tekstDiv = document.getElementById("tekst");
    tekstDiv.innerHTML = "";
    if (studentiSaTriDevetke.length === 0) {
        tekstDiv.innerHTML = "Nema studenata sa tri ocene 9.";
    }
    else {
        studentiSaTriDevetke.forEach(function (student) {
            var div = document.createElement("div");
            div.innerHTML = student.imaTriDevetke();
            tekstDiv.appendChild(div);
        });
    }
}
function predstaviSve() {
    var tekstDiv = document.getElementById("tekst");
    tekstDiv.innerHTML = "";
    studenti.forEach(function (student) {
        var div = document.createElement("div");
        div.innerHTML = student.predstaviSeTekst();
        tekstDiv.appendChild(div);
    });
}
function prikaziOmiljeneProfesore() {
    var omiljeniProfesori = studenti.map(function (student) { return ({
        ime: student._ime,
        prezime: student._prezime,
        omiljeniProfesori: student.omiljeniProfesori(),
    }); });
    var tekstDiv = document.getElementById("tekst");
    tekstDiv.innerHTML = "";
    omiljeniProfesori.forEach(function (student) {
        var div = document.createElement("div");
        if (student.omiljeniProfesori.length === 0) {
            div.innerHTML = "".concat(student.ime, " ").concat(student.prezime, " nema studenata sa omiljenim profesorima.");
        }
        if (student.omiljeniProfesori.length !== 0) {
            div.innerHTML = "".concat(student.ime, " ").concat(student.prezime, " ima omiljene profesore: ").concat(student.omiljeniProfesori.join(", "));
        }
        tekstDiv.appendChild(div);
    });
}
//id 01, naziv Matematika, profesor Proka Pronalazač, ocena 8;id 02, naziv Programiranje, profesor Profa Milutin, ocena 7;id 03, naziv Fizika, profesor Doktor T, ocena 6;id 04, naziv Hemija, profesor Magi Star, ocena 9;id 05, naziv Web development, profesor Miloje fon Brown, ocena 8;id 06, naziv Osnove elektrotehnike, profesor Edvin van der Ćirković, ocena 10;id 07, naziv Dendrologija, profesor Stevie Ray Vaughan, ocena 10
//id 01, naziv Matematika, profesor Proka Pronalazač, ocena 8;id 02, naziv Programiranje, profesor Profa Milutin, ocena 9;id 03, naziv Fizika, profesor Doktor T, ocena 6;id 04, naziv Hemija, profesor Magi Star, ocena 9;id 05, naziv Web development, profesor Miloje fon Brown, ocena 9;id 06, naziv Osnove elektrotehnike, profesor Edvin van der Ćirković, ocena 10;id 07, naziv Dendrologija, profesor Stevie Ray Vaughan, ocena 11
//# sourceMappingURL=form.js.map