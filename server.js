const mongos= require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
let app=express();
let dbroutes=require('./routes/dastruct.js');
app.use(dbroutes);
/* Don't use express as its not supported any longer*/
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
// app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.text({ type:text/plain }));
// --------------new edits--------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//---------------------------------------------------
mongos.connect('localhost:27017', { useNewUrlParser: true },()=>console.log("mongoose connected"));
//app.use(express.static('public'));
app.listen(3001,()=>console.log("server running"));
