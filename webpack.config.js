const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js'
  },
  externals: [webpackNodeExternals()]
};

const clientConfig = {

};

module.exports = [serverConfig];
