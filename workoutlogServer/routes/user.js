var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');

router.post('/', function(req,res) {
	//when we post to api user, it will want a user object in the body
	var username = req.body.user.username;
	var pass = req.body.user.password;	//TODO: hash this password - HASH=not human readable
	//Need to create a user object and use sequelize to put that user into our database
	User.create({
		username: username,
		passwordhash: ""
	}).then(
			//Sequelize is going to return the object it created from db.
			function createSuccess(user){
				//Successful get this:
				res.json({
					user: user,
					message: 'created'
				})
			},
			function createError(err){
				res.send(500, err.message);
			}
	);
});

module.exports = router;