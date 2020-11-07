var hr,min,sec;
var secAngle, minAngle, hrAngle;

function setup() {
  createCanvas(400,400);

}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  hr = hour();
  min = minute();
  sec = second();

  //rotating the hour hand
  hrAngle = map(hr%12,0,12,0,360);
  push();
  angleMode(CENTER);
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  //rotating the minute hand
  minAngle = map(min,0,60,0,360);
  push();
  angleMode(CENTER);
  rotate(minAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //rotating the second hand
  secAngle = map(sec,0,60,0,360);
  push();
  angleMode(CENTER);
  rotate(secAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  noFill();
  strokeWeight(10);
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
  stroke(0,255,0);
  arc(0,0,280,280,0,minAngle);
  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle);

  drawSprites();
}