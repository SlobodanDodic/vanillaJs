window.onload = function () {
  var calc = new Calculator("X", "Y", "Output");
};

class Calculator {
  private x: HTMLInputElement;
  private y: HTMLInputElement;
  private output: HTMLDivElement;

  constructor(xId: string, yId: string, outputId: string) {
    //TODO 2 Konstruktor dobija ID elemenata koje su mu potrebni za rad (selektovati te elemente)
    this.x = document.getElementById(xId) as HTMLInputElement;
    this.y = document.getElementById(yId) as HTMLInputElement;
    this.output = document.getElementById(outputId) as HTMLDivElement;
    //TODO 3 Nakon inicijalizacije elemenata pozvati metodu wireEvents
    this.wireEvents();
  }

  wireEvents() {
    //TODO 4 Metoda wire events povezuje event listnere za klik na dugmice add, subtract...
    //       I implementira njihovu funkcionalnost
    document.getElementById("Add").addEventListener("click", () => {
      let xNumber = +this.x.value; // +"23" je isto sto i Number("23");
      let yNumber = +this.y.value;

      this.output.innerHTML = this.addition(xNumber, yNumber).toFixed(2);
    });

    document.getElementById("Subtract").addEventListener("click", () => {
      let xNumber = +this.x.value;
      let yNumber = +this.y.value;

      this.output.innerHTML = this.subtraction(xNumber, yNumber).toFixed(2);
    });

    document.getElementById("Multiply").addEventListener("click", () => {
      let xNumber = +this.x.value;
      let yNumber = +this.y.value;

      this.output.innerHTML = this.multiplication(xNumber, yNumber).toFixed(2);
    });

    document.getElementById("Divide").addEventListener("click", () => {
      let xNumber = +this.x.value;
      let yNumber = +this.y.value;

      this.output.innerHTML = this.division(xNumber, yNumber).toFixed(2);
    });
  }

  //TODO 1 Implementirati metode za sabiranje, oduzimanje, mnozenje i deljenje
  public addition(x: number, y: number): number {
    return x + y;
  }

  public subtraction(x: number, y: number): number {
    return x - y;
  }

  public multiplication(x: number, y: number): number {
    return x * y;
  }

  public division(x: number, y: number): number {
    return x / y;
  }
}
