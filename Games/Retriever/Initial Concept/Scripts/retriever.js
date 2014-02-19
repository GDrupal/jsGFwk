var retriever = {
	id: "retriever",

	visible: true,
	
	rotVel: 0,
	gravity: 0,
	accel: 0,
	rotAccel: 0.1,
	
	x: 68,
	y: 350,	
	width: 19,
	height: 25,
	radius: 10,
	
	rotationPoint: { x: 10, y: 10 },
	angle: 270,
	accelX: 0,
	accelY: 0,
	center: { x: 0 , y: 0 },
			
	
	
	fuel: 0,
	hull: 0,
	
	burn: false,
	animAcu: 0,
	nextAnim: false,
	

	init: function () {

	},
	
	update: function (delta) {
		
		/// Burning Animation near the Sun
		this.animAcu += delta;
		if (this.animAcu > 1000){
			this.animAcu = 0;
		}
		if (this.animAcu >= 0 && this.animAcu <= .05){
			this.nextAnim = true;
		}else if (this.animAcu >=.051 && this.animAcu < .1){
			this.nextAnim = false;
		}else {this.animAcu = 0;}
		
		/// Edges Limit
		if(this.y >= canvas.height)
		{
			this.y = 15;
		}
		if (this.y <= canvas.height - 480)
		{
			this.y = 465;
		}
		
		if(this.x >= canvas.width)
		{
			this.x = 15;
		}
		if(this.x <= canvas.width - 640)
		{
			this.x = 625;
		}
		
		/// Retriever rotation		
		if(jsGFwk.IO.keyboard._activeKey[39]) {
			this.rotVel += this.rotAccel;
		} else if (jsGFwk.IO.keyboard._activeKey[37]) {
			this.rotVel -= this.rotAccel;
		}else if (this.rotVel > 0.1) {
			this.rotVel -= this.rotAccel;
		}else if (this.rotVel < -0.1){
			this.rotVel += this.rotAccel;
		}
		
		this.angle += this.rotVel;
		
		/// Retriever acceleration
		if (jsGFwk.IO.keyboard._activeKey[38] && this.accel <= 0.1) {
			
			this.accel += 0.01 ;
			if (this.accelY > -1 && this.accelY < 1){
				this.accelY += this.accel * Math.sin(jsGFwk.Effects.degreeToRadians(this.angle));
			}
			if (this.accelY < -1.0){
				this.accelY = -0.99;
			}else if (this.accelY > 1.0){
				this.accelY = 0.99;
			}
			
			if (this.accelX > -1 && this.accelY < 1){
				this.accelX += this.accel * Math.cos(jsGFwk.Effects.degreeToRadians(this.angle));
			}
			if (this.accelX < -1){
				this.accelX = -0.99;
			}else if (this.accelX > 1.0){
				this.accelX = 0.99;
			}
			
			this.fuel += .1;
			this.bajallama;
		
		}else if (this.accel >= 0){
			this.accel -= 0.01;
		}
		
		/*	else if (this.accelX > 1){
			this.accelX -= this.accel * Math.cos(jsGFwk.Effects.degreeToRadians(this.angle));
		}else if (this.accelX < -1){
			this.accelX -= this.accel * Math.cos(jsGFwk.Effects.degreeToRadians(this.angle));		
		}else if (this.accelY > 1){
			this.accelY -= this.accel * Math.sin(jsGFwk.Effects.degreeToRadians(this.angle));
		}else if (this.accelY < -1){
			this.accelY -= this.accel * Math.sin(jsGFwk.Effects.degreeToRadians(this.angle));
		}*/
			
		this.x += this.accelX;
		this.y += this.accelY;
	
		
		/// Sun gravity collider
		if (this.isRadColliding(jsGFwk._gameObjects.gravSol)){
			if (this.x > jsGFwk._gameObjects.gravSol.x){
				this.accelX -= jsGFwk._gameObjects.gravSol.plusGrav * Math.cos(jsGFwk.Effects.degreeToRadians(jsGFwk._gameObjects.gravSol.gravAngle));
			} else {
				this.accelX += jsGFwk._gameObjects.gravSol.plusGrav * Math.cos(jsGFwk.Effects.degreeToRadians(jsGFwk._gameObjects.gravSol.gravAngle));
				}	
	
			if (this.y > jsGFwk._gameObjects.gravSol.y){
				this.accelY -= jsGFwk._gameObjects.gravSol.plusGrav * Math.cos(jsGFwk.Effects.degreeToRadians(jsGFwk._gameObjects.gravSol.gravAngle));
			}else {
				this.accelY += jsGFwk._gameObjects.gravSol.plusGrav * Math.cos(jsGFwk.Effects.degreeToRadians(jsGFwk._gameObjects.gravSol.gravAngle));
				}	
		}
		if (this.isRadColliding(jsGFwk._gameObjects.sol)){
			this.burn = true;
			this.hull += .2;
		}else {this.burn = false;}
		
	
		/// Retriever affected by gravity
		//this.accelY += this.gravity;
	},	
	
	draw: function (context) {
	
		this.rotate({ angle: (this.angle), then: function(c) {

			c.drawImage(jsGFwk.ResourceManager.graphics.cuadradito.image, 0, 0, 19, 21, 0, 0, 19, 21);
						
						c.drawImage(jsGFwk.ResourceManager.graphics.llama.image, 0, 0, 11, 7, -10, 7, 11, 7);
				
						if (jsGFwk.IO.keyboard._activeKey[39]){
							c.drawImage(jsGFwk.ResourceManager.graphics.llama.image, 0, 23, 4, 7, 10, -7, 4, 7);
						}
						if (jsGFwk.IO.keyboard._activeKey[37]){
							c.drawImage(jsGFwk.ResourceManager.graphics.llama.image, 4, 23, 4, 7, 10, 20, 4, 7);
						}
						if (jsGFwk._gameObjects.retriever.burn == true){
							if (jsGFwk._gameObjects.retriever.nextAnim == false){
								c.drawImage(jsGFwk.ResourceManager.graphics.cuadradito.image, 3, 22, 13, 14, 0, 2, 13, 17);
							}else{
								c.drawImage(jsGFwk.ResourceManager.graphics.cuadradito.image, 3, 36, 13, 14, 0, 2, 13, 17);						
							}
						}
						
						
					}});
		context.drawImage(jsGFwk.ResourceManager.graphics.llama.image, 12, this.fuel, 11, 102, 10, 20 + this.fuel, 10, 101); // fuel
		
		context.drawImage(jsGFwk.ResourceManager.graphics.hull.image, 0, this.hull, 22, 101, 19, 19 + this.hull, 22, 101); //hull
		
		
		
					
		
	},
};