const fs = require('fs');

const path = "./My Directory/new.txt";

// fs.mkdir("My Directory",err=>{if(err) console.log(err)});

fs.writeFile(path,"Hello World",err=>{
    if(err){
        console.log(err);
    }
});

fs.appendFile(path," I am Sandesh Khatiwada",err=>{
    if(err){
    console.log(err);
    }
});

fs.readFile(path,"utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});


fs.rename(path,"./My Directory/naya.txt",err=>{
    if(err){
    console.log(err);
    }
});

fs.rmdir("./My Directory",{recursive:true},err=>{
    if(err){
        console.log(err);
    }
})