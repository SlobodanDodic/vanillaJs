var Instruktor = /** @class */ (function () {
    function Instruktor(ime, prezime, jmbg) {
        this._ime = ime;
        this._prezime = prezime;
        this._jmbg = jmbg;
    }
    Object.defineProperty(Instruktor.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instruktor.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (value) {
            this._prezime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instruktor.prototype, "jmbg", {
        get: function () {
            return this._jmbg;
        },
        set: function (value) {
            this._jmbg = value;
        },
        enumerable: false,
        configurable: true
    });
    return Instruktor;
}());
/// <reference path="Instruktor.ts" />
var Ispit = /** @class */ (function () {
    function Ispit(instruktor, imeKandidata, prezimeKandidata, jmbgKandidata, nacinPolaganja, datum, brojBodova) {
        this._instruktor = instruktor;
        this._imeKandidata = imeKandidata;
        this._prezimeKandidata = prezimeKandidata;
        this._jmbgKandidata = jmbgKandidata;
        this._nacinPolaganja = nacinPolaganja;
        this._datum = datum;
        this._brojBodova = brojBodova;
    }
    Object.defineProperty(Ispit.prototype, "instruktor", {
        get: function () {
            return this._instruktor;
        },
        set: function (value) {
            this._instruktor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "imeKandidata", {
        get: function () {
            return this._imeKandidata;
        },
        set: function (value) {
            this._imeKandidata = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "prezimeKandidata", {
        get: function () {
            return this._prezimeKandidata;
        },
        set: function (value) {
            this._prezimeKandidata = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "nacinPolaganja", {
        get: function () {
            return this._nacinPolaganja;
        },
        set: function (value) {
            this._nacinPolaganja = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "datum", {
        get: function () {
            return this._datum;
        },
        set: function (value) {
            this._datum = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "brojBodova", {
        get: function () {
            return this._brojBodova;
        },
        set: function (value) {
            this._brojBodova = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "jmbgKandidata", {
        get: function () {
            return this._jmbgKandidata;
        },
        set: function (value) {
            this._jmbgKandidata = value;
        },
        enumerable: false,
        configurable: true
    });
    return Ispit;
}());
/// <reference path="Ispit.ts" />
var AutoSkola = /** @class */ (function () {
    function AutoSkola(naziv) {
        this._naziv = naziv;
        this._instruktori = [];
        this._ispiti = [];
    }
    Object.defineProperty(AutoSkola.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoSkola.prototype, "instruktori", {
        get: function () {
            return this._instruktori;
        },
        set: function (value) {
            this._instruktori = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoSkola.prototype, "ispiti", {
        get: function () {
            return this._ispiti;
        },
        set: function (value) {
            this._ispiti = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoSkola.prototype.dodajIspit = function (ispit) {
        this._ispiti.push(ispit);
    };
    AutoSkola.prototype.refreshIspis = function () {
        var view = "";
        for (var i = 0; i < this._ispiti.length; i++) {
            var ispit = this._ispiti[i];
            view += "<tr key=".concat(i + 1, ">\n                <td>").concat(i + 1, "</td>\n                <td>").concat(ispit.imeKandidata, " ").concat(ispit.prezimeKandidata, "</td>\n                <td>").concat(ispit.instruktor.ime, " ").concat(ispit.instruktor.prezime, "</td>\n                <td>").concat(ispit.nacinPolaganja, "</td>\n                <td>").concat(ispit.datum, "</td>\n                <td class=").concat(ispit.brojBodova > 55 ? "green" : "red", ">").concat(ispit.brojBodova, "</td>\n              </tr>");
        }
        document.getElementById("tbody").innerHTML = view;
    };
    AutoSkola.prototype.najslabijiKandidatPoInstruktoru = function (nacinPolaganja, instruktor) {
        var result = this._ispiti
            .filter(function (ispit) { return ispit.instruktor.jmbg === instruktor.jmbg && ispit.nacinPolaganja === nacinPolaganja; })
            .sort(function (a, b) { return a.brojBodova - b.brojBodova; })[0];
        var view = "<h3>Najslabiji kandidat za ".concat(nacinPolaganja, " kod instruktora ").concat(result.instruktor.ime, " ").concat(result.instruktor.prezime, " je ").concat(result.imeKandidata, " ").concat(result.prezimeKandidata, ".</h3>");
        document.getElementById("podaci").innerHTML = view;
    };
    AutoSkola.prototype.najboljiInstruktoriPoNacinuPolaganja = function () {
        var teorija = this._ispiti.filter(function (el) { return el.nacinPolaganja == "Teorija"; });
        var najInstruktorTeorije;
        var maxAvgTeorije = -Infinity;
        this._instruktori.forEach(function (instruktor) {
            var avg = teorija
                .filter(function (el) { return el.instruktor.jmbg == instruktor.jmbg; })
                .map(function (el, i, arr) { return el.brojBodova / arr.length; })
                .reduce(function (sum, val) { return sum + val; }, 0);
            if (avg > maxAvgTeorije) {
                maxAvgTeorije = avg;
                najInstruktorTeorije = instruktor;
            }
        });
        var prakticno = this._ispiti.filter(function (el) { return el.nacinPolaganja == "Prakticno"; });
        var najInstruktorPrakse;
        var maxAvgPrakse = -Infinity;
        this._instruktori.forEach(function (instruktor) {
            var avg = prakticno
                .filter(function (el) { return el.instruktor.jmbg == instruktor.jmbg; })
                .map(function (el, i, arr) { return el.brojBodova / arr.length; })
                .reduce(function (sum, val) { return sum + val; }, 0);
            if (avg > maxAvgPrakse) {
                maxAvgPrakse = avg;
                najInstruktorPrakse = instruktor;
            }
        });
        var div = document.getElementById("podaci");
        div.innerHTML = "<h3>Instruktor sa najboljom prolaznosti za teoriju je ".concat(najInstruktorTeorije.ime, " ").concat(najInstruktorTeorije.prezime, " sa prosekom od ").concat(maxAvgTeorije, " boda. </h3><br/>");
        div.innerHTML += "<h3>Instruktor sa najboljom prolaznosti za prakticno je ".concat(najInstruktorPrakse.ime, " ").concat(najInstruktorPrakse.prezime, " sa prosekom od ").concat(maxAvgPrakse, " boda.</h3>");
    };
    return AutoSkola;
}());
/// <reference path="AutoSkola.ts" />
var autoSkola;
var aktivanInstruktor;
function promeniAktivnog(selekt) {
    aktivanInstruktor = autoSkola.instruktori.filter(function (el) { return el.jmbg == Number(selekt.value); })[0];
    autoSkola.refreshIspis();
}
function wireEvents() {
    //TODO Implementirati
    document.getElementById("dodajIspit").addEventListener("click", function () {
        var ime = document.getElementById("ime").value;
        var prezime = document.getElementById("prezime").value;
        var jmbg = Number(document.getElementById("jmbg").value);
        var datum = document.getElementById("datum").value;
        var teorijaBodovi = Number(document.getElementById("teorija").value);
        var prakticnoBodovi = Number(document.getElementById("prakticno").value);
        var ispitTeorija = new Ispit(aktivanInstruktor, ime, prezime, jmbg, "Teorija", datum, teorijaBodovi);
        var ispitPraksa = new Ispit(aktivanInstruktor, ime, prezime, jmbg, "Prakticno", datum, prakticnoBodovi);
        autoSkola.dodajIspit(ispitTeorija);
        autoSkola.dodajIspit(ispitPraksa);
        autoSkola.refreshIspis();
    });
    document.getElementById("najboljiInstruktoriPoNacinuPolaganja").addEventListener("click", function () {
        autoSkola.najboljiInstruktoriPoNacinuPolaganja();
    });
    document.getElementById("najslabijiKandidatPoInstruktoruZaNacinPolaganja").addEventListener("click", function () {
        var nacinP = document.getElementById("nacinPolaganjaSelekt").value;
        autoSkola.najslabijiKandidatPoInstruktoru(nacinP, aktivanInstruktor);
    });
}
window.onload = function () {
    //OVDE TESTIRATI KOD
    //-----------------
    //-----------------
    initializeData();
};
function initializeData() {
    autoSkola = new AutoSkola("StopCautionGo");
    var is1 = new Instruktor("Pera", "Peric", 1212975803555);
    var is2 = new Instruktor("Mika", "Mikic", 1501983801238);
    var is3 = new Instruktor("Zika", "Zikic", 2303964184993);
    autoSkola.instruktori = [is1, is2, is3];
    var i11 = new Ispit(is1, "Džovan", "Jovandic", 123, "Teorija", "2018-02-11", 55);
    var i12 = new Ispit(is3, "Jovan", "Jovanovic", 123, "Prakticno", "2018-03-05", 80);
    var i21 = new Ispit(is1, "Ivan", "Ivanovic", 222, "Teorija", "2018-05-09", 50);
    var i22 = new Ispit(is2, "Živan", "Živanovic", 222, "Prakticno", "2018-07-21", 80);
    var i31 = new Ispit(is1, "Dejan", "Dejanovic", 333, "Teorija", "2018-05-09", 45);
    var i32 = new Ispit(is3, "Johnny", "B Good", 333, "Prakticno", "2018-07-21", 100);
    // let i41 = new Ispit(is2, "Marko", "Markovic", 444, "Teorija", "2018-02-11", 85);
    // let i42 = new Ispit(is2, "Marko", "Markovic", 444, "Prakticno", "2018-03-05", 94);
    // let i51 = new Ispit(is2, "Nikola", "Nikolic", 555, "Teorija", "2018-05-09", 67);
    // let i52 = new Ispit(is2, "Nikola", "Nikolic", 555, "Prakticno", "2018-07-21", 23);
    // let i61 = new Ispit(is2, "Luka", "Lukic", 666, "Teorija", "2018-05-09", 83);
    // let i62 = new Ispit(is2, "Luka", "Lukic", 666, "Prakticno", "2018-07-21", 51);
    // let i71 = new Ispit(is3, "Djordje", "Djordjevic", 777, "Teorija", "2018-02-11", 85);
    // let i72 = new Ispit(is3, "Djordje", "Djordjevic", 777, "Prakticno", "2018-03-05", 94);
    // let i81 = new Ispit(is3, "Branko", "Brankovic", 888, "Teorija", "2018-05-09", 41);
    // let i82 = new Ispit(is3, "Branko", "Brankovic", 888, "Prakticno", "2018-07-21", 21);
    // let i91 = new Ispit(is3, "Ognjen", "Ognjenovic", 999, "Teorija", "2018-05-09", 45);
    // let i92 = new Ispit(is3, "Ognjen", "Ognjenovic", 999, "Prakticno", "2018-07-21", 55);
    // let i101 = new Ispit(is3, "Dimitrije", "Dimitrijevic", 122, "Teorija", "2018-05-09", 97);
    // let i102 = new Ispit(is3, "Dimitrije", "Dimitrijevic", 122, "Prakticno", "2018-07-21", 99);
    // let i111 = new Ispit(is3, "Vladimir", "Vladimirovic", 132, "Teorija", "2018-05-09", 54);
    // let i112 = new Ispit(is3, "Vladimir", "Vladimirovic", 132, "Prakticno", "2018-07-21", 17);
    autoSkola.dodajIspit(i11);
    autoSkola.dodajIspit(i12);
    autoSkola.dodajIspit(i21);
    autoSkola.dodajIspit(i22);
    autoSkola.dodajIspit(i31);
    autoSkola.dodajIspit(i32);
    // autoSkola.dodajIspit(i41);
    // autoSkola.dodajIspit(i42);
    // autoSkola.dodajIspit(i51);
    // autoSkola.dodajIspit(i52);
    // autoSkola.dodajIspit(i61);
    // autoSkola.dodajIspit(i62);
    // autoSkola.dodajIspit(i71);
    // autoSkola.dodajIspit(i72);
    // autoSkola.dodajIspit(i81);
    // autoSkola.dodajIspit(i82);
    // autoSkola.dodajIspit(i91);
    // autoSkola.dodajIspit(i92);
    // autoSkola.dodajIspit(i101);
    // autoSkola.dodajIspit(i102);
    // autoSkola.dodajIspit(i111);
    // autoSkola.dodajIspit(i112);
    var select = document.getElementById("instruktor");
    autoSkola.instruktori.forEach(function (el) {
        select.options.add(new Option(el.ime + " " + el.prezime, el.jmbg.toString()));
    });
    aktivanInstruktor = autoSkola.instruktori[0];
    autoSkola.refreshIspis();
    wireEvents();
}
//# sourceMappingURL=app.js.map