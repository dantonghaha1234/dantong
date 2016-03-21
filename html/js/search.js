window.onload=function(){
	var wHeight=$(window).height(),
		hHeight=$("header").height(),
		sHeight=$(".search").height(),
		fHeight=$("footer").height(),
		scroll1=new iScroll("scroller",{
			hScrollbar:false,
			vScrollbar:false
		});
		$("#scroller").height(wHeight-hHeight-sHeight-fHeight-10);
		$("#scroller").css("background","#fff");
		scroll1.refresh();
		
		$(".btnn").click(function(){
		var inpu=$(".inp").val();
			$.ajax({
				url:"http://localhost:8080/Proxy/FootBall/user/json/queryall.do",
				//data:{"keyword": inpu},
				data:{"loginsuserid":inpu},
				//data:{"page.pageNo":inpu},
				success:function(d){
					var data=JSON.parse(d);
					//console.log(data);					
					$.each(data.data.userlist, function(i){
						//console.log(data.data.userlist[i].nickname);
						var img=$("<img src='http://101.200.173.217:8080/FootBall"+data.data.userlist[i].avatarpath+"'/>");
						var p1=$("<p class='nick'></p>");
						var p2=$("<p class='nam'></p>");
						p1.html(data.data.userlist[i].nickname);
						p2.html(data.data.userlist[i].signnature);
						var dt=$("<dt></dt>");
						var dd=$("<dd></dd>");
						var dl=$("<dl></dl>");
						dt.append(img);
						dl.append(dt);
						dl.append(dd);
						dd.append(p1);
						dd.append(p2);
						$(".myName").append(dl);						
					});
					scroll1.refresh();
				}
			});
		})
		
		
	
		
}
