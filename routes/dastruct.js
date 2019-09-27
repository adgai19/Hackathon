const express = require('express');
let router = express.Router();
//let plainTextParser = require('plaintextparser');
router.get("/", (req, res) => {
        res.send('hello world')
}
)
// module.exports=router;
router.route('/lat')
.post(function(req,res){
    var chunk = '';

    req.on('data', function(data){
        chunk += data; // here you get your raw data.
    })        

    req.on('end', function(){

        console.log(chunk); //just show in console
    })
    res.send(null);

});
router.route('/long')
.post(function(req,res){
    var chunk = '';

    req.on('data', function(data){
        chunk += data; // here you get your raw data.
    })        

    req.on('end', function(){

        console.log(chunk); //just show in console
    })
    res.send(null);

});router.route('/imagepath')
.post(function(req,res){
    var chunk = '';

    req.on('data', function(data){
        chunk += data; // here you get your raw data.
    })        

    req.on('end', function(){

        console.log(chunk); //just show in console
    })
    res.send(null);

});router.route('/path')
.post(function(req,res){
    var chunk = '';

    req.on('data', function(data){
        chunk += data; // here you get your raw data.
    })        

    req.on('end', function(){

        console.log(chunk); //just show in console
    })
    res.send(null);

});

module.exports = router;