var path = require('path')
var chalk = require('chalk')    // 不同颜色的info
var util = require('util')
var yeoman = require('yeoman-generator')
var yosay = require('yosay')    // yeoman弹出框
var path = require('path')
var Reactpackage = yeoman.Base.extend({
  info: function () {
    this.log(chalk.green(
            'I am going to build your app!'
        ))
  },
  generateBasic: function () {  // 按照自己的templates目录自定义
        // this.directory('src', 'src');    //拷贝目录
        // this.copy('package.json', 'package.json');   //拷贝文件
    this.copy('test.html', 'test.html')
    this.copy('test.less', 'test.less')
  },
  generateClient: function () {
    this.sourceRoot(path.join(__dirname, 'templates'))
    this.destinationPath('./')
  },
  install: function () {      // 安装依赖
    this.installDependencies({
      skipInstall: this.options['skip-install']
    })
  },
  end: function () {
    this.log(yosay(
            'Your app has been created successfully!'
        ))
  }
})
module.exports = Reactpackage
