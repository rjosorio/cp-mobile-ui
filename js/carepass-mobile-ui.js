$(document).ready(function(){
	var $navStatus = "closed";
	$("#menu-btn").click(function(event){
		if ($navStatus == "closed"){
			$(".nav-menu").addClass("open");
			$(".container").addClass("open");
			$navStatus = "open";
		} else {
			$(".nav-menu").removeClass("open");
			$(".container").removeClass("open");
			$navStatus = "closed";
		}
	});
});