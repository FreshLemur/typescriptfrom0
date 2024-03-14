interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

interface Story {
  simpleMethod(): void;
}

class YouTube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  simpleMethod(): void {
    console.log("Yeeee, you did it, maaaaan!");
  }
}

const newYoutubeUser = new YouTube("8px", "HD", 10);
newYoutubeUser.simpleMethod();
