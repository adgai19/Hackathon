let express =require("express");
let router =express.Router();

router.get("/person",(req,res)=>{
    res.send("You have a request")
})

module.exports = router