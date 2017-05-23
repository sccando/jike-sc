<?php
	header("Content-type:application/json; charset=utf-8");
	$link =  mysqli_connect('localhost','root','root','baidunews',8889);

	if($link){
		//插入新闻
		$newsType = $_POST['newsType'];
		$newsTitle = $_POST['newsTitle'];
		$newsImg = $_POST['newsImg'];
		$newsDate = $_POST['newsDate'];
		$newsHot = $_POST['newsHot'];

		$sql = "INSERT INTO `news` (`newsType`,`newsTitle`,`newsImg`,`newsDate`,`newsHot`) VALUES ('{$newsType}','{$newsTitle}','{$newsImg}','{$newsDate}','{$newsHot}')";
		mysqli_query($link,"SET NAMES utf8");
		$result = mysqli_query($link,$sql);
		
		echo json_encode(array('插入'=>'成功'));
	}
	mysqli_close($link);
?>