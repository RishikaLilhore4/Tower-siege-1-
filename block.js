class Box{
    constructor(x,y,width,height,color) {
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
          
      }
      this.body = Bodies.rectangle(x,y,width,height,color,options);
      this.width = width;
      this.height = height;
      this.color = color;
      World.add(world, this.body);
    }
    display(){
      
      push()
      var pos =this.body.position;
      rectMode(CENTER);
      var angle = this.body.angle;
      fill("pink");
      rotate(angle)
      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  }