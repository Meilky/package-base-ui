const mode = process.env.NODE_ENV || "development";
const path = require('path');

module.exports = {
	mode: mode,
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: { loader: "ts-loader" },
			},
		],
	},
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".ts"],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 8080,
	},
};
