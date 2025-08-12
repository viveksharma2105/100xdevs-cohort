//this address goes to user  and office
interface Address {
  city: string;
  country: string;
  pincode: number;
}

// interface User {
//     name: string;
//     age: number;
//     address ?: {
//         city: string;
//         country: string;
//         pincode: number;
// }
// }

interface User {
  name: string;
  age: number;
  address?: Address;
}

interface Office {
  address: Address;
}

let userr: User = {
  name: "lion",
  age: 21,
  address: {
    city: "Goa",
    country: "India",
    pincode: 123123,
  },
};

let user2: User = {
  name: "Raman",
  age: 22,
};

function isLegal(userr: User): boolean {
  if (userr.age >= 18) {
    return true;
  } else {
    return false;
  }
}

const result = isLegal(userr);
if (result) {
  console.log("I am Legal");
} else {
  console.log("I am Illigal");
}

//////-------------------------------ADV Interfaces---------------------------------------------------------------

interface People {
  name: string;
  age: number;
  //greet : () => string;
}


////----------implement in object
// let person: People = {
//   name: "lion",
//   age: 22,
//   greet: () => {
//     return "hii";
//   },
// };

// let greetingPerson = person.greet();
// console.log(greetingPerson);


//implement in class
class Manager implements People{
    name: string;
    age: number;
    phno: string;
    constructor(name: string, age:number){
        this.name = name,
        this.age = age
        this.phno = "1234567"

    }
}

let muser = new Manager("John", 21)



//// Diff btw abstract class and interface : they are looking similar but in abstract class can have default implementations as well and interface cannot