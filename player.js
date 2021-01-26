class Player {
    constructor(x,y,width,height) {
      var options = {
          restitution : 0.6,
          density : 1,
          friction : 0.8
      }
      this.image = loadImage("sprites/player.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  };
  
  