// Zadatak 6: 
// Zadatak implementirati upotrebom klasa. 
// Na osvnovu datog teksta, odrediti kako klasa koja treba da resi zadatak treba da izgleda. 
// Na osvnovu objekta i niza odrediti atribute klase, na osnovu funkcija odrediti metode klase.
// Posto koristimo klase, ocena bi trebalo da bude deo klase Predmet, pri cemu polozene predmete dodajemo u niz koji se nalazi u studentu.
// Predmet se sastoji od (id-ja, naziva predmeta, imena profesora, ocene)
// Za zadatog studenta dodati dve metode: 
// - Prva metoda se zove predstaviSe() i treba da vrati osnovne podatke o studentu, npr:
// -- "Ja sam Pera Peric i studiram na FTN, sa prosecnom ocenom ...(ocena)"
// - Druga metoda se zove izracunajProsecnuOcenu(). 
// -- Ta metoda racuna prosecnu ocenu i upisuje u atribut prosecna_ocena.
//Napraviti metodu omiljeni profesori koja vraca niz sa imenima profesora kod koga student ima ocenu 11.
var Student = /** @class */ (function () {
    function Student(_ime, _prezime, _fakultet, _broj_indeksa, _prosecna_ocena, _polozeni_predmeti) {
        this._ime = _ime;
        this._prezime = _prezime;
        this._fakultet = _fakultet;
        this._broj_indeksa = _broj_indeksa;
        this._polozeni_predmeti = _polozeni_predmeti;
        this._prosecna_ocena = _prosecna_ocena;
    }
    ;
    Student.prototype.dodajPolozeniPredmet = function (predmet) {
        this._polozeni_predmeti.push(predmet);
    };
    Student.prototype.izracunajProsecnuOcenu = function () {
        if (this._polozeni_predmeti.length === 0) {
            this._prosecna_ocena = 0;
            return;
        }
        var sumaOcena = 0;
        for (var i = 0; i < this._polozeni_predmeti.length; i++) {
            sumaOcena += this._polozeni_predmeti[i].ocena;
        }
        this._prosecna_ocena = sumaOcena / this._polozeni_predmeti.length;
        this._prosecna_ocena = parseFloat(this._prosecna_ocena.toFixed(2));
    };
    Student.prototype.predstaviSe = function () {
        return "Ja sam ".concat(this._ime, " ").concat(this._prezime, " i studiram na ").concat(this._fakultet, ", sa prosecnom ocenom ").concat(this._prosecna_ocena);
    };
    ;
    Student.prototype.imaTriDevetke = function () {
        if (this._polozeni_predmeti.filter(function (predmet) { return predmet.ocena === 9; }).length >= 3) {
            return "".concat(this._ime, " ima bar tri devetke!");
        }
    };
    Student.prototype.predstaviSeTekst = function () {
        return "Ime: ".concat(this._ime, ", Prezime: ").concat(this._prezime, ", Fakultet: ").concat(this._fakultet, ", Indeks: ").concat(this._broj_indeksa, ", Prosecna ocena: ").concat(this._prosecna_ocena);
    };
    Student.prototype.omiljeniProfesori = function () {
        var omiljeniProfesori = [];
        for (var _i = 0, _a = this._polozeni_predmeti; _i < _a.length; _i++) {
            var predmet = _a[_i];
            if (predmet.ocena === 11) {
                omiljeniProfesori.push(predmet.ime_profesora);
            }
        }
        return omiljeniProfesori;
    };
    return Student;
}());
var Predmet = /** @class */ (function () {
    function Predmet(_id, _naziv_predmeta, _ime_profesora, _ocena) {
        this._id = _id;
        this._naziv_predmeta = _naziv_predmeta;
        this._ime_profesora = _ime_profesora;
        this._ocena = _ocena;
    }
    ;
    Object.defineProperty(Predmet.prototype, "ocena", {
        get: function () {
            return this._ocena;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "ime_profesora", {
        get: function () {
            return this._ime_profesora;
        },
        enumerable: false,
        configurable: true
    });
    return Predmet;
}());
// let ocene = [8, 7, 6, 9, 8, 10, 8];
// let student = { ime: "Pera", prezime: "Peric", fakultet: "FTN", broj_indeksa: "RA-1", prosecna_ocena: 0 };
//# sourceMappingURL=classes.js.map