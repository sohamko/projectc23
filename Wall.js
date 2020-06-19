class Wall {
constructor(x,y){
var options={
    density:5 ,
    friction:0.5,
    stiffness:1,
    isStatic:true,
}
this.body=Bodies.rectangle(x,y,30,100,options);
this.width=30;
this.height=100;
World.add(world,this.body);
}


display(){
    var pos =this.body.position;
    var angle=this.body.angle;
push();
rectMode(CENTER);
pop();
translate(pos.x,pos.y);
stroke("green");
rotate(angle);
strokeWeight(4);
fill(255);



}






}