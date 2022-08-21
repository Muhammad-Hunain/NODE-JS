// const http = require('http')
// const data = require('./data')


// function dataControl(req,resp){
//     resp.writeHead(200,{'Conyent-Type' : 'application\json'})
//     resp.write(JSON.stringify(data))
//     resp.end();
// }

// http.createServer(dataControl).listen(4000)

// console.log(process.argv[2]);

const fs = require('fs')
const input= process.argv;
if(input[2] == 'add'){
fs.writeFileSync(input[3],input[4]);
}
else if(input[2] == 'remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log("Invalid input");
}