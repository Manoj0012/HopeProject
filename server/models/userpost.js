const mongodb = require("mongoose");
const userpostschema = new mongodb.Schema({
    owner:String,
    name:String,
    title: String,
    detail: String,
    gpay:String,
    phonepay:String,
    whatsapp:String
})
const userpostmodel=mongodb.model("posts",userpostschema)
module.exports = userpostmodel