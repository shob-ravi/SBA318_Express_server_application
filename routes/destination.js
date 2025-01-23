const express = require('express');
const router = express.Router();

const destData = require("../data/destination");

// creating a get route for entire destination file
router.get('/',(req,res)=>{    
    res.json(destData);
    console.log('destination route');
})

// creating a get route for destination ID
router.get('/:id',(req,res,next)=>{  
    console.log('destination route with params:' +req.params.id) ;
    const destId =  destData.find((d)=> d.id == req.params.id)
    if (destId) res.json(destId);
    else next();
})

// middleware to handle error
router.use((req,res)=>{
    res.status(400);
    res.json({error: "Resource Not found"});
})

module.exports = router;