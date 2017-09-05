module.exports=function(req,res,next){
	res.header('access-control-allow-origin', '*'); //http ot https will work due to * = allow everything
	res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
	res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
	next();
};
