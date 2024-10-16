
const express=require("express")
const app=express()
const port=process.env.PORT||4000

// GET request to the home page
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  // POST request to a "/submit" route
  app.post('/submit', (req, res) => {
    res.send('Form submitted');
  });
  
  // PUT request to "/update" route
  app.put('/update', (req, res) => {
    res.send('Resource updated');
  });
  
  // DELETE request to "/delete" route
  app.delete('/delete', (req, res) => {
    res.send('Resource deleted');
  });
  


  app.listen(port,()=>{
    console.log(`server running on port ${port}`);
    
  })