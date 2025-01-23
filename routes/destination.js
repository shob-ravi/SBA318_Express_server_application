const express = require('express');
const router = express.Router();

const destData = require("../data/destination");

// creating a get route for entire destination file
router.get('/', (req, res) => {
    res.json(destData);
    console.log('destination route');
})

// creating a get route for destination ID
router.get('/:id', (req, res, next) => {
    console.log('destination route with params:' + req.params.id);
    const destId = destData.find((d) => d.id == req.params.id)
    if (destId) res.json(destId);
    else next();
})


//Middleware --It parses the JSON data sent in the body of an HTTP request.
// Converts the JSON data into a JavaScript object that can be accessed through req.body.
router.use(express.json());
// Post request
router.post('/', (req, res) => {
    const temp = req.body;
    console.log(JSON.stringify(temp));
    const isAvailable = req.body.name && req.body.country && req.body.description && req.body.popularAttractions;
    if (!isAvailable) {
        res.status(400).send("One or more parameters are missing");
        return;
    }
    const findName = destData.find((a) => a.name == req.body.name)
    if (findName) {
        res.status(400).send("destination name already exist");
        return;
    }
    const tempDest = {
        id: destData[destData.length - 1].id + 1,
        name: req.body.name,
        country: req.body.country,
        description: req.body.description,
        popularAttractions: req.body.popularAttractions
    }
    destData.push(tempDest);
    res.json(destData);
    res.status(200).send("successfully added");

})
// patch request
router.patch('/', (req, res) => {

    
        for (const key in req.body) {
             console.log('key' + JSON.stringify(req.body[key].id));
             const index = destData.findIndex(obj => obj.id === req.body[key].id); // Find index of object to replace
             console.log('index'+index);
             if (index !== -1) {
               destData.splice(index, 1, req.body[key]); // Replace object at index               
             }            
            
        }
        res.json(destData);      
   
})

// delete request
router.delete('/',(req,res,next)=>{
    const destDelete = destData.find((d,i)=>{
        if (d.id ==req.body.id){
            destData.splice(i,1);
            return true;
        }
    })
    if (destDelete) res.json(destData)
        else next();
})

// middleware to handle error
router.use((req, res) => {
    res.status(400);
    res.json({ error: "Resource Not found" });
})


module.exports = router;