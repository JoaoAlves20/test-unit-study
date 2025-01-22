# Estudando teste unitário

## Sobre o projeto

Esta aplicação foi criada com a intenção de aprender mais sobre testes unitários, aplicando num consumo de API do Star Wars, assim sendo, o teste consiste em verificar se está sendo chamada a API com o retorno sendo do R2-D2.

## Tecnologias

- NodeJS
- Mocha
- Nock

O nock foi usado para o teste ficar mais rápido, sendo usado no "this.beforeAll()", que antes de qualquer coisa, verificará se está tentando consumir uma URL especificada no próprio nock, e se está sendo utilizado o método GET no endpoint também especificado, e se estiver, retornará um objeto armazenado numa constante chamada "response".

## Como rodar o projeto

### Clonando o projeto

```bash
# Primeiro é preciso clocar o projeto
$ git clone https://github.com/JoaoAlves20/test-unit-study.git
# E depois é preciso entrar na pasta
$ cd test-unit-study
# Após isso, basta instalar as dependências
$ npm install
```

### Rodando o teste

```bash
# Depois que tiver tudo instalado, é só rodar o teste
$ mocha test/index.test.js
```