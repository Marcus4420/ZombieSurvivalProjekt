/* Definerer en player variabel (holder) */
let player;
/* Et array af alle fjender der på nuværende tidspunkt er aktive. Gør det nemmere at vise antal enemies på scoreboard + at fjerne enemies igen når de dør (Og så bare for ordens skyld)*/
let enemies = [];
/* Samme som ovenover med fjender, bare med skudene fra player :)*/
let SkudSkudt = [];
/* Spawning mekanisme der kan scale med score. Se evt. Engine.js for brug*/
let targetTimer = 0;
/* Siger sku nok sig selv*/
let score = 0;
/* Sound effekt for skudene*/
let skud_effekt;
/*Baggrundsmusik*/
let musik
/* Baggrundsbillede load in*/
let background_image;
let playerimg;
let zombieimg;
let playing = 0;
let acc = 0;
let shotshit = 0;
let totalshots = 0;
let direction = 'UP';
let attackdirection = 'UP';
let tankimg;


function preload() {
    playerimg = loadImage('Cowboy_Player_up.png');
    zombieimg = loadImage('zombie_down.png')
    musik = createAudio('Baptism.mp3');
    tankimg = loadImage('tank_up.png');
  }

/* Start-up script*/
function setup() {
    /* Skaber canvas. Størrelse is "subject to change". */
    createCanvas(800,800);
    /* Her skaber vi vores spiller ud fra class Player (se player.js) ud fra en x-pos, y-pos og radius. x & y pos er sat til altid at være center, for at gøre det scalable i størrelse */
    player = new Player(width/2, height/2, 30);
    /* Pådutter en lyd til variablen skud_effekt. Lyden kan findes i ./Sounds */
    skud_effekt = createAudio('Sounds/skudlyd.mp3')
}

/* Det uendelige loop der holder spillet igang*/
function draw() {
    /* Midlertidig baggrundsfarve. Erstat RGB med background_image når et ordentligt er valgt*/
    background(155,118,83);
    /* Scoreboard funktionen med score + aktive fjender. Se engine.js*/
    scoreboard();
    /* Enemy spawning function. Se ligeledes engine.js*/
    spawning();
    
    /* Et loop der hele tiden sørger for at alle enemies[i] i enemies arrayet kører .show & .attack*/
    for (let Enemy of enemies) {
    Enemy.show();
    Enemy.attack();
    }


    /* Player movement, display/show og et check om vi er døde endnu. Kommer fra player.js */
    player.show();
    player.move();
    player.DeathCheck();

    /* Sørger for alt det grafiske for skudende virker. Skud.js*/    
    for (i = 0; i < SkudSkudt.length; i++) {
        SkudSkudt[i].show();
        SkudSkudt[i].update();
        /* Fjerner skudende når de forlader banen */    
        if (SkudSkudt[i].outOfBounds()){
            SkudSkudt.splice(Skud,1);
      }
        /* Fjerne skudende når de rammer en fjende */  
      else if (SkudSkudt[i].hitScan()){
            SkudSkudt.splice(Skud,1);
      }
    }

}


function mousePressed() {
    musikken();
    /* Får retningen for skuddet */
    let mouseVector = getMouseVector();
    /* Spillerens shoot function */    
    player.shoot();
    /* Definerer et nyt skud fra classen Skud (skud.js)*/    
    skud = new Skud(mouseVector.x, mouseVector.y)
    /* Skubber den ind i arrayet, så vi kan håndterer nuværende aktive skud*/    
    SkudSkudt.push(skud)
}


