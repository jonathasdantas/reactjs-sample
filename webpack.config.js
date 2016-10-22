const PATHS = {
	app: './app/index.js',
	html: './app/index.html',
	dist: './dist'
};

module.exports = {
	entry: {
		html: PATHS.html,
		javascript: PATHS.app
	},
	output: {
		path: PATHS.dist,
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: PATHS.dist
	},
	eslint: {
		emitWarning: true
	},
	module: {
		// ESLINT Loader
		preLoaders: [
			{
				test: /\.(js|jsx)?$/,
				loaders: ["eslint-loader"],
				exclude: /node_modules/
			}
		],
		loaders: [
			// File Loader
			{
				test: /\.html$/,
				loader: 'file?name=[name].[ext]'
			},
			// Babel Loader
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			},
			// Sass Loader
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};