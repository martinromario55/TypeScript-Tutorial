"use strict";
class TakePhoto {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getReelTime() {
        // something
        return 8;
    }
}
// const nimbuzz = new TakePhoto('test', 'test', 2)
class Instagramm extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter, burst);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('Sepia');
    }
}
const nimbuzz = new Instagramm('text', 'text', 3);
const hc = new Instagramm('test', 'test', 5);
hc.getReelTime();
