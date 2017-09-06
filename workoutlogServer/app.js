require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');
var User = sequelize.import(__dirname + '\\models\\user');

User.sync();
/****** THIS WILL DROP (DELETE) THE USER TABLE ******/
User.sync({force:true}); //drops the tale completely 

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));
app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/session'));
app.use('/api/definition', require('./routes/definition'));

app.listen (3000, function(){
	console.log("app is listening on 3000");
});



