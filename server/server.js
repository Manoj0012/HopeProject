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

  const {name,
    email,
    pass} = req.body;
    const check=await Signupmodel.findOne({name:name})
    if(check){
      console.log("user irukan")
      res.send("user exits")
    }
    else{
 Signupmodel.create({name:name,email:email,pass:pass})
 .then(user=>res.json(user))
 .catch(err=>res.json(err))}
})
app.listen(9000);