const express = require("express")

const app = express();





let count = 0;
//middleware (just contain 3 params next is uses to redirect towards  the call of  next function)
function reqIncrease(req, res, next){

    count++;
   //random modification which shows that the middleware is able toh change thhe  request and the next handler is able to  get the change  request
   req.name = "cheetah";
    console.log(`Total number  of req : ${count}`);
    next();//if i did not call this function then the next handler will not call
}

 function realSumHandler(req, res) {
  
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    console.log(req.name);//get the change  req
    res.json({
        answer:a+b
    })
    
}


function midW(req, res, next){
 console.log("Method is "+ req.method);
 console.log("url is "+ req.url);
 console.log("host is "+ req.hostname);
 console.log("date is "+ new Date());
next();
}

//app.use(reqIncrease)------------ this will  automatic use in  default apply the middleware to all app.get

app.get("/add", reqIncrease, realSumHandler);



app.listen(3000);