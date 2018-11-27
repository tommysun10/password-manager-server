var express = require('express')
var app = express()
var session = require('express-session')
var bodyParser = require('body-parser');

//Website Link
const WEBSITE_URL = "http://localhost:3000";

// Connect to Mongo
const mongoose = require('mongoose');
mongoose.connect('mongodb:/admin:admin@ds151153.mlab.com:51153/password_manager');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//CORS Cross Origin
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", WEBSITE_URL);
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	next();
});

// Session ID
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: 'any string'
}));

// const userService = require('./services/user.service.server'); //(app);
// userService(app);

// require('./services/section.service.server')(app);
// require('./services/enrollment.service.server')(app);
// require('./services/quiz.service.server')(app);
// require('./services/question.service.server')(app);
// require('./services/submission.service.server')(app);

app.listen(process.env.PORT || 3000)