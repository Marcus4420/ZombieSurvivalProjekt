function getMouseVector(){
	let mouseXalt = mouseX - player.x;
	let mouseYalt = mouseY - player.y;
	let mouseDir = createVector(mouseXalt, mouseYalt);
	mouseDir.normalize();
	return mouseDir;
}


function scoreboard() {
	noStroke();
	textSize(16);
	fill(0)
	text("Current score: " + score, 10, 30);
	text("Current enemies: " + enemies.length, 10, 50);

}