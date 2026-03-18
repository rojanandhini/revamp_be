const express =require("express");

const app= express();
const port=4000;
app.get("/",(req,res)=>{res.send("Welcome to Express!")});
app.listen(port,()=>{console.log(`Api is working on ${port}`);
})
