class User {
  private _courseCount = 1;
  readonly city: string = "Kyiv";

  constructor(public email: string, public name: string) {}

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // set courseCount(courseNumber): void {
  // }
  set courseCount(courseNumber) {
    if (courseNumber <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNumber;
  }
}

const user1 = new User("awdliaw@gmail.com", "awlidjajiwld");
console.log(user1);
user1.courseCount = 15;
user1.courseCount = -1;
