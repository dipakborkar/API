const express= require("express");
 const jwt=require("jsonwebtoken");
const router=express.Router();
const login=require("../model/Login");

router.post('/:username&:password', async (req,res)=>{
       
    const lgn=await login.findOne({Username:req.params.username,Password:req.params.password},{_id:1});
    const token =jwt.sign({lgn},'my_secret_key',{expiresIn:300});

    res.json({
        token:token
    });
});


router.get('/:username&:password',ensureToken,async (req,res)=>{
    try{
          const lgn=await login.findOne({Username:req.params.username,Password:req.params.password},{_id:1});
          
          

          if(lgn!=null)
          {
           // const token =jwt.sign({lgn},'my_secret_key',{expiresIn:10});
           
            //console.log(token:token);

               jwt.verify(req.token,'my_secret_key',function(err,data){
                 if(err)
                 {
                     res.sendStatus(403);
                 }
                 else{

                        res.json({Status:"true",
                        Message:"Login Successfully",
                        data:data
                      });
    
                    }
                });
               
          }
          else
          {
                res.json({Status:"false",
                Message:"Please Check Credentials",
                token:null
                    });

                    console.log("get value unsuccess");
          }
          
    }catch(err)
    {
        res.json({message:err});
    }
    

    });

    function ensureToken(req,res,next)
    {
        const bearerheader=req.headers["authorization"];
        if(typeof bearerheader!="undefined")
        {
            const bearer=bearerheader.split(" ");
            const bearerToken=bearer[1];
            req.token=bearerToken;
            next();

        }
        else
        {
            res.sendStatus(403);
        }
    }


module.exports=router;