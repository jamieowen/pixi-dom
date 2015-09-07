
var Layer = require( './Layer' );

var RenderRegion = function( width, height, domElement, renderer ){

	Layer.call( this, domElement );

	this._regionWidth = width || 100;
	this._regionHeight = height || 100;

	this._renderer = renderer || this._createRenderer();

};

RenderRegion.prototype._createRenderer = function(){

	return new PIXI.WebGLRenderer();

};

