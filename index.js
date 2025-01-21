// Importing express library into the code
const express = require('express');
// Initializing new instance of express server
const app = express();
const port = 3000;

// Importing data from data files
const destData = require("./data/destination");
const hotelsData = require("./data/hotels");

// creating a get route for entire destination file
app.get('/api/destination',(req,res)=>{
    res.json(destData);
})

app.get('/api/hotels',(req,res)=>{
    res.json(hotelsData);
})

// starting the server and listening to some activity in port 3000
app.listen(port, ()=>{
    console.log('server is running....');
})