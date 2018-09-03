
$(document).ready(function(){
	"use strict";

	$(".scroll").click(function(event){   
	  event.preventDefault();
	  $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});

	var colors = [['#0515a8', '#05003B'], ['#0515a8', '#05003B'], ['#0515a8', '#05003B'], ['#0515a8', '#05003B']];
	for (var i = 1; i <= 5; i++) {
		var child = document.getElementById('circles-' + i),
			percentage = 50 + (i * 10);
			
		Circles.create({
			id:         child.id,
			percentage: percentage,
			radius:     80,
			width:      15,
			number:   	percentage / 10,
			text:       '%',
			colors:     colors[i - 1]
		});
	}


 });
