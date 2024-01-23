//Zadatak 2
// Prepraviti zadatak 6 sa termina 6 da koristi typescript
// Zadatak 6(T6):
// Pokrenuti zadatak 6 i razmotriti ispis u konzoli koji se dešava na klik dugmeta.
// Izmeniti zadatak tako da se ispisuje odgovarajući indeks dugmeta.
window.onload = function () {
    var nodes = document.getElementsByTagName("button");
    var _loop_1 = function (i) {
        nodes[i].addEventListener("click", function () {
            console.log("Kliknuo si na dugme #" + i);
        });
    };
    for (var i = 0; i < nodes.length; i++) {
        _loop_1(i);
    }
};
//# sourceMappingURL=app.js.map