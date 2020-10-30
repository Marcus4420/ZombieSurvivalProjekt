class Enemy {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
  
    attack() {
        if (player.x > this.x) {
            this.x++
        }
        if (player.y > this.y) {
            this.y++
        }
        if (player.x < this.x) {
            this.x--
        }
        if (player.y < this.y) {
            this.y--
        }
      }
  
    show() {
    stroke(0);
    strokeWeight(2);
    fill(255,0,0);
    ellipse(this.x, this.y, this.w, this.h);
    }
}