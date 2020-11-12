class Enemy {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r
      this.tank = false;
    }


    isTank() {
      return false;
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
    ellipse(this.x, this.y, this.r);
    }
    myX(){
		return this.x;
	}
	
	myY(){
		return this.y;
	}
	
	myR(){
		return this.r;
  }
}