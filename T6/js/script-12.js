// Zadatak 12:

// Napisati tri funkcije:
// 1. deljivoSaTri:
// -- kao parametar prima broj,
// -- kao rezultat vraća boolean vrednost (true ili false), ako je broj deljiv sa 3.

// 2. paranPozitivanBroj:
// -- kao parametar prima broj,
// -- kao rezultat vraća boolean vrednost (true ili false) ako je broj paran i pozitivan.

// 3. filter:
// -- kao parametre prima niz brojeva i callback funkciju (callback funkcija treba da samo prima broj
//    i vraća boolean vrednost true ili false),
// -- kao rezultat funkcija vraća novi niz brojeva dobijenih tako što su u novi niz ubačeni brojevi
//    iz orginalnog niza za koje je callback funkcija vratila true

// Ključni tekst: "vraća novi niz brojeva"
// - inicijalno u filter funkciji napraviti prazan niz koji će biti ujedno i povratna vrednost filter funkcije i
// - taj niz popuniti na osnovu vrednosti iz prvog niza i prosledjenje callback funkcije

// Testirati funkciju filter nad nizom:
// let n = [-21, -17, -3, -1, 2, 3, 5, 8, 9, 12, 14, 15];

// U konzoli ispisati:
// 	1. vrednost orginalnog niza,
// 	2. rezultat filter funkcije, kada se filter funkciji pošalju orginalni niz i funkcija deljivoSaTri,
// 	3. rezultat filter funkcije, kada se filter funkciji pošalju orginalni niz i funkcija paranPozitivanBroj

let n = [-21, -17, -3, -1, 2, 3, 5, 8, 9, 12, 14, 15];
