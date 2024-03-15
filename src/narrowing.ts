// function printLength(input: string | number): void {
//   if (typeof input === "string") {
//     // В цьому блоку TypeScript знає, що `input` має тип `string`
//     console.log(input.length);
//   } else {
//     // В цьому блоку TypeScript знає, що `input` має тип `number`
//     console.log("Input is a number");
//   }
// }

/* */

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  } else {
  }
}