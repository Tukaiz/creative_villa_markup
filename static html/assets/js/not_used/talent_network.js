function scroll_to_this(selector){
	var target = selector,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-125
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
}


$(document).ready(function(){
	$(".talent-network").click( function() {
		$('#job-description').fadeOut(800);
		
		$('#join').slideDown(1000);
	});


	$('a.scroll-to[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-125
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
