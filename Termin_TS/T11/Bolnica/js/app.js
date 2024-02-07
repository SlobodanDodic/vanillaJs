var Simptom = /** @class */ (function () {
    function Simptom(naziv) {
        this.naziv = naziv;
    }
    return Simptom;
}());
/// <reference path="Simptom.ts" />
var Pacijent = /** @class */ (function () {
    function Pacijent(id, ime, prezime, telesnaTemperatura, pcrTest) {
        this._id = id;
        this._ime = ime;
        this._prezime = prezime;
        this._telesnaTemperatura = telesnaTemperatura;
        this._pcrTest = pcrTest;
        this._ostaliSimptomi = [];
    }
    Object.defineProperty(Pacijent.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pacijent.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pacijent.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (value) {
            this._prezime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pacijent.prototype, "telesnaTemperatura", {
        get: function () {
            return this._telesnaTemperatura;
        },
        set: function (value) {
            this._telesnaTemperatura = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pacijent.prototype, "pcrTest", {
        get: function () {
            return this._pcrTest;
        },
        set: function (value) {
            this._pcrTest = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pacijent.prototype, "ostaliSimptomi", {
        get: function () {
            return this._ostaliSimptomi;
        },
        set: function (value) {
            this._ostaliSimptomi = value;
        },
        enumerable: false,
        configurable: true
    });
    Pacijent.prototype.dodajSimptom = function (simptom) {
        this._ostaliSimptomi.push(simptom);
    };
    return Pacijent;
}());
/// <reference path="Pacijent.ts" />
var Bolnica = /** @class */ (function () {
    function Bolnica(naziv, grad) {
        this._naziv = naziv;
        this._grad = grad;
        this._pacijenti = [];
    }
    Object.defineProperty(Bolnica.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bolnica.prototype, "grad", {
        get: function () {
            return this._grad;
        },
        set: function (value) {
            this._grad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bolnica.prototype, "pacijenti", {
        get: function () {
            return this._pacijenti;
        },
        set: function (value) {
            this._pacijenti = value;
        },
        enumerable: false,
        configurable: true
    });
    Bolnica.prototype.refreshHTML = function () {
        var view = "";
        for (var i = 0; i < this.pacijenti.length; i) {
            var pacijent = this.pacijenti[i];
            view = "<tr key=".concat(pacijent.id, ">\n                <td>").concat(pacijent.id, "</td>\n                <td>").concat(pacijent.ime, "</td>\n                <td>").concat(pacijent.prezime, "</td>\n                <td>").concat(pacijent.telesnaTemperatura, " \u00B0C</td>\n                <td>").concat(pacijent.pcrTest, "</td>\n                <td>\n                  <ul>\n                  ").concat(pacijent.ostaliSimptomi.map(function (simp) {
                "<li>".concat(simp.naziv, "</li>");
            }), "\n                  </ul>\n                </td>\n              </tr>");
        }
        document.getElementById("tbody").innerHTML = view;
    };
    Bolnica.prototype.dodajPacijenta = function (pacijent) {
        this._pacijenti.push(pacijent);
        this.refreshHTML();
    };
    Bolnica.prototype.procentualnoObolelih = function () {
        var oboleli = this._pacijenti.filter(function (el) { return el.pcrTest == "Pozitivan"; });
        var prosek = (oboleli.length / this._pacijenti.length) * 100;
        return prosek;
    };
    return Bolnica;
}());
/// <reference path="Bolnica.ts" />
var bolnice = [];
var aktivnaBolnica = null;
function promeniAktivnu(selekt) {
    aktivnaBolnica = bolnice.filter(function (el) { return el.naziv == selekt.value; })[0];
    aktivnaBolnica.refreshHTML();
}
function wireEvents() {
    document.getElementById("dodajPacijenta").addEventListener("click", function () {
        var ids = +Date.now();
        var ime = document.getElementById("ime").value;
        var prezime = document.getElementById("prezime").value;
        var temperatura = +document.getElementById("temperatura").value;
        var test = document.getElementById("test").value;
        var noviPacijent = new Pacijent(ids, ime, prezime, temperatura, test);
        console.log(noviPacijent);
        aktivnaBolnica.dodajPacijenta(noviPacijent);
        aktivnaBolnica.refreshHTML();
    });
    document.getElementById("dodajSimptom").addEventListener("click", function () {
        var id = +document.getElementById("ids").value;
        var simptom = document.getElementById("simptom").value;
        var noviSimptom = new Simptom(simptom);
        console.log(noviSimptom);
        aktivnaBolnica.pacijenti.filter(function (el) { return el.id === id; })[0].dodajSimptom(noviSimptom);
        aktivnaBolnica.refreshHTML();
    });
    document.getElementById("procenat").addEventListener("click", function () {
        var view = document.getElementById("podaci");
        view.innerHTML = "\n    <h2>\n      Procenutala broj obolelih u bolnici: \n      ".concat(aktivnaBolnica.naziv, " je \n      ").concat(aktivnaBolnica.procentualnoObolelih(), "%\n    <h2>\n    ");
    });
    document.getElementById("bezSimptoma").addEventListener("click", function () { });
}
window.onload = function () {
    // Po potrebi zakomentarisati initializeData();
    // initializeData();
    wireEvents();
};
function initializeData() {
    var bol = window.bol;
    var selekt = document.getElementById("bolnica");
    for (var i = 0; i < bol.length; i++) {
        var naziv = bol[i].naziv;
        var grad = bol[i].grad;
        var pacijenti = [];
        for (var j = 0; j < bol[i].pacijenti.length; j++) {
            var id = Number(bol[i].pacijenti[j].id);
            var ime = bol[i].pacijenti[j].ime;
            var prezime = bol[i].pacijenti[j].prezime;
            var temperatura = Number(bol[i].pacijenti[j].telesnaTemperatura);
            var pcrTest = bol[i].pacijenti[j].pcrTest;
            var simptomi = [];
            for (var k = 0; k < bol[i].pacijenti[j].ostaliSimptomi.length; k++) {
                var s = new Simptom(bol[i].pacijenti[j].ostaliSimptomi[k]);
                simptomi.push(s);
            }
            var p = new Pacijent(id, ime, prezime, temperatura, pcrTest);
            p.ostaliSimptomi = simptomi;
            pacijenti.push(p);
        }
        var b = new Bolnica(naziv, grad);
        b.pacijenti = pacijenti;
        if (aktivnaBolnica == null) {
            aktivnaBolnica = b;
            b.refreshHTML();
        }
        bolnice.push(b);
        var option = document.createElement("option");
        option.text = b.naziv;
        selekt.add(option);
    }
}
//# sourceMappingURL=app.js.map