const express = require('express');
let router = express.Router();
const dbStruct=require('../model/db');
//let plainTextParser = require('plaintextparser');
router.get("/", (req, res) => {
        res.send('hello world')
}
)
// module.exports=router;
router.route('/entry')
.post(function(req,res){
    var chunk = '';

    req.on('data', function(data){
        chunk += data; // here you get your raw data.
    })        

    req.on('end', function(){

        console.log(chunk);
        test=JSON.parse(chunk);
        console.log(test.imagepath);
         //just show in console
         const newentry = new dbStruct({
                 location:test.location,
                 locality:test.locality,
                 imagepath:test.imagepath,
                 
         });
         newentry.save().then(data=>{
                 res.json(data);
         }).catch(err=>{
                 rest.json({message:error})
         })

         console.log(newentry);
    });

    res.send("entry recieved");

});

router.get('/getpost', (req,rec)=>{
        console.log("sending posts");
        
                dbStruct.find((err,posts)=>{
                        if(err) return console.error(err);
                        console.log(posts);
                })
                        
               // posts=JSON.parse(posts);
               
                console.log("posts sent");
        
})
module.exports = router;