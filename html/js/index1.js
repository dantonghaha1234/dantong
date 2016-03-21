window.onload=function(){
	$(".top a").on("click",function(){
		var index=$(this).index();
		$(".top a").removeClass("active");
		$(".top a").eq(index).addClass("active");			
	})
	
	var wHeight=$(window).height(),
		hHeight=$("header").height(),
		fHeight=$("footer").height(),
		scroll2=new iScroll("scrollerr",{
			hScrollbar:false,
			vScrollbar:false
		});
		$("#scrollerr").height(wHeight-hHeight-fHeight-10);
		scroll2.refresh();
	
	
	
}
