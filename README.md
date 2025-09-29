Node.js is the runtime enviroment of javascript which helps to javascript run outside of the browser..it's open source and cross platfrome (run different operating System like mac window Linux)..

modules are private entity means you do not access their variable and function without permission (using import, export, require funtions)
There is two ways you import the module 1) Direct import 2) Object import 

There is Two type of modules in NODE JS ....
1) common js module(By default we use it)
2) modern js module (which is use modern framework like React, Angular and others )


A server is just a program that listens for requests from clients (like a browser) and sends back responses.

const http = require("node:http"); // or require("http")

// Create server
const server = http.createServer((req, res) => {
  // req = request object (info from client)
  // res = response object (we send back info)

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!"); // response body
});

// Start listening on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});



<h3>How it Works</h3>

Client Request

You type http://localhost:3000 in your browser.

The browser sends a request (HTTP GET) to your server.

Server Receives Request

http.createServer((req, res) => {...}) runs.

req contains request details (method, URL, headers).

Server Sends Response

res.writeHead(200, {...}) → sets status code and headers.

res.end("Hello, World!") → sends back a message.

Client Displays Response

Your browser shows Hello, World!

Uniform Resourse locater //https://www.piyushcom/about-us?

https is the protocol after then we have domain name (user frindly name and IP  addresh dispatch with thgis domain name)after domain name we have path it's used for routing..
after then we have query parameter it's comes after question mark..

HTTP Method : GET: when you want to get some data from your server. In get request we received data from our server side..
POST : when you want to change and mutate some data in server we use post request
PATCH : when you want to change some existing entity then we use patch like update your picture profile .
DELETE : 
PUT : 


Why we use Express coz of ? (npm i express)
we handle routes through different cases that is a headech 
need to install lots of package and module making server with the usev of http server.
