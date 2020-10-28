class Dustbiin {
    constructor(){
        
    
      
    
	leftrect1=createSprite(300,610,20,100)
	leftrect1.shapeColor="green"
	leftbody=Bodies.rectangle(320,610,20,100,{isStatic:true})
	World.add(world,leftbody)
	
	rightrect1=createSprite(500,610,20,100)
	rightrect1.shapeColor="green"
	rightbody=Bodies.rectangle(480,610,20,100,{isStatic:true})
	World.add(world,rightbody)
	
	bottomrect1=createSprite(400,650,200,20)
	bottomrect1.shapeColor="green"
	bottombody=Bodies.rectangle(400,635,200,20,{isStatic:true})
	World.add(world,bottombody)
    }
}