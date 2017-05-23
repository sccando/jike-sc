<?php
	header("Content-type:application/json;charset=utf-8");
	$link = mysqli_connect('localhost','root','root','baidunews',8889);

	if($link){
		$newsid = $_GET['newsid'];

		mysqli_query($link,'SET NAMES utf8');
		$sql = "SELECT * FROM `news` WHERE `id`='{$newsid}'";
		$result = mysqli_query($link,$sql);
		//$row = mysqli_fetch_assoc($result);
		//echo json_encode($row);
		$senddata = array();
		while($row = mysqli_fetch_assoc($result)){
			array_push($senddata,array(
					'id'=>$row['id'],
					'newsType'=>$row['newsType'],
					'newsTitle'=>$row['newsTitle'],
					'newsImg'=>$row['newsImg'],
					'newsDate'=>$row['newsDate'],
					'newsHot'=>$row['newsHot']
				));
		};

		echo json_encode($senddata);
	};
	mysqli_close($link);
?>