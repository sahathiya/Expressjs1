const express=require("express")

const app=express()

app.get('/',(req,res)=>{
    res.send("HOME")
})

app.get('/about',(req,res)=>{
    res.send("ABOUT")
})


app.get('/contact',(req,res)=>{
    res.send("CONTACT")
})

app.get('*',(req,res)=>{
    res.status(404)
    res.send("page not found")
})


app.listen(4000,()=>{
    console.log("server running on port 4000");
    
})