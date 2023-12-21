const express=require("express");
const bodyparser=require("body-parser");
const mongodb=require("mongoose")
const cors = require('cors');
const bcrypt=require('bcryptjs-react')
const Signupmodel=require('./models/signup')
const jwt=require('jsonwebtoken')
const cookieparser=require('cookie-parser')
const app=express();
app.use(cookieparser())
app.use(cors(
))
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
app.post("/login",async(req,res)=>{
  const {email,pass} = req.body;
  await Signupmodel.findOne({email:email})
 .then(user=>{
  if(user){
  bcrypt.compare(pass,user.pass,(err,res)=>{
    if(res){
      console.log(res)
      const token=jwt.sign({email:user.email},"jwt-secret-key")
      res.cookie("token",token)
      res.send("Success")
    }
    else{res.send("!password")}
  }
 )}
else{
  res.send("!user")
}})
 .catch(err=>res.json(err))
})
app.listen(9000,()=>{
console.log(`http://localhost:9000`)
});