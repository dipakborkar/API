const express= require("express");
const router=express.Router();
const post=require("../model/posts");

// Get All Data 
router.get('/',async (req,res)=>{
    try{
          const pst=await post.find();
          res.json(pst)
    }
    catch(err)
    {
        res.json({message:err});
    }
    

    });

//Get Data by multiple parameters
    router.get('/:postId&:title',async (req,res)=>{
        try{
              const pst=await post.find({_id:req.params.postId,title:req.params.title});
              res.json(pst)
              console.log("get value with multiple parameter");
        }catch(err)
        {
            res.json({message:err});
        }
        
    
        });

//Post Multiple parameters
    router.post("/",async (req,res)=>{
        const post1=new post({
            Name:req.body.Name,
            Phone: req.body.Phone,
            Email:req.body.Email,
            Address:req.body.Address,
            Username:req.body.Username,
            Password:req.body.Password     
        });
try{
      const savepost= await post1.save() ;
      res.json(savepost);
}
catch(err){
                res.json({message:err});
}
        

    });

    //Spacific Delete posts
router.delete('/:id',async(req,res)=>{
    try{
    const removedPost=await post.remove({_id:req.params.id});
    res.json(removedPost);

   }
   catch(err){
       res.json({message:err});
   }
});

//Spacific update posts
router.patch('/:postId',async(req,res)=>{
    try{
    const updatedPost=await post.updateOne(
        {_id: req.params.postId},
        {$set:{title:req.body.title,description:req.body.description}}
        
    );
    res.json(updatedPost);

   }
   catch(err){
       res.json({message:err});
   }
});

    module.exports=router;
