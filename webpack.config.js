const path = require('path');

module.exports = {
	entry: './main.js',
	output: {
		filename: 'index.bundle.js',
		path: path.resolve(__dirname, './')
	}
};