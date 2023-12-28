const mongodb =require("mongoose");
const userpostschema = require("./userpost");
const SignupSchema=new mongodb.Schema({
    name:String,
    email:String,
    pass:String,
})
const Signupmodel=mongodb.model("users",SignupSchema);
module.exports=Signupmodel