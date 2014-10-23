  define(function(){
	
	var Vector3D = function (x, y, z) {
		this.x = x;	
		this.y = y;
		this.z = z;
	};

	Vector3D.prototype.getClone = function () {
		return new Vector3D(this.x, this.y, this.z);
	};

	Vector3D.prototype.equals = function (vector3D) {
		return (this.x == vector3D.x && this.y == vector3D.y, && this.z == vector3D.z);
	};	

	Vector3D.prototype.toString = function () {
		return "x: " + Math.floor(this.x) + ", y: " + Math.floor(this.y) + ", z: " + Math.floor(this.z);
	};

	Vector3D.prototype.add = function (Vector3D) {
		this.x += Vector3D.x;	
		this.y += Vector3D.y;
		this.z += Vector3D.z;	 
	};

	Vector3D.prototype.subtract = function (Vector3D) {
		this.x -= Vector3D.x;	
		this.y -= Vector3D.y;
		this.z -= Vector3D.z;	 
	};

	Vector3D.prototype.invert = function () { 
		this.x = -this.x;	
		this.y = -this.y;	
		this.z = -this.z;
	};

	Vector3D.prototype.scale = function (factor) {
		var scaleX = this.x * factor;
		var scaleY = this.y * factor;
		var scaleZ = this.z * factor;
		this.x += scaleX;
		this.y += scaleY;
		this.z += scaleZ;	 
	};

	Vector3D.prototype.getLength = function () {
		return Math.sqrt ( (this.z * this.z) + (this.x * this.x) + (this.y * this.y) );
	};

	Vector3D.prototype.setLength = function (newLength) {
		var currentLength = this.getLength(),
			changeFactor = (newLength - currentLength) / currentLength;

		this.scale(changeFactor);
	};

	Vector3D.prototype.getAngle = function () {	
		var angle = Math.atan2(this.y, this.x);
		return this.toDegrees(angle);	
	};

	Vector3D.prototype.setAngle = function (degrees) {
		var length = this.getLength(),
			radians = this.toRadians(degrees);
		this.x = length * Math.cos(radians);
		this.y = length * Math.sin(radians);

	};

	Vector3D.prototype.rotate = function (degrees) {
		var angle = this.getAngle() + degrees;			
		setAngle(angle);
	};

	Vector3D.prototype.dot = function (Vector3D) {
		return this.x * Vector3D.x + this.y * Vector3D.y;		
	};

	Vector3D.prototype.isPerpendicularTo = function (Vector3D) {
		return (this.dot(Vector3D) == 0);
	};

	Vector3D.prototype.getNormal = function () {
		return new Vector3D(-this.y, this.x);
	};

	Vector3D.prototype.toDegrees = function (radians) {
		return radians * (180 / Math.PI);
	};

	Vector3D.prototype.toRadians = function (degrees) {
		return degrees * (Math.PI / 180);
	};

	return Vector3D;

})