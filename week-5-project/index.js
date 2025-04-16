const express =  require("express");



const app = express();

//sum in url by providing val (http://localhost:3000/sum?a=1&b=)
app.get("/sum", function (req, res) {
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        answer:a+b
    })

})

//multiply in url (http://localhost:3000/sum/a/b)  ---- dynamic params
app.get("/multiply1/:a/:b", function (req, res) {
    const a = req.params.a;
    const b = req.params.b;

    res.json({
        answer:a*b
    })
})

app.get("/divide", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer:a/b
    })
})

app.get("/sub", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer:a-b
    })
})

app.get("/multiply", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        answer:a*b
    })
})
app.listen(3000);