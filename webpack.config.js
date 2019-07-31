let path = require("path");
module.exports = {
	mode: "development", // || "production",
	entry: {
		utils: "./src/utils",
		model: "./src/model",
    componentLoader: "./src/componentLoader"
	},
	output: {
		path: path.join(__dirname, "bin"),
    filename: '[name].js',
		libraryTarget: 'system',
	},
	optimization: {
		runtimeChunk: {
    	 	name: 'runtime',
		},
		//https://webpack.js.org/plugins/split-chunks-plugin/
		splitChunks: {
			cacheGroups: {
				all: {
					chunks: 'all',
					automaticNameMaxLength: 15,
					enforce:true,
					minSize:100,
					minChunks:2
				}
			}
    },
	}
};
