import express from "express";    

export default function (req,res,next){
        if(req.headers.token == "abc"){
        console.log("Validated");
        next();
    }else{
        res.status(403).send({success:false,message:"Forbidden"});
        
    }
}

