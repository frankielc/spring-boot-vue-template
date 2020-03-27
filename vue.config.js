// noinspection JSUnusedGlobalSymbols
let vueConfig = {
    /* prevents vue from generating files with hashname which would not work with spring templates */
    filenameHashing: false,

    /* make sure css is put on external files and build source maps */
    css: {
        extract: true,
        sourceMap: true
    },
    productionSourceMap: true,

    // delete HTML related webpack plugins
    chainWebpack: config => {
        /* prevents html generation as explained on https://github.com/vuejs/vue-cli/issues/1478 */
        Object.keys(vueConfig.pages).forEach(function (key) {
            config.plugins.delete('html-' + key);
            config.plugins.delete('preload-' + key);
            config.plugins.delete('prefetch-' + key);
        });
    },

    configureWebpack: config => {
        config.resolve = {
            extensions: ['.js', '.ts', '.vue']
        };
    },

    // not only can we add multiple entry-points we're also changing the only starting point
    pages: {
        index: {
            entry: './src/frontend/main.js'
        }
    }
};

module.exports = vueConfig;