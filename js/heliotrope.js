
var overviewOpen = false;
var recognitionOpen = false;

jQuery.fn.fadeToggle = function(speed, easing, callback) { 
    
    if(overviewOpen) {
    	overviewOpen = false;
    }
    else {
    	overviewOpen = true;
    }
    
    return this.animate({opacity: 'toggle'}, speed, easing, callback); 
};


$(document).ready(function() {

	// hide the overview
	$('.overview').hide(); 


	$('#overview-link').click(function () { 
	    $('.overview').fadeToggle();
	    return false;
	});
	
	$('#overview-link2').click(function () { 
	    $('.overview').fadeToggle();

	    return false;
	});

	
	$('.gallery-holder').fadeIn(600);
	
    $('.gallery-holder').cycle({
		fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		speed: 600,
 	    timeout: 0,
 	    next: '.link-next',
 	    prev: '.link-prev',
 	    pagerEvent: 'click'
	});
	
	var counter = 1;
	var numImages = $('img').size();

	$('.link-next').click(function () {
	
		if (overviewOpen) {
			$('.overview').fadeToggle();
		}
			counter++;
			if (counter >= numImages){
				counter = 1;
			}
			$('#slideShowCounter').html(counter);

		return false;
	});

	$('.link-prev').click(function () {
		
		if (overviewOpen) {
			$('.overview').fadeToggle();
		}

			if (counter == 1){
				counter = numImages;
			}
			counter--;
			$('#slideShowCounter').html(counter);
		
		
		return false;
	});
	
	// listens for any navigation keypress activity
	$(document).keydown(function(e)
	{
		switch(e.which)
		{
			// user presses the "right arrow"
			case 39:	
						$('.link-next').click();
						break;	
						
			// user presses the "left arrow" key
			case 37:	
						$('.link-prev').click();
						break;
		}
	});
	
	

});