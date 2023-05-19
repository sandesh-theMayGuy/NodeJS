import express from "express";
import validateToken from "../middleware/tokenValidation.js"

const router = express.Router()


//Route level middleware
router.use((req,res,next)=>{
    validateToken(req,res,next)
})

router.get("/",validateToken,(req,res)=>{

    res.status(200).send(true);
})


//catching params

router.post("/add",[validateToken,validateToken] ,(req,res)=>{

    // console.log(req.query);
    // console.log(req.params);
    // console.log(req.body);
    res.status(200).json({added:true});
});


//catching queries
router.get("/delete",(req,res)=>{

    console.log(req.query);

    const {id,author} = req.query;

    console.log(id,author);


    res.status(200).json({deleted:true})
});


export default router;  