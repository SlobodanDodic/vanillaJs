window.onload = function () {
    var calc = new Calculator("X", "Y", "Output");
};
var Calculator = /** @class */ (function () {
    function Calculator(xId, yId, outputId) {
        //TODO 2 Konstruktor dobija ID elemenata koje su mu potrebni za rad (selektovati te elemente)
        this.x = document.getElementById(xId);
        this.y = document.getElementById(yId);
        this.output = document.getElementById(outputId);
        //TODO 3 Nakon inicijalizacije elemenata pozvati metodu wireEvents
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        //TODO 4 Metoda wire events povezuje event listnere za klik na dugmice add, subtract...
        //       I implementira njihovu funkcionalnost
        document.getElementById("Add").addEventListener("click", function () {
            var xNumber = +_this.x.value; // +"23" je isto sto i Number("23");
            var yNumber = +_this.y.value;
            _this.output.innerHTML = _this.addition(xNumber, yNumber).toFixed(2);
        });
        document.getElementById("Subtract").addEventListener("click", function () {
            var xNumber = +_this.x.value;
            var yNumber = +_this.y.value;
            _this.output.innerHTML = _this.subtraction(xNumber, yNumber).toFixed(2);
        });
        document.getElementById("Multiply").addEventListener("click", function () {
            var xNumber = +_this.x.value;
            var yNumber = +_this.y.value;
            _this.output.innerHTML = _this.multiplication(xNumber, yNumber).toFixed(2);
        });
        document.getElementById("Divide").addEventListener("click", function () {
            var xNumber = +_this.x.value;
            var yNumber = +_this.y.value;
            _this.output.innerHTML = _this.division(xNumber, yNumber).toFixed(2);
        });
    };
    //TODO 1 Implementirati metode za sabiranje, oduzimanje, mnozenje i deljenje
    Calculator.prototype.addition = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtraction = function (x, y) {
        return x - y;
    };
    Calculator.prototype.multiplication = function (x, y) {
        return x * y;
    };
    Calculator.prototype.division = function (x, y) {
        return x / y;
    };
    return Calculator;
}());
//# sourceMappingURL=calculator.js.map