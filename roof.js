class Roof{
    constructor(x,y,w,h){
        var options={isStatic:true}
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w = w
        this.h = h
        World.add(world,this.body)

        
    }
    display(){
        push()
rectMode()
        translate(this.body.position.x,this.body.position.y)
        fill(128,128,128);
rect(0,0,this.w,this.h)
pop()


    }
}

