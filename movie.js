'use strict'
//require apiKey

//Require request library
const request = require('./node_modules/request');
const keys = require('./env');

function getMovieTitle(title){
    request('https://www.googleeapis.com/customsearch/v1?key='+keys.key+ '&cx='+keys.id+ title + '', function (error, response, body) {
    // call back
    var info = JSON.parse(body);
    console.log(info.items[0].title);
    //print out movies
  });
    
}



module.exports=getMovieTitle;

