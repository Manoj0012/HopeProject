const express=require("express");
const bodyparser=require("body-parser");
const mongodb=require("mongoose")
const cors = require('cors');
const Signupmodel=require('./models/signup')
const app=express();

app.use(cors())
app.use(express.json());
mongodb.connect("mongodb://127.0.0.1:27017/Hope");




app.post("/signup",async(req,res)=>{

  const {name,email,pass} = req.body;
    const check=await Signupmodel.findOne({name:name})
    console.log(check)
    if(check){
      console.log("user irukan");
      res.send(false);
    }
    else{
 Signupmodel.create({name:name,email:email,pass:pass})
 .then(user=>res.send(true))
 .catch(err=>res.json(err))}
})
app.post("/signup",async(req,res)=>{

  const {name,email,pass} = req.body;
    const check=await Signupmodel.findOne({email:email})
    console.log(check)
    if(check){
     if(check.pass==pass){}
    }
    else{
 Signupmodel.create({name:name,email:email,pass:pass})
 .then(user=>res.send(true))
 .catch(err=>res.json(err))}
})
app.listen(9000);