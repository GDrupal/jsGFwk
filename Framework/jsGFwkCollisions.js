jsGFwk.Collisions = {

	_rectColliding: function (otherObject) {
		if (!otherObject) { return false; }
		if (!this.width || !this.height || !this.x || !this.y) { return false; }
		if (!otherObject.width || !otherObject.height || !otherObject.x || !otherObject.y) { return false; }
		
		if (this.x + this.width < otherObject.x)
            return false;
        if (this.y + this.height < otherObject.y)
            return false;
        if (this.x > otherObject.x + otherObject.width)
            return false;
        if (this.y > otherObject.y + otherObject.height)
            return false;

        return true;
	},

	start: function () {
		Object.prototype.isRectColliding = this._rectColliding;
	}
};