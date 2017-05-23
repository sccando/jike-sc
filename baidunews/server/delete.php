<?php
	header("Content-type:application/json;charset=utf-8");
	$link = mysqli_connect('localhost','root','root','baidunews',8889);
	
	if($link){
		$newsid = $_POST['newsid'];

		$sql = "DELETE FROM `news` WHERE `id`='{$newsid}'";
		mysqli_query($link,'SET NAMES utf8');
		$result = mysqli_query($link,$sql);

		echo json_encode(array('删除'=>'成功'));
	}
	mysqli_close($link);
?>