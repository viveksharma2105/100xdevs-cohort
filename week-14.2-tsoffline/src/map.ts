const users = new Map()
users.set("ram",{age:21,  name:"v", email:'hbivi@gamil'})
users.set("tom",{age:22,  name:"t", email:'tom@gamil'})

const  user = users.get('ram') ////to get
users.delete('ram')


// //// To specific the Map (keys and  values)
// type  User= {
//     name: string,
//     age: number,
//     email: string
// }
// const users = new Map<string, User>()
// users.set("ram",{age:21,  name:"v", email:'hbivi@gamil'})
// users.set("tom",{age:22,  name:"t", email:'tom@gamil'})

// const  user = users.get('ram') ////to get
// users.delete('ram')