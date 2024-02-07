//import React from "react"
const express=require("express")//old import method or backend method 
const app=express();// we will write our all code
const db=require("./db")

//server on
// listen 
//port 3000 react 
const PORT=4010;

app.get("/atul",(req,res)=>{
    res.send("hello world")
}) 
db.connection.on("connected",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("mongod db is connected ")
    }
    // try{ this work in inside the function
    //     console.log("connected ")
    // }
    // catch(err){
    //     console.log(err)

    // }


})
app.use(express.json())//middle ware
app.use("/neel",require("./router/router"))







app.listen(PORT,()=>console.log(`server is on on port=>${PORT}`))
