const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModueleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModueleFederationPlugin({
            name: 'container',
            remotes: {
                Products: 'Products@http://localhost:3001/remoteEntry.js',
                Cart: 'Cart@http://localhost:3002/remoteEntry.js'
            }
        })
    ]
}