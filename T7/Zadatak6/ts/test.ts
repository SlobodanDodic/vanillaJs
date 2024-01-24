// Testiranje:
const studentPera = new Student("Pera", "Peric", "FTN", "RA-1", 8.55, [
  new Predmet('1', "Matematika", "Proka Pronalazač", 11),
  new Predmet('2', "Programiranje", "Profa Milutin", 9),
  new Predmet('3', "Fizika", "Doktor T", 9),
  new Predmet('4', "Hemija", "Magi Star", 9),
  new Predmet('5', "Web development", "Miloje fon Brown", 8),
  new Predmet('6', "Osnove elektrotehnike", "Edvin van der Ćirković", 10),
  new Predmet('7', "Dendrologija", "Stevie Ray Vaughan", 11)
]);

const studentMika = new Student("Mika", "Mikic", "FTN", "RA-2", 9.47, [
  new Predmet('1', "Matematika", "Proka Pronalazač", 8),
  new Predmet('2', "Programiranje", "Profa Milutin", 9),
  new Predmet('3', "Fizika", "Doktor T", 11),
  new Predmet('4', "Hemija", "Magi Star", 9),
  new Predmet('5', "Web development", "Miloje fon Brown", 8),
  new Predmet('6', "Osnove elektrotehnike", "Edvin van der Ćirković", 9),
  new Predmet('7', "Dendrologija", "Stevie Ray Vaughan", 10)
]);

studenti.push(studentPera);
studenti.push(studentMika);

console.log(studenti);
// studentPera.izracunajProsecnuOcenu();
// console.log(studentPera.predstaviSe());
// console.log("Omiljeni profesori:", studentPera.omiljeniProfesori());

// const studentiSaTriDevetkeArray = prikaziStudenteSaTriDevetke();
// console.log(studentiSaTriDevetkeArray);