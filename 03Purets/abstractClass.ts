abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  abstract getSepia(): void
  getReelTime(): number {
    // something
    return 8
  }
}

// const nimbuzz = new TakePhoto('test', 'test', 2)

class Instagramm extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter, burst)
  }
  getSepia() {
    console.log('Sepia')
  }
}

const nimbuzz = new Instagramm('text', 'text', 3)

const hc = new Instagramm('test', 'test', 5)
hc.getReelTime()