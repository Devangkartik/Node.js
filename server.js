const http = require("http");
const fs = require("fs");
const url = require("url");

const express = require("express")

const app = express();

app.get("/", (req, res)=>{
  return  res.send("welcome to home page");
})

app.get("/about",(req,res)=>{
   return res.send(`Hello, Welcome ${req.query.name  || "Guest" } to about us page`);
})

app.listen(8000,()=>{
    console.log("server is listining on port of 8000")
})

// const myServer = http.createServer(app);
// myServer.listen(8000,()=>{
//     console.log("server is listining on port 8000") ;
// })


// const myServer = http.createServer((req, res) => {
//     if (req.url === "/favicon.ico") return res.end();

//     const log = `server started at ${Date.now()} : ${req.url} new request received \n`;
//     const myUrl = url.parse(req.url, true);

//     console.log(myUrl);
//     console.log(log);

//     // write log asynchronously (fire and forget)
//     fs.appendFile("log.txt", log, (err) => {
//         if (err) console.error("Error writing log:", err);
//     });

//     // ✅ routing logic (outside appendFile)
//     switch (myUrl.pathname) {
//         case "/":
//             res.end("Home Page");
//             break;

//         case "/about":
//             const username = myUrl.query.myname || "Guest";
//             res.end(`Hiii, ${username} welcome to about us page`);
//             break;

//         case "/search":
//             const search = myUrl.query.search_query || "nothing";
//             res.end(`You are searching for ${search}`);
//             break;

//         case  "/signup" :
//             if(res.method === "GET") res.end("This is the signup page");
//             else if(res.method === "POST"){
//                 //Db query to save the user 
//                 res.end("form is submitted successfully");
//             }

//         default:
//             res.end("404 page not found");
//     }
// });

// myServer.listen(8000, () => {
//     console.log("Server is listening on the port 8000");
// });
