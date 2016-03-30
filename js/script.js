$(document).ready(function() {
	//fix post position with javascript
	$('.overlayed_message').delay(800).slideToggle();

	// $('.post').css({
	// 	'height': custom_height,
	// 	'width': custom_width,
	// 	'top': height * 0.25
	// });


	$(this).resize(function() {
		var height = $('#post_container').height();
		var custom_dimension = height * 0.5;
		$('.post').css({
			'height': custom_dimension,
			'width': custom_dimension,
			'top': custom_dimension/8
		});
	});

	$('.post').click(function() {
		var x = $(this).position().left + $('.containers_main').position().left;
		// var x = $(this).position().left;
		// alert(x);
		var width1 = $(this).width();
		var width2 = $('#hidden_connector').width();
		var difference = width2 - width1;
		difference/=2;
		$('#hidden_connector').css({
			'left': x - difference
		});

		$('.containers_main').css({
			'box-shadow': 'none'
		});
		$('#hidden_connector').animate({
			'height': '50%'
		}, 500, function() {
			$(this).delay(500).animate({
				'height': '17.5%'
			}, function() {
				$('.containers_main').delay(800).css({
					'box-shadow': '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)'
				});				
			});
		});
	});
});