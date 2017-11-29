'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
  
module.exports = class extends Generator {
  //Configurations will be loaded here.
  //Ask for user input
  prompting() {
    var done = this.async();
    return this.prompt({
      type: 'input',
      name: 'name',
      message: 'Qual o nome do seu projeto ?',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, function(answers) {
      this.props = answers;
      this.log(answers.name);
      done();
    }.bind(this));
  };
  writing() {
    //Copy the configuration files
    config: {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name
        }
      );
      this.fs.copy(
        this.templatePath('_package-lock.json'),
        this.destinationPath('package-lock.json')
      );

      this.fs.copy(
        this.templatePath('_ntask.sqlite'),
        this.destinationPath('ntask.sqlite')
      );
    };

    //Copy application files
    app: {
      //Server files
      this.fs.copyTpl(
        this.templatePath('_index.js'),
        this.destinationPath('index.js'),
        this.destinationPath('index.js'), {
          name: this.props.name
        }
      );
      this.fs.copy(
        this.templatePath('_db.js'),
        this.destinationPath('db.js'));

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
  };
  
  install() {
    this.installDependencies();
  }
};