class Bob{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,50,options);
        this.diameter = diameter;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        //push();
        //ellipseMode(CENTER);
        //translate(pos.x, pos.y);
        //rotate(angle);
        fill("lightgreen");
        circle(pos.x,pos.y,this.diameter);
        //pop();
    }
}