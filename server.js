const http = require("node:http");
const fs = require("node:fs")
const url = require("node:url")

// const server  = http.createServer((req,res)=>{
//     res.end("Hello world")
// })

// server.listen(8000,()=>{
//     console.log("Server is listening on port 8000")
// })

const myServer = http.createServer((req, res)=>{
if(req.url === "/favicon.ico") return res.end();
const  log =`server started at ${Date.now()} : ${req.url} new request received \n`;
const myUrl = url.parse(req.url,true);
console.log(myUrl);
console.log(log);
fs.appendFile("log.txt",log, (err , data)=>{
    if(err) throw err;
     })
    // switch(req.url){
    switch(myUrl.pathname){
        case "/" : 
           res.end("Home Page")
           break;
        case "/about":
            const username = myUrl.query.name;
           res.end(` Hiii, ${username} welcome to about us page`);
           break;
        case '/search' :
            const search = myUrl.query.search_query;
            res.end(`you are searching for ${search}`)
            break;
        default:
            res.end("404 page is not found");
    }
})

myServer.listen(8000, ()=>{
    console.log("Server is listining on the port 8000");
})