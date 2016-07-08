/**
 * Created by dle06 on 5/10/16.
 */
var express = require('express')

var app = express()
const PORT = process.env.PORT || 3000;

app.use( function(req, res, next){
  var proto = req.headers['x-forwarded-proto']
  if (!proto){
    next();
  }else{
    if (proto === 'http'){
      next();
    }else{
      res.redirect('http://'+ req.hostname + req.url);
    }
  }
})


app.use( express.static('public') )

app.listen( PORT, function(){
    console.log('express server is up on port '+ PORT)
})
