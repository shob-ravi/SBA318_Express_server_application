// Importing express library into the code
const express = require('express');
// Initializing new instance of express server
const app = express();
const port = 3000;

// Importing data from data files

const hotelsData = require("./data/hotels");
const activityData = require("./data/activities");



///////////////////////////////
// Routes
// importing routers in to main index.js file
const destRoute = require("./routes/destination");
// Attaching and associating routers to specific url paths
app.use('/api/destination',destRoute);

// creating a get route for destination ID
app.use('/api/destination/:id',destRoute);

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