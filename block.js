class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=225;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.bodyA){
          var pointA = this.body.bodyA.position;
          var pointB = this.pointB;

          }
          push();
          this.visiblity=this.visibility-5;
          tint(225,this.visibility);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();

          }
          show{
            if(this.body.speed>2.5){
            this.body.display();
          }
              else{
                  World.remove(world,this.body)
              }
            }