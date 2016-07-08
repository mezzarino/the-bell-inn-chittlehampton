var currentYear = (new Date).getFullYear();

$(document).ready(function() 
{	
	$("#year").text(currentYear);
	
	$('#facebook-button').on('click', function() {
  		ga('send', 'event', 'Header', 'ButtonClicked', 'Facebook');
	});
	
	$('#twitter-button').on('click', function() {
  		ga('send', 'event', 'Header', 'ButtonClicked', 'Twitter');
	});
	
	$('#google-button').on('click', function() {
  		ga('send', 'event', 'Header', 'ButtonClicked', 'Google+');
	});
	
	$('#instagram-button').on('click', function() {
  		ga('send', 'event', 'Header', 'ButtonClicked', 'Instagram');
	});
	
	$('#email-link').on('click', function() {
  		ga('send', 'event', 'Header', 'ButtonClicked', 'Email');
	});
	
	$('#tripadvisor-button').on('click', function() {
  		ga('send', 'event', 'Header', 'ButtonClicked', 'Tripadvisor');
	});
	
	$('#roast-review-link').on('click', function() {
  		ga('send', 'event', 'Related', 'LinkClicked', 'SundayRoast');
	});
	
	$('#linkedin-link').on('click', function() {
  		ga('send', 'event', 'Footer', 'LinkClicked', 'Linkedin');
	});
	
	$('#lunch-menu-link').on('click', function() {
  		ga('send', 'event', 'Related', 'LinkClicked', 'LunchMenu');
	});
	
	$('#dinner-menu-link').on('click', function() {
  		ga('send', 'event', 'Related', 'LinkClicked', 'DinnerMenu');
	});
	
	$('#specials-menu-link').on('click', function() {
  		ga('send', 'event', 'Related', 'LinkClicked', 'SpecialsMenu');
	});
	
	$('#drinks-menu-link').on('click', function() {
  		ga('send', 'event', 'Related', 'LinkClicked', 'DrinksMenu');
	});
	
	$('#north-devon-uk-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'NorthDevonUK');
	});
	
	$('#north-devon-beaches-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'NorthDevonBeaches');
	});
	
	$('#north-devon-cycling-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'NorthDevonCycling');
	});
	
	$('#north-devon-golf-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'NorthDevonGolf');
	});
	
	$('#north-devon-fishing-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'NorthDevonFishing');
	});
	
	$('#bradbury-farm-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'NorthBradburyFarm');
	});
	
	$('#northhaye-farm-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'NorthHayeFarmCottages');
	});
	
	$('#north-devon-attractions-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'NorthDevonAttractions');
	});
	
	$('#exmoor-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'Exmoor');
	});
	
	$('#north-devon-shopping-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'NorthDevonShopping');
	});
	
	$('#north-devon-walking-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'NorthDevonWalking');
	});
	
	$('#florida-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'Florida');
	});
	
	$('.telephone-link').on('click', function() {
  		ga('send', 'event', 'Header', 'ButtonClicked', 'Telephone');
	});
	
	$('#merchandise-link').on('click', function() {
  		ga('send', 'event', 'Related', 'LinkClicked', 'Merchandise');
	});
	
	$('#lunch-menu-content-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'LunchMenuContentLink');
	});
	
	$('#dinner-menu-content-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'DinnerMenuContentLink');
	});
	
	$('#specials-menu-content-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'SpecialsMenuContentLink');
	});
	
	$('#drinks-menu-content-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'DrinksMenuContentLink');
	});
	
	$('#specials-menu-content-link2').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'OtherSpecialsAvailable');
	});
	
	$('.fb-share-button').on('click', function() {
		var PageName = document.title;
  		ga('send', 'event', 'Content', PageName, 'FacebookShare');
	});
	
	$('.twitter-share-button').on('click', function() {
		var PageName2 = document.title;
  		ga('send', 'event', 'Content', PageName2, 'TwitterShare');
	});
	
	$('#hog-roast-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'HogRoastLink');
	});
	
	$('#christmas-promo-link').on('click', function() {
  		ga('send', 'event', 'Related', 'LinkClicked', 'ChristmasPromo');
	});
//	
	$('#christmas-menu-download-link').on('click', function() {
  		ga('send', 'event', 'Related', 'LinkClicked', 'ChristmasBookingLink');
	});
//	
//	$('#christmas-menu-booking-content-link').on('click', function() {
//  		ga('send', 'event', 'Content', 'LinkClicked', 'ChristmasBookingContentLink');
//	});
//	
//	$('#christmas-menu-booking-additionalcontent-link').on('click', function() {
//  		ga('send', 'event', 'Content', 'LinkClicked', 'ChristmasBookingAdditionalContentLink');
//	});
//	
//	$('#christmas-menu-download-link').on('click', function() {
//  		ga('send', 'event', 'Related', 'LinkClicked', 'ChristmasMenu');
//	});
//	
	$('#christmas-menu-download-content-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'ChristmasMenuContentLink');
	});
//	
	$('#christmas-menu-download-additionalcontent-link').on('click', function() {
  		ga('send', 'event', 'Content', 'LinkClicked', 'ChristmasMenuAdditionalContentLink');
	});
	
	//$('#valentines-promo-link').on('click', function() {
