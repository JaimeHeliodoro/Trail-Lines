let x=10;
let x1=10;
let x2=10;
let y=10;
let y1=10;
let y2=10;
let checkbox;
let button;

function setup() {
  createCanvas(400,400);
  background(0,0,100);
  checkbox = createCheckbox('loop()', true);
  checkbox.changed(checkLoop);
}

function checkLoop() {
  if (this.checked()) {
    loop();
  } else {
    noLoop();
  }
}

function draw() {
    fill(255,0,0);
  ellipse(x,50,20);
  ellipse(x1,100,20);
  ellipse(x1,150,20);
  ellipse(x,200,20);
  ellipse(x,250,20);
  ellipse(x2,300,20);
  ellipse(x,350,20);
  ellipse(50,y1,20);
  ellipse(100,y,20);
  ellipse(150,y1,20);
  ellipse(200,y2,20);
  ellipse(250,y,20);
  ellipse(300,y,20);
  ellipse(350,y2,20);
  x = x + 0.1;
  if (x > width) {
    x = 0;
  }
  x1=x1+0.1;
  if (x1>width) {
    x1=0;
  }
  x2=x2+0.1;
  if (x2>width) {
    x2=0;
  }
  y=y+0.1;
  if (y>height) {
    y=0;
  }
  y1=y1+0.1;
  if (y1>height) {
    y1=0;
  }
   y2=y2+0.1;
  if (y2>height) {
    y2=0;
  }
  x+=1;
  x1+=0.5;
  x2+=1.5;
  y+=3;
  y1+=1.5;
  y2+=3.5;
  x=x+2;
  x1=x1+2;
  x2=x2+2;
  y=y+2;
  y1=y1+2;
  y2=y2+2;
}
