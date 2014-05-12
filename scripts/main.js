$(document).ready(function(){

	// (function titleScroller(text) {
	// 	document.title = text;
	// 	console.log(text);
	// 	setTimeout(function () {
	// 		titleScroller(text.substr(1) + text.substr(0, 1));
	// 	}, 200);
	// }("Text to scroll goes HEEEEEEEEEEEEEEEEEEERE. "));

	runPageFour();
	$('#pageOne').hide();
	$('#pageTwo').hide();
	$('#pageThree').hide();
	$('#pageFive').hide();

	var phoneBuzzInterval;

	function runPageOne(){
		$('#pageOne').show();
		$('#agreeTwo').hide();
		$('#agreeThree').hide();
		$('#agreeFour').hide();
		$('#agreeFive').hide();
		$('#agreeSix').hide();
		$('.text').hide();
		$('.rushkoff').hide();

		$('#agreeOne').on('click', function(){
			$('#agreeTwo').show();
		});

		$('#agreeTwo').on('click', function(){
			$('#agreeThree').show();
		});

		$('#agreeThree').on('click', function(){
			$('#agreeFour').show();
		});
		$('#agreeFour').on('click', function(){
			$('#agreeFive').show();
		});
		$('#agreeFive').on('click', function(){
			$('#agreeSix').show();
		});
		$('#agreeSix').on('click', function(){
			$('#container').children().remove();
			$('.text').show();
		});
		$('.more').on('click', function(){
			$('.text').remove();
			$('.rushkoff').show();
		});		

		$('.next').on('click', function(){
			runPageTwo();
		});
	}

	function runPageTwo(){
		$('#pageOne').hide();
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
		$('#pageTwo').hide();
		$('#pageThree').show();
		$('body').css('background','#500D06');
		$('.text').hide();
		$('.rushkoff').hide();

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
				console.log(position);

				//if the slider position is full
				if(position>=90){
					$('#phoneSlider').slider('disable');
					setTimeout(function(){
						$('#phoneSlider').remove();
						$('#phoneSliderBG').remove();
						$('#phoneScreen').css({'background':'#FFF', 'box-shadow':'0px 0px 40px 10px #7D7D7D'});
						clearInterval(phoneBuzzInterval);
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


	function runPageFour(){
		titleScroller('jamina-mina ey eyyy walka walk eyy eyy');
		setBackground('#064959');
		$('#pageThree').hide();
		$('#pageFour').show();
		$('body').css('background','#065469');
		$('.text').hide();
		$('.rushkoff').hide();

		// console.log(result);


		setInterval(function(){
			$('.blurryText').css({'text-shadow':'0px 0px 10px #000'});
			setTimeout(function(){
				$('.blurryText').css({'text-shadow':'0px 0px 0px #000'});
				
			},200);
		},Math.random()*5000);
	}

	function titleScroller(text){
		document.title = text;
		setTimeout(function () {
			titleScroller(text.substr(1) + text.substr(0, 1));
		}, 200);
	}

	function setBackground(textColour){
		var text = "In our society, networked technologies are everywhere. Everyone is online all the time, through cell phones, computers, or even smart watches. In this digital age, I find myself feeling rather analog. By this I mean to say, I am aware of how much time I spend online, and I make a conscious decision to spend time offline. I read books and take notes on paper; I turn off my phone when I got to sleep; I turn off my computer when I don't plan on using it; My social media presence is quite low; I sketch out ideas for websites and other programming projects in physical sketchbooks before starting to work. Yet, even still, I am compelled to check my phone and my email on a regular basis, as if they control me, and not the other way around. For this reason, I decided to explore the ways in which we interact with technology in our daily lives.";
		var result = text.split("");
		var width = $(document).width();
		console.log(width);

		$('body').append('<div id="wrapper"></div>');

		var repeatBG = width/100;
		for(var i=0; i<repeatBG; i++){
			$('#wrapper').append('<div class="newDiv"></div>');
			$('.newDiv:nth-child('+(i+1)+')').css({
				'width':'100px', 
				'word-wrap':'break-word', 
				'display':'inline-block', 
				'color':textColour,
				'font-weight':'100',
				'position':'fixed',
				'z-index':'-100',
				'top':'0px',
				'left': 100*i
			});		
		}
		result.sort();
		$('.newDiv').html(result);	
	}

	//remove page after moving to next one. create array of remaining pages, choose one at random;

})//end doc.ready












