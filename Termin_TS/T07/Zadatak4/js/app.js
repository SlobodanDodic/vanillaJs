//Zadatak 4:
// Napisati klasu Pas.
// Svaki pas ima ime, starost (u psećim godinama), podatak da li je vakcinisan i naziv rase.
// Napisati konstruktor (sa podrazumevanim vrednostima za parametre), gettere i settere.
// Psa je moguće vakcinisati, ispisati njegovu starost u ljudskim godinama* - Jedna pseća godina je 7 ljudskih.
// Ispisati sve podatke o psu, (napraviti metode za navedene funkcionalnosti)
// Kreirati posebnu Kennel klasu. Kennel klasa ima naziv, adresu, i niz Pasa.
// Napisati konstruktor koji kao parametre prima samo naziv i adresu.
// Implementirati getere i setere, kao i metodu za dodavanje pasa u niz.
// Prilikom testiranja u taj niz dodati barem 7 pasa. 
// Implementirati metode koje omogucuju sledece funkcionalnosti: 
// 	-pronaći najstarijeg psa
// 	-pronaci najmladjeg psa
// 	-ispisati imena vakcinisanih pasa.
var Pas = /** @class */ (function () {
    function Pas(_ime, _starost, _rasa, _vakcinisan) {
        if (_vakcinisan === void 0) { _vakcinisan = false; }
        this._ime = _ime;
        this._starost = _starost;
        this._vakcinisan = _vakcinisan;
        this._rasa = _rasa;
    }
    Object.defineProperty(Pas.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pas.prototype, "starost", {
        get: function () {
            return this._starost;
        },
        set: function (value) {
            this._starost = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pas.prototype, "rasa", {
        get: function () {
            return this._rasa;
        },
        set: function (value) {
            this._rasa = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pas.prototype, "vakcinisan", {
        get: function () {
            return this._vakcinisan;
        },
        set: function (value) {
            this._vakcinisan = value;
        },
        enumerable: false,
        configurable: true
    });
    Pas.prototype.vakcinacija = function () {
        return this._vakcinisan = true;
    };
    Pas.prototype.starostLjudskeGodine = function () {
        return this._starost * 7;
    };
    Pas.prototype.ispisPodataka = function (_ime, _starost, _rasa, _vakcinisan) {
        if (_vakcinisan === void 0) { _vakcinisan = false; }
        return "Ime: ".concat(_ime, ", starost: ").concat(_starost, ", rasa: ").concat(_rasa, ", vakcinisan: ").concat(_vakcinisan);
    };
    return Pas;
}());
var Kennel = /** @class */ (function () {
    function Kennel(_naziv, _adresa) {
        this._nizPasa = [];
        this._naziv = _naziv;
        this._adresa = _adresa;
    }
    Object.defineProperty(Kennel.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kennel.prototype, "adresa", {
        get: function () {
            return this._adresa;
        },
        set: function (value) {
            this._adresa = value;
        },
        enumerable: false,
        configurable: true
    });
    Kennel.prototype.dodajPsa = function (pas) {
        this._nizPasa.push(pas);
    };
    Kennel.prototype.pronađiNajstarijegPsa = function () {
        var najstarijiPas = null;
        for (var _i = 0, _a = this._nizPasa; _i < _a.length; _i++) {
            var pas = _a[_i];
            if (!najstarijiPas || pas.starost > najstarijiPas.starost) {
                najstarijiPas = pas;
            }
        }
        return najstarijiPas;
    };
    Kennel.prototype.pronađiNajmlađegPsa = function () {
        var najmlađiPas = null;
        for (var _i = 0, _a = this._nizPasa; _i < _a.length; _i++) {
            var pas = _a[_i];
            if (!najmlađiPas || pas.starost < najmlađiPas.starost) {
                najmlađiPas = pas;
            }
        }
        return najmlađiPas;
    };
    Kennel.prototype.ispisiVakcinisanePse = function () {
        var vakcinisaniPsi = [];
        for (var _i = 0, _a = this._nizPasa; _i < _a.length; _i++) {
            var pas = _a[_i];
            if (pas.vakcinisan) {
                vakcinisaniPsi.push(pas.ime);
            }
        }
        return vakcinisaniPsi;
    };
    return Kennel;
}());
// Provera:
// const mojPas = new Pas("Buddy", 3, "Labrador");
// mojPas.vakcinacija();
// console.log(mojPas.starostLjudskeGodine())
// console.log(mojPas.starost)
// const podaci = mojPas.ispisPodataka(mojPas.ime, mojPas.starost, mojPas.rasa, mojPas.vakcinisan);
// console.log(podaci);
// Testiranje:
var kennel = new Kennel("Patrolne šape", "Glavna 12, Novi Sad");
var pas1 = new Pas("David", 3, "Labrador", true);
var pas2 = new Pas("Roger", 5, "German Shepherd", false);
var pas3 = new Pas("Rick", 2, "Beagle", true);
var pas4 = new Pas("Nick", 4, "Poodle", false);
var pas5 = new Pas("Jimmy", 6, "Boxer", true);
var pas6 = new Pas("SRV", 1, "Golden Retriever", true);
var pas7 = new Pas("Eric", 8, "Bulldog", false);
kennel.dodajPsa(pas1);
kennel.dodajPsa(pas2);
kennel.dodajPsa(pas3);
kennel.dodajPsa(pas4);
kennel.dodajPsa(pas5);
kennel.dodajPsa(pas6);
kennel.dodajPsa(pas7);
console.log("Najstariji pas:", kennel.pronađiNajstarijegPsa().ime);
console.log("Najmlađi pas:", kennel.pronađiNajmlađegPsa().ime);
console.log("Imena vakcinisanih pasa:", kennel.ispisiVakcinisanePse());
console.log(kennel.naziv + " - " + kennel.adresa);
//# sourceMappingURL=app.js.map