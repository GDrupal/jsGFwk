var asteroide = {
	id: "asteroide",

	visible: true,
	
	x: 300,
	y: 300,
	height: 16,
	width: 16,
	rotationPoint: { x: 8, y: 8 },
	angle: 0,
	rotVel: 0,
	accel: 0.001,
	
	num: 0,
	num1: 0,
	
	init: function () {
		
		this.x = jsGFwk._gameObjects.sol.x;
		this.y = jsGFwk._gameObjects.sol.y;
		
		for (var i = 0; i < 10; i++) {
			var rX = parseInt(Math.random() * 640);
			var rY = parseInt(Math.random() * 480);	
			var rRot = parseInt(Math.random() * 18);
			var rNeg = parseInt(Math.random() * 10);
			
		
			jsGFwk._gameObjects.asteroidContainer.cloneObject({x: rX, y: rY, rotVel: rRot, negRot: rNeg});
		}

		for (var i = 0; i < 7; i++) {
			var rX = parseInt(Math.random() * 640);
			var rY = parseInt(Math.random() * 480);
			var rRot = parseInt(Math.random() * 12);
			var rNeg = parseInt(Math.random() * 10);
	
			jsGFwk._gameObjects.asteroid1Container.cloneObject({x: rX, y: rY, rotVel: rRot, negRot: rNeg});
		}
	
		for (var i = 0; i < 3; i++) {
			var rX = parseInt(Math.random() * 640);
			var rY = parseInt(Math.random() * 480);
		
			jsGFwk._gameObjects.asteroid2Container.cloneObject({x: rX, y: rY});
		}
		
		for (var i = 0; i < 30; i++) {		
			var rX = jsGFwk._gameObjects.sol.x;
			var rY = jsGFwk._gameObjects.sol.y;
			var rRot = parseInt(Math.random() * 3);
			var rNeg = parseInt(Math.random() * 10);
			var rDis = parseInt((Math.random() * 100) + 35);
	
			jsGFwk._gameObjects.asteroid3Container.cloneObject({x: rX, y: rY, rotVel: rRot, negRot: rNeg, dis: rDis});
		}
	
	
	},
	
	update: function (delta) {
		
		
		/*this.rotVel += this.accel;
		this.angle += this.rotVel;	*/
		
	},	
	
	draw: function (context) {
	
		/*this.rotate({ angle: (this.angle), then: function(c) {
						
							c.drawImage(jsGFwk.ResourceManager.graphics.asteroide.image, 0, 0, 16, 16, 70, 70, 16, 16);

							//c.drawImage(jsGFwk.ResourceManager.graphics.llama.image, 0, 0, 11, 7, -10, 7, 11, 7);
							
					}});*/
	},
};


