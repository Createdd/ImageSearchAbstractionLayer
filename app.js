/* jshint node: true */
/*jshint esversion: 6 */

const express=require("express");
const app=express();
const port=process.env.PORT||3000;
const server=app.listen(port,()=>{
  console.log(`Listening on Port ${port}`);
});
const routes = require('./routes/index');//add routing file
app.use('/', routes);//use route middleware
if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}
const db=require("./config/db");//load the db connection
