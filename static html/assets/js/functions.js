// Initialize DOM functions
$(document).ready(function(){

	$("#advanced-search .search-button").click(function() {
		$('#search-results').attr("src","http://nationalrecoveries-fo.luceosolutions.com/");
		$('#search-results').slideDown(1000);
		scroll_to_this('#search-results');
	});

	// Initialize Parallax Script
	$('.parallax-bg').scrolly({bgParallax: true});
	$('.parallax').scrolly();

	// Initialize Carousel
	$("#carousel-main, #carousel-testimonials").swiperight(function() {
	  $(this).carousel('prev');
		});

	$("#carousel-main, #carousel-testimonials").swipeleft(function() {
	      $(this).carousel('next');
	});

	// Initialize sticky menu
	$('#advanced-search').waypoint('sticky', {
		offset: 81
	});

	// Talent Network scroll function
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
	    });
	});

	// Hide search results
	$('.close-overlay').on("click", function() {
		$('#job-description').fadeOut(800);
	});

});
