var gameState ="start"
function preload() {
  backgroundImage = loadImage("icon.jpg")
  startImage = loadImage("play.png")
  back2Image = loadImage("sky.jpg")
  pitchImage = loadImage("pitch.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 back1 = createSprite(width/2,height/2)
  back1.addImage(backgroundImage)
  back1.scale = 0.839
  startButton = createSprite(width/2+200,height-100)
  startButton.addImage(startImage)
  back2 = createSprite(width/2,height/2)
  back2.addImage(back2Image)
  back2.visible=false
  pitch = createSprite(width/2,height/2+375)
  pitch.addImage(pitchImage)
  pitch.visible = false
  pitch.scale = 1.8
}

function draw() {
  background(255,255,255);  
  if(gameState=="start"){
    if(mousePressedOver(startButton)){
      startButton.visible = false
      back1.visible = false
      gameState = "play"
    }
  }
  else if(gameState=="play"){
    back2.visible=true
    pitch.visible = true
    
  }
  drawSprites();
  
}