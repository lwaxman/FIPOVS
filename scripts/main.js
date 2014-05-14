$(document).ready(function(){

	// var backgroundColour = '#FFF';
	// pickNewPage();

	runPageTwo();
	$('#pageOne').hide();
	$('#pageTwo').show();
	$('#pageThree').hide();
	$('#pageFour').hide();
	$('#pageFive').hide();
	titleScroller('you are what you eat ');

	var currentPage;

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PAGE ONE //
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// POP UPS //////
	
	var popUpInterval;
	function runPageOne(){
		currentPage = 1;
		console.log('this is PAGE ONE');
		setBackground('#004604');

		$('#pageOne').show();
		$('#pageTwo').hide();
		$('#pageThree').hide();
		$('#pageFour').hide();
		$('#pageFive').hide();

		$('#agreeOne').hide();
		$('#agreeTwo').hide();
		$('#agreeThree').hide();
		$('#agreeFour').hide();
		$('#agreeFive').hide();
		$('#agreeSix').hide();
		// $('.text').hide();
		$('.rushkoff').hide();
		$('#back').hide();

		var count = 1;
		var idCount = 1;
		var newCount = 1;

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

		},Math.random()*100);

		$('.more').on('click', function(){
			$('.text').remove();
			$('.rushkoff').show();
		});		

		$('.next').on('click', function(){
			$('#pageOne').remove();
			// pickNewPage();
			runPageTwo();
		});
	}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PAGE TWO //
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// SLOT MACHINE //////

	function runPageTwo(){
		currentPage = 2;
		console.log('this is PAGE TWO');
		setBackground('#1A2881');
		
		$('#pageOne').hide();
		$('#pageTwo').show();
		$('#pageThree').hide();
		$('#pageFour').hide();
		$('#pageFive').hide();

		$('body').css('background','#0B0F46');
		$('.more').hide();
		$('.rushkoff').hide();
		$('#back').hide();

		$('.slot').jSlots({  
			winnerNumber : 3,
			spinner : '#slotButton',
			easing : 'easeOutSine',
			onWin : function(){
				$('#slotButton').remove();
				$('.more').show();
			}
		});  

		$('#slotButton').on('click', function(){
			$('#slotSound').trigger("play");
		});

		$('.more').on('click', function(){
			console.log('clicky clicky');
			$('#container2').hide();
			$('.rushkoff').show();
		});

		$('.next').on('click', function(){
			runPageThree();
			// pickNewPage();
		});
	}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PAGE THREE //
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PHONE BUZZ //////

	var phoneBuzzInterval;
	function runPageThree(){
		currentPage = 3;
		console.log('this is PAGE THREE');
		setBackground('#6D2817');
		$('body').css('background','#500D06');

		// var audio = new Audio('assets/sounds/phoneVibrate.mp3');
		$('#pageOne').hide();
		$('#pageTwo').hide();
		$('#pageThree').show();
		$('#pageFour').hide();
		$('#pageFive').hide();


		$('#container3').show();

		$('.text').hide();
		$('.rushkoff').hide();
		$('#back').hide();
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
						$('#heartbeat').trigger("play");
						console.log( $('#heartbeat').volume );
						$('#phoneSlider').hide();
						$('#phoneSliderBG').hdie();
						$('#phoneScreen img').show();
						$('#phoneScreen').css({'background':'white', 'box-shadow':'0px 0px 40px 10px #7D7D7D'});
						clearInterval(phoneBuzzInterval);
						$('.more').show();

						$('.more').on('click', function(){
							$('#container3').hide();
							$('.rushkoff').show();
						});

						$('.next').on('click', function(){
							$('#heartbeat').trigger("stop");
							runPageFour();
							// pickNewPage();
						});
					},200);
				}
			});
		},2000);
	}
	function buzzPhone(){
		$('#phoneScreen').css({'background':'#EEE', 'box-shadow':'0px 0px 40px 10px #7D7D7D'});
		phoneBuzzInterval = setInterval(function(){
			$('#vibrate').trigger("play");
			$('#phoneBase').trigger('startRumble');
			setTimeout(function(){
				$('#vibrate').trigger("stop");
				$('#phoneBase').trigger('stopRumble');
			}, 1000);
		}, 2000);	
	}//end page 3

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PAGE FOUR //
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// MULTITASKING //////
	
	var delay;
	function runPageFour(){
		currentPage = 4;
		console.log('this is PAGE FOUR');
		setBackground('#085A5F');

		$('#pageOne').hide();
		$('#pageTwo').hide();
		$('#pageThree').hide();
		$('#pageFour').show();
		$('#pageFive').hide();

		$('body').css('background','#064550');
		$('.text').hide();
		$('.rushkoff').hide();
		$('#back').hide();

		// getElementByID('#container4');

		delay = Math.random()*5000;
		setInterval(function(){
			$('.blurryText').css({'text-shadow':'0px 0px 10px #000'});
			$('#burryMore').css({'text-shadow':'0px 0px 10px #24BA02'});
			setTimeout(function(){
				$('.blurryText').css({'text-shadow':'0px 0px 0px #000'});
				$('#burryMore').css({'text-shadow':'0px 0px 0px #24BA02'});
			},200);
		},delay);
	}

	function titleScroller(text){
		document.title = text;
		setTimeout(function () {
			titleScroller(text.substr(1) + text.substr(0, 1));
		}, 200);
	}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PAGE FIVE //
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// OVERALL //////
	
	function runPageFive(){
		clearInterval(phoneBuzzInterval);

		$('#pageOne').hide();
		$('#pageTwo').hide();
		$('#pageThree').hide();
		$('#pageFour').hide();
		$('#pageFive').show();

		$('#back').show();

		console.log('this is PAGE FIVE');
		titleScroller('here is some more information. I hope you find it very helpful. ');
		setBackground('#085A5F');
		$('body').css('background','#04312F');
		
		$.ajax({
	        async:false,
	        url: 'scripts/main.js',
	        dataType: 'text',
	        success: function(data){
		        $('#myDiv').append('<pre>'+data+'</pre>');
            }
        });

		$('#back').on('click', function(){
			
			titleScroller('you are what you eat ');
			$('#back').hide();
			$('#pageFive').hide();
			if(currentPage==1) runPageOne();
			if(currentPage==2) runPageTwo();
			if(currentPage==3) runPageThree();
			if(currentPage==4) runPageFour();
		});

		pageScroll();
		// $('#myDiv').html(code);
	}

	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// BACKGROUND SCROLL //
	
	backgroundScroller(result); 
	function backgroundScroller(text){	
		$('.newDiv').html(text);
		setTimeout(function(){
			backgroundScroller(text.substr(10) + text.substr(0, 10));
			// console.log(text);
			newResult = text;
		},200);
	}
	backgroundScroller(newResult); 

	// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PICK NEW PAGE //

	// function pickNewPage(){

		// remove page after moving to next one. create array of remaining pages, choose one at random;

		// var newPageNumber = Math.round(Math.random() * (5 - 1) + 1);
		// console.log(newPageNumber);
		// if(newPageNumber==1) runPageOne();
		// if(newPageNumber==2) runPageTwo();
		// if(newPageNumber==3) runPageThree();
		// if(newPageNumber==4) runPageFour();
		// if(newPageNumber==5) runPageFive();

	// }

	// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PAGE SCROLL //
	
	var scrolldelay;
	function pageScroll(){
	    window.scrollBy(0,50);
	    scrolldelay = setTimeout('pageScroll()',10);
	}

	// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// SET BACKGROUND //
	
	var text;
	var result;
	var newResult;
	var width; 
	var height; 
	function setBackground(textColour){
		$('.newDiv').remove();
		$('.wrapper').remove();

		text = "In our society, networked technologies are everywhere. Everyone is online all the time, through cell phones, computers, or even smart watches. In this digital age, I find myself feeling rather analog. By this I mean to say, I am aware of how much time I spend online, and I make a conscious decision to spend time offline. I read books and take notes on paper; I turn off my phone when I got to sleep; I turn off my computer when I don't plan on using it; My social media presence is quite low; I sketch out ideas for websites and other programming projects in physical sketchbooks before starting to work. Yet, even still, I am compelled to check my phone and my email on a regular basis, as if they control me, and not the other way around. For this reason, I decided to explore the ways in which we interact with technology in our daily lives.  and I make a conscious decision to spend time offline. I read books and take notes on paper; I turn off my phone when I got to sleep. And then I make strange net art out of my professor's face and send it to my entire class, just to make sure this text is long enough.";
		result = text.split("");
		result.sort();
		result = result.join("");
		result = result.trim();


		width = window.innerWidth;
		height = window.innerHeight;

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
	}

	$('#info').hover(function(){
		$('#info').html('more information');
		// runPageFive();
	},function(){
		$('#info').html('?');
	});

	$('#info').on('click', function(){
		runPageFive();
	});

	console.log(currentPage);



})//end doc.ready












