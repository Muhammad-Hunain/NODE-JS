 // HTTPS => To handle the request and Reponse  of server 
 const http = require('http');
//  resp=> send to server
// req => to give from server
 function dataControl(req,resp){
    resp.write("My name is Muhammad Hunain")
    resp.end();
}

 http.createServer(dataControl).listen(4500);