const os = require("os");


console.log(os.arch());   //Architecture 

console.log(os.freemem()); //Free memory in bytes

console.log(`Free memory in GB : ${(os.freemem())/1024/1024/1024}`);

console.log(`Total memory in GB : ${(os.totalmem())/1024/1024/1024}`);


console.log(os.hostname());

console.log(os.platform());

console.log(os.type());



