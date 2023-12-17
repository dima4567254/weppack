let path = require('path');
module.exports = {
  // entry: './src/js/script.js',
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js'),//склееваем участки путей}//как указывать несколько файлов
  },
  output: {
    path: path.resolve(__dirname, 'build',),//путь к файлу
    // filename: 'bundle.js',
    filename: '[name].[contenthash].js',//ключ к вайлу
    clean: true//удалить прошлый созданый файл 
  },
}

// 'use strict';

// let path = require('path');
// // const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


// module.exports = {
//   mode: 'none',//режим работы вебпака всего 3 стандарт продаксен..development
//   entry: './src/js/script.js',
//   // entry: { app: './src/js/script.js' },//для нескольких файлов
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/dist/js'//путь к файлу
//   },
//   watch: true,//слежение за файлами

//   devtool: "source-map",//режим просиотра без жатия где то в нетворк

//   module: {
//     rules: [//правила
//       {
//         test: /\.js$/,//проверка на js
//         exclude: /(node_modules|bower_components)/,
//         use: {//как использовать
//           loader: 'babel-loader?optional[]=runtime',//при помоши бабеля
//           options: {
//             presets: [//шаблоные настройки
//               ["@babel/env", {
//                 targets: {//цели
//                   edge: "17",
//                   firefox: "60",
//                   chrome: "67",
//                   safari: "11.1",
//                   ie: "11"
//                 },
//                 useBuiltIns: "usage"
//               }]
//             ]
//           }
//         }
//       }
//     ]
//   },
//   // plugins: [
//   //   new UglifyJsPlugin()
//   // ]
// };
// // npm i babel-loader

// // npm i babel-plugin-module-resolver
// // npm i babel-preset-env//не тот
// // npm install @babel/preset-env