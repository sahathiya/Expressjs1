const express=require("express")

const app=express()


app.get('/users/:id',(req,res)=>{
    res.send(req.params)
})

app.get('*',(req,res)=>{
    res.status(404)
    res.send("page not found")
})

app.listen(4000,()=>{
    console.log("server running");
    
})