//TODO Implement Knjiga
var Knjiga = /** @class */ (function () {
    function Knjiga(obj) {
        this._id = obj && obj.id || null;
        this._name = obj && obj.name || null;
        this._author = obj && obj.author || null;
        this._publisher = obj && obj.publisher || null;
        this._genre = obj && obj.genre || null;
        this._price = obj && obj.price || null;
        this._sold = obj && obj.sold || 0;
    }
    Object.defineProperty(Knjiga.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Knjiga.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Knjiga.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (value) {
            this._author = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Knjiga.prototype, "publisher", {
        get: function () {
            return this._publisher;
        },
        set: function (value) {
            this._publisher = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Knjiga.prototype, "genre", {
        get: function () {
            return this._genre;
        },
        set: function (value) {
            this._genre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Knjiga.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Knjiga.prototype, "sold", {
        get: function () {
            return this._sold;
        },
        set: function (value) {
            this._sold = value;
        },
        enumerable: false,
        configurable: true
    });
    return Knjiga;
}());
;
/// <reference path="knjiga.ts" />
var Knjizara = /** @class */ (function () {
    function Knjizara(knjiga) {
        this._spisakKnjiga = [];
        for (var i = 0; i < knjiga.length; i++) {
            var knjige_1 = new Knjiga(knjiga[i]);
            this._spisakKnjiga.push(knjige_1);
            this._lastId = knjiga[i].id;
        }
    }
    ;
    Object.defineProperty(Knjizara.prototype, "spisakKnjiga", {
        get: function () {
            return this._spisakKnjiga;
        },
        set: function (value) {
            this._spisakKnjiga = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Knjizara.prototype, "lastId", {
        get: function () {
            return this._lastId;
        },
        set: function (value) {
            this._lastId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    ;
    Knjizara.prototype.getAll = function () {
        return this._spisakKnjiga;
    };
    ;
    Knjizara.prototype.get = function (id) {
        for (var i = 0; i < this._spisakKnjiga.length; i++) {
            if (this._spisakKnjiga[i].id == id) {
                return this._spisakKnjiga[i];
            }
        }
        return null;
    };
    ;
    Knjizara.prototype.add = function (novaKnjiga) {
        novaKnjiga.id = ++this._lastId;
        this._spisakKnjiga.push(novaKnjiga);
    };
    ;
    Knjizara.prototype.update = function (knjiga) {
        for (var i = 0; i < this._spisakKnjiga.length; i++) {
            if (knjiga.id === this._spisakKnjiga[i].id) {
                this.spisakKnjiga[i] = knjiga;
                break;
            }
        }
    };
    ;
    Knjizara.prototype.remove = function (id) {
        for (var i = 0; i < this._spisakKnjiga.length; i++) {
            if (id === this._spisakKnjiga[i].id) {
                this._spisakKnjiga.splice(i, 1);
                break;
            }
        }
    };
    ;
    Knjizara.prototype.printBooks = function () {
        var out = "";
        // knjizara.prosecnaCena();
        var prosek = knjizara.prosecnaCena();
        for (var i = 0; i < this._spisakKnjiga.length; i++) {
            var book = this._spisakKnjiga[i];
            out += "<tr id=\"".concat(book.id, "\">\n                    <td>").concat(book.id, "</td>\n                    <td>").concat(book.name, "</td>\n                    <td>").concat(book.author, "</td>\n                    <td>").concat(book.publisher, "</td>\n                    <td>").concat(book.genre, "</td>\n                    <td>").concat(book.price, "</td>\n                    <td>").concat(book.sold, "</td>\n                    <td>\n                      <form class=\"row g-3 sellForm\">\n                        <input type=\"text\" value=\"").concat(book.id, "\" name=\"id\" style=\"display: none;\">\n                        <div class=\"col-auto\">\n                          <button type=\"submit\" class=\"btn btn-primary mb-3\">Prodaj</button>\n                        </div>\n                      </form>\n                    </td>\n                    <td>\n                      <form class=\"row g-3 deleteForm\">\n                          <input type=\"text\" value=\"").concat(book.id, "\" name=\"id\" style=\"display: none;\">\n                          <div class=\"col-auto\">\n                              <button type=\"submit\" class=\"btn btn-primary mb-3\">Obri\u0161i</button>\n                          </div>\n                      </form>\n                    </td>\n                </tr>");
        }
        document.getElementById("prikaz").innerHTML = out;
        for (var i = 0; i < this._spisakKnjiga.length; i++) {
            var book = this._spisakKnjiga[i];
            var bookSelect = document.getElementById("".concat(book.id));
            var doubleAvg = prosek * 2;
            var halfAvg = prosek / 2;
            if (bookSelect && (book.price > doubleAvg)) {
                bookSelect.classList.add('gold');
            }
            if (bookSelect && (book.price < halfAvg)) {
                bookSelect.className = 'green';
            }
        }
    };
    ;
    Knjizara.prototype.prosecnaCena = function () {
        var sum = 0;
        for (var i = 0; i < this._spisakKnjiga.length; i++) {
            sum += this._spisakKnjiga[i].price;
        }
        ;
        return sum / this._spisakKnjiga.length;
    };
    ;
    Knjizara.prototype.najprofitabilnijaKnjiga = function () {
        var maxProfit = -1;
        var najprofitabilnijaKnjiga = null;
        for (var i = 0; i < this._spisakKnjiga.length; i++) {
            var book = this._spisakKnjiga[i];
            var bookProfit = book.sold * book.price;
            if (bookProfit > maxProfit) {
                maxProfit = bookProfit;
                najprofitabilnijaKnjiga = book;
            }
        }
        return "Najprofitabilnija knjiga je ".concat(najprofitabilnijaKnjiga.name, " sa ukupnim profitom od $").concat(maxProfit, "!");
    };
    return Knjizara;
}());
;
/// <reference path="knjizara.ts" />
var knjige;
var knjizara = new Knjizara(knjige);
window.onload = function () {
    knjizara.printBooks();
    document.getElementById("unosForma").addEventListener("submit", function (e) {
        e.preventDefault();
        var forma = this;
        var id = forma.id;
        var name = forma.name;
        var author = forma.author;
        var publisher = forma.publisher;
        var genre = forma.genre;
        var price = forma.price;
        var sold = forma.sold;
        var obj = {
            "id": id.value,
            "name": name.value,
            "author": author.value,
            "publisher": publisher.value,
            "genre": genre.value,
            "price": price.value,
            "sold": sold.value,
        };
        var vino = new Knjiga(obj);
        knjizara.add(vino);
        knjizara.printBooks();
        wireEvents();
    });
    document.getElementById("profit").addEventListener("click", function (e) {
        e.preventDefault();
        var najprofitabilnijaKnjiga = knjizara.najprofitabilnijaKnjiga();
        document.getElementById("sadrzaj").innerHTML = najprofitabilnijaKnjiga;
    });
    wireEvents();
};
function wireEvents() {
    // Delete
    var formeZaBrisanje = document.getElementsByClassName("deleteForm");
    for (var i = 0; i < formeZaBrisanje.length; i++) {
        formeZaBrisanje[i].addEventListener("submit", function (e) {
            e.preventDefault();
            var forma = this;
            var idVina = Number(forma.id.value);
            knjizara.remove(idVina);
            knjizara.printBooks();
            wireEvents();
        });
    }
    ;
    // Sell
    var formeZaProdavanje = document.getElementsByClassName("sellForm");
    for (var i = 0; i < formeZaProdavanje.length; i++) {
        formeZaProdavanje[i].addEventListener("submit", function (e) {
            e.preventDefault();
            var forma = this;
            var idBook = Number(forma.id.value);
            var knjiga = knjizara.get(idBook);
            knjiga.sold++;
            knjizara.update(knjiga);
            knjizara.printBooks();
            wireEvents();
        });
    }
}
//# sourceMappingURL=app.js.map