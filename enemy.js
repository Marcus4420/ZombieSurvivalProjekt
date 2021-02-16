class Enemy {
    constructor(x, y, r,img, ad) {
      this.img = img
      this.AD
      this.x = x;
      this.y = y;
      this.r = r
      this.tank = false;
    }


    isTank() {
      return false;
  }

  attack() {
        if (player.x > this.x && (player.x - this.x) > 1) {
          if (this.AD != 'RIGHT') {
            this.img = loadImage('zombie_right.png');
            this.AD = 'RIGHT'
          }
            this.x++
        }
        if (player.y > this.y && (player.y - this.y) > 1) {
          if (this.AD != 'DOWN') {
            this.img = loadImage('zombie_down.png');
            this.AD = 'DOWN'
          }
            this.y++
      }
        if (player.x < this.x && (player.x - this.x) < -1) {
          if (this.AD != 'LEFT') {
            this.img = loadImage('zombie_left.png');
            this.AD = 'LEFT'
          }
            this.x--
      }
        if (player.y < this.y && (player.y - this.y) < -1) {
          if (this.AD != 'UP') {
            this.img = loadImage('zombie_up.png');
            this.AD = 'UP'
          }
            this.y--
        }
      }

    show() {
      image(this.img, this.x, this.y);
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