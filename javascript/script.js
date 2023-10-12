$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
		// Store hash
		var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			  scrollTop: $(hash).offset().top
			}, 100, function(){
		   
			    // Add hash (#) to URL when done scrolling (default click behavior)
			    window.location.hash = hash;
		    });
		} // End if
	});

	new TypeIt(".homeIntro", { 
		strings: ["Vinna Gu", "Software Developer @ CGI"],
		speed: 75
	}).go();
});

var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
    
    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};
$('#f').followTo(250);