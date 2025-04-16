const express  = require("express")
const JWT = require("jsonwebtoken")
const JWT_SECRET = "strangertoforever"
const app  = express();

app.use(express.json());

const users = [];


app.post("/signup",function (req,  res) {
const username = req.body.username;
const password = req.body.password;

//store  in  arr
users.push({
    username : username,
    password : password
})

res.json({
    message: "You are sign up"
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
    const token = JWT.sign({
        username:username
    },JWT_SECRET) //.sign is use to create and here we convert theusername  over JWT

    
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


//returns me own username  and passwords by token (and add the signin token in hadder for get username and password)
app.get("/me", function (req, res) {
    const token =  req.headers.token//JWT token
const  decodedInfo  = JWT.verify(token,JWT_SECRET) //.verify convert the  JWT  to json (like "{"username": "vivek"}")

const username = decodedInfo.username;

    let foundUser = null

    for (let i = 0; i < users.length; i++) {
        if(users[i].username == username){
            foundUser = users[i];
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })

    }else{
        res.json({
            message:"Token invalid"
        })
    }
    
})

app.listen(3000);