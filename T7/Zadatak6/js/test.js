// Testiranje:
var studentPera = new Student("Pera", "Peric", "FTN", "RA-1");
var studentMika = new Student("Mika", "Mikic", "FTN", "RA-2");
var predmeti = [
    [
        new Predmet('1', "Matematika", "Proka Pronalazač", 8),
        new Predmet('2', "Programiranje", "Profa Milutin", 9),
        new Predmet('3', "Fizika", "Doktor T", 11),
        new Predmet('4', "Hemija", "Magi Star", 9),
        new Predmet('5', "Web development", "Miloje fon Brown", 8),
        new Predmet('6', "Osnove elektrotehnike", "Edvin van der Ćirković", 9),
        new Predmet('7', "Dendrologija", "Stevie Ray Vaughan", 10)
    ],
    [
        new Predmet('1', "Matematika", "Proka Pronalazač", 11),
        new Predmet('2', "Programiranje", "Profa Milutin", 9),
        new Predmet('3', "Fizika", "Doktor T", 9),
        new Predmet('4', "Hemija", "Magi Star", 9),
        new Predmet('5', "Web development", "Miloje fon Brown", 8),
        new Predmet('6', "Osnove elektrotehnike", "Edvin van der Ćirković", 10),
        new Predmet('7', "Dendrologija", "Stevie Ray Vaughan", 11)
    ]
];
studenti.push(studentPera);
studenti.push(studentMika);
for (var i = 0; i < studenti.length; i++) {
    for (var j = 0; j < predmeti[i].length; j++) {
        studenti[i].dodajPolozeniPredmet(predmeti[i][j]);
    }
    studenti[i].izracunajProsecnuOcenu();
}
console.log(studenti);
// Za testiranje:
//id 01, naziv Matematika, profesor Proka Pronalazač, ocena 8;id 02, naziv Programiranje, profesor Profa Milutin, ocena 7;id 03, naziv Fizika, profesor Doktor T, ocena 6;id 04, naziv Hemija, profesor Magi Star, ocena 9;id 05, naziv Web development, profesor Miloje fon Brown, ocena 8;id 06, naziv Osnove elektrotehnike, profesor Edvin van der Ćirković, ocena 10;id 07, naziv Dendrologija, profesor Stevie Ray Vaughan, ocena 10
//id 01, naziv Matematika, profesor Proka Pronalazač, ocena 8;id 02, naziv Programiranje, profesor Profa Milutin, ocena 9;id 03, naziv Fizika, profesor Doktor T, ocena 6;id 04, naziv Hemija, profesor Magi Star, ocena 9;id 05, naziv Web development, profesor Miloje fon Brown, ocena 9;id 06, naziv Osnove elektrotehnike, profesor Edvin van der Ćirković, ocena 10;id 07, naziv Dendrologija, profesor Stevie Ray Vaughan, ocena 11
// let ocene = [8, 7, 6, 9, 8, 10, 8];
// let student = { ime: "Pera", prezime: "Peric", fakultet: "FTN", broj_indeksa: "RA-1", prosecna_ocena: 0 };
// Višak koda:
// let predmetiElement = document.getElementById("predmeti") as HTMLInputElement;
// const predmeti = predmetiElement.value;
// const arrayPredmeti = predmeti && predmeti.split(";");
// const predmetiObjekti = arrayPredmeti && arrayPredmeti.map((predmetString) => {
//   const [idT, naziv_predmetaT, profesorT, ocenaStrT] = predmetString.split(", ");
//   const id = idT.replace("id", "").trim();
//   const naziv_predmeta = naziv_predmetaT.replace("naziv", "").trim();
//   const profesor = profesorT.replace("profesor", "").trim();
//   const ocenaStr = ocenaStrT.replace("ocena", "").trim();
//   const ocena = Number(ocenaStr);
//   return new Predmet(id, naziv_predmeta, profesor, ocena);
// });
// let sumaOcena = 0;
// let prosecnaOcena = 0;
// for (let predmet of predmetiObjekti) {
//   sumaOcena += predmet.ocena;
//   prosecnaOcena = sumaOcena / predmetiObjekti.length;
// }
//# sourceMappingURL=test.js.map