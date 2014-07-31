define([], function(){
	
	var Vector2D = function (x, y) {
		this.x = x;	
		this.y = y;
	};

	Vector2D.prototype.getClone = function () {
		return new Vector2D(this.x, this.y);
	};

	Vector2D.prototype.equals = function (vector2D) {
		return (this.x == vector2D.x && this.y == vector2D.y);
	};	

	Vector2D.prototype.toString = function () {
		return "x: " + Math.floor(this.x) + ", y: " + Math.floor(this.y);
	};

	Vector2D.prototype.add = function (vector2D) {
		this.x += vector2D.x;	
		this.y += vector2D.y;	 
	};

	Vector2D.prototype.subtract = function (vector2D) {
		this.x -= vector2D.x;	
		this.y -= vector2D.y;	 
	};

	Vector2D.prototype.inverse = function () { 
		this.x = -this.x;	
		this.y = -this.y;	
	};

	Vector2D.prototype.scale = function (factor) {
		var scaleX = this.x * factor;
		var scaleY = this.y * factor;
		this.x += scaleX;
		this.y += scaleY;	 
	};

	Vector2D.prototype.getLength = function () {
		return Math.sqrt ( (this.x * this.x) + (this.y * this.y) );
	};

	Vector2D.prototype.setLength = function (length) {



	};

	Vector2D.prototype.getAngleInRadians = function () {		

		//return Math.atan(this.y / this.x);
		return Math.atan2(this.y, this.x);

	};

	Vector2D.prototype.setAngle = function () {
	};

	return Vector2D;

})