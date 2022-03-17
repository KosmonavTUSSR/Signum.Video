$(document).ready(function() {

	$("#calc_slider_1").slider({
		animate: "slow",
		range: "min",
		value: 205,
		step: 1,
		min: 1,
		max: 800,
		slide : function(event, ui) {
			$("#calc_input_1").val(ui.value);
			calculation();
		}
	});
	$( "#calc_input_1" ).val($( "#calc_slider_1" ).slider( "value" ));

	$('#calc_input_1').on("change", function(){
		var sliderInput = $(this).val();
		$( "#calc_slider_1" ).slider( "value", sliderInput );
		calculation();
	});


	$("#calc_slider_2").slider({
		animate: "slow",
		range: "min",
		value: 15,
		step: 1,
		min: 6,
		max: 80,
		slide : function(event, ui) {
			$("#calc_input_2").val(ui.value);
			calculation();
		}
	});
	$( "#calc_input_2" ).val($( "#calc_slider_2" ).slider( "value" ));

	$('#calc_input_2').on("change", function(){
		var sliderInput = $(this).val();
		$( "#calc_slider_2" ).slider( "value", sliderInput );
		calculation();
	});



	$('.ui-slider-handle:eq(0)').mousedown(function(){
		$('#calc_fly_1').stop().fadeIn(200);
		setInterval(() => {
			let pos_left_1 = $('.ui-slider-handle:eq(0)').css('left');
			$('#calc_fly_1').css({left: pos_left_1});
		}, 5);
	});

	$(document).mouseup(function(){
		$('#calc_fly_1').stop().fadeOut(200);
		$('#calc_fly_2').stop().fadeOut(200);
	});

	$('.ui-slider-handle:eq(0)').mouseover(function(){
		setInterval(() => {
			let pos_left_1 = $('.ui-slider-handle:eq(0)').css('left');
			$('#calc_fly_1').css({left: pos_left_1});
		}, 5);
		$('#calc_fly_1').stop().fadeIn(200);
	});
	$('.ui-slider-handle:eq(0)').mouseleave(function(){
		if ( $('.ui-slider-handle:eq(0)').hasClass("ui-state-active") == false ) {
			$('#calc_fly_1').stop().fadeOut(200);
		}
	});


	$('.ui-slider-handle:eq(1)').mousedown(function(){
		$('#calc_fly_2').stop().fadeIn(200);
		setInterval(() => {
			let pos_left_2 = $('.ui-slider-handle:eq(1)').css('left');
			$('#calc_fly_2').css({left: pos_left_2});
		}, 5);
	});

	$('.ui-slider-handle:eq(1)').mouseover(function(){
		setInterval(() => {
			let pos_left_2 = $('.ui-slider-handle:eq(1)').css('left');
			$('#calc_fly_2').css({left: pos_left_2});
		}, 5);
		$('#calc_fly_2').stop().fadeIn(200);
	});
	$('.ui-slider-handle:eq(1)').mouseleave(function(){
		if ( $('.ui-slider-handle:eq(1)').hasClass("ui-state-active") == false ) {
			$('#calc_fly_2').stop().fadeOut(200);
		}
	});


	calculation();
	function calculation() {

		var calc_val_1 = $('#calc_input_1').val();
		var calc_val_2 = $('#calc_input_2').val();

		$('.calc__numb--1').each(function(){
			if ( +$(this).text() <= calc_val_1 ) {
				$(this).addClass("calc__numb--blue");
			} else {
				$(this).removeClass("calc__numb--blue");
			}
		});

		$('.calc__numb--2').each(function(){
			if ( +$(this).text() <= calc_val_2 ) {
				$(this).addClass("calc__numb--blue");
			} else {
				$(this).removeClass("calc__numb--blue");
			}
		});

		var calc_itog = calc_val_2 * 660 / calc_val_1;
		if ( calc_itog < 48 ) {
			var calc_itog = 48;
		}

		$('.calc__itog').text( (+calc_itog.toFixed(0)).toLocaleString("ru") + " руб." );

	}

});
