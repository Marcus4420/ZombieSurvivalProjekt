class Skud{
	constructor(xSpd, ySpd){
		this.x = player.x + player.r/2;
		this.y = player.y + player.r/2;
		this.xSpd = 12*xSpd;
		this.ySpd = 12*ySpd;
		this.randX = Math.floor(Math.random(150))
		this.randY = Math.floor(Math.random(150))
	}
	
	show(){
		push()
		stroke(43, 39, 39);
		fill(0, 0, 0, 135);
		ellipse(this.x, this.y, 10);
		pop();
	}
	
	update(){
		this.x += this.xSpd;
		this.y += this.ySpd;
		this.xSpd *= 0.994;
		this.ySpd *= 0.994;
	}
	
	outOfBounds(){
		return(this.x > width+10 || this.x < -10 || this.y > height+10 || this.y < -10);
    }

    hitScan(){
		for (var i = 0; i < enemies.length; i++){
			var collideOrNot = collideCircleCircle(this.x, this.y, 30, enemies[i].myX(), enemies[i].myY(), enemies[i].myR())
			if (collideOrNot){
				if (enemies[i].isTank()){
					if (enemies[i].r > 13) {
					enemies[i].r = enemies[i].r - 13
					console.log(enemies[i].r);
					}
					else {
						enemies.splice(i,1);
					}
				}
				else if (!enemies[i].isTank()){
					enemies.splice(i,1);
				}
				score++
				shotshit++
				acc = (shotshit/totalshots) * 100
				return true
			}
		}
		return false;
		shotsmissed++
		acc = (shotshit/totalshots) * 100
	}
}

