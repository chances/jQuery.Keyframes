(function() {
    var pfx = $.keyframe.getVendorPrefix();
    var transform = pfx + 'transform';

    $.keyframe.define([{
	    name: "clouds",
	    "from": {
		"margin-left": "-50%"
	    },
	    "to": {
		"margin-left": "100%"
	    }
	}, {
	    name: "balloon",
	    "from": {
		"margin-top": "200px",
		"margin-left": "100%",
		transform: "transform:scale(1)"
	    },
	    "to": {
		"margin-top": "100px",
		"margin-left": "-20%",
		transform: "transform:scale(0.3)"
	    }
	}, {
	    name: "sun",
	    "from": {
		"margin-top": "50px",
		"margin-left": "-20px",
		transform: "transform:rotate(360deg)"
	    },
	    "to": {
		"margin-top": "-20px",
		"margin-left": "100px",
		transform: "transform:rotate(0deg)"
	    }
	}
    ]);

}).call(this);
