/*globals jsGFwk */
var Enemy = (function () {
    "use strict";
    
    var enemy = function () {
    };
        
	enemy.prototype.x = 0;
    enemy.prototype.y = 0;
    enemy.prototype.targetX = 0;
    enemy.prototype.targetY = 0;
    enemy.prototype.enemySpeed = 50;
    enemy.prototype.width = 30;
    enemy.prototype.height = 30;
    enemy.prototype.isRectColliding = null;
    enemy.prototype.particles = null;
    enemy.prototype.speedTimer = null;
    enemy.prototype.backTimer = null;
    enemy.prototype.proximity = true;
    enemy.prototype.cos = 0;
    enemy.prototype.cosAcc = 0;
    enemy.prototype.reshrinkTimer = null;
    enemy.prototype.rotationAngle = 45;
	
    enemy.prototype.shrink = function () {
        var self = this;
        self.width -= 5;
        self.height -= 5;
        self.x -= 2.5;
        self.y -= 2.5;
        self.proximity = false;
        self.enemySpeed += 10;
    };
    
	enemy.prototype.onInit = function (parameters) {
        var self = this;
        
		this.x = parameters.x;
		this.y = parameters.y;
		this.enemySpeed = parameters.speed;
		this.targetX = jsGFwk.getGameObjects().alan.x;
		this.targetY = jsGFwk.getGameObjects().alan.y;
        this.isRectColliding = jsGFwk.Collisions._rectColliding;
        
        this.speedTimer = new jsGFwk.Timer({
			action: function () {
                if (self.enemySpeed > 5) {
                    self.enemySpeed -= 5;
                }
			},
            tickTime: 0.5
		});
        
        this.reshrinkTimer = new jsGFwk.Timer({
			action: function () {
                if (self.width < 50) {
                    self.width += 5;
                    self.height += 5;
                    self.x += 2.5;
                    self.y += 2.5;
                }
			},
            tickTime: 1
		});
        
        this.backTimer = new jsGFwk.Timer({
			action: function () {
                self.proximity = true;
			},
            tickTime: 0.7
		});
	};
    
	enemy.prototype.onUpdate = function (delta) {
        var self = this;
        		
		this.targetX = jsGFwk.getGameObjects().alan.x - 5;
		this.targetY = jsGFwk.getGameObjects().alan.y - 5;
        
        if (self.isRectColliding(jsGFwk.getGameObjects().alan)) {
            jsGFwk.getGameObjects().alan.live -= 1;
            jsGFwk.getGameObjects().cameraHandler.shake();
        }
        
        this.rotationAngle += 0.001;
        
        if (!this.proximity) {
            this.backTimer.tick(delta);
        } else {
            this.speedTimer.tick(delta);
            this.x += (this.targetX - this.x) / this.enemySpeed;
            this.y += (this.targetY - this.y) / this.enemySpeed;
        }
        
        this.reshrinkTimer.tick(delta);
        
        this.cosAcc += 0.1;
        this.cos = 50 + parseInt(Math.cos(this.cosAcc) * 50);
	};
    
	enemy.prototype.onDraw = function (ctx) {
        ctx.save();
        ctx.translate(this.x + (this.width / 2), this.y + (this.height / 2));
		ctx.rotate(this.rotationAngle * (180/Math.PI));
		ctx.translate(-(this.x + (this.width / 2)), -(this.y + (this.height / 2)));
        
        ctx.strokeStyle = "rgb(" + this.cos + ", " + this.cos + ", " + this.cos + ")";
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.lineWidth = 5;
        
        ctx.shadowColor = 'red';
        ctx.shadowBlur = cicleShadow;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        ctx.translate(this.x, this.y);
        var h = this.width * (Math.sqrt(3)/2);
        ctx.beginPath();
        ctx.moveTo(0, -h / 2);
        ctx.lineTo( -this.width / 2, h / 2);
        ctx.lineTo(this.width / 2, h / 2);
        ctx.lineTo(0, -h / 2);
        ctx.stroke();
        ctx.fill(); 
        ctx.closePath();
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.restore();
	};
    
    return enemy;
    
}());