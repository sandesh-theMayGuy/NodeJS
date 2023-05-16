import express from "express";

const router = express.Router()


router.get("/",(req,res)=>{
    res.status(200).send(true);
})


//catching params

router.get("/add/:id/:author",(req,res)=>{

    console.log(req.params);
    res.status(200).json({added:true})
});


//catching queries
router.get("/delete",(req,res)=>{

    console.log(req.query);

    const {id,author} = req.query;

    console.log(id,author);


    res.status(200).json({deleted:true})
});


export default router;  