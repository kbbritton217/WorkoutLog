var Sequelize = require('sequelize'); //require 
var sequelize = new Sequelize('workoutlog', 'postgres', 'Luna2015_', {  	//initialize connection
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then( 	//authenticate connection
	function() {
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log(err);
	}
);

var User = sequelize.import('./models/user'); 	//import user file

module.exports = sequelize; 	//export connection to be used when sequelize is required