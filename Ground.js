class Ground{
    constructor(){
        var ground_options={
            isStatic:true
        }
     this.ground=Bodies.rectangle(450,390,900,20,ground_options)
     world.add(world,this.ground)
    }
    display(){
        noStroke();
        fill(188,57,57)
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20)
    }
}