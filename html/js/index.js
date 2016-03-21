

window.onload=function(){
	var wHeight=$(window).height(),
		hHeight=$("header").height(),
		nHeight=$(".nav").height(),
		fHeight=$("footer").height(),
		index=0;
		scroll1=new iScroll("wrapper",{
			hScrollbar:false,
			vScrollbar:false
		});
		$("#wrapper").height(wHeight-hHeight-fHeight-nHeight-6);
		scroll1.refresh();
	/*头部*/	
	$(".top a").on("click",function(){
		var index=$(this).index();
		$(".top a").removeClass("active");
		$(".top a").eq(index).addClass("active");
		
	})
	/*脚部*/
	$("footer a").on("click",function(){
		var index=$(this).index();
		$("footer a").removeClass("active");
		$("footer a").eq(index).addClass("active");		
	})	
	/*足球现场，足球美女*/
	$(".nav div").on("click",function(){
	    index=$(this).index();
		$(".nav div").removeClass("active");
		$(".scroller .scroller1").css("display","none");
		$(".nav div").eq(index).addClass("active");
		$(".scroller .scroller1").eq(index).css("display","block");
		getajax(index+1);
		
	})
	getajax(index+1);
	function getajax(num){
		$.ajax({
			url:"http://localhost:8080/Proxy/FootBall/tweet/json/query/hotspot.do",
			data:{"category":num},
			success:function(d){
				var data=JSON.parse(d);
				//console.log(data);
				$.each(data.data.tweetlist, function(i) {
					var img=$("<img src='http://101.200.173.217:8080/FootBall"+data.data.tweetlist[i].defaultFilePath+data.data.tweetlist[i].thumbnailname+"'/>");
					//console.log(img);
					//或者用下面的方式写
					//var img = $('<img/>');
					//img.attr("src" , "http://101.200.173.217:8080/FootBall"+data.data.tweetlist[i].defaultFilePath+data.data.tweetlist[i].thumbnailname);
					var li=$("<li></li>");
					var p=$("<p></p>");
					li.append(img);
					li.append(p);
					p.html(data.data.tweetlist[i].content);
					
					var h1 = $('.scroller1').eq(index).find('ul').eq(0).height(),
						h2 = $('.scroller1').eq(index).find('ul').eq(1).height();
					if(h1>=h2){
						$('.scroller1').eq(index).find('ul').eq(1).append(li);
					}else{
						$('.scroller1').eq(index).find('ul').eq(0).append(li);
					}
						
				});
				scroll1.refresh();
			}
		
		})
	}
	window.scroll=function(){
		var oUl=$('.scroller1').eq(index).find('ul');
		var veiwHeight = document.documentElement.clientHeight;
		var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
		for(var i=0;i<oUl.length;i++){
			var aLi = oUl[i].getElementsByTagName('li');				
			var lastLi = aLi[aLi.length-1];
		}
		if(posTop(lastLi) < veiwHeight + scrollY){
			getajax(index+1);
		}		
	}
	
	function posTop(obj){
		var top = 0;		
		while(obj){
			top += obj.offsetTop;
			obj = obj.offsetParent;
		}		
		return top;
	}
	
}

