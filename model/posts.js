const mongoose=require("mongoose");

const Empschema=mongoose.Schema({
    Name:{
          type:String,
          required:"Name is Required",
           
    },
    Phone:{
        Mobile1:{
            type:Number,
            required:"Mobile Number is Required",
            unique:true,
            minlength:10
        },
     Mobile2:{
            type:Number,
            unique:true,
            minlength:10
        }
  },
  Email:{
    type:String,
    required:"Email Id is Required",
    unique:true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']   
},
Address:{
    LocalAddress:{
        type:String,
        required:"Local Address is Required"
    },
    PermanantAddress:{
        type:String,
       // required:"Permanant Address is Required"
    }
    
},
Username:{
    type:String,
    required:"Username is Required",
    unique:true
},

Password:{
    type:String,
    required:"Password is Required",
    
},
 
 
  date:{
    type:Date,
    default:Date.now
}
});

module.exports=mongoose.model("Employee",Empschema);