// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Kyiv";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const user1 = new User("adajwdila@.com", "hello");
// console.log(user1);

class User {
  readonly city: string = "Kyiv";
  constructor(
    public email: string,
    public name: string,
    private userID: string
  ) {
    this.email = email;
    this.name = email;
    this.userID = userID;
  }
}

const user1 = new User("adjilwa@gmail.com", "hello", "awda");
console.log(user1);
