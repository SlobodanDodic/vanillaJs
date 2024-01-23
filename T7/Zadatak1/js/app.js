function hello(name, surname, gender) {
    if (gender == "Man") {
        console.log("Hello, Mr. " + name + " " + surname);
    }
    else {
        console.log("Hello, Ms. " + name + " " + surname);
    }
}
function sayHello(fullname, gender, helloFunction) {
    //Kao u zadatku 2. parametre dobijamo splitovanjem stringa
    var parts = fullname.split(" ");
    //provera tipa parametra helloFunction, ako je funkcija pozivamo (ova provera nije obavezna)
    if (typeof helloFunction === "function") {
        helloFunction(parts[0], parts[1], gender);
    }
}
sayHello("John Smith", "Man", hello);
//# sourceMappingURL=app.js.map