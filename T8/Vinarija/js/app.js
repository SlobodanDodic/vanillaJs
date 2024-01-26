var Vino = /** @class */ (function () {
    //TODO 1. a) Implementirati konstruktor kopije ... _atribut = atribut
    function Vino(obj) {
        //Videti primer sa slajdova.
        this._id = obj && obj.id || null;
        this._country = obj && obj.country || null;
        this._description = obj && obj.description || null;
        this._grapes = obj && obj.grapes || null;
        this._name = obj && obj.name || null;
        this._picture = obj && obj.picture || null;
        this._region = obj && obj.region || null;
        this._year = obj && obj.year || null;
    }
    Object.defineProperty(Vino.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (value) {
            this._country = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vino.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vino.prototype, "grapes", {
        get: function () {
            return this._grapes;
        },
        set: function (value) {
            this._grapes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vino.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vino.prototype, "picture", {
        get: function () {
            return this._picture;
        },
        set: function (value) {
            this._picture = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vino.prototype, "region", {
        get: function () {
            return this._region;
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vino.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vino.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    return Vino;
}());
/// <reference path="vino.ts" />
var Vinarija = /** @class */ (function () {
    function Vinarija(vina) {
        this._spisakVina = [];
        this._spisakVina = [];
        for (var i = 0; i < vina.length; i++) {
            var vino = new Vino(vina[i]);
            this._spisakVina.push(vino);
            this._lastId = vina[i].id;
        }
        //TODO 1. a) parametar vina je niz objekata sa informacijama o vinu
        //Proci kroz sve objekte u nizu i za svaki objekat:
        //Pozvati konstruktor klase Vino kako bi dobili objekat vino
        //Dodati konstruisano vino u _spisakVina
        //Staviti vrednost parametra _lastId da ima vrednost id od konstruisanog vina
    }
    //TODO 1. a) Vratiti sva vina
    Vinarija.prototype.getAll = function () {
        return this._spisakVina;
    };
    /**
     * TODO 1. a) Vratiti vino ciji id je jednak prosledjenom id-ju
     * ili null ukoliko ne postoji vino u spisku vina sa prosledjenim id-jom
     */
    Vinarija.prototype.get = function (id) {
        for (var i = 0; i < this._spisakVina.length; i++) {
            if (this._spisakVina[i].id == id) {
                return this._spisakVina[i];
            }
        }
        return null;
    };
    /**
     * TODO 1. a) Dodati novo vino tako da je id vina jedinstven,
     * tj. svako novo vino ima id jednak poslednjem id-ju (_lastId) uvecanom za jedan
     */
    Vinarija.prototype.add = function (novoVino) {
        novoVino.id = ++this._lastId;
        this._spisakVina.push(novoVino);
    };
    /**
     * TODO 1. a) Pronaci indeks vina ciji id je jedan id-u parametra,
     * postaviti novo vino u spisku vina da je jednako vinu iz parametra
     */
    Vinarija.prototype.update = function (vino) {
        for (var i = 0; i < this._spisakVina.length; i++) {
            if (vino.id === this._spisakVina[i].id) {
                this.spisakVina[i] = vino;
                break;
            }
        }
    };
    /**
     * TODO 1. a) Ukloniti vino iz spiska vina ciji je id prosledjen, pronaci indeks vina i ukloni ga iz spiska
     * iskoristiti splice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     */
    Vinarija.prototype.remove = function (id) {
        for (var i = 0; i < this._spisakVina.length; i++) {
            if (id === this._spisakVina[i].id) {
                this._spisakVina.splice(i, 1);
                break;
            }
        }
    };
    Object.defineProperty(Vinarija.prototype, "spisakVina", {
        /**
         * Getter spisakVina
         * @return {Vino[] }
         */
        get: function () {
            return this._spisakVina;
        },
        /**
         * Setter spisakVina
         * @param {Vino[] } value
         */
        set: function (value) {
            this._spisakVina = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vinarija.prototype, "lastId", {
        /**
         * Getter lastId
         * @return {number}
         */
        get: function () {
            return this._lastId;
        },
        /**
         * Setter lastId
         * @param {number} value
         */
        set: function (value) {
            this._lastId = value;
        },
        enumerable: false,
        configurable: true
    });
    Vinarija.prototype.printWines = function () {
        //TODO 1. b) Implementirati metodu za prikaz svih vina kao redova tabele.
        var out = "";
        for (var i = 0; i < this._spisakVina.length; i++) {
            var v = this._spisakVina[i];
            out += "<tr>\n                    <td>".concat(v.id, "</td>\n                    <td>").concat(v.name, "</td>\n                    <td>").concat(v.grapes, "</td>\n                    <td>").concat(v.country, "</td>\n                    <td>").concat(v.region, "</td>\n                    <td>").concat(v.year, "</td>\n                    <td>\n                      <form class=\"row g-3 editForm\">\n                        <input type=\"text\" value=\"").concat(v.id, "\" name=\"id\" style=\"display: none;\">\n                        <div class=\"col-auto\">\n                          <button type=\"submit\" class=\"btn btn-primary mb-3\">Izmeni</button>\n                        </div>\n                      </form>\n                    </td>\n                    <td>\n                      <form class=\"row g-3 deleteForm\">\n                          <input type=\"text\" value=\"").concat(v.id, "\" name=\"id\" style=\"display: none;\">\n                          <div class=\"col-auto\">\n                              <button type=\"submit\" class=\"btn btn-primary mb-3\">Obri\u0161i</button>\n                          </div>\n                      </form>\n                    </td>\n                </tr>");
        }
        document.getElementById("prikaz").innerHTML = out;
        // Pokusaj koji je dugacak i zahteva dodatne implementacije:
        // const tblBody = document.getElementById("prikaz");
        // for (let i = 0; i < this._spisakVina.length; i++) {
        //   const row = document.createElement("tr");
        //   const cell1 = document.createElement("td");
        //   const cell2 = document.createElement("td");
        //   const cell3 = document.createElement("td");
        //   const cell4 = document.createElement("td");
        //   const cell5 = document.createElement("td");
        //   const cell6 = document.createElement("td");
        //   const cell7 = document.createElement("td");
        //   const cell8 = document.createElement("td");
        //   const cellId = document.createTextNode(`${this._spisakVina[i].id}`);
        //   const cellName = document.createTextNode(`${this._spisakVina[i].name}`);
        //   const cellGrapes = document.createTextNode(`${this._spisakVina[i].grapes}`);
        //   const cellCountry = document.createTextNode(`${this._spisakVina[i].country}`);
        //   const cellRegion = document.createTextNode(`${this._spisakVina[i].region}`);
        //   const cellYear = document.createTextNode(`${this._spisakVina[i].year}`);
        //   const deleteForm = document.createElement("form");
        //   deleteForm.className = "row g-3 deleteForm";
        //   const inputId = document.createElement("input");
        //   inputId.type = "text";
        //   inputId.value = `${this._spisakVina[i].id}`;
        //   inputId.name = "id";
        //   inputId.style.display = "none";
        //   const colAuto = document.createElement("div");
        //   colAuto.className = "col-auto";
        //   const deleteBtn = document.createElement("button");
        //   deleteBtn.type = "submit";
        //   deleteBtn.className = "btn btn-primary mb-3";
        //   deleteBtn.innerText = "Obriši";
        //   colAuto.appendChild(deleteBtn);
        //   deleteForm.appendChild(inputId);
        //   deleteForm.appendChild(colAuto);
        //   cell1.appendChild(cellId);
        //   cell2.appendChild(cellName);
        //   cell3.appendChild(cellGrapes);
        //   cell4.appendChild(cellCountry);
        //   cell5.appendChild(cellRegion);
        //   cell6.appendChild(cellYear);
        //   cell8.appendChild(deleteForm);
        //   row.appendChild(cell1);
        //   row.appendChild(cell2);
        //   row.appendChild(cell3);
        //   row.appendChild(cell4);
        //   row.appendChild(cell5);
        //   row.appendChild(cell6);
        //   row.appendChild(cell7);
        //   row.appendChild(cell8);
        //   tblBody.appendChild(row);
        // }
    };
    return Vinarija;
}());
/// <reference path="vinarija.ts" />
var vina;
var vinarija = new Vinarija(vina);
evaluiraj(); //Provera CRUD funkcionalnosti funkcija na dnu.
window.onload = function () {
    //TODO 1. b) Pozvati printWines metodu vinarije.
    vinarija.printWines();
    //TODO 1. c) Dodati reakciju na submit dogadjaj frome sa id-jem unosForma
    document.getElementById("unosForma").addEventListener("submit", function (e) {
        e.preventDefault();
        var forma = this;
        // let id = ((forma.id as unknown) as HTMLInputElement);
        var id = forma.id;
        var name = forma.id;
        var description = forma.id;
        var grapes = forma.id;
        var country = forma.id;
        var region = forma.id;
        var year = forma.id;
        var picture = forma.id;
        var obj = {
            "id": id.value,
            "name": name.value,
            "description": description.value,
            "grapes": grapes.value,
            "country": country.value,
            "region": region.value,
            "year": year.value,
            "picture": picture.value,
        };
        var vino = new Vino(obj);
        vinarija.add(vino);
        vinarija.printWines();
        wireEvents();
    });
    //TODO 1. d) pozvati wire events.
    wireEvents();
};
function wireEvents() {
    //TODO 1. d) Implementirati reakciju na submit dogadjaj formi za brisanje.
    var formeZaBrisanje = document.getElementsByClassName("deleteForm");
    for (var i = 0; i < formeZaBrisanje.length; i++) {
        formeZaBrisanje[i].addEventListener("submit", function (e) {
            e.preventDefault();
            var forma = this;
            var idVina = Number(forma.id.value);
            vinarija.remove(idVina);
            vinarija.printWines();
            wireEvents();
        });
    }
    //TODO 1. e) Implementirati reakciju na submit dogadjaj formi za izmenu.  
    var formeZaEditovanje = document.getElementsByClassName("editForm");
    var visibilityInput = document.getElementById("id");
    var innerH1 = document.getElementById("header");
    var nameId = document.getElementById("name");
    for (var i = 0; i < formeZaEditovanje.length; i++) {
        formeZaEditovanje[i].addEventListener("submit", function (e) {
            e.preventDefault();
            var forma = this;
            var idVina = Number(forma.id.value);
            vinarija.get(idVina);
            var vino = (vinarija.get(idVina));
            console.log(vino);
            vinarija.update(vino);
            visibilityInput.style.visibility = "visible";
            innerH1.textContent = "Izmena vina";
            // Postaviti vrednosti input polja da imaju vrednost iz preuzetog objekta vina.
            nameId.focus();
            vinarija.printWines();
            wireEvents();
        });
    }
}
/**
 * Funkcija evaluiraj proverava CRUD funkcionalnosti.
 * Ukoliko nije ispisana poruka "GRESKA! ..." CRUD funkcionalnosti su dobro odradjene.
 */
function evaluiraj() {
    if (vinarija.lastId == 12) {
        console.log("Uspesno dodati elementi!");
    }
    else {
        console.log("GRESKA! Poslednji index nije 12 nakon dodavanja");
    }
    var vino = vinarija.get(3);
    if (vino.name == "MARGERUM SYBARITE") {
        console.log("Get je vratio ispravno vino!");
    }
    else {
        console.log("GRESKA! Get nije vratio ispravno vino!");
    }
    var vino_null = vinarija.get(23);
    if (vino_null == null) {
        console.log("Get je vratio ispravno rezultat!");
    }
    else {
        console.log("GRESKA! Get nije vratio ispravan rezultat!");
    }
    var novo = {
        "id": 0,
        "name": "SVB Rosa",
        "year": 2010,
        "grapes": "Prokupac & Cabarnet Sauvignon",
        "country": "RS",
        "region": "Župa, Zapadna [West] Morava Region, Serbia",
        "description": "Svb Rosa is a specific blend of Serbian Prokupac and Cabernet Sauvignon. Color: Deep, dark purple which almost becomes black in color with purple and black reflections.",
        "picture": ""
    };
    var novoVino = new Vino(novo);
    vinarija.add(novoVino);
    if (vinarija.lastId == 13 && vinarija.get(13).name == novoVino.name) {
        console.log("Novo Vino je uspeseno dodato!");
    }
    else {
        console.log("GRESKA! Greska pri dodavanju novog vina!");
    }
    var vinoZaIzmenu = vinarija.get(13);
    vinoZaIzmenu.year = 2007;
    vinarija.update(vinoZaIzmenu);
    if (vinarija.get(13).year == 2007) {
        console.log("Vino je uspeseno izmenjeno!");
    }
    else {
        console.log("GRESKA! Vino nije uspesno izmenjeno!");
    }
    vinarija.remove(4);
    if (vinarija.spisakVina.length == 12 && vinarija.get(4) == null) {
        console.log("Vino uspesno uklonjeno!");
    }
    else {
        console.log("GRESKA! Greska pri uklanjanju vina!");
    }
}
//# sourceMappingURL=app.js.map