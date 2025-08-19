////-------------/ugly syntex-----------
// type UsersAge = {
//     [key: string]: number
// }

// type UsersAge = Record<string,number>//cleaner syntex and short
type UsersAge = Record<string,{age:number, name: string}>



const users: UsersAge = {
    "ram":{age:21,  name:"v"},
    "vinay":{age:21, name:'g'}
}
// users['ram']?.age;









//------------ugly syntex----------------
// type User = {
//     id: string,
//     username:string
// }

// type Users = {
//     [key: string]: User
// }

// const users = {
//     "rtd@gmail": {
//         id:'rtd@gmail',
//         username:"v"
//     },
//     "rt@gmail": {
//         id:'rt@gmail',
//         username:"g"
//     }
// }