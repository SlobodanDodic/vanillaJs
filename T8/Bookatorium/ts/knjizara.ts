/// <reference path="knjiga.ts" />

class Knjizara {
  private _spisakKnjiga: Knjiga[];
  private _lastId: number;

  constructor(knjiga: any[]) {
    this._spisakKnjiga = [];

    for (let i = 0; i < knjiga.length; i++) {
      let knjige = new Knjiga(knjiga[i]);
      this._spisakKnjiga.push(knjige);
      this._lastId = knjiga[i].id;
    }
  };

  public get spisakKnjiga(): Knjiga[] {
    return this._spisakKnjiga;
  };

  public get lastId(): number {
    return this._lastId;
  };

  public set spisakKnjiga(value: Knjiga[]) {
    this._spisakKnjiga = value;
  };

  public set lastId(value: number) {
    this._lastId = value;
  };

  getAll(): Knjiga[] {
    return this._spisakKnjiga;
  };

  get(id: number): Knjiga {
    for (let i = 0; i < this._spisakKnjiga.length; i++) {
      if (this._spisakKnjiga[i].id == id) {
        return this._spisakKnjiga[i];
      }
    }
    return null;
  };

  add(novaKnjiga: Knjiga): void {
    novaKnjiga.id = ++this._lastId;
    this._spisakKnjiga.push(novaKnjiga);
  };

  update(knjiga: Knjiga): void {
    for (let i = 0; i < this._spisakKnjiga.length; i++) {
      if (knjiga.id === this._spisakKnjiga[i].id) {
        this.spisakKnjiga[i] = knjiga;
        break;
      }
    }
  };

  remove(id: number): void {
    for (let i = 0; i < this._spisakKnjiga.length; i++) {
      if (id === this._spisakKnjiga[i].id) {
        this._spisakKnjiga.splice(i, 1);
        break;
      }
    }
  };

  public printBooks(): void {
    let out = "";

    // knjizara.prosecnaCena();
    let prosek = knjizara.prosecnaCena();

    for (let i = 0; i < this._spisakKnjiga.length; i++) {
      let book = this._spisakKnjiga[i];

      out += `<tr id="${book.id}">
                    <td>${book.id}</td>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.publisher}</td>
                    <td>${book.genre}</td>
                    <td>${book.price}</td>
                    <td>${book.sold}</td>
                    <td>
                      <form class="row g-3 sellForm">
                        <input type="text" value="${book.id}" name="id" style="display: none;">
                        <div class="col-auto">
                          <button type="submit" class="btn btn-primary mb-3">Prodaj</button>
                        </div>
                      </form>
                    </td>
                    <td>
                      <form class="row g-3 deleteForm">
                          <input type="text" value="${book.id}" name="id" style="display: none;">
                          <div class="col-auto">
                              <button type="submit" class="btn btn-primary mb-3">Obriši</button>
                          </div>
                      </form>
                    </td>
                </tr>`
    }

    document.getElementById("prikaz").innerHTML = out;


    for (let i = 0; i < this._spisakKnjiga.length; i++) {
      let book = this._spisakKnjiga[i];

      let bookSelect = document.getElementById(`${book.id}`);
      let doubleAvg = prosek * 2;
      let halfAvg = prosek / 2;

      if (bookSelect && (book.price > doubleAvg)) {
        bookSelect.classList.add('gold');
      }

      if (bookSelect && (book.price < halfAvg)) {
        bookSelect.className = 'green';
      }
    }
  };

  private prosecnaCena(): number {
    let sum = 0;
    for (let i = 0; i < this._spisakKnjiga.length; i++) {
      sum += this._spisakKnjiga[i].price;
    };

    return sum / this._spisakKnjiga.length;
  };

  public najprofitabilnijaKnjiga(): string {
    let maxProfit = -1;
    let najprofitabilnijaKnjiga = null;

    for (let i = 0; i < this._spisakKnjiga.length; i++) {
      let book = this._spisakKnjiga[i];
      let bookProfit = book.sold * book.price;

      if (bookProfit > maxProfit) {
        maxProfit = bookProfit;
        najprofitabilnijaKnjiga = book;
      }
    }

    return `Najprofitabilnija knjiga je ${najprofitabilnijaKnjiga.name} sa ukupnim profitom od $${maxProfit}!`;
  }



};