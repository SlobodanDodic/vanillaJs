var studenti = [];
var aktivanStudent = null;
function promeniAktivnog(selekt) {
    //TODO Implement
}
var Predmet = /** @class */ (function () {
    function Predmet(naziv, ocena) {
        this._naziv = naziv;
        this._ocena = ocena;
    }
    Object.defineProperty(Predmet.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "ocena", {
        get: function () {
            return this._ocena;
        },
        enumerable: false,
        configurable: true
    });
    return Predmet;
}());
var Student = /** @class */ (function () {
    function Student(ime, prezime, jmbg) {
        this._ime = ime;
        this._prezime = prezime;
        this._jmbg = jmbg;
        this._predmeti = [];
    }
    Object.defineProperty(Student.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "jmbg", {
        get: function () {
            return this._jmbg;
        },
        set: function (value) {
            this._jmbg = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (value) {
            this._prezime = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.refreshPredmeti = function () {
        var view = "";
        for (var i = 0; i < this._predmeti.length; i++) {
            var predmet = this._predmeti[i];
            view += "<div\">\n                  <p>Predmet: ".concat(predmet.naziv, "</p>\n                  <p>Ocena: ").concat(predmet.ocena, "</p>\n                </div>");
        }
        document.getElementById("predmeti").innerHTML = view;
    };
    Student.prototype.dodajPredmet = function (predmet) {
        this._predmeti.push(predmet);
        this.refreshPredmeti();
    };
    Student.prototype.getProsek = function () {
        // return this._predmeti.reduce((prev, next) => prev + next.ocena, 0) / this._predmeti.length;
        var sum = 0;
        for (var i = 0; i < this._predmeti.length; i++) {
            sum += this._predmeti[i].ocena;
        }
        return sum / this._predmeti.length;
    };
    return Student;
}());
function wireEvents() {
    document.getElementById("dodajPredmet").addEventListener("click", function () {
        var naziv = document.getElementById("naziv");
        var ocena = document.getElementById("ocena");
        var p = new Predmet(naziv.value, Number(ocena.value));
        aktivanStudent.dodajPredmet(p);
    });
    document.getElementById("izracunajProsecnuOcenu").addEventListener("click", function () {
        var prosekOut = document.getElementById("prosecnaOcena");
        prosekOut.innerHTML = "Prosecna ocena za studenta: ".concat(aktivanStudent.ime, " ").concat(aktivanStudent.prezime, " je ").concat(aktivanStudent.getProsek());
    });
}
//OVAJ KOD OSTAVITI NA DNU FAJLA
window.onload = function () {
    initStudenti.forEach(function (elem) {
        var s = new Student(elem.ime, elem.prezime, Number(elem.jmbg));
        elem.predmeti.forEach(function (elem) {
            var p = new Predmet(elem.naziv, elem.ocena);
            s.dodajPredmet(p);
        });
        studenti.push(s);
        if (aktivanStudent == null) {
            aktivanStudent = s;
        }
    });
    if (QueryString["ime"] != null) {
        var student = new Student(QueryString["ime"], QueryString["prezime"], Number(QueryString["jmbg"]));
        studenti.push(student);
    }
    var selekt = document.getElementById("student");
    var output = "";
    for (var i = 0; i < studenti.length; i++) {
        var optionElem = "<option value=".concat(studenti[i].jmbg, ">").concat(studenti[i].ime, " ").concat(studenti[i].prezime, "</option>");
        output += optionElem;
    }
    selekt.innerHTML = output;
    aktivanStudent.refreshPredmeti();
    wireEvents();
};
var initStudenti = [
    {
        ime: "Pera",
        prezime: "Peric",
        jmbg: "1123456789000",
        predmeti: [
            {
                naziv: "Predmet1",
                ocena: 10,
            },
            {
                naziv: "Predmet2",
                ocena: 8,
            },
            {
                naziv: "Predmet3",
                ocena: 9,
            },
            {
                naziv: "Predmet4",
                ocena: 9,
            },
        ],
    },
    {
        ime: "Mika",
        prezime: "Mikic",
        jmbg: "1123456789001",
        predmeti: [
            {
                naziv: "Predmet1",
                ocena: 7,
            },
            {
                naziv: "Predmet2",
                ocena: 10,
            },
            {
                naziv: "Predmet3",
                ocena: 8,
            },
        ],
    },
];
var QueryString = (function () {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        }
        else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        }
        else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
})();
//# sourceMappingURL=proba.js.map