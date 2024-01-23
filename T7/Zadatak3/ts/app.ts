//Zadatak 3:
// Napisati klasu Valjak koja opisuje geometrijsku figuru valjak.
// Klasa Valjak treba da se sastoji iz 2 objekta-člana: klase Krug i klase Pravougaonik. (Kompozicija)
// U klasa Valjak implementirati:
// 	- konstruktor sa parametrima
// 	- get metodu R - vraća poluprečnik baze valjka (poluprečnik r kruga)
// 	- get metodu H - vraća visinu omotača valjka (stranica b pravougaonika)
// 	- metod getP - vraća površinu valjka (Povrsina valjka se racuna po formuli 2*r*r*PI+2*r*PI*H) PI je konstanta Math.PI
// 	- metod getV - vraća zapreminu valjka (Zapremina valjka se racuna po formuli V=r*r*PI*H)
// Klasu Krug opisati pomoću polja r tipa number koje predstavlja poluprečnik kruga.
// U klasi Krug implementirti
// 	- konstruktor sa parametrima (sa podrazumevanim vrednostima za parametre)
// 	- get metodu r
// 	- set metodu r
// 	- metod getO (Obim kruga se racuna po formuli O = 2*r*PI)
// 	- metod getP (Povrsina kruga se racuna po formuli P = r*r*PI)
// Klasu Pravougaonik opisati pomoću polja a i b tipa number koja predstavljaju stranice a i b pravougaonika.
// U klasi Pravougaonik implementirati:
// 	- konstruktor sa parametrima (sa podrazumevanim vrednostima za parametre)
// 	- get metod A
// 	- set metod A
// 	- get metod B
// 	- set metod B
// 	- metod getO (Obima pravugaonika se racuna po formuli O = 2*a + 2*b)
// 	- metod getP (Povrsina pravougaonika se racuna po formuli P = a*b)

//Napraviti odgovarajucu HTML stranicu koja testira funkcionalnosti klasa.

class Krug {
  private _r: number;

  public constructor(_r: number = 3) {
    this._r = _r
  }

  public getO(_r: number) {
    return 2 * _r * Math.PI
  }

  public getP(_r: number) {
    return _r ** Math.PI
  }

  public get r(): number {
    return this._r;
  }

  public set r(value: number) {
    this._r = value;
  }
}