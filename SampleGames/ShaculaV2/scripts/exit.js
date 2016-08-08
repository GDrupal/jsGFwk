var Exit = {
    onInit: function (parameters) {
        this.x = parameters.x;
        this.y = parameters.y;
        this.width = parameters.width;
        this.height = parameters.height;
        this.exitTo = parameters.goTo;
        this.dracAppearsAt = parameters.showsAt;
    },
    onUpdate: function (delta) {
        if (dracul.isRectColliding(this)) {
            gameController.exitFromLevel({ 
                level: this.exitTo,
                dracCoords: this.dracAppearsAt
            });
        }
    },
    onDraw: function (ctx) {
    }
};