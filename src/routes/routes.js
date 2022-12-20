const express = require("express");
const router = express.Router();
const {createProperty} = require("../controllers/property");

//============================post api for shorten url===================>>>
router.post("/crop",function check(){
    console.log('app is working')
    // res.send({'app is working'})
});

router.post("/property", createProperty)

module.exports = router;
