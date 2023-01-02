var express = require('express');
const app =express();
app.get("/",(req,res)=>
{
    res.end("<h1>Delittes Pvt Ltd </h1><div><table><tr><th>Login</th></tr></table</div>");
});


app.listen(8000,()=>{
console.log("Server is listening on port 8000");
});