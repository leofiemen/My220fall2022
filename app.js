function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
  }
  
  function draw() {
  
    //Set BackGround Color of Canvas
    background(245);
        
    //Draw FACE
    noStroke();
    fill(0,0,255);
    var x = width/2;
    var y = height/2;
    ellipse(x,y,x,y);
  
    //Draw EYE
    var trans = 0.15*x;
    var eye_width = 0.1*x;
    var eye_height = 0.2*x;
    fill(0);
      //Left Eye
      ellipse(x-trans, y-trans, eye_width, eye_height);
      //Right Eye
      ellipse(x+trans, y-trans, eye_width, eye_height);
  
    //Draw Smile
    var smile_size = 0.7*x;
    var start = 15;
    var end = 165;
    stroke(0);
    strokeWeight(10);
    noFill();
    arc(x, y, smile_size, smile_size, start, end);
  }
  
  