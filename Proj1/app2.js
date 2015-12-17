//Example working pare
var express= require('express');
var path=require('path');
var app = express();

//configure the app. 
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));



//use middleware


//define routes. 
app.get('/', function(req, res) {
	//load data from db here
	res.render('index2');
	});


app.listen('1337', function() {
	console.log('ready on port 1337');

});