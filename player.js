class Player {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r
    }
  
    move() {
        if (keyIsDown(LEFT_ARROW)) {
            playerimg = loadImage('Cowboy_Player_Left.png');
            this.x -= 4
          }
        
          if (keyIsDown(RIGHT_ARROW)) {
            playerimg = loadImage('Cowboy_Player_Right.png');
            this.x += 4;
          }
        
          if (keyIsDown(UP_ARROW)) {
            playerimg = loadImage('Cowboy_Player_Up.png');
            this.y -= 4;
          }
        
          if (keyIsDown(DOWN_ARROW)) {
            playerimg = loadImage('Cowboy_Player_Down.png');
            this.y += 4;
          }
      }
  
    show() {
      image(playerimg, this.x, this.y);
    }


    shoot() {
      totalshots++
      skud_effekt.volume(0.02);
      skud_effekt.play();
    }


  DeathCheck(){
		for (var i = 0; i < enemies.length; i++){
			var deadOrNot = collideCircleCircle(this.x, this.y, this.r, enemies[i].myX(), enemies[i].myY(), enemies[i].myR())
			if (deadOrNot){
        this.x = width/2
        this.y = height/2
        console.log("Din score blev: " + score);
        score = 0;
        acc = 0;
        musik.stop();
        totalshots = 0;
        shotshit = 0;
        enemies.length = 0;
        return true;
			}
		}
		return false;
	}
}