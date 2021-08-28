class Estilingue{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
 this.pointB=pointB
        this.estilingue = Constraint.create(options);
        World.add(world, this.estilingue);
    }
    attach(bodyA){
        this.estilingue.bodyA=bodyA
        }
fly(){
    this.estilingue.bodyA=null
}
    
display(){
if(this.estilingue.bodyA){


        var pointA = this.estilingue.bodyA.position;
        var pointB = this.estilingue.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}    

}