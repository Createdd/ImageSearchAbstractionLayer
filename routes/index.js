/* jshint node: true */
/*jshint esversion: 6 */

const express=require("express");
const router=express.Router();//establish routing middleware
const imgur=require("../services/imgur");//load the imgur.js file
const History=require("../models/history");//load the history file with the mongoose model

router.get("/", (req,res)=>{
  res.send("it works");
});
router.get("/latest", (req,res)=>{
  History.find({},"term when -_id").sort("-when").limit(10).then(results =>{
    res.json(results);
  });//find all documents with term and date, sort to most recent and limit to 10 results. Pass results as promise and return in json
});
router.get("/search/:q", (req,res)=>{
  imgur.getImage(req.params.q, req.query.offset).then(ans => {
    new History({term:req.params.q}).save();//store the query in the database
    res.json(ans);//response the answer as json with "then" method from the promise
  });//use getImage function from imgur.js, whereas the parameter q stands for query and offset for pagination
});//set search route
module.exports=router;//export the router variable
