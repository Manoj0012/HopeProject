const express=require("express");
const bodyparser=require("body-parser");
const cors = require('cors');
const app=express();
app.use(cors())
app.use(express.json());
app.post("/",(req,res)=>{
 
})
app.listen(9000);