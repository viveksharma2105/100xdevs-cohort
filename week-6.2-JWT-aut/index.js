const express = require("express")
const JWT = require("jsonwebtoken")
const JWT_SECRET  = "strangertoforever"

const app =  express();
app.use(express.json())

const users =[]

//atached the html file so that the both  FE and BE are hosted on same port to remove the ccomplexity with come like cors
app.get("/", function(req, res){
res.sendFile(__dirname+ "/public/index.html");
})


app.post("/signup", function (req, res) {
    const username = req.body.username
    const password = req.body.password

    users.push({
        username:username,
        password: password
    })

    res.json({
        message:  "You are sign up"
    })
    
})


app.post("/signin", function (req,  res) {
    const username = req.body.username;
    const password = req.body.password;
let foundUser = null;
for (let i = 0; i < users.length; i++) {
    if(users[i].username  ==  username && users[i].password ==  password){
        foundUser = users[i];
        
    }

    if (!foundUser) {
        res.json({
            message: "Credientials are incorrect"
        })
        
    }else{
        const token =  JWT.sign({
            username: users[i].username
        }, JWT_SECRET);

        res.json({
            token:token
        })
    }
    
}

})


//middleware use  to authenticate 
function auth(req, res, next) {
    const token = req.headers.token;
    const decodedata = JWT.verify(token, JWT_SECRET)

    if (decodedata.username){
        req.username = decodedata.username
        next();
    }else{
        res.json({

            message: "You are not logged in"
        })
    }
    
}
app.get("/me",auth, function (req, res) {
     
        let foundUser = null;
        for (let i = 0; i < users.length; i++) {
            if(users[i].username  ===  req.username){
                foundUser = users[i];
                break;
            }
        }

        if(!foundUser) {
            return res.json({
                message: "User not found"
            });
        }
        res.json({
        username:foundUser.username,
        password : foundUser.password
        })
        


    //aap.get("/allusers", auth , funtion(){})    //here we only focus on the 

    
})

app.listen(3000);