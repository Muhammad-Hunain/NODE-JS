// const express = require('express');
// const app = express();

// const reqFilter=(req,resp,next)=>{
//         if(!req.query.age){
//             resp.send("please provide a age")
//         }
//         else if(req.query.age < 18){
//             resp.send("You can't acess this page")

//         }
//         else{
//             next()
//         }
// }
// //  app.use(reqFilter);

// app.get('/',reqFilter,(_,resp)=>{
//     resp.send("Welcome ! to Home page")
// })

// app.get('/about',(_,resp)=>{
//     resp.send("Welcome ! to about page")
// })

// app.listen(5000)


const express = require('express');
const app = express();
const reqFilter = require('./middleware');
const route = express.Router();

route.use(reqFilter);

app.get('/',(_,resp)=>{
    resp.send("Welcome ! to Home page")
})

route.get('/about',(_,resp)=>{
    resp.send("Welcome ! to about page")
})

app.use('/',route)
app.listen(5000)
