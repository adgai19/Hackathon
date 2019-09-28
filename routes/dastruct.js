const express = require('express');
let router = express.Router();
const dbStruct=require('../model/db');
//let plainTextParser = require('plaintextparser');
router.get("/", (req, res) => {
        res.send('hello world')
}
)
let entries=[];
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
        //  const newentry = new dbStruct({
        //          location:test.location,
        //          locality:test.locality,
        //          imagepath:test.imagepath,
                 
        //  });
        //  console.log(newentry+"hello");
        //  newentry.save((err,entry)=>{
        //          if(err) console.log(err);
        //          else
        //          console.log(entry+"123");
        //  });
        //  /* newentry.save().then(data=>{
        //          res.json(data);
        //          console.log("saving");
        //  }).catch(err=>{
        //          rest.json({message:error})
        //  }) */
        entries=entries.concat(test);
        console.log(entries+"added");
        //  console.log(newentry);
    });

    res.send("entry recieved");

});

router.get('/getpost', (req,rec)=>{
        console.log("sending posts");
        
                // dbStruct.find((err,posts)=>{
                //         if(err) return console.error(err);
                //         console.log(posts);
                //         rec.send(posts);
                // });
                        
               // posts=JSON.parse(posts);
               rec.send(entries);
                console.log("posts sent");
        
})
module.exports = router;