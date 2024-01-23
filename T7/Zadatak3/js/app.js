//Zadatak 3:
// Napisati klasu Valjak koja opisuje geometrijsku figuru valjak.
// Klasa Valjak treba da se sastoji iz 2 objekta-člana: klase Krug i klase Pravougaonik. (Kompozicija)
// U klasa Valjak implementirati:
// 	- konstruktor sa parametrima
// 	- get metodu R - vraća poluprečnik baze valjka (poluprečnik r kruga)
// 	- get metodu H - vraća visinu omotača valjka (stranica b pravougaonika)
// 	- metod getP - vraća površinu valjka (Povrsina valjka se racuna po formuli 2*r*r*PI+2*r*PI*H) PI je konstanta Math.PI
// 	- metod getV - vraća zapreminu valjka (Zapremina valjka se racuna po formuli V=r*r*PI*H)
// Klasu Krug opisati pomoću polja r tipa number koje predstavlja poluprečnik kruga.
// U klasi Krug implementirti
// 	- konstruktor sa parametrima (sa podrazumevanim vrednostima za parametre)
// 	- get metodu r
// 	- set metodu r
// 	- metod getO (Obim kruga se racuna po formuli O = 2*r*PI)
// 	- metod getP (Povrsina kruga se racuna po formuli P = r*r*PI)
// Klasu Pravougaonik opisati pomoću polja a i b tipa number koja predstavljaju stranice a i b pravougaonika.
// U klasi Pravougaonik implementirati:
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
//# sourceMappingURL=app.js.map