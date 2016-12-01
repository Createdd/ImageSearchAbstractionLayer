/* jshint node: true */
/*jshint esversion: 6 */

const request=require("request");//add module for http calls in order to make requests to the imgur api through app.js

exports.getImage = (search, page=1) => {
  return new Promise ((resolve,reject)=>{
    let options = {
        url: `https://api.imgur.com/3/gallery/search/${page}?q=${search}`,//set up the connecting url
        headers: { Authorization: 'Client-ID 3499a1672436871' },//set required authorization id
        json: true,//enable json format as response
    };
  });
};//use an export function to use it in the route file and set it's parameters to the search term and pagination
