// Importing express library into the code
const express = require('express');
// Initializing new instance of express server
const app = express();
const port = 3000;

// Importing data from data files
const destData = require("./data/destination");
const hotelsData = require("./data/hotels");
const activityData = require("./data/activities");

// creating a get route for entire destination file
app.get('/api/destination',(req,res)=>{
    res.json(destData);
})
// creating a get route for destination ID
app.get('/api/destination/:id',(req,res)=>{   
    const destId =  destData.find((d)=> d.id == req.params.id)
    if (destId) res.json(destId);
    else next()
})

///////////////////////////////
// Routes
// importing routers in to main index.js file
const destRoute = require("./routes/destination");
// Attaching and associating routers to specific url paths
// app.use('/api/destination',destRoute);


app.get('/api/hotels',(req,res)=>{
    res.json(hotelsData);
})
app.get('/api/activities',(req,res)=>{
    res.json(activityData);
})
// middleware to handle error
app.use((req,res)=>{
    res.status(400);
    res.json({error: "Resource Not found"});
})
// starting the server and listening to some activity in port 3000
app.listen(port, ()=>{
    console.log('server is running....');
})