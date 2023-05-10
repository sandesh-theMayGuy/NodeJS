//Built-in modules
//built in modules doesn't need to be installed
//external module : it needs to be installed through package manager

const fs = require("fs");

fs.writeFileSync("hello.txt","Hello Nepal"); //Syncrhonous writing to the file

//If data is already present in the file, it gets overwritten
//To append :

fs.appendFileSync("hello.txt","I am Sandesh Khatiwada");


const buf_data = fs.readFileSync("hello.txt");
console.log(buf_data);

//NodeJS has additional dataType called buffer used to store binary data while reading data
//from a file or receiving package over the network

// <Buffer 48 65 6c 6c 6f 20 4e 65 70 61 6c 49 20 61 6d 20 53 61 6e 64 65 73 68 20 4b 68 61 74 69 77 61 64 61>

console.log(buf_data.toString());



fs.renameSync("hello.txt" , "new.txt");

