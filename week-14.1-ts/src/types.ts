type Employee = {
  name: string;
  startDate: string;
};

type Managerr = {
  name: string;
  department: string;
};

//Intersection
type TeamLead = Employee & Managerr;

let e: Employee = {
  name: "Lion",
  startDate: "01-01-2006",
};

let m: Managerr = {
  name: "Lion",
  department: "Water",
};

let t: TeamLead = {
  name: "Lion",
  startDate: "01-01-2006",
  department: "Water",
};




//////////////////////////// OR Oprator use ----------------------------------------

interface Admin {
name: string,
permission: string

};


// interface User {
// age : string| number 
// };


interface User {
name: string ,
age : number 
};

type UserorAdmin = User | Admin


