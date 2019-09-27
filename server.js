const mongos= require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
let app=express();
let dbroutes=require('./routes/dastruct.js');
app.use(dbroutes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.text({ type: 'json' }));
mongos.connect('localhost:27017', { useNewUrlParser: true },()=>console.log("mongoose connected"));
//app.use(express.static('public'));
app.listen(3001,()=>console.log("server running"));
