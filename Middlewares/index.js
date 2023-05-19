
import express from "express";

import router from "./routes/books.route.js"

const app = express();





//Middleware : does some processing before sending the response
//application level middleware
app.use((req,res,next)=>{
    console.log("Hello World");
    next();
})

app.use("/books",router);


app.get("/",(req,res)=>{
    res.status(200).send("Hello World");
});



app.listen(8000,(err)=>{
    console.log(err?err:"Server has started");
})

