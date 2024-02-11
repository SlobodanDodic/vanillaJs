var Predmet = /** @class */ (function () {
    function Predmet(imeProfesora, prezimeProfesora, idPredmeta, nazivPredmeta) {
        this._imeProfesora = imeProfesora;
        this._prezimeProfesora = prezimeProfesora;
        this._idPredmeta = idPredmeta;
        this._nazivPredmeta = nazivPredmeta;
    }
    Object.defineProperty(Predmet.prototype, "imeProfesora", {
        get: function () {
            return this._imeProfesora;
        },
        set: function (value) {
            this._imeProfesora = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "prezimeProfesora", {
        get: function () {
            return this._prezimeProfesora;
        },
        set: function (value) {
            this._prezimeProfesora = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "idPredmeta", {
        get: function () {
            return this._idPredmeta;
        },
        set: function (value) {
            this._idPredmeta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "nazivPredmeta", {
        get: function () {
            return this._nazivPredmeta;
        },
        set: function (value) {
            this._nazivPredmeta = value;
        },
        enumerable: false,
        configurable: true
    });
    return Predmet;
}());
/// <reference path="predmet.ts" />
var Ispit = /** @class */ (function () {
    function Ispit(predmet, brojIndeksaStudenta, imeStudenta, prezimeStudenta, deoIspita, datum, brojBodova) {
        this._predmet = predmet;
        this._brojIndeksaStudenta = brojIndeksaStudenta;
        this._imeStudenta = imeStudenta;
        this._prezimeStudenta = prezimeStudenta;
        this._deoIspita = deoIspita;
        this._datum = datum;
        this._brojBodova = brojBodova;
    }
    Object.defineProperty(Ispit.prototype, "predmet", {
        get: function () {
            return this._predmet;
        },
        set: function (value) {
            this._predmet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "brojIndeksaStudenta", {
        get: function () {
            return this._brojIndeksaStudenta;
        },
        set: function (value) {
            this._brojIndeksaStudenta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "imeStudenta", {
        get: function () {
            return this._imeStudenta;
        },
        set: function (value) {
            this._imeStudenta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "prezimeStudenta", {
        get: function () {
            return this._prezimeStudenta;
        },
        set: function (value) {
            this._prezimeStudenta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "deoIspita", {
        get: function () {
            return this._deoIspita;
        },
        set: function (value) {
            this._deoIspita = value;
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
    return Ispit;
}());
/// <reference path="ispit.ts" />
var Fakultet = /** @class */ (function () {
    function Fakultet(naziv) {
        this._naziv = naziv;
        this._predmeti = [];
        this._ispiti = [];
    }
    Object.defineProperty(Fakultet.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fakultet.prototype, "predmeti", {
        get: function () {
            return this._predmeti;
        },
        set: function (value) {
            this._predmeti = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fakultet.prototype, "ispiti", {
        get: function () {
            return this._ispiti;
        },
        set: function (value) {
            this._ispiti = value;
        },
        enumerable: false,
        configurable: true
    });
    Fakultet.prototype.dodajIspit = function (ispit) {
        this._ispiti.push(ispit);
    };
    Fakultet.prototype.refreshIspis = function () {
        var view = "";
        for (var i = 0; i < this._ispiti.length; i++) {
            var ispit = this._ispiti[i];
            view += "<tr key=".concat(i + 1, ">\n                <td>").concat(i + 1, "</td>\n                <td>").concat(ispit.imeStudenta, " ").concat(ispit.prezimeStudenta, "</td>\n                <td>").concat(ispit.predmet.nazivPredmeta, "</td>\n                <td>").concat(ispit.deoIspita, "</td>\n                <td>").concat(ispit.datum, "</td>\n                <td class=").concat((ispit.deoIspita === "teorija" && ispit.brojBodova > 10) ||
                (ispit.deoIspita === "kolokvijum" && ispit.brojBodova > 35)
                ? "green"
                : "red", ">").concat(ispit.brojBodova, "</td>\n              </tr>");
        }
        document.getElementById("tbody").innerHTML = view;
    };
    Fakultet.prototype.izracunajProlaznostPoPredmetu = function (deoIspita, predmet) {
        var izabraniPredmet = this._predmeti.filter(function (p) { return p.idPredmeta === predmet.idPredmeta; })[0];
        var procenat = this._ispiti
            .filter(function (p) { return p.deoIspita === deoIspita; })
            .filter(function (d) { return d.brojBodova >= 10; })
            .reduce(function (a, b, i, array) { return a + b.brojBodova / array.length; }, 0);
        var view = "<h3>Prolaznost za ".concat(deoIspita, " za predmet ").concat(izabraniPredmet.nazivPredmeta, " je ").concat(procenat.toFixed(2), "%</h3>");
        document.getElementById("podaci").innerHTML = view;
    };
    // public najlaksiProfesorPoNacinuPolaganja() {
    //   let teorija = this.ispiti.filter((ispit) => ispit.deoIspita === "teorija").filter((ispit) => ispit.brojBodova >= 10);
    //   let kolok = this.ispiti.filter((ispit) => ispit.deoIspita === "kolokvijum").filter((ispit) => ispit.brojBodova >= 35);
    //   console.log(teorija);
    //   console.log(teorija.map((i) => i.predmet.imeProfesora + " " + i.predmet.prezimeProfesora));
    //   console.log(kolok);
    //   console.log(kolok.map((i) => i.predmet.imeProfesora + " " + i.predmet.prezimeProfesora));
    //   const teorijaCount = teorija.reduce((accumulator, value) => {
    //     return {
    //       ...accumulator,
    //       [value.predmet.imeProfesora + " " + value.predmet.prezimeProfesora]:
    //         (accumulator[value.predmet.imeProfesora + " " + value.predmet.prezimeProfesora] || 0) + 1,
    //     };
    //   }, {});
    //   const kolokCount = kolok.reduce((accumulator, value) => {
    //     return {
    //       ...accumulator,
    //       [value.predmet.imeProfesora + " " + value.predmet.prezimeProfesora]:
    //         (accumulator[value.predmet.imeProfesora + " " + value.predmet.prezimeProfesora] || 0) + 1,
    //     };
    //   }, {});
    //   console.log(teorijaCount);
    //   console.log(kolokCount);
    // }
    Fakultet.prototype.najlaksiProfesorPoNacinuPolaganja = function () {
        var teorija = this._ispiti.filter(function (ispit) { return ispit.deoIspita === "teorija" && ispit.brojBodova >= 10; });
        var kolok = this._ispiti.filter(function (ispit) { return ispit.deoIspita === "kolokvijum" && ispit.brojBodova >= 35; });
        var countPolozeneIspite = function (ispiti) {
            return ispiti.reduce(function (acc, ispit) {
                var key = "".concat(ispit.predmet.imeProfesora, " ").concat(ispit.predmet.prezimeProfesora);
                acc[key] = (acc[key] || 0) + 1;
                return acc;
            }, {});
        };
        var najlaksiProfesor = function (counts) {
            var maxCount = 0;
            var maxProfesor = "";
            for (var profesor in counts) {
                if (counts.hasOwnProperty(profesor)) {
                    if (counts[profesor] > maxCount) {
                        maxCount = counts[profesor];
                        maxProfesor = profesor;
                    }
                }
            }
            return maxProfesor;
        };
        var teorijaCount = countPolozeneIspite(teorija);
        var kolokCount = countPolozeneIspite(kolok);
        var najlaksiTeorijaProfesor = najlaksiProfesor(teorijaCount);
        var najlaksiKolokProfesor = najlaksiProfesor(kolokCount);
        var view = "\n        <h3>Profesor sa najlaksim teoretskim ispitom je ".concat(najlaksiTeorijaProfesor, " sa ukupno ").concat(teorijaCount[najlaksiTeorijaProfesor], " polozenih ispita.</h3>\n        <br>\n        <h3>Profesor sa najlaksim kolokvijumom je ").concat(najlaksiKolokProfesor, " sa ukupno ").concat(kolokCount[najlaksiKolokProfesor], " polozenih kolokvijuma.</h3>\n    ");
        document.getElementById("podaci").innerHTML = view;
    };
    Fakultet.prototype.polozenPredmet = function (predmet) {
        var teorija = [];
        var kolok = [];
        for (var i = 0; i < this._ispiti.length; i++) {
            var ispit = this._ispiti[i];
            if (ispit.predmet.idPredmeta === predmet.idPredmeta) {
                if (ispit.deoIspita === "teorija" && ispit.brojBodova >= 10) {
                    teorija.push(ispit);
                }
                else if (ispit.deoIspita === "kolokvijum" && ispit.brojBodova >= 35) {
                    kolok.push(ispit);
                }
            }
        }
        var polozeniIspiti = [];
        for (var i = 0; i < teorija.length; i++) {
            var teorijaIspit = teorija[i];
            for (var j = 0; j < kolok.length; j++) {
                var kolokIspit = kolok[j];
                if (teorijaIspit.brojIndeksaStudenta === kolokIspit.brojIndeksaStudenta &&
                    teorijaIspit.brojBodova + kolokIspit.brojBodova > 50) {
                    polozeniIspiti.push(teorijaIspit);
                    polozeniIspiti.push(kolokIspit);
                    break;
                }
            }
        }
        var view = "";
        for (var i = 0; i < polozeniIspiti.length; i++) {
            var ispit = polozeniIspiti[i];
            view += "<tr>\n                <td>".concat(ispit.brojIndeksaStudenta, "</td>\n                <td>").concat(ispit.imeStudenta, " ").concat(ispit.prezimeStudenta, "</td>\n                <td>").concat(ispit.predmet.nazivPredmeta, "</td>\n                <td>").concat(ispit.deoIspita, "</td>\n                <td>").concat(ispit.datum, "</td>\n                <td>").concat(ispit.brojBodova, "</td>\n              </tr>");
        }
        document.getElementById("tbody").innerHTML = view;
    };
    return Fakultet;
}());
/// <reference path="fakultet.ts" />
var fakultet;
var aktivanPredmet;
function promeniAktivnog(selekt) {
    aktivanPredmet = fakultet.predmeti.filter(function (el) { return el.idPredmeta == Number(selekt.value); })[0];
    fakultet.refreshIspis();
}
function wireEvents() {
    //TODO Implementirati
    document.getElementById("dodajIspit").addEventListener("click", function () {
        // let predmet: string = ((document.getElementById("predmet") as HTMLInputElement).value);
        var index = document.getElementById("indeks").value;
        var ime = document.getElementById("ime").value;
        var prezime = document.getElementById("prezime").value;
        var datum = document.getElementById("datum").value;
        var teorija = Number(document.getElementById("teorija").value);
        var kolokvijum = Number(document.getElementById("kolokvijum").value);
        var ispitTeorija = new Ispit(aktivanPredmet, index, ime, prezime, "teorija", datum, teorija);
        var ispitPraksa = new Ispit(aktivanPredmet, index, ime, prezime, "kolokvijum", datum, kolokvijum);
        fakultet.dodajIspit(ispitTeorija);
        fakultet.dodajIspit(ispitPraksa);
        fakultet.refreshIspis();
    });
    document.getElementById("izracunajProlaznostPoPredmetu").addEventListener("click", function () {
        var nacin = document.getElementById("nacinPolaganjaSelekt").value;
        fakultet.izracunajProlaznostPoPredmetu(nacin, aktivanPredmet);
    });
    document.getElementById("najlaksiProferoriPoNacinuPolaganja").addEventListener("click", function () {
        fakultet.najlaksiProfesorPoNacinuPolaganja();
    });
    document.getElementById("polozenPredmet").addEventListener("click", function () {
        fakultet.polozenPredmet(aktivanPredmet);
    });
}
window.onload = function () {
    //OVDE TESTIRATI KOD
    //-----------------
    //-----------------
    initializeData();
};
function initializeData() {
    fakultet = new Fakultet("FTN");
    var p1 = new Predmet("Pera", "Peric", 1, "Algoritimi");
    var p2 = new Predmet("Mika", "Mikic", 2, "Strukture podataka");
    var p3 = new Predmet("Zika", "Zikic", 3, "Bioloski inspirisano racunarstvo");
    fakultet.predmeti = [p1, p2, p3];
    var i11 = new Ispit(p1, "i1", "Jovan", "Jovanovic", "teorija", "2022-02-11", 5);
    var i12 = new Ispit(p1, "i1", "Jovan", "Jovanovic", "kolokvijum", "2022-03-05", 60);
    var i21 = new Ispit(p1, "i2", "Ivan", "Ivanovic", "teorija", "2022-05-09", 25);
    var i22 = new Ispit(p1, "i2", "Ivan", "Ivanovic", "kolokvijum", "2022-07-21", 68);
    var i31 = new Ispit(p1, "i3", "Dejan", "Dejan", "teorija", "2022-05-09", 7);
    var i32 = new Ispit(p1, "i3", "Dejan", "Dejan", "kolokvijum", "2022-07-21", 69);
    var i41 = new Ispit(p2, "i4", "Marko", "Markovic", "teorija", "2022-02-11", 20);
    var i42 = new Ispit(p2, "i4", "Marko", "Markovic", "kolokvijum", "2022-03-05", 64);
    var i51 = new Ispit(p2, "i5", "Nikola", "Nikolic", "teorija", "2022-05-09", 18);
    var i52 = new Ispit(p2, "i5", "Nikola", "Nikolic", "kolokvijum", "2022-07-21", 15);
    var i61 = new Ispit(p2, "i6", "Luka", "Lukic", "teorija", "2022-05-09", 22);
    var i62 = new Ispit(p2, "i6", "Luka", "Lukic", "kolokvijum", "2022-07-21", 33);
    var i71 = new Ispit(p3, "i7", "Djordje", "Djordjevic", "teorija", "2022-02-11", 23);
    var i72 = new Ispit(p3, "i7", "Djordje", "Djordjevic", "kolokvijum", "2022-03-05", 66);
    var i81 = new Ispit(p3, "i8", "Branko", "Brankovic", "teorija", "2022-05-09", 7);
    var i82 = new Ispit(p3, "i8", "Branko", "Brankovic", "kolokvijum", "2022-07-21", 21);
    var i91 = new Ispit(p3, "i9", "Ognjen", "Ognjenovic", "teorija", "2022-05-09", 8);
    var i92 = new Ispit(p3, "i9", "Ognjen", "Ognjenovic", "kolokvijum", "2022-07-21", 34);
    var i101 = new Ispit(p3, "i10", "Dimitrije", "Dimitrijevic", "teorija", "2022-05-09", 29);
    var i102 = new Ispit(p3, "i10", "Dimitrije", "Dimitrijevic", "kolokvijum", "2022-07-21", 70);
    var i111 = new Ispit(p3, "i11", "Vladimir", "Vladimirovic", "teorija", "2022-05-09", 9);
    var i112 = new Ispit(p3, "i11", "Vladimir", "Vladimirovic", "kolokvijum", "2022-07-21", 17);
    fakultet.dodajIspit(i11);
    fakultet.dodajIspit(i12);
    fakultet.dodajIspit(i21);
    fakultet.dodajIspit(i22);
    fakultet.dodajIspit(i31);
    fakultet.dodajIspit(i32);
    fakultet.dodajIspit(i41);
    fakultet.dodajIspit(i42);
    fakultet.dodajIspit(i51);
    fakultet.dodajIspit(i52);
    fakultet.dodajIspit(i61);
    fakultet.dodajIspit(i62);
    fakultet.dodajIspit(i71);
    fakultet.dodajIspit(i72);
    fakultet.dodajIspit(i81);
    fakultet.dodajIspit(i82);
    fakultet.dodajIspit(i91);
    fakultet.dodajIspit(i92);
    fakultet.dodajIspit(i101);
    fakultet.dodajIspit(i102);
    fakultet.dodajIspit(i111);
    fakultet.dodajIspit(i112);
    var select = document.getElementById("predmet");
    fakultet.predmeti.forEach(function (el) {
        select.options.add(new Option(el.nazivPredmeta, el.idPredmeta.toString()));
    });
    aktivanPredmet = fakultet.predmeti[0];
    fakultet.refreshIspis();
    wireEvents();
}
//# sourceMappingURL=app.js.map