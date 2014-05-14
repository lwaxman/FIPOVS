void setup(){
  background(255);
  size(430,430);
}

void draw(){
  if(mousePressed){
    noStroke();
    fill(random(255), random(255), random(255));
    rect(mouseY, mouseX, mouseX, mouseY);
  }
}

void mousePressed(){
  
}
