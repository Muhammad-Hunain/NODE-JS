const http = require('http')
const data = require('./data')


function dataControl(req,resp){
    resp.writeHead(200,{'Conyent-Type' : 'application\json'})
    resp.write(JSON.stringify(data))
    resp.end();
}

http.createServer(dataControl).listen(4000)