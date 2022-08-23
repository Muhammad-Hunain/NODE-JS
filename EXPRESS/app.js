const express = require('express')
const app = express();

app.get('/',(req,resp)=>{
    console.log()
    // resp.send("Welcom!You are in Home Page  " + req.query.name)
    resp.send(`<a href="/about">Go to about</a>`)

})

app.get('/about',(req,resp)=>{
    resp.send(`<input type="text" value="${req.query.name}"/> <br> <a href="/">Go to Home</a>`)

})

// app.get('/help',(req,resp)=>{
//     resp.send("Welcom!You are in help Page")
// })
app.listen(5000)