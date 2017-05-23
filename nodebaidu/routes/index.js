var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('./dbconfig');

/*在主页获取新闻时的请求*/
router.get('/', function(req, res, next) {
	var newsType = req.query.newsType;

	var connection = mysql.createConnection(dbconfig);

	connection.connect();

	connection.query('SELECT * FROM `news` WHERE `newsType`=?',[newsType],function(err,rows,fields){
		//console.log(rows);
		res.json(rows);
	});
});

module.exports = router;
