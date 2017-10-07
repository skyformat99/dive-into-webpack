const path = require('path');

class TestPlugin {
  constructor() {
    console.log('@plugin constructor');
  }

  apply(compiler) {
    console.log('@plugin apply');

    compiler.plugin('entry-option', (options, callback) => {
      console.log('@entry-option');
    });

    compiler.plugin('after-plugins', (options, callback) => {
      console.log('@after-plugins');
    });

    compiler.plugin('after-resolvers', (options, callback) => {
      console.log('@after-resolvers');
    });

    compiler.plugin('environment', (options, callback) => {
      console.log('@environment');
    });

    compiler.plugin('after-environment', (options, callback) => {
      console.log('@after-environment');
    });

    compiler.plugin('before-run', (options, callback) => {
      console.log('@before-run');
      callback();
    });

    compiler.plugin('run', (options, callback) => {
      console.log('@run');
      callback();
    });

    compiler.plugin('watch-run', (options, callback) => {
      console.log('@watch-run');
      callback();
    });

    compiler.plugin('normal-module-factory', (options, callback) => {
      console.log('@normal-module-factory');
    });

    compiler.plugin('context-module-factory', (options, callback) => {
      console.log('@context-module-factory');
    });

    compiler.plugin('before-compile', (options, callback) => {
      console.log('@before-compile');
      callback();
    });

    compiler.plugin('compile', (options, callback) => {
      console.log('@compile');
    });

    compiler.plugin('this-compilation', (options, callback) => {
      console.log('@this-compilation');
    });

    compiler.plugin('compilation', (options, callback) => {
      console.log('@compilation');
    });

    compiler.plugin('make', (options, callback) => {
      console.log('@make');
      callback();
    });

    compiler.plugin('after-compile', (options, callback) => {
      console.log('@after-compile');
      callback();
    });

    compiler.plugin('should-emit', (options, callback) => {
      console.log('@should-emit');
    });

    compiler.plugin('need-additional-pass', (options, callback) => {
      console.log('@need-additional-pass');
      callback();
    });

    compiler.plugin('emit', (options, callback) => {
      console.log('@emit');
      callback();
    });

    compiler.plugin('after-emit', (options, callback) => {
      console.log('@after-emit');
      callback();
    });

    compiler.plugin('done', (options, callback) => {
      console.log('@done');
    });

    compiler.plugin('failed', (options, callback) => {
      console.log('@failed');
      callback();
    });

    compiler.plugin('invalid', (options, callback) => {
      console.log('@invalid');
    });

    compiler.plugin('watch-close', (options, callback) => {
      console.log('@watch-close');
    });
  }
}

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new TestPlugin(),
  ]
};
