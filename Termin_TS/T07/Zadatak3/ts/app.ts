//Zadatak 3:

// Klasa Valjak treba da se sastoji iz 2 objekta-člana: klase Krug i klase Pravougaonik. (Kompozicija):
// 	- konstruktor sa parametrima
// 	- get metodu R - vraća poluprečnik baze valjka (poluprečnik r kruga)
// 	- get metodu H - vraća visinu omotača valjka (stranica b pravougaonika)
// 	- metod getP - vraća površinu valjka (Povrsina valjka se racuna po formuli 2*r*r*PI+2*r*PI*H) PI je konstanta Math.PI
// 	- metod getV - vraća zapreminu valjka (Zapremina valjka se racuna po formuli V=r*r*PI*H)

// Klasu Krug opisati pomoću polja r tipa number koje predstavlja poluprečnik kruga:
// 	- konstruktor sa parametrima (sa podrazumevanim vrednostima za parametre)
// 	- get metodu r
// 	- set metodu r
// 	- metod getO (Obim kruga se racuna po formuli O = 2*r*PI)
// 	- metod getP (Povrsina kruga se racuna po formuli P = r*r*PI)

// Klasu Pravougaonik opisati pomoću polja a i b tipa number koja predstavljaju stranice a i b pravougaonika:
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

class Pravougaonik {
  private _a: number;
  private _b: number;

  public constructor(_a: number, _b: number) {
    this._a = _a
    this._b = _b
  }

  public getO(_a: number, _b: number) {
    return 2 * _a + 2 * _b;
  }

  public getP(_a: number, _b: number) {
    return _a * _b;
  }

  public get a(): number {
    return this._a;
  }

  public get b(): number {
    return this._b;
  }

  public set a(value: number) {
    this._a = value;
  }

  public set b(value: number) {
    this._b = value;
  }
}

class Valjak {
  private krug: Krug;
  private pravougaonik: Pravougaonik;

  public constructor(r: number, a: number, b: number) {
    this.krug = new Krug(r);
    this.pravougaonik = new Pravougaonik(a, b);
  }

  public get R(): number {
    return this.krug.r;
  }

  public get H(): number {
    return this.pravougaonik.b;
  }

  public getP(): number {
    const r = this.R;
    const h = this.H;
    return 2 * r * r * Math.PI + 2 * r * Math.PI * h;
  }

  public getV(): number {
    const r = this.R;
    const h = this.H;
    return r * r * Math.PI * h;
  }
}

// HTML test:
document.addEventListener("DOMContentLoaded", function () {
  const valjak = new Valjak(3, 4, 5);
  const resultElement = document.getElementById("result");

  if (resultElement) {
    resultElement.innerHTML = `
      R: ${valjak.R}, H: ${valjak.H}, P: ${valjak.getP().toFixed(2)}, V: ${valjak.getV().toFixed(2)}
    `;
  } else {
    console.error("Element with ID 'result' not found.");
  }
});