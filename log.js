class Logs {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':3.0,
          'density':0.5,
      }
      this.body = Bodies.rectangle(x, y,30, height, options);
      this.width = 30;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke ("red");
      strokeWeight(6)
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  