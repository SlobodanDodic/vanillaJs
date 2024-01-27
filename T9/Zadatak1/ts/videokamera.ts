/// <reference path="kamera.ts" />

class VideoKamera extends Kamera {
  private _videoCounter: number;

  constructor(videoCounter: number, megaPikseli: number, freeSpace: number, photoCounter: number) {
    super(megaPikseli, freeSpace, photoCounter);

    this._videoCounter = videoCounter;
  };

  public get videoCounter(): number {
    return this._videoCounter;
  }

  public set videoCounter(value: number) {
    this._videoCounter = value;
  }

  public snimaj(sekunde: number): boolean {
    if (this._freeSpace >= this._megaPikseli * sekunde) {
      this._freeSpace -= this.megaPikseli * sekunde;
      this._videoCounter++;
      return true;
    } else {
      return false;
    }
  }
};