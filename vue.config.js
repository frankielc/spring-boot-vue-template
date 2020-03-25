
module.exports = {
//adding extract css true solves this issue
    filenameHashing: false,
    css: {
        extract: true
    },

    // delete HTML related webpack plugins
    chainWebpack: config => {
        config.plugins.delete('html');
        config.plugins.delete('preload');
        config.plugins.delete('prefetch')
    },

    configureWebpack: config => {
        config.resolve = {
            extensions: ['.js', '.ts', '.vue'],
        };
    }
};