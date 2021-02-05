class TankEnemyBig {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r
    }


    isTank() {
        return true;
    }

    attack() {
        if (player.x > this.x) {
            this.x += 0.65
        }
        if (player.y > this.y) {
            this.y += 0.65
        }
        if (player.x < this.x) {
            this.x -= 0.65
        }
        if (player.y < this.y) {
            this.y -= 0.65
        }
      }
  
    show() {
    stroke(0);
    strokeWeight(2);
    fill(51, 0, 138);
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

/*
class TankEnemySmall {
    constructor(x, y, r) {
      this.x = Math.random();
      this.y = y;
      this.r = r
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
    fill(51, 0, 77);
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
*/