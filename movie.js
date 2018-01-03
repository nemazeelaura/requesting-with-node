'use strict'
//require apiKey

//Require request library
const request = require('./node_modules/request');
const keys = require('./env');


 // console.log(keys);
function getMovieTitle(title){
    request('https://www.googleapis.com/customsearch/v1?key=' + keys.key + '&cx='+ keys.id + '&q=' + title + '', function (error, response, body) {
    // call back
    var info = JSON.parse(body);
    console.log(info.items[0].title);
    // console.log(response);
    // console.log(error);
    //print out movies
    // 
  });
    
}



module.exports=getMovieTitle;

