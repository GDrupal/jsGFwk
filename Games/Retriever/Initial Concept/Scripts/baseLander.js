var baseLander = {
	id: "baseLander",

	visible: true,
	
	x: 45,
	y: 360,
	width: 42,
	height: 25,
	
	
	init: function () {
	
	
	},
	
	update: function (delta) {
	
	},	
	
	draw: function (context) {
	
		context.drawImage(jsGFwk.ResourceManager.graphics.baseEspacial.image, 29, 39, 21, 15, 51, 357, 42, 30);
	},
};