class Player {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r
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
    ellipse(this.x, this.y, this.r);
    }


    shoot() {
      /*
      skud_effekt.play();
  */
    }


  DeathCheck(){
		for (var i = 0; i < enemies.length; i++){
			var deadOrNot = collideCircleCircle(this.x, this.y, this.r, enemies[i].myX(), enemies[i].myY(), enemies[i].myR())
			if (deadOrNot){
        this.x = width/2
        this.y = height/2
        console.log("Din score blev: " + score);
        score = 0;
        enemies.length = 0;
        return true;
			}
		}
		return false;
	}
}