const express = require('express');
const router = express.Router();

const activityData = require('../data/activities');

router.get('/',(req,res)=>{
    res.json(activityData);
})

module.exports = router;