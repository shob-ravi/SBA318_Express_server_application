// Importing express library into the code
const express = require('express');
// Initializing new instance of express server
const app = express();
const port = 3000;

// Importing data from data files

const hotelsData = require("./data/hotels");
const activityData = require("./data/activities");

const error = require("./utilities/error");

// custom middleware
const requestLogger = (req, res, next) => {
    console.log(`Incoming Request: [${req.method}] ${req.path}`);
    next(); // Pass to the next middleware or route handler
  };
  app.use(requestLogger);

///////////////////////////////
// Routes
// importing destination routers in to main index.js file
const destRoute = require("./routes/destination");
// Attaching and associating routers to specific url paths
app.use('/api/destination',destRoute);

// creating a get route for destination ID
app.use('/api/destination/:id',destRoute);



// importing activity routers in to main index.js file
const activitiesRoute = require("./routes/activities");

// Attaching and associating routers to specific url paths
app.use('/api/activities',activitiesRoute);

// importing hotels routers in to main index.js file
const hotelsRoute = require("./routes/hotels");

app.use('/api/hotels',hotelsRoute);
// 404 middleware
app.use((req, res, next) => {
  next(error(404, "Resource Not Found"));
});
// error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });

// starting the server and listening to some activity in port 3000
app.listen(port, ()=>{
    console.log('server is running....');
})