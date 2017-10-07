'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.scss');

// load images data
var imageDatas = require('../data/imageDatas.json');


//var imageURL = require('../images/yeoman.png');

//transform image info to image URL info
imageDatas = (function genImageURL(imageDatasArr) {
	for (var i = 0, j = imageDatasArr.length; i < j; i++ ) {
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);


var GalleryByReactApp = React.createClass({
	render: function() {
		//return <h1>hello world111</h1>;
		return (
			<section className="stage">
				<section className="img-sec">
				</section>
				<nav className="controller-nav">
				</nav>
			</section>
		);
    }
});
React.render(<GalleryByReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryByReactApp;
