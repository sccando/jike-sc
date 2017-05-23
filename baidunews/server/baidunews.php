<?php
	header("Content-type:application/json; charset=utf-8");
	$link =  mysqli_connect('localhost','root','root','baidunews',8889);

	if($link){
		if($_GET['newsType']){
			mysqli_query($link,'SET NAMES UTF8');
			$newsType = $_GET['newsType'];
			$sql = "SELECT * FROM `news` WHERE `newsType` = '{$newsType}'";
			$result = mysqli_query($link,$sql);
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
			}
			echo json_encode($senddata);
		}else{
			mysqli_query($link,'SET NAMES UTF8');
			$sql = "SELECT * FROM `news`";
			$result = mysqli_query($link,$sql);
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
			}
			echo json_encode($senddata);
		};
	};
	mysqli_close($link);

?>