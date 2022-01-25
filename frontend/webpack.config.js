const mode = process.env.NODE_ENV || "development";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	mode: mode,
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: { loader: "ts-loader" },
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
	devtool: "inline-source-map",
	resolve: {
		extensions: [".tsx", ".js", ".ts"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			inject: "head",
			title: "Test app",
			templateContent: `<html><body id="App"></body></html>`,
		}),
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 8080,
	},
};
