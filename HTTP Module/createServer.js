import http from "http";
import chalk from "chalk"



const server = http.createServer((req,res)=>{
    res.writeHead(200);
    switch(req.url){
        case "/home": 
                    res.write("Home page");
                    break;
        
        case "/about": 
                    res.write("About page");
                    break;
        default:
                    res.write("Hello World");

    }


    switch(req.method){
        case "GET" : 
                    res.write("Get method used");
                    break;

        default:
                res.write("Other than GET method used");
    }


    console.log(req);
    console.log(req.url);
    console.log(req.method);
  
    console.log(chalk.bgBlue("Hello world"));
    res.end();






   
})


server.listen(5000,()=>{
    console.log("server is running")
})
