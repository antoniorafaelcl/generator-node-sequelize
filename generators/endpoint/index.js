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
            name: 'criarGETTasks',
            message: 'Criar metodo GET para o recurso de Tasks ?',
            default: true
        },
        {
            type: 'confirm',
            name: 'criarGETUsers',
            message: 'Criar metodo GET para o recurso de Usuarios ?',
            default: true
        },
        {
            type: 'confirm',
            name: 'criarPOSTTasks',
            message: 'Criar metodo POST para o recurso de Tasks ?',
            default: true
        },
        {
            type: 'confirm',
            name: 'criarPOSTUsers',
            message: 'Criar metodo POST para o recurso de Usuarios ?',
            default: true
        },
        {
            type: 'confirm',
            name: 'criarPUT',
            message: 'Criar metodo PUT para o recurso de Tasks ?',
            default: true
        },
        {
            type: 'confirm',
            name: 'criarDELETETasks',
            message: 'Criar metodo DELETE para o recurso de Tasks ?',
            default: true
        },
        {
            type: 'confirm',
            name: 'criarDELETEUsers',
            message: 'Criar metodo DELETE para o recurso de Users ?',
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
            criarGETTasks: this.props.criarGETTasks,
            criarGETUsers: this.props.criarGETUsers,
            criarPOSTTasks: this.props.criarPOSTTasks,
            criarPOSTUsers: this.props.criarPOSTUsers,
            criarPUT: this.props.criarPUT,
            criarDELETETasks: this.props.criarDELETETasks,
            criarDELETEUsers: this.props.criarDELETEUsers,

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