//  		ga('send', 'event', 'Related', 'LinkClicked', 'ValentinesPromo');
//	});
//	
//	$('#valentines-menu-download-content-link').on('click', function() {
//  		ga('send', 'event', 'Content', 'LinkClicked', 'ValentinesMenuContentLink');
//	});
//	
//	$('#valentines-menu-download-link').on('click', function() {
//  		ga('send', 'event', 'Related', 'LinkClicked', 'ValentinesMenu');
//	});
//	
//	$('#valentines-menu-booking-additionalcontent-link').on('click', function() {
//  		ga('send', 'event', 'Related', 'LinkClicked', 'ValentinesMenuBookingLink');
//	});
	
	//$('#mothers-day-booking-diningcontent-link').on('click', function() {
//  		ga('send', 'event', 'Content', 'LinkClicked', 'MothersDayDiningContentLink');
//	});
//	
//	$('#mothers-day-booking-additionalcontent-link').on('click', function() {
//  		ga('send', 'event', 'Content', 'LinkClicked', 'MothersDayAdditionalContentLink');
//	});
//	
//	$('#mothers-day-booking-home-link').on('click', function() {
//  		ga('send', 'event', 'Related', 'LinkClicked', 'MothersDayHomeLink');
//	});

//$('#easter-booking-content-link').on('click', function() {
 		//ga('send', 'event', 'Content', 'LinkClicked', 'EasterLink');
	//});
	
	$('.flexslider').flexslider({
        animation: "fade",
		slideshowSpeed: 5000,
		animationSpeed: 1500,
		randomize: false,
		animationLoop: true,
		controlNav: false,
		touch: true,
		directionNav: false
      });
	
	$("#related-images-container a")
	.attr('rel', 'media-gallery')
	.fancybox({			
		padding:4,
		prevEffect: 'fade',
		nextEffect: 'fade',
    	beforeShow : function() {
        	var alt = this.element.find('img').attr('alt');
        	this.inner.find('img').attr('alt', alt);      
        	this.title = alt;
    	},
		
		helpers : {
        	title: {
            	type: 'over'
        	}
    	}
	});

	$("#apartment-images-container a")
	.attr('rel', 'apartment-gallery')
	.fancybox({
	    padding: 4,
	    prevEffect: 'fade',
	    nextEffect: 'fade',
	    beforeShow: function () {
	        var alt = this.element.find('img').attr('alt');
	        this.inner.find('img').attr('alt', alt);
	        this.title = alt;
	    },

	    helpers: {
	        title: {
	            type: 'over'
	        }
	    }
	});

	$("#accommodation-images-container a")
	.attr('rel', 'accommodation-gallery')
	.fancybox({
	    padding: 4,
	    prevEffect: 'fade',
	    nextEffect: 'fade',
	    beforeShow: function () {
	        var alt = this.element.find('img').attr('alt');
	        this.inner.find('img').attr('alt', alt);
	        this.title = alt;
	    },

	    helpers: {
	        title: {
	            type: 'over'
	        }
	    }
	});
	
	$('#main-menu').slicknav({
		prependTo: 'body',
		label: 'NAVIGATION',
		closedSymbol: "&#9658;",
		openedSymbol: "&#9660;"
	});
	
	var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
	$(document).keydown(function(e) 
	{
  		kkeys.push( e.keyCode );
  		if ( kkeys.toString().indexOf( konami ) >= 0 ) 
		{
			$(document).unbind('keydown',arguments.callee);
			ga('send', 'event', 'Konami', 'ButtonsPressed', 'FolkVideo');	
    		$.fancybox.open(
			[
        		{
            		type: 'iframe',
            		href : 'http://www.youtube.com/embed/KCzMh5f89Wc?autoplay=1&wmode=opaque'
        		}
    		], 
			{
        		padding : 4
    		}
		);  
  	}
});

(function(d, s, id) 
{
	var js, fjs = d.getElementsByTagName(s)[0];
  	if (d.getElementById(id)) return;
  	js = d.createElement(s); js.id = id;
  	js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=180403938695619";
  	fjs.parentNode.insertBefore(js, fjs);
}
(document, 'script', 'facebook-jssdk')); 
 
$(window).bind("load resize", function()
{    
	var container_width = $('#facebook-widget').width();    
    $('#facebook-widget').html('<div class="fb-like-box" ' + 
    'data-href="https://www.facebook.com/pages/The-Bell-Inn-Chittlehampton/172159349508881"' +
    ' data-width="' + container_width + '" data-height="500" data-show-faces="false" ' +
    'data-stream="true" data-header="false" data-colorscheme="light"></div>');
    FB.XFBML.parse( );    
}); 


});

$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=51.0127&lon=-3.9451&units=metric',
	function(data) 
	{
		var $name = (data.name);
		var $weatherUrl = "http://www.bbc.co.uk/weather/2653117";
		var $description = (data.weather[0].description);  
		var $icon =  (data.weather[0].icon);
		var $temp =  Math.round((data.main.temp));
	
		$('#weather-widget').html("<span id='weather-temperature'>" + $temp + "&deg;C</span>");
	    $('#weather-widget').append("<span id='weather-icon'><a id='weather-button' href='" + $weatherUrl + "' target='_blank'><img src='http://openweathermap.org/img/w/" + $icon + ".png' alt='Currently " + $description + " and " + $temp + " &deg;C in " + $name + "' title='Currently " + $description + " and " + $temp + " &deg;C in " + $name + "' /></a></span>");
	});

	