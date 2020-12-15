class Dustbin{
    constructor(x,y,width,height){
    var options={
    isStatic:true
    }
    // not specifying the width and height in the class as the dustbin needs to be made up of 3 parts
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        
        rectMode(CENTER);
        fill('yellow');
        rect(pos.x, pos.y, this.width, this.height);
    }
}
    