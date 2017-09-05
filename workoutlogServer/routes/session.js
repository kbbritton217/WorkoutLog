var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');

router.post('/', function(req, res) {
	User.findOne( { where: { username: req.body.user.username } } ).then(
		function(user) { //1)First we need a function that searches for a particular user that matches the incoming request.	
			if (user) { //2)If the request is successful and the username matches, we need to do some stuff.
				bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches){
					if (matches) { //Compare the password
						var token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24 });
						res.json({
							user: user,
							message: "successfully authenticated", //if the password matches, show success and give the user a token.
							sessionToken: token
						});
					}else { //if the password doesn't match, show that the failure to authenticate
					res.status(500).send({ error: "failed to authenticate" });
					}
				});
			} else {
				res.status(500).send({ error: "failed to authenticate" }); //If the request is not successful and there is not a user that matches that request, throw an error.
			}
		},
		function(err) { //2)If the request was not successful and that user does not exist, throw an error.
			res.json(err);
		}
	);
			
});

module.exports = router;