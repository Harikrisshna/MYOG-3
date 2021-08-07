var gameState = "Home";
var score = 0;
function preload() {
  spaceImage = loadImage("spacebg.png")
  giff = loadImage("andrew.png")
  tobey = loadImage("tobey.png")
  asteroids = loadImage("tom.png")
  rocket = loadImage("rocket.png")
  bullet = loadImage("images.png")
}
function setup() {
  createCanvas(1362, 652);
  shooter = createSprite(100, 600, 50, 50)
  shooter.addImage(rocket)
  shooter.scale = 0.12;
  bulletsG = new Group();
  incomingG = new Group();

}

function draw() {
  background(255, 255, 255);

  if (gameState === "Home") {
    background(giff)
    textSize(30);
    fill("red")
    text("Welcome to Space.ɘxɘ", 550, 200)
    fill("white")
    textSize(20);
    text("Press ENTER key to continue", 580, 450)
    shooter.visible = false;

    if (keyDown("enter")) {
      //console.log("message")
      gameState = "prologue"
    }

  }

  if (gameState === "prologue") {
    //console.log("hi")
    background(tobey)
    fill(148, 255, 253)
    textSize(25)
    text("Basic Multilevel Spaceshooter game", 300, 100)
    text("W to shoot, A and D to move", 320, 150)
    text("Press S to continue",350,200)
    shooter.visible = false;

    if (keyDown("S")) {
      gameState = "begin"
    }

  }
  if (gameState === "begin") {
    background(spaceImage)
    shooter.visible = true;
    
     textSize(20);  
     fill(72, 255, 59);
     text("Score: "+ score, 100,50);
    
    if (keyDown("A")) {
      shooter.x = shooter.x - 8
    }

    if (keyDown("D")) {
      shooter.x = shooter.x + 8
    }
    if (keyDown("W")){
      spawnBullets();
      bullets.x=shooter.x;

    }
    spawnIncoming();
    if(bulletsG.isTouching(incomingG)){
      incomingG.destroyEach();
      bulletsG.destroyEach();
      score = score + 10;

    }
  }
  drawSprites();
}

function spawnIncoming() {
  if (frameCount % 60 === 0) {
    incoming = createSprite(100, 100, 50, 50)
    incoming.velocityY = 5;
    incoming.x = Math.round(random(00, 1300))
    incoming.addImage(asteroids)
    incoming.scale = 0.12;
    incomingG.add(incoming);
  }

}
function spawnBullets() {
  bullets = createSprite(100, 600, 50, 50)
  bullets.addImage(bullet)
  bullets.velocityY = -5;
  bullets.scale = 0.019;
  bulletsG.add(bullets);
}