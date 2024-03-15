// function identityOne(val: boolean | number): boolean | number {
//   return val;
// }

// function identityTwo(val: any): any {
//   return val;
// }

// function identityThree<Type>(val: Type): Type {
//   return val;
// }

// function identityFour<T>(val: T): T {
//   return val;
// }

/* */

// function getSearchProducts<T>(products: T[]): T {
//   // do some database operations
//   const myIndex = 3;
//   return products[myIndex];
// }

// const getMoreSearchProducts = <T>(products: T[], prices: number): T => {
//   // do some database operations
//   return products[prices];
// };

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
