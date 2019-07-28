$(document).ready(function() {
	
	
  
	var btn_scroll = $('.button_top_scroll');
	var btn_menu_cost =$('.menu_cost');
	var btn_menu_contacts =$('.menu_contacts');

	    $(window).scroll(function() {
	      if ($(window).scrollTop() > 300) {
	      	$('.button_top_scroll').fadeIn();
	      } else {
	        $('.button_top_scroll').fadeOut();
	      }
	  	});

	  	btn_scroll.on('click', function(e) {
	    	e.preventDefault();
	    	$('html, body').animate({scrollTop:0}, '100');
	    	
	  	});

	  	btn_menu_cost.on('click', function(e) {
	    	e.preventDefault();
	    	$('html, body').animate({scrollTop:800}, '100');
	  	});

		btn_menu_contacts.on('click', function(e) {
		    e.preventDefault();
		    $('html, body').animate({scrollTop:2360}, '100');
		});



	
	$(".offer_content a").click(function () {
		alert("fcvftft")
	});


    $('.bx_slider').bxSlider();
	



});

