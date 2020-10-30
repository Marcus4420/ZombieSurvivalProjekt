let player;
let enemies = [];
let current_skud = [];

function setup() {
    createCanvas(600,600);
    //Creates the player class
    player = new Player(width/2, height/2, 20, 20);
    //Creates the enemy class
    enemy = new Enemy(random(width), random(height), 10, 10);
    //Collects the enemies in array
    enemies.push(enemy)
}

function draw() {
    background(245,245,220);
    
    for (let Enemy of enemies) {
    Enemy.show();
    Enemy.attack();
    }

    player.show();
    player.move();
    
    for (let Skud of current_skud) {
        Skud.show();
        Skud.move();
        }
}



function mousePressed() {
    player.shoot();
    skud = new Skud(player.x, player.y, 5, 2, mouseX, mouseY)
    current_skud.push(skud)
}
