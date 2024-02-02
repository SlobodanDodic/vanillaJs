//Zadatak 3:
// Klasa Valjak treba da se sastoji iz 2 objekta-člana: klase Krug i klase Pravougaonik. (Kompozicija):
// 	- konstruktor sa parametrima
// 	- get metodu R - vraća poluprečnik baze valjka (poluprečnik r kruga)
// 	- get metodu H - vraća visinu omotača valjka (stranica b pravougaonika)
// 	- metod getP - vraća površinu valjka (Povrsina valjka se racuna po formuli 2*r*r*PI+2*r*PI*H) PI je konstanta Math.PI
// 	- metod getV - vraća zapreminu valjka (Zapremina valjka se racuna po formuli V=r*r*PI*H)
// Klasu Krug opisati pomoću polja r tipa number koje predstavlja poluprečnik kruga:
// 	- konstruktor sa parametrima (sa podrazumevanim vrednostima za parametre)
// 	- get metodu r
// 	- set metodu r
// 	- metod getO (Obim kruga se racuna po formuli O = 2*r*PI)
// 	- metod getP (Povrsina kruga se racuna po formuli P = r*r*PI)
// Klasu Pravougaonik opisati pomoću polja a i b tipa number koja predstavljaju stranice a i b pravougaonika:
// 	- konstruktor sa parametrima (sa podrazumevanim vrednostima za parametre)
// 	- get metod A
// 	- set metod A
// 	- get metod B
// 	- set metod B
// 	- metod getO (Obima pravugaonika se racuna po formuli O = 2*a + 2*b)
// 	- metod getP (Povrsina pravougaonika se racuna po formuli P = a*b)
//Napraviti odgovarajucu HTML stranicu koja testira funkcionalnosti klasa.
var Krug = /** @class */ (function () {
    function Krug(_r) {
        if (_r === void 0) { _r = 3; }
        this._r = _r;
    }
    Krug.prototype.getO = function (_r) {
        return 2 * _r * Math.PI;
    };
    Krug.prototype.getP = function (_r) {
        return Math.pow(_r, Math.PI);
    };
    Object.defineProperty(Krug.prototype, "r", {
        get: function () {
            return this._r;
        },
        set: function (value) {
            this._r = value;
        },
        enumerable: false,
        configurable: true
    });
    return Krug;
}());
var Pravougaonik = /** @class */ (function () {
    function Pravougaonik(_a, _b) {
        this._a = _a;
        this._b = _b;
    }
    Pravougaonik.prototype.getO = function (_a, _b) {
        return 2 * _a + 2 * _b;
    };
    Pravougaonik.prototype.getP = function (_a, _b) {
        return _a * _b;
    };
    Object.defineProperty(Pravougaonik.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pravougaonik.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (value) {
            this._b = value;
        },
        enumerable: false,
        configurable: true
    });
    return Pravougaonik;
}());
var Valjak = /** @class */ (function () {
    function Valjak(r, a, b) {
        this.krug = new Krug(r);
        this.pravougaonik = new Pravougaonik(a, b);
    }
    Object.defineProperty(Valjak.prototype, "R", {
        get: function () {
            return this.krug.r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Valjak.prototype, "H", {
        get: function () {
            return this.pravougaonik.b;
        },
        enumerable: false,
        configurable: true
    });
    Valjak.prototype.getP = function () {
        var r = this.R;
        var h = this.H;
        return 2 * r * r * Math.PI + 2 * r * Math.PI * h;
    };
    Valjak.prototype.getV = function () {
        var r = this.R;
        var h = this.H;
        return r * r * Math.PI * h;
    };
    return Valjak;
}());
// HTML test:
document.addEventListener("DOMContentLoaded", function () {
    var valjak = new Valjak(3, 4, 5);
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = "\n      R: ".concat(valjak.R, ", H: ").concat(valjak.H, ", P: ").concat(valjak.getP().toFixed(2), ", V: ").concat(valjak.getV().toFixed(2), "\n    ");
    }
    else {
        console.error("Element with ID 'result' not found.");
    }
});
//# sourceMappingURL=app.js.map