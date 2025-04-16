const express  = require("express")
const app  = express();

app.use(express.json());

const users = [];


//generate a long string
function generateToken() {
    const options = [
        'A', 'B', 'C', 'D', 'E', 'F', 'g', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'v', 'W', 'X', 'Y', 'Z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
      ];
      
      let token = ""
      for (let i = 0; i < 26; i++) {
        
        token = token + options[Math.floor(Math.random()  * options.length)];
        
      }
    return token;
    
}




app.post("/signup",function (req,  res) {
const username = req.body.username;
const password = req.body.password;

//store  in  arr
users.push({
    username : username,
    password : password
})

res.json({
    message: "You are signin"
})

console.log(users)

    
})



app.post("/signin",function (req,  res) {
    const username = req.body.username;
    const password = req.body.password;


    let foundUser = null;
   for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password ==  password) {
        foundUser = users[i]
    }
    
   }



if (foundUser) {
    const token = generateToken();
    foundUser.token = token; //this line will add the token h in the users arr
    res.json({
        token: token
    })
    
}
else{
    res.status(403).send({
        message: "Invalid Username and Password"
    })
}

console.log(users)

})

app.listen(3000);