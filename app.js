const express = require('express');

const app = express();
const path = require('path');

//middleware
const static = require('serve-static');

app.use("/public", static(path.join(__dirname,"./public")));
app.set("view engine", "ejs");
app.set("views", "./views");

let port = process.env.PORT || 80;


app.get('/',(req,res)=>{
    res.render("index");
}).get('/form/login',(req,res)=>{
    const {uid, upw, favColor} = req.query;
    res.send({
        "uid":uid,
        "upw":upw,
        "favColor":favColor
    });
}).get('/form/info',(req,res)=>{
    const {name, age, weight, 한식, 일식, elec} = req.query;
    res.send({
        "name" : name,
        "age" : age,
        "weight" : weight,
        "한식" : 한식,
        "일식" : 일식,
        "elec" : elec
    })
})

app.listen(port,()=>{
    console.log(`Server is running on localhost:${port}`);
})