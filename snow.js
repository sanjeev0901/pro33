class snow{
    constructor(x, y,r) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.r = r;
      this.body = Bodies.circle(x, y,r, options);
      World.add(world, this.body);
      this.image = loadImage("snow4.webp");
      
      }
      display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}