const x = 10;
function func(){
    console.log("func");
}

const myDetails={
    name:"Sandesh",
    age: 20
}

module.exports={x,func,myDetails};


module.exports.a = ()=>{
    console.log("Function a");
}





module.exports = {
    b: ()=>{
        console.log("Function b");
    },

    c: ()=>{
        console.log("Function c");
    }
}