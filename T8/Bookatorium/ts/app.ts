/// <reference path="knjizara.ts" />
let knjige: any;
let knjizara = new Knjizara(knjige);

window.onload = function () {
  knjizara.printBooks();

  document.getElementById("unosForma").addEventListener("submit", function (e) {
    e.preventDefault();

    let forma = this as HTMLFormElement;

    let id = forma.id as any;
    let name = forma.name as any;
    let author = forma.author as any;
    let publisher = forma.publisher as any;
    let genre = forma.genre as any;
    let price = forma.price as any;
    let sold = forma.sold as any;

    let obj = {
      "id": id.value,
      "name": name.value,
      "author": author.value,
      "publisher": publisher.value,
      "genre": genre.value,
      "price": price.value,
      "sold": sold.value,
    }

    let vino = new Knjiga(obj);
    knjizara.add(vino);
    knjizara.printBooks();

    wireEvents();
  });

  document.getElementById("profit").addEventListener("click", function (e) {
    e.preventDefault();
    let najprofitabilnijaKnjiga = knjizara.najprofitabilnijaKnjiga();

    (document.getElementById("sadrzaj") as HTMLInputElement).innerHTML = najprofitabilnijaKnjiga;

  });

  wireEvents();
}

function wireEvents(): void {

  // Delete
  let formeZaBrisanje = document.getElementsByClassName("deleteForm");
  for (let i = 0; i < formeZaBrisanje.length; i++) {
    formeZaBrisanje[i].addEventListener("submit", function (e) {
      e.preventDefault();

      let forma = this as HTMLFormElement;
      let idVina = Number(((forma.id as unknown) as HTMLInputElement).value);
      knjizara.remove(idVina);

      knjizara.printBooks();
      wireEvents();
    });
  };

  // Sell
  let formeZaProdavanje = document.getElementsByClassName("sellForm");

  for (let i = 0; i < formeZaProdavanje.length; i++) {
    formeZaProdavanje[i].addEventListener("submit", function (e) {
      e.preventDefault();

      let forma = this as HTMLFormElement;
      let idBook = Number(((forma.id as unknown) as HTMLInputElement).value);
      let knjiga = knjizara.get(idBook);

      knjiga.sold++;
      knjizara.update(knjiga);
      knjizara.printBooks();
      wireEvents();
    });
  }

}