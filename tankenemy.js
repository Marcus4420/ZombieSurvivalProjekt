class TankEnemyBig {
    constructor(x, y, r, img, ad) {
    this.AD = ad
    this.img = img;
    this.x = x;
    this.y = y;
    this.r = r;
    }


    isTank() {
        return true;
    }

    attack() {
        if (player.x > this.x && (player.x - this.x) > 1) {
          if (this.AD != 'RIGHT') {
            this.img = loadImage('tank_right.png');
            this.AD = 'RIGHT'
          }
            this.x++
        }
        if (player.y > this.y && (player.y - this.y) > 1) {
          if (this.AD != 'DOWN') {
            this.img = loadImage('tank_down.png');
            this.AD = 'DOWN'
          }
            this.y++
      }
        if (player.x < this.x && (player.x - this.x) < -1) {
          if (this.AD != 'LEFT') {
            this.img = loadImage('tank_left.png');
            this.AD = 'LEFT'
          }
            this.x--
      }
        if (player.y < this.y && (player.y - this.y) < -1) {
          if (this.AD != 'UP') {
            this.img = loadImage('tank_up.png');
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