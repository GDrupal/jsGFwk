var sol = {
	id: "sol",

	visible: true,
	
	x: 0,
	y: 0,
	plusGrav: 0.02,
	radius: 100,
	solAngle: 0,
	center: { x: 0, y: 0 },
	
	init: function () {
	
		this.x = 500;
		this.y = 220;

	},
	
	update: function (delta) {

		//this.y += 1;
		if (this.y >= 480){
			this.y = 1;
		}
	
	},	
	
	draw: function (context) {
		
		context.fillStyle="F3E847";
		context.beginPath();
		context.arc(this.x, this.y,40,0,2*Math.PI);
		context.fill();		
	},
};