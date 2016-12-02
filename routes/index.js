/* jshint node: true */
/*jshint esversion: 6 */

const express=require("express");
const router=express.Router();//establish routing middleware
const imgur=require("../services/imgur");//load the imgur.js file

router.get("/", (req,res)=>{
  res.send("it works");
});
router.get("/latest", (req,res)=>{

});
router.get("/search/:q", (req,res)=>{
  imgur.getImage(req.params.q, req.query.offset).then(ans => {
    res.json(ans);//response the answer as json with "then" method from the promise
  });//use getImage function from imgur.js, whereas the parameter q stands for query and offset for pagination
});//set search route
module.exports=router;//export the router variable
