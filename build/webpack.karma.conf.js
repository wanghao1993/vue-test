var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap
            // extract: true
        })
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'jquery': 'jquery',
            'nm': resolve('node_modules'),
            'components': resolve('src/components'),
            'bkdata-ui': resolve('src/bkdata-ui'),
            'dataweb': resolve('src')
        }
    },
    // devtool: config.build.productionSourceMap ? '#source-map' : false,
    devtool: 'inline-source-map',
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].js'),
        chunkFilename: utils.assetsPath('js/[id].js')
    },
    resolveLoader: {
        alias: {
            // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
            // see discussion at https://github.com/vuejs/vue-loader/issues/724
            'scss-loader': 'sass-loader'
        }
    },
    
    plugins: [
    ],
    externals: {
        
    }
})
// make sure all plugins is removed!
webpackConfig.plugins = [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
    })
]
// npm run build --report`
// https://www.npmjs.com/package/webpack-bundle-analyzer
// if (config.build.bundleAnalyzerReport) {
//     var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
//     webpackConfig.plugins.push(new BundleAnalyzerPlugin())
// }

module.exports = webpackConfig
