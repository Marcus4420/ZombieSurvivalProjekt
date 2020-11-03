class Skud{
	constructor(xSpd, ySpd){
		this.x = player.x;
		this.y = player.y;
		this.xSpd = 12*xSpd;
		this.ySpd = 12*ySpd;
	}
	
	show(){
		push()
		stroke(230, 255, 0);
		fill(230, 255, 0, 135);
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
				enemies.splice(i,1);
				score++
                return true;
			}
		}
		return false;
	}
}

