'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  //Configurations will be loaded here.
  //Ask for user input
  prompting: function() {
    var done = this.async();
    
    this.log(yosay(
      'Bem-vindo, Aqui é um gerador de node + express + sequelize. Sera criado um projeto e para criar os endpoints por favor digite logo apos esse : yo node-sequelize-facisa:endpoint' +
      ' e escolha os endpoints que deseja criar.' 
    ));

    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Qual o nome do projeto ?',
      default: this.appname
    }, function(answers) {
      this.props = answers;
      this.log(answers.name);
      done();
    }.bind(this));
  },
  //Writing Logic here
  writing: {
    //Copy the configuration files
    config: function() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name
        }
      );
    },

    //Copy application files
    app: function() {
      //Server file
      this.fs.copy(
        this.templatePath('_db.js'),
        this.destinationPath('db.js'),
      );
      this.fs.copy(
        this.templatePath('_index.js'),
        this.destinationPath('index.js'),
      );

      this.fs.copy(
        this.templatePath('_ntask.sqlite'),
        this.destinationPath('ntask.sqlite'),
      );

      // Model
      this.fs.copy(
        this.templatePath('_models/_tasks.js'),
        this.destinationPath('models/tasks.js'));

      this.fs.copy(
        this.templatePath('_models/_users.js'),
        this.destinationPath('models/users.js'));

      // libs
      this.fs.copy(
        this.templatePath('_libs/_boot.js'),
        this.destinationPath('libs/boot.js')
      );

      this.fs.copy(
        this.templatePath('_libs/_config.js'),
        this.destinationPath('libs/config.js')
      );

      this.fs.copy(
        this.templatePath('_libs/_middlewares.js'),
        this.destinationPath('libs/middlewares.js')
      );

    }
  },
  install: function() {
    this.installDependencies();
  }
});
