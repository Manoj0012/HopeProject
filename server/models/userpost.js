const mongodb = require("mongoose");
const userpostschema = new mongodb.Schema({
    title: String,
    details: String,
    gpay:String,
    phonepay:String,
    whatsapp:String
})
module.exports = userpostschema