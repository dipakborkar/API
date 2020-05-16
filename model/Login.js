const mongoose=require("mongoose");

const loginschema=mongoose.Schema({

     Username:{
         type:String,
         required:"Please Enter Username"
     },
     Password:{
        type:String,
        required:"Please Enter Password"
    }
});

module.exports=mongoose.model("employee",loginschema);