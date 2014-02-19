var gravA = {
	id: "gravA",

	visible: true,
	
	x: 0,
	y: 0,
	plusGrav: 0.01,
	radius: 0,
	gravAngle: 0,
	center: { x: 0, y: 0 },
	
	init: function () {
	
		this.x = jsGFwk._gameObjects.planetA.x;
		this.y = jsGFwk._gameObjects.planetA.y;
		this.radius = jsGFwk._gameObjects.planetA.sizeRan + 30;

	},
	
	update: function (delta) {
	
	},	
	
	draw: function (context) {	
	
	},
};