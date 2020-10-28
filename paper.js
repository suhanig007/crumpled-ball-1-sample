class Paper  {
   constructor(x,y,radius) {
      
    
      var options = {  
       isStatic:false,
       restitution: 0.3,
       friction:0.5,
       density:1.2
       
  
    }
   this.radius=radius
   this.x=x
   this.y=y
   this.paper1=Bodies.circle(this.x,this.y,this.radius,options)
      
   World.add(world,this.paper1)
   
   }
  display() {
     var pos=this.paper1.position
     push();
     translate(pos.x,pos.y)
     ellipseMode(RADIUS)
     strokeWeight(4)
     var x=Math.round(random(0,255))
     var y=Math.round(random(0,255))
     var z=Math.round(random(0,255))
     stroke(x,y,z)
     fill (x,y,z) 
     ellipse (0,0,this.radius,this.radius)   
     pop();

     
  }
}