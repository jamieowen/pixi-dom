
if( typeof PIXI === 'undefined' ){
	var PIXI = {};
}

module.exports = PIXI.DOM = {
	Layer:     require('./Layer'),
	RenderRegion:   require('./RenderRegion')
};