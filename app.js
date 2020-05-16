const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
require('dotenv/config');

app.use(bodyParser.json());
//Import Route
const postroute=require("./routes/post");
const loginroute=require("./routes/Login");
//Middalware

app.use("/post",postroute);
app.use("/login",loginroute);
//Route
app.get('/',(req,res)=>{
res.send("Hello At Get");
});

 // DB Connectivity Test

    mongoose.connect(process.env.DB_Connection,{useNewUrlParser:true},()=>
    console.log("DB Connected Sucessfully")
 );
//Listen Server    
app.listen(3000);