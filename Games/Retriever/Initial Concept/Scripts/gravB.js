var gravB = {
	id: "gravB",

	visible: true,
	
	x: 0,
	y: 0,
	plusGrav: 0.01,
	radius: 0,
	gravAngle: 0,
	center: { x: 0, y: 0 },
	
	init: function () {
	
		this.x = jsGFwk._gameObjects.planetB.x;
		this.y = jsGFwk._gameObjects.planetB.y;
		this.radius = jsGFwk._gameObjects.planetB.sizeRan + 50;

	},
	
	update: function (delta) {
	
	},	
	
	draw: function (context) {
		
	},
};