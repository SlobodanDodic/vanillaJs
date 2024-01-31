class Korisnik {
	//TODO implementirati
  private _ime: string;
  private _prezime: string;
  private _lozinka: string;

  public constructor(ime: string, prezime: string, lozinka: string) {
    this._ime =ime;
    this._prezime =prezime;
    this._lozinka =lozinka;
  }

	ispis(poruka: any): void {
    console.log(poruka);
	}

	stampaj(): void {
		this.ispis(`Hello ${this._ime} ${this._prezime}!`);
	}
}

class MaloprodajniKorisnik extends Korisnik {
  public constructor(ime:string, prezime:string, lozinka:string){
    super(ime, prezime, lozinka);
  };

	ispis(element: HTMLInputElement): void {
		/* U ovome zadatku nemamo server da nam vraca proizvode koje bi zapatili i njihove objekte procesirali. 
    Oslonicemo se na sadrzaj html-a (cisto malo da provezbamo snalazenje sa html-om).
		
		Na html stranici (webShop.html) imamo 3 proizvoda koji su opisani sa dva <td> - a i jednim <input> poljem.
		Primetite da se naziv nalazi u <td> polju sa id-jem name{ID},
		cena se nalazi u u <td> polju sa id-jem price{ID}, a
		kolicina zeljenih proizvda u <input> polju sa id-jem itemCount{ID}.

		{ID} je broj elementa tako da polja od prvog proizvoda imaju id-jeve:
		name1, price1, itemCount1. Ukupno tri proizvoda sa id-jevima 1, 2, 3.

		*/

		//Izdovijicemo ID-jeve elementa u poseban niz (sa serverom bi dobili niz objekata i samo bi prosli kroz citav niz)
		let elements = [1, 2, 3];
		
		//Alternativno mozemo da ih izdovjimo sve inpute ciji je name="itemCount"
		//I da za njih racunamo sumu price-ova
		/*let elements = [];
		let inputs = document.getElementsByTagName("input");
		for(let i = 0; i < inputs.length; i++){
			if(inputs[i].getAttribute("name") == "itemCount"){
				elements.push(Number(inputs[i].getAttribute("id").replace("itemCount","")));
			}
		}*/

		//Kako bi dobili ID trenutnog elementa preuzecemo iz prosledjenog HTMLInputElement parametra
		//njegov id i izbrisacemo nepotreban string npr. iz "itemCount1" -> dobijamo 1 		
		let id: number = Number(element.getAttribute("id").replace("itemCount",""));
		let kolicina: number = Number(element.value);
		
		//Za dobijanje cene tog elementa selektujemo innerText price{ID} elementa 
		//(npr. ako je vrednost promenljive id == 1 zelecmo da selektujemo price1 odnosno "price" + id)
		//Preuzeti cenu elementa i pomnoziti sa kolicinom:
		let price: number = 0;//TODO
		
		//Za racunanje ukupne cene bi trebalo da prodjemo korz sve elemente i saberemo cenu svakog od njih
		//(osim ako se ne radi o trenutnom elementu jer smo njegovu vrednost dobili na osnovu parametra element: HTMLInputElement)
		for(let i in elements){
			//Ne zelimo da sumiramo price za item za koji je to vec odradjeno
			if(Number(elements[i]) === id) {
				continue;
      }
			//Preuzeti kolicinu obradjivanog elementa itemCount{ID}
			let k = //TODO 
			//DODATI na cenu kolicinu * cena obradjivanog elementa price{ID}
			price += //TODO
		}

		//Pozivamo ispis roditeljske metode
		super.ispis(price.toString());
	}
}

class VeleprodajniKorisnik extends Korisnik {
  public constructor(ime:string, prezime:string, lozinka:string){
    super(ime, prezime, lozinka);
  };

	ispis(element: HTMLInputElement): void {
    // console.log(element);
	}
}
