$(document).ready(function(){

	//Anima dropdown e preserva display ''
	$('.dropdown > a').click(function(){
		$('.dropdown-menu').slideDown().css('display', '');
	});

});