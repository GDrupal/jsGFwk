var hud = {
	id: "hud",

	visible: true,
	
	x: 200,
	y: 200,
	width: 30,
	height: 30,
	angle: 0,
	rotationPoint: { x: 15, y: 15 },
	
	init: function () {
	
		//this.x = jsGFwk._gameObjects.planetA.x - 5;
		//this.y = (jsGFwk._gameObjects.planetA.y - jsGFwk._gameObjects.planetA.sizeRan) - 10;
		
	},
	
	update: function (delta) {
			
			//this.rotationPoint = { x: jsGFwk._gameObjects.planetA.x - 250, y: jsGFwk._gameObjects.planetA.y - 250}
			
			if (this.isRectColliding (jsGFwk._gameObjects.objetivo))
			{
				this.x = jsGFwk._gameObjects.objetivo.x;
				this.y = jsGFwk._gameObjects.objetivo.y;
				
			}else if (this.isRectColliding (jsGFwk._gameObjects.retriever)) {
					this.x = jsGFwk._gameObjects.retriever.x - 5;
					this.y = jsGFwk._gameObjects.retriever.y + 9;
				}
			this.angle += 1;	
		//this.y += this.accel;
		//this.accel += this.gravity;
		console.log(this.angle);
	},	
	
	draw: function (context) {
		context.rect(this.x,this.y,this.width,this.height);
		context.fill();
	
		this.rotate({ angle: (this.angle), then: function(c) {
			//c.drawImage(jsGFwk.ResourceManager.graphics.llama.image, 0, 12, 11, 11, this.x, this.y, this.width, this.height);	
		}});
		
			
	},
};