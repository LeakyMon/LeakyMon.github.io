require('dotenv').config()
 



const express = require('express')
//Express app
const app = express()
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "leakyshq",
    password: "nugget2001"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


app.use((req, res, next) => {
 
    console.log(req.path, req.method)
    next()
 
})
 
//React to requests
app.get('/', (req, res) => {
 
    res.json({mssg: 'Welcome to the application'})
 
})
 
 
//Listen for rquests
app.listen(process.env.PORT, () =>{
    console.log('listening on port', process.env.PORT)
})
