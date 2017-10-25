$(document).ready(function(){
	
	$('a').on('click', function(event){     
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	

	
	$(window).scroll(function() { 
        if ($(document).scrollTop() > $(window).height()) { 
          $(".navbar-fixed-top").css("background-color", "#070721"); 
        } else {
          $(".navbar-fixed-top").css("background-color", "transparent"); 
        }
      });
	  
	
		$('input').focus(function(){
			$(this).animate({width: '80%'}, 500);
		});
		$('input').blur(function(){
			$(this).animate({width: '60%'}, 500);
		});
		
		$('textarea').focus(function(){
			$(this).animate({width: '80%'}, 500);
		});
		$('textarea').blur(function(){
			$(this).animate({width: '60%'}, 500);
		});
		
		$(".slider > div:gt(0)").hide();
			setInterval(function() {
			$('.slider > div:first')
				.slideUp()
				.next()
				.slideDown()
				.end()
				.appendTo('.slider');
		}, 6000);
	
});