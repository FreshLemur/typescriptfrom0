// class User {
//   email: string;
//   name: string;
//   readonly city: string = "Kyiv";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const user1 = new User("adajwdila@.com", "hello");
// console.log(user1);

class Book {
  title: string;
  author: string;
  publicYear: number;

  constructor(title: string, author: string, publicYear: number) {
    this.title = title;
    this.author = author;
    this.publicYear = publicYear;
  }
}

const bookByOlenka = new Book(
  "Dinnew with him",
  "Olena Ruszinskya Oleksyyvna",
  2093
);
