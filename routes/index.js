/* jshint node: true */
/*jshint esversion: 6 */

const express=require("express");
const router=express.Router();//establish routing middleware

router.get("/", (req,res)=>{
  res.send("it works");
});
router.get("/latest", (req,res)=>{

});
router.get("/search", (req,res)=>{

});
module.exports=router;
