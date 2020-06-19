class Package {
constructor(x,y){
var options={
    restitution:0.1,
    density:0.5,
    friction:0.5,
    isStatic:true,
}
this.image=loadImage("sprites/package.png")
this.body=Bodies.rectangle(x,y,50,50,options);
this.width=50;
this.height=50;
World.add(world,this.body);
}

display(){
    var pos= this.body.position;
    var angle=this.body.angle;
push();
translate(pos.x,pos.y);
stroke("greeen")
strokeWeight(10);
rotate(angle);
imageMode(CENTER);
fill(0);
image(this.image,0,this.width,this.height);
pop();
}


}