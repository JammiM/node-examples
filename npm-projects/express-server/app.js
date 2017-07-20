
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


app.get('/contact', function (request, response) {
	response.render('contact');
});



app.post('/contact/send', function (request, response) {
	console.log('test');
	let transporter = nodeMailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'blah@gmail.com',  // user's email
			pass: ''  // user's password
		}
	});
	//response.render('contact');

	let mailOptions = {
		from: 'James <blah@gmail.com>',  // user's email
		to : '',
		subject: 'Website Submission',
		message: 'blah blah Name: ' +request.body.name+'Email: '+request.body.email+ 'Message: ' + request.body.message,
		html: '<p>blah blah</p><ul><li>Name: '+request.body.name  +'</li><li>Email: '+request.body.email +'</li><li>Message: ' + request.body.message+'</li></ul>'
	};


	transporter.sendMail(mailOptions, function(error, information){
		if(error){
			console.log(error);
			response.redirect('/');
		} else {
			console.log('Message Sent: ' + information.response);
			response.redirect('/');
		}
	});

});


//Creating a 'route' for / (the home page)
app.get('/', function (request, response) {
	//	logs to the client
	response.render('index', { title: 'Welcome'});

});



app.listen(port, () => {
	console.log('Server running on port 1300...');
});