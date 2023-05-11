import * as fs from "fs/promises";

await fs.writeFile("new.txt","Hello World");


try{
const data =  await fs.readFile("new.txt","utf-8");
console.log(data);
}catch(err){
    console.log(err);
}


