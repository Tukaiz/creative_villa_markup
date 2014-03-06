$(document).ready(function(){
	// $("#advanced-search .search-button").click(function() {
	// 	$('#search-results').slideDown(1000);
	// });

	// $('#search-results .job-details-link').click(function() {
	// 	$('#job-description').slideDown(1000);
	// });

	$('.close-overlay').on("click", function() {
		$('#job-description').fadeOut(800);
	});
});
