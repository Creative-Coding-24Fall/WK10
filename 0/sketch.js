// TODO: add color and mouseover
//       classify it

let blinks = [];

class Blinky {
  constructor(x,y){
    this.x = mouseX;
    this.y = mouseY;
    this.visible= false;
    this.period= random(100, 1000);
    this.changed= 0;
    this.diam = 50;
    this.mocolor= color(250,0,0);
    this. mouseOver = false;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(200, 20, 120);
  for (let idx = 0; idx < blinks.length; idx++){
    let mBlink = blinks[idx];
    if (millis() - mBlink.changed > mBlink.period) {
      mBlink.visible = !mBlink.visible;
      mBlink.changed = millis();
    }

    let isMouseOver = dist(mouseX, mouseY, mBlink.x, mBlink.y) < (mBlink.Diam/2);

    if (mBlink.visible || isMouseOver) {
      if(isMouseOver){
        fill(mBlink.mocolor)
      }else {
        fill(255);
      }
      ellipse(mBlink.x, mBlink.y, mBlink.diam);
    }
  }
}

function mousePressed() {
  blinks.push(new Blinky(mouseX, mouseY));
}
