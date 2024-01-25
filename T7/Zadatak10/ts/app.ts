//Zadatak 10

// Napraviti klasu Robot, robot ima atribut ime, i metode pozdrav i reset.

// Pre pravljenja Robota, potrebno im je izabrati ime. Ime robota treba da bude u formatu dva velika slova pa tri cifre: AF897, EO001 ... 
// Imena robota treba nasumicno odrediti, pri cemu nije dozvoljeno da postoje dva robota sa istim imenom.

// Metoda pozdrav ispisuje "Zdravo ja sam robot: imeRobota". Metoda reset brise resetuje njegovo ime.

// Postupak pravljenja objekta robota treba da se sastoji iz izbora imena. (Posebna funkcija) 
// Ime robota se nasumicno odredjuje.
// Nakon nasumicnog izbora imena, treba proci kroz niz svih postojecih robota
// -- koji je potrebno napraviti i u koji cemo smestati sve objekte robota i proveriti da li neko od njih vec ima ime koje je generisano. 
// -- ako nema, napraviti novog robota sa tim imenom i dodati ga u niz robota. 
// -- ako ima, ponovo generisati ime robota (ovo je lako radit sa while ili do while petljom) i ponoviti postupak provere.

// Nasumican izbor imena je moguc uz pomoc metode Math.random():
// -- math random generise nasumicnu vrednost na intervalu od [0,1) npr. 0.16375662144085723 
// Dobijenu vrednost mozemo da iskoristimo tako da uz pomoc mnozenja dobijemo indeks ili broj koji zelimo da iskoristimo.

// Npr. ako imamo niz karaktera ["A", "B", "C"], duzina niza (svojstvo length) je 3, ako broj 3 pomnozimo sa 0.16375662144085723
// dobicemo vrednost 0.4912698643225717. Ukoliko dobijnu vrednost pretvorimo u celobrojnu vrednost, uz pomoc metode Math.round()
// dobicemo vrednost 0. 0 je indeks elemenata niza karaktera, koji mozemo da iskoristimo da dobijemo karakter "A" za ime.

// Drugi moguci pristup je da iskorisitmo ASCII tabelu:
// - svako slovo u ASCII tabeli ima svoj kod u dekadnom sistemu npr. za karakter "A" njegov ASCII kod je 65. 
// - Uz pomoc metode String.fromCharCode() mozemo na osnovu koda 65 da dobijemo karakter "A".
