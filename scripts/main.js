$(document).ready(function(){

	// var backgroundColour = '#FFF';

	runPageFour();

	$('#pageThree').hide();
	$('#pageTwo').hide();
	$('#pageOne').hide();
	$('#pageFive').hide();

	var phoneBuzzInterval;
	var popUpInterval;

	function runPageOne(){
		titleScroller('~~~~~~F.O.P.I.V.S.~~~~~~');
		setBackground('#004604');
		$('#pageOne').show();
		$('#agreeOne').hide();
		$('#agreeTwo').hide();
		$('#agreeThree').hide();
		$('#agreeFour').hide();
		$('#agreeFive').hide();
		$('#agreeSix').hide();
		// $('.text').hide();
		$('.rushkoff').hide();

		var count = 1;
		var idCount = 1;
		var delay = 500;

		popUpInterval = setInterval(function(){
			$('#container').append('<img src="assets/images/agreement'+count+'.png" class="image" id="agree'+idCount+'" alt="agree">');
			$('#agree'+idCount).css({
				'position':'absolute',
				'left': Math.random()*60 + '%',
				'top': Math.random()*80 + '%'
			});
			count++;
			idCount++;
			if(count>6) count=1;
			if(idCount>10) clearInterval(popUpInterval);

			$('.image').click(function(){ 
				$('#'+this.id).remove();
				if( $('#container').is(':empty') ){
					$('#container').remove();
				}
			});
		},delay);

		$('.more').on('click', function(){
			$('.text').remove();
			$('.rushkoff').show();
		});		

		$('.next').on('click', function(){
			$('#pageOne').remove();
			runPageTwo();
		});
	}

	function runPageTwo(){
		// backgroundColour = '#1A2881';
		// $()
		setBackground('#1A2881');
		$('#pageTwo').show();
		$('body').css('background','#0B0F46');
		// $('.text').hide();
		$('.more').hide();
		$('.rushkoff').hide();

		$('.slot').jSlots({  
			winnerNumber : 3,
			spinner : '#slotButton',
			easing : 'easeOutSine',
			onWin : function(){
				$('#slotButton').remove();
				$('.more').show();
			}
		});  

		$('.more').on('click', function(){
			console.log('clicky clicky');
			$('#container2').hide();
			$('.rushkoff').show();
		});

		$('.next').on('click', function(){
			runPageThree();
		});
	}

	function runPageThree(){
		setBackground('#6D2817');
		$('#pageTwo').hide();
		$('#pageThree').show();
		$('body').css('background','#500D06');
		$('.text').hide();
		$('.rushkoff').hide();
		$('#phoneScreen img').hide();
		$('.more').hide();

		$('#phoneBase').jrumble();
		$('#phoneSlider').slider({
			orientation: "horizontal",
			range: "min",
			max: 100,
			value: 0,
			slide: function(event, ui){} 
		});

		setTimeout(function(){
			//wait 2 seconds, then do this:
			buzzPhone();
			//on slide...
			$('#phoneSlider').on('slide', function(event, ui){
				var position = $('#phoneSlider').slider('value');

				//if the slider position is full
				if(position>=90){
					$('#phoneSlider').slider('disable');
					setTimeout(function(){
						$('#phoneSlider').remove();
						$('#phoneSliderBG').remove();
						$('#phoneScreen img').show();
						$('#phoneScreen').css({'background':'white', 'box-shadow':'0px 0px 40px 10px #7D7D7D'});
						clearInterval(phoneBuzzInterval);
						$('.more').show();

						$('.more').on('click', function(){
							$('#container3').remove();
							$('.rushkoff').show();
						});

						$('.next').on('click', function(){
							runPageFour();
						});
					},200);
				}
			});
		},2000);
	}
	function buzzPhone(){
		$('#phoneScreen').css({'background':'#EEE', 'box-shadow':'0px 0px 40px 10px #7D7D7D'});
		phoneBuzzInterval = setInterval(function(){
			$('#phoneBase').trigger('startRumble');
			setTimeout(function(){
				$('#phoneBase').trigger('stopRumble');
			}, 1000);
		}, 2000);	
	}//end page 3

	var delay;
	function runPageFour(){
		titleScroller('jamina-mina ey eyyy walka walk eyy eyy');
		setBackground('#085A5F');
		$('#pageThree').hide();
		$('#pageFour').show();
		$('body').css('background','#064550');
		$('.text').hide();
		$('.rushkoff').hide();

		// console.log(result);

		delay = Math.random()*5000;
		setInterval(function(){
			$('.blurryText').css({'text-shadow':'0px 0px 10px #000'});
			setTimeout(function(){
				$('.blurryText').css({'text-shadow':'0px 0px 0px #000'});
				
			},200);
		},delay);
	}

	function titleScroller(text){
		document.title = text;
		setTimeout(function () {
			titleScroller(text.substr(1) + text.substr(0, 1));
		}, 200);
	}

	var text;
	var result;
	var newResult;
	var width; 

	function setBackground(textColour){
		$('.newDiv').remove();
		$('.wrapper').remove();

		text = "In our society, networked technologies are everywhere. Everyone is online all the time, through cell phones, computers, or even smart watches. In this digital age, I find myself feeling rather analog. By this I mean to say, I am aware of how much time I spend online, and I make a conscious decision to spend time offline. I read books and take notes on paper; I turn off my phone when I got to sleep; I turn off my computer when I don't plan on using it; My social media presence is quite low; I sketch out ideas for websites and other programming projects in physical sketchbooks before starting to work. Yet, even still, I am compelled to check my phone and my email on a regular basis, as if they control me, and not the other way around. For this reason, I decided to explore the ways in which we interact with technology in our daily lives.";
		result = text.split("");
		result.sort();
		result = result.join("");
		result = result.trim();


		width = $(document).width();

		$('body').append('<div class="wrapper"></div>');

		var repeatBG = Math.ceil(width/95);
		for(var i=0; i<repeatBG; i++){
			$('.wrapper').append('<div class="newDiv"></div>');
			$('.newDiv:nth-child('+(i+1)+')').css({
				'width':'100px', 
				'word-wrap':'break-word', 
				'display':'inline-block', 
				'color':textColour,
				'font-weight':'100',
				'line-height':'12px',
				'position':'fixed',
				'z-index':'-100',
				'top':'0px',
				'left': 95*i
			});		
		}


		// $('.newDiv').html(result);	
	}
	backgroundScroller(result); //, textColour);

	function backgroundScroller(text){	
		$('.newDiv').html(text);
		setTimeout(function(){
			backgroundScroller(text.substr(10) + text.substr(0, 10)); //, textColour);
			console.log(text);
			newResult = text;
		},200);
	}
	backgroundScroller(newResult); 



	//remove page after moving to next one. create array of remaining pages, choose one at random;

})//end doc.ready












