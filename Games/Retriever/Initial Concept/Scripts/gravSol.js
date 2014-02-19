var gravSol = {
	id: "gravSol",

	visible: true,
	
	x: 0,
	y: 0,
	plusGrav: 0.02,
	radius: 150,
	gravAngle: 0,
	center: { x: 0, y: 0 },
	
	init: function () {
	
	
	},
	
	update: function (delta) {
		
		this.x = jsGFwk._gameObjects.sol.x;
		this.y = jsGFwk._gameObjects.sol.y;

	
	},	
	
	draw: function (context) {
	
	},
};