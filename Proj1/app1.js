var express= require('express');

var app = express();

//configure the app. configure the routs
//see the documentation what are Express defaults.



//configure the middleware

//define the routes. '/' is a route of the application and a route
//app.get() -read settings,  app.set() - write settings,  app.put(), app.post(), app.delete()
//Routes are defined with URL pattern and callback function,
//	example: app.get('/login', function(req, res) {
								//render a login form for a user to collect login credentials
//                              });
//           app.post('/login', function(req,resp) {
								//this function gets the credentials to verify them and issue the cookie
//								})




app.get('/', function(req, res) {
	res.send('hello express');
});
app.listen('1337', function() {
	console.log('ready on port 1337');

});
