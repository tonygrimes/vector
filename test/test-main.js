require.config({
	baseUrl: ".",

	paths:{
		'underscore':'lib/underscore',
		'jquery':'lib/jquery',
		'Vector2D':'src/Vector2D'
	},

	shim: {
		'underscore' : {
			exports: 'underscore'
		},
		'jquery' : {
			exports: 'jquery'
		}
	}
});

require(['jquery', "underscore", "Vector2D"],

	function   ($, _, Vector2D) {

		console.log("jquery", $);
		console.log("underscore", _);
		console.log("Vector2D", Vector2D);
		
	}
);
