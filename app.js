/* jshint node: true */
/*jshint esversion: 6 */

const express=require("express");
const app=express();
const path=require("path");
const port=process.env.PORT||3000;
const server=app.listen(port,()=>{
  console.log(`Listening on Port ${port}`);
});
const routes = require('./routes/index');//add routing file
const db=require("./config/db");//load the db connection

//set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use('/', routes);//use route middleware
if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}
