class Player {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
  
    move() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 4
          }
        
          if (keyIsDown(RIGHT_ARROW)) {
            this.x += 4;
          }
        
          if (keyIsDown(UP_ARROW)) {
            this.y -= 4;
          }
        
          if (keyIsDown(DOWN_ARROW)) {
            this.y += 4;
          }
      }
  
    show() {
    stroke(0);
    strokeWeight(2);
    fill(139,69,19);
    ellipse(this.x, this.y, this.w, this.h);
    }


    shoot() {
  }
}