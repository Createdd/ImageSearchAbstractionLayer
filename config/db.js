/* jshint node: true */
/*jshint esversion: 6 */
const connection=`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;
const mongoose=require("mongoose");//using mongoose as object-related mapping with databases
mongoose.Promise = global.Promise;//use native promises library of mongoose to solve DeprecationWarning
exports.db=mongoose.connect(connection);//export the connection so it can be used elsewhere in the application
