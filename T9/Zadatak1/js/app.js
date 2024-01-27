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
var Kamera = /** @class */ (function () {
    function Kamera(megaPikseli, freeSpace, photoCounter) {
        this._megaPikseli = megaPikseli;
        this._freeSpace = freeSpace;
        this._photoCounter = photoCounter;
    }
    Object.defineProperty(Kamera.prototype, "megaPikseli", {
        get: function () {
            return this._megaPikseli;
        },
        set: function (value) {
            this._megaPikseli = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kamera.prototype, "freeSpace", {
        get: function () {
            return this._freeSpace;
        },
        set: function (value) {
            this._freeSpace = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kamera.prototype, "photoCounter", {
        get: function () {
            return this._photoCounter;
        },
        set: function (value) {
            this._photoCounter = value;
        },
        enumerable: false,
        configurable: true
    });
    Kamera.prototype.slikaj = function () {
        if (this.freeSpace >= this.megaPikseli) {
            this._freeSpace = this.freeSpace - this.megaPikseli;
            this.photoCounter++;
            return true;
        }
        else {
            return false;
        }
    };
    return Kamera;
}());
;
/// <reference path="kamera.ts" />
var VideoKamera = /** @class */ (function (_super) {
    __extends(VideoKamera, _super);
    function VideoKamera(videoCounter, megaPikseli, freeSpace, photoCounter) {
        var _this = _super.call(this, megaPikseli, freeSpace, photoCounter) || this;
        _this._videoCounter = videoCounter;
        return _this;
    }
    ;
    Object.defineProperty(VideoKamera.prototype, "videoCounter", {
        get: function () {
            return this._videoCounter;
        },
        set: function (value) {
            this._videoCounter = value;
        },
        enumerable: false,
        configurable: true
    });
    VideoKamera.prototype.snimaj = function (sekunde) {
        if (this._freeSpace >= this._megaPikseli * sekunde) {
            this._freeSpace -= this.megaPikseli * sekunde;
            this._videoCounter++;
            return true;
        }
        else {
            return false;
        }
    };
    return VideoKamera;
}(Kamera));
;
/// <reference path="kamera.ts" />
/// <reference path="videokamera.ts" />
var k = new Kamera(5, 10, 0);
console.log(k);
console.log(k.freeSpace);
console.log(k.photoCounter);
console.log(k.slikaj());
console.log(k.freeSpace);
console.log(k.photoCounter);
console.log(k.slikaj());
console.log(k.freeSpace);
console.log(k.photoCounter);
console.log(k.slikaj());
var vk = new VideoKamera(5, 10, 0, 0);
console.log(vk.freeSpace);
console.log(vk.photoCounter);
console.log(vk.snimaj(10));
console.log(vk.freeSpace);
console.log(vk.photoCounter);
console.log(vk.snimaj(10));
console.log(vk.freeSpace);
console.log(vk.photoCounter);
console.log(vk.snimaj(10));
//Zadatak 1
// Napisati klasu Kamera koja ima polja: megaPikseli (number), freeSpace (number) i photoCounter (number). U klasi 
// implementirati:
// - Konstruktor sa parametrima
// - Getere i setere
// - Metod bool slikaj() - umanjuje vrednost polja freeSpace za vrednost polja megaPikseli pod uslovom da ima dovoljno 
//   memorije i u tom slučaju vraća true. U suprotnom, metod vraća false. Svaki uspesni poziv metode slikaj povecava photoCounter za jedan.
// Iz klase Kamera izvesti klasu VideoKamera koja sadrži polje videoCounter (number). U klasi implementirati:
// - Konstruktor sa parametrima
// - Geter i stere
// - Metod bool snimaj(number sekunde) - umanjuje vrednost polja freeSpace za proizvod vrednosti polja megaPikseli i vrednosti parametra sekunde pod uslovom da ima dovoljno memorije i u tom slučaju vraća true. 
//   U suprtonom, metod vraća false. Svaki uspesni poziv metode snimaj uvecava vrednost polja videoCounter za jedan.
//# sourceMappingURL=app.js.map