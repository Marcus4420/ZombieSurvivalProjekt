let player;
let enemies = [];

function setup() {
    createCanvas(600,600);
    //Creates the player class
    player = new Player(width/2, height/2, 20, 20);
    enemy = new Enemy(random(width), random(height), 10, 10);
    enemies.push(enemy)
}

function draw() {
    background(245,245,220);
    
    for (let Enemy of enemies) {
    Enemy.show();
    Enemy.attack();
    }


    // for (let i = 0; i < enemies.length; i++) {
    //     enemies[i].attack();
    //     enemies[i].show();
    //   }

    player.show();
    player.move();
    
}

