$(document).ready(function(){
	var classActive = 'active';

	$('.header .menu a').first().addClass(classActive);
	$('.caixa').first().addClass(classActive);

	$('.header .menu a').click(function(e){
		e.preventDefault();
		var itemId = $(this).attr('href');

		$('.header .menu a, .caixa').removeClass(classActive);
		$(this).addClass(classActive);
		$(itemId).addClass(classActive);
	});
});	

	