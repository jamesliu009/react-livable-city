const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot")

/**
 * 
 */
router.get("/home/hot1",(req,res) =>{
    res.send({
        status:200,
        result:homehot.hot1
    })
})

router.get("/home/hot2",(req,res) =>{
    res.send({
        status:200,
        result:homehot.hot2
    })
})


module.exports = router;