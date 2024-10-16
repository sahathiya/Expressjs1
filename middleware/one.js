const express=require("express")

const app=express()


app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
  }, (req, res) => {
    res.send('Hello from B!')
  })


  app.listen(4000,()=>{
    console.log("server running");
    
  })