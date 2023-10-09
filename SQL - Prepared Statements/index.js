import express from "express";

import mysql from "mysql2";

const app = express();

app.use(express.json());

app.post("/books/add",(req,res)=>{
    

    const {name , author , pages} = req.body;

    const insertQuery = `INSERT INTO books 
                         (name,author,pages)
                          values(? , ? ,?)`;

    connection.query(insertQuery,[name,author,pages],(err,results,fields)=>{
        if(err){
            console.log(err);
            return;
        }
        if(results.affectedRows==1){
            res.status(200).json({success:true,message:"Book added succesfully..."});
        }else{
            res.status(200).json({success:false,message:"Error...could not add book..."});
        }
     })
});


app.delete("/books/delete",(req,res)=>{
    const {name,author} = req.body;

    const deleteQuery = `DELETE FROM books WHERE name =? AND author = ?`;

    connection.query(deleteQuery,[name,author],(err,results,fields)=>{
        if(err){
            console.log(err);
            return;
        }

        if(results.affectedRows==1){
            res.status(200).json({success:true,message:"Book deleted succesfully..."});
        }else{
            res.status(200).json({success:false,message:"Error...could not delete book"});
        }
    })


});

let connection;

app.listen(8000,(err)=>{
    if(err){
        console.log(err);
    }else{
        connection = mysql.createConnection(
            {
                host : "localhost",
                user : "root",
                database : "myDB"
            }
        );


        if(connection){
            console.log("connection established to the database");
        }
        
    }
});

