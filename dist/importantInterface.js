"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    simpleMethod() {
        console.log("Yeeee, you did it, maaaaan!");
    }
}
const newYoutubeUser = new YouTube("8px", "HD", 10);
newYoutubeUser.simpleMethod();
