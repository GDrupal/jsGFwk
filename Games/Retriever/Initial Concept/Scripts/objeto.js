var objeto = {
	id: "objeto",

	visible: true,
	
	x: 0,
	y: 0,
	posRanX: 0,
	posRanY: 0,
	sizeRan: 0,
	radius: 0,
	angle: 0,
	
	init: function () {
	
		//this.posRanX = Math.floor((Math.random()*640)+1);
		//this.posRanY = Math.floor((Math.random()*480)+1);
		//this.sizeRan = Math.floor((Math.random()*50)+10);
		this.x = this.posRanX;
		this.y = this.posRanY;
		this.x = 150;
		this.y = 300;
		this.radius = 10;
	
	},
	
	update: function (delta) {
	
	},	
	
	draw: function (context) {
		this.rotate({ angle: (this.angle), then: function(c) {
					}});
				context.fillStyle="white";
				context.beginPath();
				context.arc(this.x, this.y, this.radius,0,2*Math.PI);
				context.fill();							
				
	},
};