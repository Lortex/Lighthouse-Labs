$(document).ready(function() {
	$('img').fadeOut('slow');
	/*The thing that you can disappear yo list with*/
	console.log("Script included!");
	$('.button').click(function() {
        $(this).fadeToggle('slow');
    });
    $('.reset').click(function() {
        $('.button').fadeIn('slow');
    });

    /*I want the image sizes to change. I'm going to look
    an itty bitty bit ahead into jquery fo this
    In fact, I think it went over this already
    but I forget where it is*/
    /*Woo, got it. Less pretty but I'll work on it*/
    $('img').mouseenter(function() {
    	$(this).animate({width: "200px", height: "200px"}, 200);
    });
    $('img').mouseleave(function() {
    	$(this).animate({width: "150px", height: "150px"}, 200);
    })

    /*Hmm. I'll ask but I'm going to brute force this for now*/
        $('.beef').click(function() {
        $('img.beef').fadeToggle('slow');
    });
        $('.chili').click(function() {
        $('img.chili').fadeToggle('slow');
    });
        $('.rice').click(function() {
        $('img.rice').fadeToggle('slow');
    });
        $('.oil').click(function() {
        $('img.oil').fadeToggle('slow');
    });
        $('.shrooms').click(function() {
        $('img.shrooms').fadeToggle('slow');
    });
        $('.parsley').click(function() {
        $('img.parsley').fadeToggle('slow');
    });
         $('.veggies').click(function() {
        $('img.veggies').fadeToggle('slow');
    });


});