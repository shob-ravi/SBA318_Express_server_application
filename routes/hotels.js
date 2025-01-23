const express = require('express');
const router = express.Router();

const hotelsData = require('../data/hotels');

router.get('/',(req,res)=>{
    res.json(hotelsData);
})

module.exports = router;