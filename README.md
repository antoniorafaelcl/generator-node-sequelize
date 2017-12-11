# Gerador de API Node + Express + Sequelize

>Gerador para criação de API com as Tecnologias Node, Express, Sequelize. Com ela é possivel criar cruds se assim desejar.

## Instalação

Certifique-se que o [Yeoman](http://yeoman.io) e o [node.js](https://nodejs.org/) estao instalados.

```bash
npm install -g yo
npm install -g generator-node-sequelize-facisa
```
Em seguida, para gerar um novo projeto, faça :

```bash
yo generator-node-sequelize-facisa
```


## Criando novos endpoints
Para criar os endpoints do projeto você deve dentro da pasta do projeto, fazer o seguinte comando:

```bash
yo generator-node-sequelize-facisa:endpoint
```
Isso gerará rotas de REST da sua API.


## Metodo de Utilização

Depois de ter criado o projeto e ter criado os endpoints, entre dentro da pasta do projeto e para executar o projeto faça : 

```bash
npm start
```

Logo apos executar o Projeto, vamos testa-lo , entre em http://localhost:3000/: 

```
http://localhost:3000/tasks
http://localhost:3000/tasks/id

```

Para Criar um registro, utilize o Postman : 

```
{'title':'Seu titulo'}

```
Caso deseje clonar a pasta do direto do GIT,  faça o seguinte: 

* Clone
* npm install
* npm link
* yo node-sequelize-facisa

## Contribuidores

[Antonio Rafael](https://github.com/antoniorafaelcl)

[José Aelysson](https://github.com/Aelysson15)
