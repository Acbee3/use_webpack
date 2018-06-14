// nodejs 导入模块的语法
const HTMLPlugin = require('html-webpack-plugin');

const htmlplugin = new HTMLPlugin({
    // 指定把哪个 html 托管到内存中
    template: './src/index.html',
    filename: 'index.html'
});

module.exports = {
    // development 和 production
    mode: 'development',
    plugins: [htmlplugin],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.jpg|png|bmp|gif$/, use: ['url-loader']}
        ]
    }
};