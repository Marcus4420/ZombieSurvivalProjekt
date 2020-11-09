function getMouseVector(){
	let mouseXalt = mouseX - player.x;
	let mouseYalt = mouseY - player.y;
	let mouseDir = createVector(mouseXalt, mouseYalt);
	mouseDir.normalize();
	return mouseDir;
}


function scoreboard() {
	stroke(0)
	textSize(16);
	fill(255)
	text("Current score: " + score, 10, 30);
	text("Current enemies: " + enemies.length, 10, 50);

}

function spawning() {
targetTimer += 1 * (score + 1);;
if (targetTimer > 500){
targetTimer = 0;
let enemy = new Enemy(random(width), random(height), 18);
enemies.push(enemy)
console.log("Enemy spawned")
console.log("Current enemies: " + enemies.length)
let BigSpawn = Math.floor(Math.random() * 2)
console.log(BigSpawn)
if (BigSpawn === 1) {
	let BigTank = new TankEnemyBig(random(width), random(height), 26);
	enemies.push(BigTank);
}

}
}