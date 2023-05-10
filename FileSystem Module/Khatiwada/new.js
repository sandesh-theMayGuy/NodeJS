const fs = require("fs");

fs.writeFileSync("hello.txt","Hello");

fs.appendFileSync("hello.txt" , "world");

console.log(fs.readFileSync("hello.txt").toString());

fs.renameSync("hello.txt","my_hello.txt");


const data = fs.readFileSync("./Hello/new.txt","utf-8").toString();

console.log(data);




fs.unlinkSync("hello.txt");

