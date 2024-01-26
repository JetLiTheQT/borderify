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
var imgbtnData = require('./imgButtonData.json');
var domtoimage = require('dom-to-image');
// const serverless = require('serverless-http');


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// app.use(express.static(path.join(__dirname, 'public')));

app.get("/", setColorBtns, setImageBtns, renderForm);
function setColorBtns(req, res,next){
  if(btnData){
    res.locals.buttonDiv = btnData;
    next();
  }
  else{next();}
}
function setImageBtns(req, res, next){
  if(imgbtnData){
    res.locals.imgButtonDiv = imgbtnData;
    next();
  }
  else{next();}
}
function renderForm(req,res){
  res.render("btnSection");
}

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});

// module.exports = serverless(app);
