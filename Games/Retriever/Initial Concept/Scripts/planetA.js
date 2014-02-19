var planetA = {
	id: "planetA",

	visible: true,
	
	x: 0,
	y: 0,
	posRanX: 0,
	posRanY: 0,
	sizeRan: 0,
	radius: 0,
	
	init: function () {
	
		//this.posRanX = Math.floor((Math.random()*640)+1);
		//this.posRanY = Math.floor((Math.random()*480)+1);
		this.sizeRan = Math.floor((Math.random()*50)+10);
		//this.x = this.posRanX;
		//this.y = this.posRanY;
		this.x = 300;
		this.y = 300;
		this.radius = this.sizeRan;
	
	},
	
	update: function (delta) {
	
	},	
	
	draw: function (context) {
		
		context.fillStyle="9D7D26";
		context.beginPath();
		context.arc(this.x, this.y, this.sizeRan,0,2*Math.PI);
		context.fill();
	},
};