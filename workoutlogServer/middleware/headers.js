module.exports=function(req,res,next){
	res.header('access-control-allow-origin', '*'); //http or https will work due to * = allow everything
	res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE'); //these are the methods you can use
	res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
	next();
};
