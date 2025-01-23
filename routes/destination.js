const express = require('express');
const router = express.Router();

// creating a get route for entire destination file
router.get('/',(req,res)=>{    
    // res.json(destData);
    console.log('destination route');
})

module.exports = router;