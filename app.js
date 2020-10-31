let player;
let enemies = [];
let SkudSkudt = [];
let balloonSpawnMultiplier = 2;
let targetTimer = 0;

function setup() {
    createCanvas(600,600);
    //Creates the player class
    player = new Player(width/2, height/2, 20, 20);
}

function draw() {
    background(245,245,220);
    
    for (let Enemy of enemies) {
    Enemy.show();
    Enemy.attack();
    }

    player.show();
    player.move();

    for (i = 0; i < SkudSkudt.length; i++) {
        SkudSkudt[i].show();
        SkudSkudt[i].update();
        if (SkudSkudt[i].outOfBounds()){
            SkudSkudt.splice(Skud,1);
      }
      else if (SkudSkudt[i].hitScan()){
            SkudSkudt.splice(Skud,1);
      }
    }

    if (enemies.length < 5) {
    let spawnInterval = int(100 / balloonSpawnMultiplier);
    if (targetTimer % spawnInterval == 0){
    let enemy = new Enemy(random(width), random(height), 10);
    enemies.push(enemy)
    }
    
}

}


function mousePressed() {

	let mouseVector = getMouseVector();
    player.shoot();
    skud = new Skud(mouseVector.x, mouseVector.y)
    SkudSkudt.push(skud)
}


