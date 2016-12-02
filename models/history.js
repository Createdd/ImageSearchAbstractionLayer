/* jshint node: true */
/*jshint esversion: 6 */
const mongoose=require("mongoose");
const historySchema= new mongoose.Schema({
  term: String,
  when:{type:Date,default:Date.now}
});//create a new Schema for the structure of documents in mongodb
const History=mongoose.model("History", historySchema);//create model
module.exports=History;//export the model for use in application
