var starFieldB = {
	id: "starBackground2",
	zOrder: 0,
	visible: true,
	offset: 0,
	starImage: {},
	init: function () {	
		var canvas = document.createElement("canvas"),
			context = canvas.getContext("2d");
			
		canvas.width = GLOBALS.CANVAS_SIZE.width;
		canvas.height = GLOBALS.CANVAS_SIZE.height;
		context.rect(0, 0, GLOBALS.CANVAS_SIZE.width, GLOBALS.CANVAS_SIZE.height);
		context.strokeStyle = "white";
		for (var n = 0; n < 50; n++){
			var x = parseInt(Math.random() * GLOBALS.CANVAS_SIZE.width);
			var y = parseInt(Math.random() * GLOBALS.CANVAS_SIZE.height);
			var radius = 0;
			var largo = Math.floor((Math.random()*15)+1);
			context.strokeRect(x, y, largo, radius);
		}
	
		this.starImage = new Image();
		this.starImage.src = canvas.toDataURL();
	},
	update: function(delta) {
		this.offset += GLOBALS.SPEED2;
		if (this.offset > GLOBALS.CANVAS_SIZE.width) { this.offset = 0; }
	},
	draw: function (context) {
		context.drawImage(this.starImage, -this.offset, 0);
		context.drawImage(this.starImage, GLOBALS.CANVAS_SIZE.width - this.offset, 0 );
	}
};