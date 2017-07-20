
// Loading the modules
var express 	= require('express');
var path 		= require('path');
var bodyParser 	= require('body-parser');  
var nodeMailer 	= require('nodemailer');


var port = 1300;

// init the app
var app = express();


// Sets the bodyParser to parse json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Sets the public folder to be the static folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('/about', function (request, response) {
	response.render('about');
});


//Creating a 'route' for / (the home page)
app.get('/', function (request, response) {
	
	// logs to the server 
	//console.log('Hello World')

	//	logs to the client
	response.render('index', { title: 'Welcome'});

});



app.listen(port, () => {
	console.log('Server running on port 1300...');
});