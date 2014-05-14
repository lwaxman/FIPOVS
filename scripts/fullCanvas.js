// PImage thisImage; 

void setup(){
	background(255);
	size(window.innerHeight, window.innerHeight);
	// thisImage = loadImage("http://localhost:8888/rushkoff/assets/images/notification_small-01.png", "png");
}

void draw(){
	// image(thisImage, 30,30);
	if(mousePressed){
		noStroke();
		fill(random(0,150), random(0,150), random(0,150));
		rect(map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), mouseX, mouseY);
		rect(map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), mouseY, mouseX);
		rect(map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), mouseX, mouseY);
		rect(map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), mouseY, mouseX);
	
		pushMatrix();
		translate(0, window.innerHeight);
		rotate(radians(270));
		rect(map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), mouseX, mouseY);
		rect(map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), mouseY, mouseX);
		rect(map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), mouseX, mouseY);
		rect(map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), mouseY, mouseX);
		popMatrix();

		pushMatrix();
		translate(window.innerHeight, 0);
		rotate(radians(90));
		rect(map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), mouseX, mouseY);
		rect(map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), mouseY, mouseX);
		rect(map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), mouseX, mouseY);
		rect(map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), mouseY, mouseX);
		popMatrix();

		pushMatrix();
		translate(window.innerHeight, window.innerHeight);
		rotate(radians(180));
		rect(map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), mouseX, mouseY);
		rect(map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), mouseY, mouseX);
		rect(map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), mouseX, mouseY);
		rect(map(mouseX, 0, window.innerWidth*0.8, 0, window.innerHeight), map(mouseY, 0, window.innerHeight, 0, window.innerWidth*0.8), mouseY, mouseX);
		popMatrix();
	
	}
}
