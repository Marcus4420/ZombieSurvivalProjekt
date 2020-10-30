class Skud {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.musX = mouseX
      this.musY = mouseY
    }
  
    move() {
        if (this.musX > this.x) {
            this.x++
        }
        if (this.musY > this.y) {
            this.y++
        }
        if (this.musX < this.x) {
            this.x--
        }
        if (this.musY < this.y) {
            this.y--
        }
      }
  
    show() {
    stroke(0);
    strokeWeight(2);
    fill(0);
    rect(this.x, this.y, this.w, this.h);
    }
}