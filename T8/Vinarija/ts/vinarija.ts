/// <reference path="vino.ts" />

class Vinarija {
  private _spisakVina: Vino[] = [];
  private _lastId: number;

  constructor(vina: any[]) {
    this._spisakVina = [];

    for (let i = 0; i < vina.length; i++) {
      let vino = new Vino(vina[i]);
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
  getAll(): Vino[] {
    return this._spisakVina;
  }

  /**
   * TODO 1. a) Vratiti vino ciji id je jednak prosledjenom id-ju 
   * ili null ukoliko ne postoji vino u spisku vina sa prosledjenim id-jom
   */
  get(id: number): Vino {
    for (let i = 0; i < this._spisakVina.length; i++) {
      if (this._spisakVina[i].id == id) {
        return this._spisakVina[i];
      }
    }
    return null;
  }

  /**
   * TODO 1. a) Dodati novo vino tako da je id vina jedinstven, 
   * tj. svako novo vino ima id jednak poslednjem id-ju (_lastId) uvecanom za jedan
   */
  add(novoVino: Vino): void {
    novoVino.id = ++this._lastId;
    this._spisakVina.push(novoVino);
  }

  /**
   * TODO 1. a) Pronaci indeks vina ciji id je jedan id-u parametra,
   * postaviti novo vino u spisku vina da je jednako vinu iz parametra
   */
  update(vino: Vino): void {
    for (let i = 0; i < this._spisakVina.length; i++) {
      if (vino.id === this._spisakVina[i].id) {
        this.spisakVina[i] = vino;
        break;
      }
    }
  }

  /**
   * TODO 1. a) Ukloniti vino iz spiska vina ciji je id prosledjen, pronaci indeks vina i ukloni ga iz spiska
   * iskoristiti splice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
   */
  remove(id: number): void {
    for (let i = 0; i < this._spisakVina.length; i++) {
      if (id === this._spisakVina[i].id) {
        this._spisakVina.splice(i, 1);
        break;
      }
    }
  }


  /**
   * Getter spisakVina
   * @return {Vino[] }
   */
  public get spisakVina(): Vino[] {
    return this._spisakVina;
  }

  /**
   * Getter lastId
   * @return {number}
   */
  public get lastId(): number {
    return this._lastId;
  }

  /**
   * Setter spisakVina
   * @param {Vino[] } value
   */
  public set spisakVina(value: Vino[]) {
    this._spisakVina = value;
  }

  /**
   * Setter lastId
   * @param {number} value
   */
  public set lastId(value: number) {
    this._lastId = value;
  }


  public printWines(): void {
    //TODO 1. b) Implementirati metodu za prikaz svih vina kao redova tabele.
    let out = "";
    for (let i = 0; i < this._spisakVina.length; i++) {
      let v = this._spisakVina[i];
      out += `<tr>
                    <td>${v.id}</td>
                    <td>${v.name}</td>
                    <td>${v.grapes}</td>
                    <td>${v.country}</td>
                    <td>${v.region}</td>
                    <td>${v.year}</td>
                    <td>
                      <form class="row g-3 editForm">
                        <input type="text" value="${v.id}" name="id" style="display: none;">
                        <div class="col-auto">
                          <button type="submit" class="btn btn-primary mb-3">Izmeni</button>
                        </div>
                      </form>
                    </td>
                    <td>
                      <form class="row g-3 deleteForm">
                          <input type="text" value="${v.id}" name="id" style="display: none;">
                          <div class="col-auto">
                              <button type="submit" class="btn btn-primary mb-3">Obriši</button>
                          </div>
                      </form>
                    </td>
                </tr>`
    }

    document.getElementById("prikaz").innerHTML = out;
  }

  // TODO 1. f) Implementirati metodu najstariji.

  public najstariji(): void {

    const oldestWine = {};

    for (let i = 0; i < this._spisakVina.length; i++) {
      const obj = this._spisakVina[i];
      if (!oldestWine[obj.country] || oldestWine[obj.country].year > obj.year) {
        oldestWine[obj.country] = obj;
      }
    }

    console.log(oldestWine);
  }

}



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