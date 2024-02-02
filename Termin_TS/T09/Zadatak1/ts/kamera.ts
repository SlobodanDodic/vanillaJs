class Kamera {
  protected _megaPikseli: number;
  protected _freeSpace: number;
  protected _photoCounter: number;

  constructor(megaPikseli: number, freeSpace: number, photoCounter: number) {
    this._megaPikseli = megaPikseli;
    this._freeSpace = freeSpace;
    this._photoCounter = photoCounter;
  }

  public get megaPikseli(): number {
    return this._megaPikseli;
  }

  public get freeSpace(): number {
    return this._freeSpace;
  }

  public get photoCounter(): number {
    return this._photoCounter;
  }

  public set megaPikseli(value: number) {
    this._megaPikseli = value;
  }

  public set freeSpace(value: number) {
    this._freeSpace = value;
  }

  public set photoCounter(value: number) {
    this._photoCounter = value;
  }

  public slikaj(): boolean {
    if (this.freeSpace >= this.megaPikseli) {
      this._freeSpace = this.freeSpace - this.megaPikseli;
      this.photoCounter++;
      return true;
    } else {
      return false;
    }
  }

};