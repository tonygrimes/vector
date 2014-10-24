  define(function(){
	
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

	Vector2D.prototype.setLength = function (newLength) {
		var currentLength = this.getLength(),
			changeFactor = (newLength - currentLength) / currentLength;

		this.scale(changeFactor);
	};

	Vector2D.prototype.getAngle = function () {	
		var angle = Math.atan2(this.y, this.x);
		return this.toDegrees(angle);	
	};

	Vector2D.prototype.setAngle = function (degrees) {
		var length = this.getLength(),
			radians = this.toRadians(degrees);
		this.x = length * Math.cos(radians);
		this.y = length * Math.sin(radians);

	};

	Vector2D.prototype.getAngleFromOriginVector = function (Vector2D) {	
		
	};

	Vector2D.prototype.rotate = function (degrees) {
		var angle = this.getAngle() + degrees;			
		setAngle(angle);
	};

	Vector2D.prototype.dot = function (vector2D) {
		return this.x * vector2D.x + this.y * vector2D.y;		
	};

	Vector2D.prototype.isPerpendicularTo = function (vector2D) {
		return (this.dot(vector2D) == 0);
	};

	Vector2D.prototype.getNormal = function () {
		return new Vector2D(-this.y, this.x);
	};

	Vector2D.prototype.toDegrees = function (radians) {
		return radians * (180 / Math.PI);
	};

	Vector2D.prototype.toRadians = function (degrees) {
		return degrees * (Math.PI / 180);
	};

	return Vector2D;

})