var cat,catimg1,catimg2,bgimg,mouse,mouseimg1,mouseimg2,catimg3

function preload() {
    catimg1 = loadAnimation("images/cat1.png")
    catimg2 = loadAnimation("images/cat2.png")
    catimg3 = loadImage("images/cat3.png")
    bgimg = loadImage("images/garden.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    mouseimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(600,750,10,10)
    cat.addAnimation("Cat", catimg2)
    cat.scale = 0.1
    mouse = createSprite(100,750,1,1)
    mouse.addAnimation("mouse", mouseimg1)
    mouse.scale = 0.2
    cat.debug = true
    mouse.debug = true
    mouse.setCollider("circle",1,2)
}

function draw() {
    createCanvas(1000,800)
    background(bgimg);
    if(cat.isTouching(mouse)){
        cat.setVelocity(0,0)
        mouse.setVelocity(0,0)
        
    }
    if(cat.isTouching(mouse)){
        cat.addAnimation(catimg1)
    }
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseimg2)
      mouse.scale = 0.2
      mouse.changeAnimation("mouseTeasing")
      mouse.frameDelay = 25
      cat.velocityX = -5
  }



}
