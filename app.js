function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
        happyFace(width/2, height/2, 170);
  }
  
  function happyFace (x, y, diam) {
        // Face
        fill(255, 255, 0);
        stroke(0);
        strokeWeight(2);
        ellipse(x, y, diam, diam);
        
        // Smile
        var startAng = .1*PI
        var endAng = .9*PI
        var smileDiam = .6*diam;
        arc(x, y, smileDiam, smileDiam, startAng, endAng);
        
        // Eyes
        var offset = .2*diam;
        var eyeDiam = .1*diam;
        fill(0);
        ellipse(x-offset, y-offset, eyeDiam, eyeDiam);
        ellipse(x+offset, y-offset, eyeDiam, eyeDiam);
  }