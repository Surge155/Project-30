class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1

          }
          this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }



display(){
 
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(67, 221, 33);
    
    
        if(pointA.x < 200){
    
        strokeWeight(7);
        line(pointA.x- 20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x- 20,pointA.y,pointB.x + 30,pointB.y - 3);
        }
        else{
            strokeWeight(4);
            line(pointA.x + 25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x- 25,pointA.y,pointB.x + 30,pointB.y - 3);

        }
       
        pop();
        }
    }


 fly(){
        this.sling.bodyA = null;
}
attach(body){
    this.sling.bodyA = body;
}
}




