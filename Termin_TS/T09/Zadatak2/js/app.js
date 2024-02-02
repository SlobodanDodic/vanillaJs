var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Radnik = /** @class */ (function () {
    function Radnik(name, age, osnovica) {
        this._name = name;
        this._age = age;
        this._osnovica = osnovica;
    }
    Object.defineProperty(Radnik.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Radnik.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Radnik.prototype, "osnovica", {
        get: function () {
            return this._osnovica;
        },
        set: function (value) {
            this._osnovica = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Radnik.prototype, "plata", {
        get: function () {
            return this._osnovica;
        },
        enumerable: false,
        configurable: true
    });
    Radnik.prototype.avgAge = function (obj) {
        var sum = 0;
        for (var i_1 = 0; i_1 < obj.length; i_1++) {
            sum += obj[i_1]._age;
        }
        console.log(sum / obj.length);
        return sum;
    };
    Radnik.prototype.dateOfBirth = function () {
        var date = new Date();
        var godina = date.getFullYear();
        console.log(godina - this._age);
        return godina - this._age;
    };
    return Radnik;
}());
/// <reference path="radnik.ts" />
var Tehnicar = /** @class */ (function (_super) {
    __extends(Tehnicar, _super);
    function Tehnicar(name, age, osnovica) {
        return _super.call(this, name, age, osnovica) || this;
    }
    return Tehnicar;
}(Radnik));
/// <reference path="radnik.ts" />
var Inzenjer = /** @class */ (function (_super) {
    __extends(Inzenjer, _super);
    function Inzenjer(name, age, osnovica) {
        return _super.call(this, name, age, osnovica) || this;
    }
    Object.defineProperty(Inzenjer.prototype, "plata", {
        get: function () {
            return this.osnovica * 1.12;
        },
        enumerable: false,
        configurable: true
    });
    return Inzenjer;
}(Radnik));
/// <reference path="radnik.ts" />
var Doktor = /** @class */ (function (_super) {
    __extends(Doktor, _super);
    function Doktor(name, age, osnovica) {
        return _super.call(this, name, age, osnovica) || this;
    }
    Object.defineProperty(Doktor.prototype, "plata", {
        get: function () {
            return this.osnovica * 1.13;
        },
        enumerable: false,
        configurable: true
    });
    return Doktor;
}(Radnik));
/// <reference path="tehnicar.ts" />
/// <reference path="inzenjer.ts" />
/// <reference path="doktor.ts" />
// Zadatak 2:
// Na osnovu niza napraviti klase (Radnik i podklase Inzenjer, Tehnicar, Doktor).
// Onemoguciti instanciranje klase Radnik, svi radnici bi umesto atributa plata trebali da imaju atribut osnovica. 
// var zaposleni = [
//   ["pera",      "jova",     "marko"],
//   [28,          31,         39],
//   ["inzenjer",  "tehnicar", "doktor"],
//   [700,         0,        0]
// ];
// Za zadate zaposlene implementirati da se plata prikazuje tako da: 
// - tehnicar ima osnovicu
// - izenjer ima osnovicu + 12 %
// - doktor ima platu osnovica + 13%
// Napomena: Ispis plata vrsiti putem gettera za platu
var t = new Tehnicar("Enzo", 20, 100);
var i = new Inzenjer("ing Enzo", 30, 100);
var d = new Doktor("Dr Enzo", 40, 100);
console.log(t.plata.toFixed(2));
console.log(i.plata.toFixed(2));
console.log(d.plata.toFixed(2));
// Zadatak 3:
// Napisati funkciju koja pronalazi srednju vrednost godina svih radnika. 
var obj = [];
obj.push(t);
obj.push(i);
obj.push(d);
d.avgAge(obj);
// Zadatak 4:
// Napisati metodu koja za radnika racuna godinu rodjenja na osnovu trenutnih godina
// Napomena: Za dobijanje trenutne godine mozete iskoristiti sledeci kod
// var d = new Date();
// var godina = d.getFullYear();
t.dateOfBirth();
i.dateOfBirth();
d.dateOfBirth();
//# sourceMappingURL=app.js.map