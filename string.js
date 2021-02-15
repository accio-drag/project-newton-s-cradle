class String{
    constructor(body1,body2,xOfset,yOfset){
    this.xOfset = xOfset
    this.yOfset = yOfset
    var options={
        bodyA:body1,
        bodyB:body2

    }
this.string = Constraint.create(options)
World.add(world,this.string)


    }
    display(){
        var PTA = this.string.bodyA.position
        var PTB = this.string.bodyB.position
        var OFFSETbX = PTB.x+this.xOfset
        var OFFSETbY = PTB.y+this.yOfset
        fill(0)
        line(PTA.x,PTA.y,OFFSETbX,OFFSETbY)
    }
    
}