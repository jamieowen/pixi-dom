
var DOMLayer = function( domElement ){

	PIXI.Container.call( this );

	this.domElement = domElement || document.createElement('div');
};


DOMLayer.prototype = Object.create( PIXI.Container );
DOMLayer.prototype.constructor = DOMLayer;
module.exports = DOMLayer;


DOMLayer.prototype._renderWebGL = function( render )
{
	console.log( 'RENDER DOMLayer -' );
};


