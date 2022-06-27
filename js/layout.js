
$(window).scroll(function () { 
	let header = $('header').height();
	if( $(window).scrollTop() > 20 ){
		$('header').addClass('fixed');    
		$('.menu ul').children('li').css({
			'margin-left': '2.5rem',
			'transition': '.5s'
		});  
		$('.menu-bar a').css({
			fontSize : '.8em'
		});
	}else{
		$('header').removeClass('fixed');
		$('.menu ul').children('li').css({
			'margin-left': '3.5rem',
			'transition': '.5s'
		}); 
		$('.menu-bar a').css({
			fontSize : '.9em'
		});
	}
});


