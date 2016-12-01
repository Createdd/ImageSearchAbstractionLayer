/* jshint node: true */
/*jshint esversion: 6 */

const express=require("express");
const app=express();
const port=process.env.PORT||3000;
const server=app.listen(port,()=>{
  console.log(`Listening on Port ${port}`);
});

app.get("/", (req,res)=>{
  res.send("it works");
});
