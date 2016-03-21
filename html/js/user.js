window.onload=function(){
	/*脚部*/
	$("footer a").on("click",function(){
		var index=$(this).index();
		$("footer a").removeClass("active");
		$("footer a").eq(index).addClass("active");		
	})	
	
	$(".nav span").on("click",function(){
		var index=$(this).index();
		/*$(".nav span").css("display","none");
		$(".nav span").eq(index).css("display","block");*/
		$(".nav span").removeClass("active");
		$(".nav span").eq(index).addClass("active");		
	})	
	
	
	
}
