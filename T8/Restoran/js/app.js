var StavkaJelovnika = /** @class */ (function () {
    function StavkaJelovnika(naziv, cena, tip) {
        this._naziv = naziv;
        this._cena = cena;
        this._tip = tip;
        StavkaJelovnika.LAST_ID += 1;
        this._id = StavkaJelovnika.LAST_ID;
    }
    Object.defineProperty(StavkaJelovnika.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StavkaJelovnika.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StavkaJelovnika.prototype, "cena", {
        get: function () {
            return this._cena;
        },
        set: function (value) {
            this._cena = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StavkaJelovnika.prototype, "tip", {
        get: function () {
            return this._tip;
        },
        set: function (value) {
            this._tip = value;
        },
        enumerable: false,
        configurable: true
    });
    StavkaJelovnika.LAST_ID = 0;
    return StavkaJelovnika;
}());
/// <reference path="StavkaJelovnika.ts" />
// T8 - Zadatak 03, upotreba reduce-a za prosek
var StavkaPorudzbine = /** @class */ (function () {
    function StavkaPorudzbine(stavkaJelovnika, kolicina) {
        this._stavkaJelovnika = stavkaJelovnika;
        this._kolicina = kolicina;
    }
    Object.defineProperty(StavkaPorudzbine.prototype, "stavkaJelovnika", {
        get: function () {
            return this._stavkaJelovnika;
        },
        set: function (value) {
            this._stavkaJelovnika = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StavkaPorudzbine.prototype, "kolicina", {
        get: function () {
            return this._kolicina;
        },
        set: function (value) {
            this._kolicina = value;
        },
        enumerable: false,
        configurable: true
    });
    return StavkaPorudzbine;
}());
/// <reference path="StavkaPorudzbine.ts" />
var Porudzbina = /** @class */ (function () {
    function Porudzbina(imeKlijenta, datum, status) {
        if (status === void 0) { status = "Otvorena"; }
        this._id = Porudzbina.LAST_ID;
        this._imeKlijenta = imeKlijenta;
        this._datum = datum;
        this._status = status;
        this._id = Porudzbina.LAST_ID;
        this._stavke = [];
        Porudzbina.LAST_ID += 1;
    }
    Object.defineProperty(Porudzbina.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Porudzbina.prototype, "imeKlijenta", {
        get: function () {
            return this._imeKlijenta;
        },
        set: function (value) {
            this._imeKlijenta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Porudzbina.prototype, "datum", {
        get: function () {
            return this._datum;
        },
        set: function (value) {
            this._datum = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Porudzbina.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Porudzbina.prototype, "stavke", {
        get: function () {
            return this._stavke;
        },
        set: function (value) {
            this._stavke = value;
        },
        enumerable: false,
        configurable: true
    });
    Porudzbina.prototype.cenaPorudzbine = function () {
        return this._stavke.reduce(function (acc, curr) { return acc + curr.kolicina * curr.stavkaJelovnika.cena; }, 0);
    };
    Porudzbina.LAST_ID = 0;
    return Porudzbina;
}());
/// <reference path="StavkaJelovnika.ts" />
/// <reference path="Porudzbina.ts" />
/// <reference path="StavkaPorudzbine.ts" />
var Restoran = /** @class */ (function () {
    function Restoran(naziv) {
        this._jelovnik = [];
        this._porudzbine = [];
        this._naziv = naziv;
        this._jelovnik = [];
        this._porudzbine = [];
    }
    Object.defineProperty(Restoran.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restoran.prototype, "jelovnik", {
        get: function () {
            return this._jelovnik;
        },
        set: function (value) {
            this._jelovnik = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restoran.prototype, "porudzbine", {
        get: function () {
            return this._porudzbine;
        },
        set: function (value) {
            this._porudzbine = value;
        },
        enumerable: false,
        configurable: true
    });
    Restoran.prototype.dodajStavkuJelovnika = function (stavkaJelovnika) {
        this._jelovnik.push(stavkaJelovnika);
        this.refreshJelovnik();
    };
    Restoran.prototype.refreshJelovnik = function () {
        var out = "";
        for (var _i = 0, _a = this._jelovnik; _i < _a.length; _i++) {
            var stavkaJelovnika = _a[_i];
            out += "<li class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-start\" onclick=\"clickedMenu(".concat(stavkaJelovnika.id, ")\">");
            out += "<div class=\"ms-2 me-auto fw-bold\">";
            out += "".concat(stavkaJelovnika.naziv, " (").concat(stavkaJelovnika.cena, ")");
            out += "</div>";
            out += "<span class=\"badge bg-primary rounded-pill\" id=\"spanJelovnik".concat(stavkaJelovnika.id, "\"></span>");
            out += "</li>";
        }
        document.getElementById("listajelovnik").innerHTML = out;
    };
    Restoran.prototype.napraviPorudzbinu = function (imeKlijenta, datum) {
        var order = new Porudzbina(imeKlijenta, datum);
        this._porudzbine.push(order);
        return order;
    };
    Restoran.prototype.getStavkaJelovnikaById = function (id) {
        var foundStavka = this._jelovnik.filter(function (stavka) { return stavka.id === id; })[0];
        return foundStavka || null;
    };
    Restoran.prototype.zlatniKlijenti = function () {
        var skorKlijenta = {};
        for (var _i = 0, _a = this._porudzbine; _i < _a.length; _i++) {
            var porudzbina = _a[_i];
            if (porudzbina.status != "Zatvorena")
                continue;
            if (!(porudzbina.imeKlijenta in skorKlijenta)) {
                skorKlijenta[porudzbina.imeKlijenta] = 0;
            }
            for (var _b = 0, _c = porudzbina.stavke; _b < _c.length; _b++) {
                var stavka = _c[_b];
                skorKlijenta[porudzbina.imeKlijenta] += Restoran.BODOVI_PO_TIPU[stavka.stavkaJelovnika.tip] * stavka.kolicina;
            }
        }
        var hasGold = false;
        var out = "Spisak GOLD klijenata: <br/>";
        for (var klijent in skorKlijenta) {
            if (skorKlijenta[klijent] > Restoran.BODOVI_ZA_GOLD) {
                hasGold = true;
                out += "".concat(klijent, " sa ").concat(skorKlijenta[klijent], " ukupno bodova. <br/>");
            }
        }
        if (hasGold)
            return out;
        return "Restoran trenutno nema GOLD klijente";
    };
    Restoran.prototype.najProfitabilnijiTipPoKlijentu = function () {
        var klijenti = {};
        for (var _i = 0, _a = this._porudzbine; _i < _a.length; _i++) {
            var porudzbina = _a[_i];
            if (porudzbina.status != "Zatvorena")
                continue;
            if (!(porudzbina.imeKlijenta in klijenti)) {
                klijenti[porudzbina.imeKlijenta] = {};
            }
            for (var _b = 0, _c = porudzbina.stavke; _b < _c.length; _b++) {
                var stavka = _c[_b];
                if (!(stavka.stavkaJelovnika.tip in klijenti[porudzbina.imeKlijenta])) {
                    klijenti[porudzbina.imeKlijenta][stavka.stavkaJelovnika.tip] = 0;
                }
                klijenti[porudzbina.imeKlijenta][stavka.stavkaJelovnika.tip] += stavka.stavkaJelovnika.cena * stavka.kolicina;
            }
        }
        var out = "";
        for (var klijent in klijenti) {
            var potroseno = klijenti[klijent];
            var maxTip = "";
            var maxCena = Number.NEGATIVE_INFINITY;
            for (var tip in potroseno) {
                if (potroseno[tip] > maxCena) {
                    maxCena = potroseno[tip];
                    maxTip = tip;
                }
            }
            out += "".concat(klijent, " je najvi\u0161e potro\u0161io na tip \"").concat(maxTip, "\" (").concat(maxCena, ") <br/>");
        }
        return out;
    };
    Restoran.BODOVI_PO_TIPU = { Predjelo: 1, "Glavno jelo": 3, Desert: 1 };
    Restoran.BODOVI_ZA_GOLD = 10;
    return Restoran;
}());
/// <reference path="Restoran.ts" />
var stavkeJelovnikaInit;
var porudzbineInit;
var otvorenaPorudzbina = null;
var aktivanRestoran = new Restoran("Kod Raspevanog Italijana");
function clickedMenu(menuId) {
    var stavkaJelovnika = aktivanRestoran.getStavkaJelovnikaById(menuId);
    var stavkaPorudzbine = null;
    for (var _i = 0, _a = otvorenaPorudzbina.stavke; _i < _a.length; _i++) {
        var stavka = _a[_i];
        if (stavka.stavkaJelovnika.id == menuId) {
            stavkaPorudzbine = stavka;
            break;
        }
    }
    if (stavkaPorudzbine == null) {
        stavkaPorudzbine = new StavkaPorudzbine(stavkaJelovnika, 0);
        otvorenaPorudzbina.stavke.push(stavkaPorudzbine);
    }
    stavkaPorudzbine.kolicina += 1;
    document.getElementById("spanJelovnik" + menuId).innerHTML = stavkaPorudzbine.kolicina;
}
function otvoriPorudzbinu(forma) {
    var ime = forma.ime.value.trim();
    var porudzbina = aktivanRestoran.napraviPorudzbinu(ime, new Date());
    otvorenaPorudzbina = porudzbina;
    document.getElementById("idp").value = porudzbina.id.toString();
    document.getElementById("imep").value = porudzbina.imeKlijenta;
    document.getElementById("datump").value = porudzbina.datum.toString();
    document.getElementById("otvorenaporudzbinadiv").removeAttribute("hidden");
    aktivanRestoran.refreshJelovnik();
    document.getElementById("jelovnikdiv").removeAttribute("hidden");
    document.getElementById("ispis").innerHTML = "";
    document.getElementById("otvoribtn").disabled = true;
    return false;
}
function otkaziPorudzbinu() {
    document.getElementById("otvorenaporudzbinadiv").setAttribute("hidden", "");
    document.getElementById("jelovnikdiv").setAttribute("hidden", "");
    otvorenaPorudzbina.status = "Otkazana";
    document.getElementById("otvoribtn").disabled = false;
    otvorenaPorudzbina = null;
}
function zatvoriPorudzbinu() {
    document.getElementById("otvorenaporudzbinadiv").setAttribute("hidden", "");
    document.getElementById("jelovnikdiv").setAttribute("hidden", "");
    otvorenaPorudzbina.status = "Zatvorena";
    var out = "Porudzbina broj: ".concat(otvorenaPorudzbina.id, " <br/>");
    out += "Klijent: ".concat(otvorenaPorudzbina.imeKlijenta, " <br/>");
    out += "Datum: ".concat(otvorenaPorudzbina.datum, " <br/><br/>");
    out += "Naru\u010Deno: <br/>";
    for (var _i = 0, _a = otvorenaPorudzbina.stavke; _i < _a.length; _i++) {
        var stavka = _a[_i];
        out += "".concat(stavka.stavkaJelovnika.naziv, " (").concat(stavka.stavkaJelovnika.cena, " x ").concat(stavka.kolicina, ") ---- ").concat(stavka.kolicina * stavka.stavkaJelovnika.cena, " <br/>");
    }
    out += "<br/>Ukupna za naplatu: <b>".concat(otvorenaPorudzbina.cenaPorudzbine(), "</b>");
    document.getElementById("ispis").innerHTML = out;
    document.getElementById("otvoribtn").disabled = false;
    otvorenaPorudzbina = null;
}
function zlatniKlijenti() {
    document.getElementById("ispis").innerHTML = aktivanRestoran.zlatniKlijenti();
}
function jelaPoKlijentu() {
    document.getElementById("ispis").innerHTML = aktivanRestoran.najProfitabilnijiTipPoKlijentu();
}
window.onload = function () {
    ucitajPodatke();
    aktivanRestoran.refreshJelovnik();
};
function ucitajPodatke() {
    for (var i = 0; i < stavkeJelovnikaInit.length; i++) {
        var st = new StavkaJelovnika(stavkeJelovnikaInit[i].naziv, stavkeJelovnikaInit[i].cena, stavkeJelovnikaInit[i].tip);
        aktivanRestoran.dodajStavkuJelovnika(st);
    }
    for (var i = 0; i < porudzbineInit.length; i++) {
        var p = new Porudzbina(porudzbineInit[i].imeKlijenta, new Date(porudzbineInit[i].datum), porudzbineInit[i].status);
        for (var _i = 0, _a = porudzbineInit[i].stavke; _i < _a.length; _i++) {
            var stavka = _a[_i];
            var st = aktivanRestoran.getStavkaJelovnikaById(stavka.idstavke);
            var kolicina = stavka.kolicina;
            var stpor = new StavkaPorudzbine(st, kolicina);
            p.stavke.push(stpor);
        }
        aktivanRestoran.porudzbine.push(p);
    }
}
//# sourceMappingURL=app.js.map