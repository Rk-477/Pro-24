class Iron{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
	var options={
		restitution:0.8,
		friction:3,
		density:30

	}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y,this.w,this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the rect here to display the rubber ball
            rect(rubberpos.x,rubberpos.y,100,100)
			pop()
	}

}