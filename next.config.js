const withImages = require('next-images')
module.exports = withImages()
const withPlugins = require("next-compose-plugins");
const webpack = require("webpack");
module.exports = withPlugins([withImages], {
    webpack: (config) => {
        config.node = {
            fs: "empty",
        };
        config.module.rules.push({
            test: /\.(glb|gltf|bin)$/,
            use: {
                loader: "file-loader",
            },
        });
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
            }));
        return config;
    },
});
