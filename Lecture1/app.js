const express=require('express');
const app=express();

// app.get(route,callback)
// app.get(route,(req,res)=>{});
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})