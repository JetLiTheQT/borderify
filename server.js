/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: 
 * Email:
 */

var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var btnData = require('./buttonData.json');


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', function(req, res, next){
   if(btnData)
    res.status(200).render('btnSection', {buttonDiv: btnData});
   else{ next();}
});




app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});

