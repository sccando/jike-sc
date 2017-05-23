$(document).ready(function() {
    var $newsTable = $(".news-table tbody");
    refreshNews();

    function refreshNews() {
    	//清空表格里的内容
        $newsTable.empty();

        //发送请求，获取数据
        $.ajax({
        	url:'./server/baidunews.php',
        	type:'get',
        	datatype:'json',
        	success:function(data){
        		data.forEach(function(item,index,array){
        			var $tdId = $('<td>').html(item.id);
        			var $tdType = $('<td>').html(item.newsType);
        			var $tdTitle = $('<td>').html(item.newsTitle);
        			var $tdImg = $('<td>').html(item.newsImg);
        			var $tdDate = $('<td>').html(item.newsDate);
        			var $tdHot = $('<td>').html(item.newsHot);
        			var $tdCtrl = $('<td>');
        			var $btnEdit = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
        			var $btnDel = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
        			$tdCtrl.append($btnEdit,$btnDel);
        			var $tRow = $('<tr>');
        			$tRow.append($tdId,$tdType,$tdTitle,$tdImg,$tdDate,$tdHot,$tdCtrl);
        			$newsTable.append($tRow);
        		})
        		console.log(data);
        	}
        })
    }


    /*提交新闻的点击事件  开始*/	
    $('#btnSubmit').click(function(e){
    	e.preventDefault();
    	//输入判断
    	if($('#news-title').val() === '' || $('#news-img').val() === '' || $('#news-date').val() === ''){
    		if($('#news-title').val() === ''){
    			$('#news-title').parent().addClass("has-error");
    		}else{
    			$('#news-title').parent().removeClass("has-error");
    		}
    		if($('#news-img').val() === ''){
    			$('#news-img').parent().addClass("has-error");
    		}else{
    			$('#news-img').parent().removeClass("has-error");
    		}
    		if($('#news-date').val() === ''){
    			$('#news-date').parent().addClass("has-error");
    		}else{
    			$('#news-date').parent().removeClass("has-error");
    		}
    	}else{
    		//提交添加
    		var jsonNews = {
    			newsType:$('#news-type').val(),
    			newsTitle:$('#news-title').val(),
    			newsImg:$('#news-img').val(),
    			newsDate:$('#news-date').val(),
    			newsHot:$('#news-hot').val()
    		}

    		$.ajax({
    			url:'./server/insert.php',
    			type:'post',
    			data:jsonNews,
    			datatype:'json',
    			success:function(data){
    				console.log(data);
    				refreshNews();
    			}
    		});
    	}
    });
    /*提交新闻的点击事件  结束*/

    /*删除新闻的功能  开始*/
    var deleteId = null;	
	$newsTable.on('click','.btn-danger',function(e){
		$('#delModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(5).html();
		//console.log($(this).parent().prevAll().eq(5).html());
	});
	
	$('#delModal #confirmDelete').click(function(e){
		if(deleteId){
			$.ajax({
				url:'./server/delete.php',
				type:'post',
				data:{newsid:deleteId},
				success:function(){
					$('#delModal').modal('hide');
					refreshNews();
				}
			});
		}
	});
    /*删除新闻的功能  结束*/	

     /*修改新闻的功能  开始*/
    var updateId = null;	
	$newsTable.on('click','.btn-primary',function(e){
		$('#updateModal').modal('show');
		//console.log($(this).parent().prevAll().eq(5).html());
        updateId = $(this).parent().prevAll().eq(5).html();
		
		$.ajax({
			url:'./server/curnews.php',
			type:'get',
			datatype:'json',
			data:{newsid:updateId},
			success:function(data){
				$('#unews-type').val(data[0].newsType);
				$('#unews-title').val(data[0].newsTitle);
				$('#unews-img').val(data[0].newsImg);
				var udate = data[0].newsDate.split(' ')[0];
				$('#unews-date').val(udate);
				$('#unews-hot').val(data[0].newsHot);
			}
		});
	});

	$('#updateModal #confirmUpdate').click(function(e){
		$.ajax({
			url:'./server/update.php',
			type:'post',
			data:{
				newsType:$('#unews-type').val(),
				newsTitle:$('#unews-title').val(),
				newsImg:$('#unews-img').val(),
				newsDate:$('#unews-date').val(),
				newsHot:$('#unews-hot').val(),
				id:updateId
			},
			success:function(){
				$('#updateModal').modal('hide');
				refreshNews();
			}
		})
	});
    /*修改新闻的功能  结束*/

});
