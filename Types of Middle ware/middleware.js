module.exports = reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("please provide a age")
    }
    else if(req.query.age < 18){
        resp.send("You can't acess this page")

    }
    else{
        next()
    }
}