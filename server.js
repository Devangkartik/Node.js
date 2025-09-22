const http = require("node:http");

const server = http.createServer((req,res)=>{
     res.end("Hello world")
})

server.listen(8888)