PImage thisImage; 

void setup(){
	background(255);
	size((window.innerWidth*0.8),window.innerHeight);
	thisImage = loadImage("http://localhost:8888/rushkoff/assets/images/notification_small-01.png", "png");
}

void draw(){s
	image(thisImage, 30,30);
	if(mousePressed){
		noStroke();
		fill(random(255), random(255), random(255));
		// image(thisImage, map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight));
	}
}
