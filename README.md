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

versioning 
4.18.2 there is three part of versioning 

1st part ->Major/breakig update version release 
2nd part -> recomended bug fix (Optional)
3rd part -> Minor fixed (optional)

> competible with verson with carot simbol.it's unable to do major update but it can do minor & recomended update yourself...
^4.18.2 | 4.18.2 <  5.0.0 

~ Approximately equivalent to version ( it can only change last bit versioning means only minor changes )


Restfull api have some starnderd these are best rule which is followed by our server..rest api works on base of server client architechre
alaways respect http method 
1. Respect http methods (get, post, patch, put, delete) - restful api
2. A hybrid server does 2 jobs:
- at '/users' : render an html page (SSR), when it knows that surely a browser is the client
- at '/api/users' : sends the data as json, so that a mobile app or react can handle that at the client side

REST API - JSON

GET /users - get the list of all users 

GET  /users/2  get the user with particular id 
GET  /users/1  get the user with particular id :

POST /users  Create new users

PATCH /users/id   Update the particular user with id

DELETE /users/id    Delete the user with particular id..


Middleware 

Http Headers : its  a additional information about data request and response ..(http headers are an inportant part of the API request and response as they represent the meta data associated with the API request and response. Headers carry information for the request and response body)

status code :  Http response status code indicate weather a specific http request has been successfully completed .these respomse devide into five part


MongoDB : mongoDB is the NO-SQL Document based databse 
strong support for aggregation pipes 
works on BSON format
Best for Node Application..

we have collection in MongoDB and inside collection we have document 
install MongoDB community addition 

command know know more about Database : 
show dbs
use <db_name>
show collection
db.coll.find()
db.coll.insert()

Connecting MongoDB to Node.js application :
first of all  we install the mongooseIn mongoose we have schema(we define the structure of our data) with use of these schema make model and with the help of model we do CRUD Opperation ..