const express = require("express")
const cors = require("cors")

//for POST we have to convert the json into javascript object, this we cannot use directly req.body
//we have to  use express.json  middleware at the top in dafault  of POST
//OR we can use an external library  "body-parser" for this firstly require the library then app.use(bodyParser.json())
const app = express();

app.use(express.json());
app.use(cors());//cors is restriction between FE and backE

//OR we can use this if we want to allow from some sites
// app.use(cors({
//     domains: ["http://google.com", "http://employee.google.com"]
// }));



app.post("/sum",function(req, res) {
  
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        answer:a+b
    })
    
})

app.listen(3000);
