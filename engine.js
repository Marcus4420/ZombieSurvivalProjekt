function getMouseVector(){
	let mouseXalt = mouseX - player.x;
	let mouseYalt = mouseY - player.y;
	let mouseDir = createVector(mouseXalt, mouseYalt);
	mouseDir.normalize();
	return mouseDir;
}

function musikken () {
	musik.volume(0.010);
	musik.play();
}

function scoreboard() {
	scorefixed = score * (acc/100)
	stroke(0)
	textSize(16);
	fill(255)
	text("Current score: " + scorefixed.toFixed(2), 10, 30);
	text("Current accurary: " + round(acc) + "%", 10, 50);
	text("Current enemies: " + enemies.length, 10, 70);

}


function spawnmessage() {
	fill(255);
	text("BRUG PILETASTERNE TIL AT BEVÆGE DIG \n SKYD NÅR DU SER EN FJENDE", width/2 + player.r, height/2);
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