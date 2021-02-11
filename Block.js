class Block{
    constructor(x,y){
        var options = {
           isStatic: false
        }
        this.Body = Bodies.rectangle(x,y,40,40,options);
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        World.add(world,this.Body);
        this.visibility = 255;
    }

    display(){
    if(this.Body.speed < 3){
        var pos = this.Body.position;
        var angle = this.Body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       fill(random(100,200));
        rectMode(CENTER);
        rect(0,0,40,60);
        pop();
    }
        
            
        
        else{
            World.remove(world,this.Body);
            push();
                this.visibility = this.visibility - 5;
                tint(255,this.visibility);
            pop();
        }

    }
    attach(body){
        this.sling.bodyA = body;
    }
}