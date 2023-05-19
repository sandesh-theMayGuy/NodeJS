import express from "express";
import mysql from "mysql2";

const app = express();


app.use(express.json());

app.post("/user/add",(req,res)=>{

    const {username,location} = req.body;

    const insertQuery = `INSERT INTO users(username,location) values('${username}' , '${location}')`;

    connection.query(insertQuery,(err,results,fields)=>{

        if(err){
            throw err;
        }


        if(results.affectedRows===1){
            res.status(200).json({status:true,message:"User added succesfully..."});
        }else{
            res.status(200).json({status:true,message:"Unable to add user..."});
        }
    });

});


app.get("/user/:id",(req,res)=>{
    const {id} = req.params;
    
    if(id){
    const selectQuery = `SELECT * FROM users WHERE id=${id}` 

    connection.query(selectQuery,(err,results,fields)=>{

        if(err){
            throw err;
        }
            res.status(200).json({...results});
    })


    }else{
        res.status(200).json({success:false,message:"id not provided"});
    }
    
});

let connection;

app.listen(8000,(err)=>{
    if(err){
        console.log(err);
        return;
    }else{
         connection = mysql.createConnection({
            host : "localhost",
            user : "root",
            database : "myDB"
        });

        if(connection){
            console.log("Connected");
        }
        
    }
})