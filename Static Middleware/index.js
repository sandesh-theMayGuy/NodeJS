import express from "express";

const app = express();

app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.status(200).send("Hello World");
});




app.listen(8000,()=>{
    console.log("Server has started...");
})
