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
var postData = require('./postData.json');


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/posts/:n', function(req,res,next){
  var postNum = req.params.n;
  if(postData[postNum])
      res.status(200).render('singlePost', postData[postNum]);
  
  else {
    next();
  }
});
app.get('/', function(req, res, next){
  if(postData){
    res.status(200).render('postPage', {posts: postData});
  } else{
    next();
  }
});




app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
