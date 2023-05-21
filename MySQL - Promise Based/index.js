import express from "express";

import mysql from "mysql2/promise";

import bluebird from "bluebird";

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Hello World");
});

app.post("/books/add",async (req,res)=>{
    const {name,author,pages} = req.body;

    if(!name || !author || !pages){
        res.status(200).json({success:false,message:"Name,author or pages is missing"});
        return;
    }

    const insertQuery = 'INSERT INTO books(name,author,pages) VALUES(?,?,?)';

    const [rows,fileds] = await connection.execute(insertQuery,[name,author,pages]);

    if(rows.affectedRows==1){
        res.status(200).json({success:true,message:"Book added succesfully..."});
    }else{
        res.status(200).json({success:false,message:"Error...could not add book"});
    }


});

let connection;

app.listen(8000,async (err)=>{
    if(err){
        console.log(err);
    }else{
         connection = await mysql.createConnection(
            {host:'localhost',
             user: 'root', 
             database: 'myDB',
              Promise: bluebird}
            );

        if(connection){
            console.log("Database connected...");
        }else{
            console.log("could not connect");
        }
    }
})