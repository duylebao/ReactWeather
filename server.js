/**
 * Created by dle06 on 5/10/16.
 */
var express = require('express')

var app = express()
const PORT = process.env.PORT || 3000;

// app.use( function(req, res, next){
//   if (req.headers['x-forwarded-proto'] === 'http'){
//     next();
//   }else{
//     var x = 'http://'+ req.hostname + ':' + PORT + req.url;
//     console.log(x)
//     res.redirect(x);
//   }
// })

app.use( express.static('public') )

app.listen( PORT, function(){
    console.log('express server is up on port '+ PORT)
})
