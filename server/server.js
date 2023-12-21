const express = require("express");
const bodyparser = require("body-parser");
const mongodb = require("mongoose")
const cors = require('cors');
const bcrypt = require('bcrypt')
const Signupmodel = require('./models/signup')
const jwt=require('jsonwebtoken')
const cookieparser=require("cookie-parser")
const app = express();
app.use(cookieparser());
app.use(cors({
  origin:["http://localhost:3000"],
  methods:["GET","POST"],
  credentials:true
}
));
app.use(express.json());
mongodb.connect("mongodb://127.0.0.1:27017/Hope");


app.post("/signup", async (req, res) => {
  const { name, email, pass } = req.body;
  const check = await Signupmodel.findOne({ name: name })
  console.log(check)
  if (check) {
    console.log("user irukan");
    res.send(false);
  }
  else {
     bcrypt.hash(pass, 10)
      .then(hash => {
         Signupmodel.create({ name: name, email: email, pass: hash })
          .then(user => res.send(true))
          .catch(err => res.json(err))
      }).catch(err=>console.log(err))
  }
})
app.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  await Signupmodel.findOne({ email: email })
    .then(user => {
      if (user) {
        bcrypt.compare(pass, user.pass, (err, response) => {
          if (response) {
          const token=jwt.sign({email:user.email},"jwt-secret-key")
          res.cookie("token",token);
          console.log(token)
          res.send("Success")
          }
          else { res.send("!password") }
        }
        )
      }
      else {
        res.send("!user")
      }
    })
    .catch(err => res.json(err))
})
const verifyuser=(req,res,next)=>{
  const token=req.cookies.token;
  console.log(token)
  if(!token){return res.json("!token")}
  else{
    jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
      if(err) {return res.json("!wrongtoken")}
    next();
  })
  } }
app.get("/dashboard",verifyuser,(req,res)=>{

return res.json("Success")
})
app.listen(9000, () => {
  console.log(`http://localhost:9000`)
});