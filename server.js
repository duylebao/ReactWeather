/**
 * Created by dle06 on 5/10/16.
 */
var express = require('express')

var app = express()

app.use( express.static('public') )

app.listen( 3000, function(){
    console.log('express server is up on port 3000')
})
