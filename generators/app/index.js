'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  //Configurations will be loaded here.
  //Ask for user input
  prompting: function() {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Qual o nome do projeto ?',
      //Defaults to the project's folder name if the input is skipped
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


      /////Routes
      this.fs.copy(
        this.templatePath('_routes/_index.js'),
        this.destinationPath('routes/index.js'));

      this.fs.copy(
        this.templatePath('_routes/_tasks.js'),
        this.destinationPath('routes/tasks.js'));

      this.fs.copy(
        this.templatePath('_routes/_users.js'),
        this.destinationPath('routes/users.js'));


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
