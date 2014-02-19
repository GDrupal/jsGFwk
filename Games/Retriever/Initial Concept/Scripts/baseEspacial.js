var baseEspacial = {
	id: "baseEspacial",

	visible: true,
	
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	
	
	init: function () {
	
	
	},
	
	update: function (delta) {
	
	},	
	
	draw: function (context) {
	
		context.drawImage(jsGFwk.ResourceManager.graphics.baseEspacial.image, 0, 0, 28, 100, -5, 280, 56, 200);
	},
};