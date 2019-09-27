const express = require('express');
let router = express.Router();
router.get("/", (req, res) => {
        res.send('hello world')
}
)
// module.exports=router;
router.post("/entry", (req, res) => {
        console.log((req.body));
        res.send("entry recieved");
        
});


module.exports = router;