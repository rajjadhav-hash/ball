class Paper {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.8
          
        
      }
      this.x=x;
      this.y=y;
      this.radius=r/2;
      
      this.body=Bodies.circle(this.x,this.y,r/2,options);
      this.image=loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
      
      push();
      translate(paperpos.x, paperpos.y);
      rectMode(CENTER)
      strokeWeight(4);
      stroke("white");
      fill("white");
     image(this.image,0,0,this.radius*2,this.radius*2);
      pop();
    }
  };
  