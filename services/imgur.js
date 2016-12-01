/* jshint node: true */
/*jshint esversion: 6 */

const request=require("request");//add module for http calls in order to make requests to the imgur api through app.js

exports.getImage = (search, page=1) => {
  return new Promise ((resolve,reject)=>{
    let options = {
        url: `https://api.imgur.com/3/gallery/search/${page}?q=${search}`,//set up the connecting url
        headers: { Authorization: 'Client-ID 3499a1672436871' },//set required authorization id
        json: true,//enable json format as response
    };//define imgur api options
    function getPics(err,response,body){
      if(!err && response.statusCode==200){
        body=body.data.filter(image =>{
          if(!image.is_album){
            return image;
          }
        }).map(image => {
          return {
            url: image.link,
            snippet: image.title,
            context: `https://imgur.com/${image.id}`
          };//return object
        });//body.data.filter.map -> take the returned body, filter out the albums and reduce the information to url,snippet, context
        resolve(body);
      }//check if the response is ok
    }//function getPics
  });//return new Promise
};//use an export function to use it in the route file and set it's parameters to the search term and pagination
