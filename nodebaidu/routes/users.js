var express = require('express');
var router = express.Router();
var mysql = require('mysql'); 
var dbconfig = require('./dbconfig');
var connection = mysql.createPool(dbconfig);

/*后台路由页面*/

/*获取所有新闻列表*/
router.get('/baidunews', function(req, res, next) {
  connection.query('SELECT * FROM `news` ORDER BY `id` DESC',function(err,rows){
  	res.json(rows);
  });
});

/*更新新闻内容*/
router.post('/update',function(req,res){
	var newsid = req.body.id,
		newsType = req.body.newsType,
		newsTitle = req.body.newsTitle,
		newsImg = req.body.newsImg,
		newsDate = req.body.newsDate,
		newsHot = req.body.newsHot;
	connection.query('UPDATE `news` SET `newsType`=?,`newsTitle`=?,`newsImg`=?,`newsDate`=?,`newsHot`=? WHERE `id`=?',[newsType,newsTitle,newsImg,newsDate,newsHot,newsid],function(err,rows){
		console.log(rows.changedRows);
		res.json(rows);
	});
});

/*更新时模态框取值*/
router.get('/curnews',function(req,res){
	var newsid = req.query.newsid;
	connection.query('SELECT * FROM `news` WHERE `id`=?',[newsid],function(err,rows){
		res.json(rows);
	});
});


/*删除新闻*/
router.post('/delete',function(req,res){
	var newsid = req.body.newsid;
	connection.query('DELETE FROM `news` WHERE `id`=?',[newsid],function(err,result){
		//console.log(result.affectedRows);
		res.json(result);
	});
});

/*添加新闻*/
router.post('/insert',function(req,res){
	var newsType = req.body.newsType,
		newsTitle = req.body.newsTitle,
		newsImg = req.body.newsImg,
		newsDate = req.body.newsDate,
		newsHot = req.body.newsHot;
	connection.query('INSERT INTO `news` (`newsType`,`newsTitle`,`newsImg`,`newsDate`,`newsHot`) VALUES (?,?,?,?,?)',[newsType,newsTitle,newsImg,newsDate,newsHot],function(err,result){
		if(!err){
			//console.log(result.insertId);
			res.json(result);
		};
	});
});

module.exports = router;
