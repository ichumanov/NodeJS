//////////////////////////////////////////////////////
//Example working with Routers (starting with Nodejs 4)
//Files used: todos4.js
//			  app4.js
//			  index4.ejs
//////////////////////////////////////////////////////

var express= require('express');
var path=require('path');
var bodyParser = require('body-parser');


var app = express();
var todos = [
			{id:1, desc: 'one'},
			{id:2, desc: 'two'},
			{id:3, desc: 'three'}
		];

//configure the app. 
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

//use middleware
app.use(bodyParser());
app.use(express.static(path.join(__dirname, '../bower_components/'))); //when creating static path then it has to be relative to the directory from where aa3.js runs

//define routes
// you need to use here a relative path ./todos, because todos.js is not defined in in node-modules directory or Nodejs Core, so that nodejs could be able to find it
app.use(require('./todos4'));  
//you can add multiple files similar to todos4.js if you have more routes configured in them
//if your routes reside in a different module than your current node project 
//   then you should define the "Mount Point" in app4.js like that:
//   app.use('/api', require('api')); and in the todos4.js file you will need to define routes as follows:
//   router.get('/api', function(req,res){.....}) and
//   router.post('/api/add', function(req,res){.....});

//start the server
app.listen('1337', function() {
	console.log('ready on port 1337');

});
