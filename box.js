class Box{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world,this.body);
this.width=width;
this.height=height;
    }
    display(){
        rectMode(CENTER);
        fill(255,0,0);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}