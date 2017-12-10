'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();
    
    this.log(yosay(
        'Bem-vindo, Aqui será possivel gerar os endpoints da API. Escolha os end poins que deseja'
      ));

    this.prompt([
        {
            type: 'confirm',
            name: 'criarGET',
            message: 'Criar metodo GET ?',
            default: true
        },
        {
            type: 'confirm',
            name: 'criarPOST',
            message: 'Criar metodo POST ?',
            default: true
        },
        {
            type: 'confirm',
            name: 'criarPUT',
            message: 'Criar metodo PUT ?',
            default: true
        },
        {
            type: 'confirm',
            name: 'criarDELETE',
            message: 'Criar metodo DELETE ?',
            default: true
        }],
        
        function(answers) {
            this.props = answers;
            this.log(answers.name);
            done();
        }.bind(this));
  },

  writing: {
    
    endpoint: function() {
        
        var options = {
            criarGET: this.props.criarGET,
            criarPOST: this.props.criarPOST,
            criarPUT: this.props.criarPUT,
            criarDELETE: this.props.criarDELETE
        };

        this.fs.copyTpl(
            this.templatePath('_tasks.js'),
            this.destinationPath('routes/tasks.js'), 
            options
          );

        this.fs.copyTpl(
            this.templatePath('_users.js'),
            this.destinationPath('routes/users.js'), 
            options
          );
        
          this.fs.copy(
            this.templatePath('_index.js'),
            this.destinationPath('routes/index.js')
          );
    }
  },
  install: function() {
    this.installDependencies();
  }
});
