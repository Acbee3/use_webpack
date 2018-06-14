// 注意： webpack 这个 前端的构建工具，是基于 node.js 开发出来的；
// 所以，webpack.config.js 配置文件中，支持 Node.js 语法
const HtmlPlugin = require('html-webpack-plugin')
const htmlplugin = new HtmlPlugin({
  template: './src/index.html', // 指定 要把 哪个 HTML 文件托管到内存中
  filename: 'index.html' // 指定内存中生成的HTML叫什么名字
})

// 向外暴露一个配置对象
// 这个配置对象的作用：每当大家运行 npm run dev 的时候，都会执行 webpack 命令；
// 当 webpack 工具在转换代码之前，会先读取项目根目录中，webpack.config.js 中导出的配置对象；
// 然后，根据配置对象指定的相关配置，进行代码的转换；
module.exports = {
  // 在开发阶段，指定为 development 模式就行；这样能够提高编译速度；
  mode: 'development', // mode 表示代码转换的模式  只能从  development  和  production  中进行取值
  plugins: [htmlplugin], // 所有的插件，必须放到 plugins 节点中才能生效
  module: { // 所有 非.js 结尾的第三方文件类型，都可以在 module 节点中进行配置
    rules: [ // rules 是匹配规则，如果 webpack 在打包项目的时候，发现，某些 文件的后缀名是 非 .js 结尾的
      //  webpack 默认处理不了，此时，webpack 查找 配置文件中的 module -> rules 规则数组；
      // 第三方 loader 的调用顺序是 从后往前；
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.jpg|png|gif|bmp$/, use: 'url-loader' },
      // 注意：在配置 babel-loader 的时候，一定要添加 exclude 排除项，把 node_modules 目录排除
      // 这样，只让 babel-loader 转换 程序员 自己手写的 JS 代码；
      // 好处：1. 能够提高编译的转换效率； 2. 能够防止不必要的报错！
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}