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

function displayForProfile(updateprops:Updateprops) {
    //hit the database tp and update the  user
}