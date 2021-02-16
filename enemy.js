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
        if (player.x > this.x ) {
            zombieimg = loadImage('zombie_right.png')
            this.x++
        }
        if (player.y > this.y ) {
            zombieimg = loadImage('zombie_down.png')
            this.y++
        }
        if (player.x < this.x ) {
            zombieimg = loadImage('zombie_left.png')
            this.x--
        }
        if (player.y < this.y ) {
            zombieimg = loadImage('zombie_up.png')
            this.y--
        }
        else {
          zombieimg = loadImage('zombie_idle.png')
        }
      }
  
    show() {
      image(zombieimg, this.x, this.y);
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