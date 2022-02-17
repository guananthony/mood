const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
		src: './client/index.js',
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env', '@babel/react'],
				},
			},
			{
				test: /\.s?css/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: 'index.html',
		}),
	],
	devServer: {
		port: 8080,
		hot: true,
		open: true,
		static: {
			publicPath: '/dist',
			directory: path.resolve(__dirname, '/dist'),
		},
		proxy: {
			'/api/*': {
				changeOrigin: true,
				target: 'http://localhost:3000',
			},
		},
	},
};
