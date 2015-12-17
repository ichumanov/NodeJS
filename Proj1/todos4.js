//////////////////////////////////////////////////////
//Example working with Routers (starting with Nodejs 4)
//Files used: todos4.js
//			  app4.js
//			  index4.ejs
//////////////////////////////////////////////////////

var express= require('express');
var router = express.Router();
var todos = [
			{id:1, desc: 'one'},
			{id:2, desc: 'two'},
			{id:3, desc: 'three'}
		];


//define routes. 
router.get('/', function(req, res) {
	//load data from db here
	res.render('index4',{
		title:'My App 4',  //fix it here does not show the right title
		items:todos
	});
});

router.post('/add', function(req, res) {
	var newItem = req.body.newItem;
	todos.push({id: todos.length + 1, desc:newItem });
	console.log(newItem);
	res.redirect('/');  //always redirect app back to the root , so that a user can see the changes he made posted
	
})

module.exports = router;