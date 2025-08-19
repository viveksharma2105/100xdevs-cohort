interface User {
    name:string,
    age: number
}


function sumofAge(user1:User, user2:User) {
    return user1.age + user2.age;
    
}

const age = sumofAge({name:'v', age:21}, {name:'g', age:20})
   
console.log(age);


//--------------Pick------------------
interface Userr{
    name:string,
    age:string,
    email:string,
    password:string
}


//for profile disply only name , age  and email
type  Updateprops = Pick<Userr,'name' | 'age' |'email'>

type UpdatepropsOptional = Partial<Updateprops> //-------------------Partial

function displayForProfile(Updateprops :UpdatepropsOptional) {
    //hit the database tp and update the  user
}


//--------------ReadOnly------------------
type Useer = {
    readonly name:string,
     readonly age: number
}
const user0: Useer = {
    name:"v",
    age:21
}

//object.age = 12 ////here we cannot change the inner element because of the readonly.
//// -------------for all we have  to  do this ---------------
// const user0: Readonly<Useer> = {
//     name:"v",
//     age:21
// }

