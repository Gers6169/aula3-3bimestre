function setup() {
    createCanvas(400, 400);
    background(200);
    
  }
  
  function draw() {
    stroke("blue");
    fill("pink");
    if(mouseIsPressed){
    rect(mouseX,mouseY,15,25);  
      
    }
    
    
    
  }