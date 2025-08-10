// Type: 1
let x: number = 2
console.log(x);

function greet(c:string) {
    console.log(`${c} hello`);
    
}

greet("vivek")



// Type: 2
function sum(a:number, b:number) {
    return a + b 
    
}

let ans = sum(1,2)
console.log(ans);




// Type: 3 (fun that take another function , print hello after 1 sec)
function delayed(fn:()  => void) {
    setTimeout(fn, 1000);
}

delayed(function fn() {
    console.log("hello");
    
    
})

//Type: 4 function as a object argument
function greeting(user:{
    name:string,
    age: number
}) {
    console.log("Hello " + user.name);
    
}

let user = {
    name: "lion",
    age: 21
}
//----------------------OR
// let user: {
//     name: string,
//     age: number
// } = {
//     name: "lion",
//     age: 21
// }

greeting(user)