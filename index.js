const http = require('http');
http.createServer((req,res)=>{
    res.write("Hello This is Node Js Tutorial")
    res.end()
}).listen(4500)

