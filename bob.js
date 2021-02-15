class Bob{
    constructor(x,y,d){
        var options={isStatic:false,
        restitution:1,
        friction:1,
        density:0.8
        
        }
        this.body=Bodies.circle(x,y,d/2,options);
        this.d  = d 
        
        World.add(world,this.body)

        
    }
    display(){
        push()

        translate(this.body.position.x,this.body.position.y)
        fill(255,0,255);
ellipse(0,0,this.d,this.d)
pop()


    }
}
