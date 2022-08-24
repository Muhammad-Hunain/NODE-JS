const express = require('express');
const path = require('path')
const app = express();
// const publicPath = path.join(__dirname,'publilc')
// // console.log(publicPath); 

// // If you want a show the Extention in a URL So, use this type of code
// // app.use(express.static(publicPath));  


// // If you won't a show the Extention in a URL So, use this type of code
// app.get('/',(_,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })

// ByMistake type Wrong URL to show that type of image
// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/404.html`)
// })

//  Template Engine

app.set('view engine','ejs')

app.get('/profile',(_,resp)=>{
    user={
        name:'Muhammad Taimoor',
        city:'Hydaerbad',
        department:'CS',
        skills:['php','java','JS']
    }
    resp.render('profile')
})
app.get('/login',(_,resp)=>{
    resp.render('login')
})

app.listen(5000)
