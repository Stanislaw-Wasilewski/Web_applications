$(function () {
	var l = 20;
	var t = 30;
	const kulki = [];	
	
	for(var i = 1; i <= 100; i++){
		kulki.push( $('.pole').append('<img src = "https://ade.acidcave.net/images/pellet.png" id="kulka' + [i] + '" style="left:'+ l +'px ; top:' +  t + 'px; position: absolute;">'));
		l += 52;
		
		if(i % 10 == 0 ){
			t += 50;
			l = 20;
		}
	}

	$('body').on('keydown', function () { 
		
		
				
		var pacman_lewo = $('#pacman').css('left');	
		var pacman_gora = $('#pacman').css('top');
		
		
		if(event.which == 39 ){
			pacman_lewo = parseInt(pacman_lewo) + 10;
			$('#pacman').css('transform','rotate(0deg)');	
		}
			
		if(event.which == 37 ){
			pacman_lewo = parseInt(pacman_lewo) - 10;
			$('#pacman').css('transform','scaleX(-1)');	
		}
			
		if(event.which == 38 ){
			pacman_gora  = parseInt(pacman_gora ) - 10;
			$('#pacman').css('transform','rotate(-90deg)');
		}
			
		if(event.which == 40 ){
			pacman_gora  = parseInt(pacman_gora ) + 10;
			$('#pacman').css('transform','rotate(90deg)');
		}
			
			
		if (parseInt( pacman_lewo)  <= 470 && parseInt( pacman_lewo) >= 0  && parseInt(pacman_gora)  <= 470 && parseInt(pacman_gora) >= 0 ){
			$('#pacman').css('left',pacman_lewo);
			$('#pacman').css('top',pacman_gora);
		}
		
			
		for( var j = 1; j <= 100; j++){	
			var kulka_lewo = $('#kulka' + [j] ).css('left');
			var kulka_gora = $('#kulka' + [j] ).css('top');

			if(parseInt(pacman_lewo) >= parseInt(kulka_lewo) - 45 && parseInt(pacman_lewo) <= parseInt(kulka_lewo) + 7 && parseInt(pacman_gora) >= parseInt(kulka_gora) - 40 &&  parseInt(pacman_gora) <= parseInt(kulka_gora) +  5){
				$('#kulka' + [j]).hide();	
				
				
			}	
					
		}
	});
	
});
		