const express = require("express");
const bodyparser = require("body-parser");
const mongodb = require("mongoose")
const cors = require('cors');
const bcrypt = require('bcrypt')
const Signupmodel = require('./models/signup')
const Userpostschema=require('./models/userpost')
const jwt = require('jsonwebtoken')
const cookieparser = require("cookie-parser")
const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded(
  {extended:true}
))
app.use(cookieparser());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}
));
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
      }).catch(err => console.log(err))
  }
})
app.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  await Signupmodel.findOne({ email: email })
    .then(user => {
      if (user) {
        bcrypt.compare(pass, user.pass, (err, response) => {
          if (response) {
            const token = jwt.sign({ email: user.email }, "jwt-secret-key")
            res.cookie("token", token);
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
const verifyuser = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token)
  if (!token) { return res.json("!token") }
  else {
    jwt.verify(token, "jwt-secret-key", async (err, decoded) => {

      // Get email from decoded
      // Get user from database with email
      // Attach user to response or request
      // req.user = {}

      if (err) { return res.json("!wrongtoken") }
      const user = await Signupmodel.findOne({ email: decoded.email })
      req.user = user;
      // console.log(user)
      next();
    })
  }
}
app.get("/dashboard", verifyuser, (req, res) => {
  return res.json("Success")
})
app.get("/dashboarddata",verifyuser,(req, res) => {
  user=req.user
  res.json(user)
  console.log(user)
})
app.post("/addpost", async (req, res) => {
  try {
    const { name} = req.body; 
    const user = await Signupmodel.findOne({ email:name });
    console.log(user)

    if (!user) {
      return res.status(404).send("User not found");
    }
    const Userpostschema = {
      title: req.body.title,
      detail: req.body.detail, 
      gpay: req.body.gpay,
      phonepay: req.body.phonepay,
      whatsapp: req.body.whatsapp
    };
    console.log(Userpostschema)
    user.post.push(Userpostschema);
    await user.save();
    res.send("success");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/getpost", async (req, res) => {
 
})
app.listen(9000, () => {
  console.log(`http://localhost:9000`)
});