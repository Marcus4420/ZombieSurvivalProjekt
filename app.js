let player;
let enemies = [];
let SkudSkudt = [];
let targetTimer = 0;
let score = 0;
let skud_effekt;
let background_image


function setup() {
    createCanvas(800,800);
    //Creates the player class
    player = new Player(width/2, height/2, 30);
    skud_effekt = loadSound('Sounds/skudlyd.mp3');
}

function draw() {
    background(155,118,83);
    scoreboard();
    spawning();
    
    for (let Enemy of enemies) {
    Enemy.show();
    Enemy.attack();
    }

    player.show();
    player.move();
    player.DeathCheck();

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

}


function mousePressed() {

	let mouseVector = getMouseVector();
    player.shoot();
    skud = new Skud(mouseVector.x, mouseVector.y)
    SkudSkudt.push(skud)
}


