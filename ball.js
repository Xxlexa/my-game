class Ball {
  constructor(x,y,radius) {
    var options = {
        restitution : 0.6,
        density : 1,
        friction : 0.8
    }
    this.image = loadImage("sprites/basketball.jpg");
    this.body = Bodies.rectangle(x,y,radius,radius,options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.radius, this.radius);
    pop();
  }
};



