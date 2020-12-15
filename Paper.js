class Paper{
    constructor(x, y, r) {

      var options = {
          isStatic:false, // static property was not mentioned
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      //Circles in p5.js and circles in matter.js behave a little differently. 
      //The p5.js expects the third parameter to be a radius, but the matter.js will expect a diameter.
      this.r=r
      this.body = Bodies.circle(x, y,this.r/2, options);
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      fill('blue');
      ellipse(0,0,this.r,this.r);
      pop()
    }
  };


