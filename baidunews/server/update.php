<?php
	header("Content-type:application/json; charset=utf-8");
	$link =  mysqli_connect('localhost','root','root','baidunews',8889);

	if($link){
		//修改新闻
		$newsid = $_POST['id'];
		$newsType = $_POST['newsType'];
		$newsTitle = $_POST['newsTitle'];
		$newsImg = $_POST['newsImg'];
		$newsDate = $_POST['newsDate'];
		$newsHot = $_POST['newsHot'];

		$sql = "UPDATE `news` SET `newsType`='{$newsType}',`newsTitle`='{$newsTitle}',`newsImg`='{$newsImg}',`newsDate`='{$newsDate}',`newsHot`='{$newsHot}' WHERE `id`='{$newsid}'";
		mysqli_query($link,"SET NAMES utf8");
		$result = mysqli_query($link,$sql);
		
		echo json_encode(array('success'=>'ok'));
	}
	mysqli_close($link);
?>