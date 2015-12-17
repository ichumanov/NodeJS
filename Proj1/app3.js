//Example working 
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



//define routes. 
app.get('/', function(req, res) {
	//load data from db here
	res.render('index3',{
		title:'My App 3',  //fix it here does not show the right title
		items:todos
	});
});

app.post('/add', function(req, res) {
	var newItem = req.body.newItem;
	todos.push({id: todos.length + 1, desc:newItem });
	console.log(newItem);
	res.redirect('/');  //always redirect app back to the root , so that a user can see the changes he made posted
	
})


app.listen('1337', function() {
	console.log('ready on port 1337');

});
