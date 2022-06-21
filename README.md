# Teste Técnico - Lista de Compras Shopper

## Sobre o Projeto

Este projeto é um teste técnico para o processo seletivo da Shopper.com.br, onde foi solicitado a criação de um formulário de cadastro de pedidos com estoque.


## Funcionalidades

- [x] Página de Login: O usuário deve digitar seu email e senha cadastrados. Como não estou usando nenhuma API que retorma um token de autorização, o sistema de login é fictício, não exigindo um cadastro real, apenas sendo necessário digitar algum email e senha aleatórios.

- [x] Página de Estoque: Nessa página o usuário é capaz de visualizar os itens vendidos, bem como seu valor e a quantidade existente no estoque. Também é capaz de adicionar itens à sua lista de compras. Caso algum item não tenha mais em estoque, o usuário é avisado.

- [x] Página de Lista de Compras: O usuário, nessa página, consegue visualizar os itens que deseja comprar, também pode adicionar uma quantidade maior ou retirar os itens de sua lista. Ao clicar em salvar lista de compras, ele é avisado quando será feita a entrega do seu pedido, e os itens solicitados são retirados do estoque geral. Ele é redirecionado para o estoque novamente.

- [x] Em qualquer momento o usuário poderá deslogar clicando no botão login, onde é redirecionado para a página de login.


## Tecnologias utilizadas

```
Website (React)
    React Router Dom
    React Icons
    Axios
    Styled-components

Server (NodeJS + TypeScript)
    Express
    CORS
    KnexJS
    ts-node
    dotENV
```

## Rodando o projeto

### Back-end

Acesse a pasta `/api` e insira as informações de conexão com o banco de dados usando o modelo de arquivo `.env` abaixo:

```
DB_HOST= 
DB_PORT= 
DB_USER= 
DB_PASSWORD= 
DB_DATABASE= 
```

Depois instale as dependências usando:

```
npm install
```

Para rodar o projeto execute:

```
npm run dev
```

Agora seu back-end estará rodando na porta 3003.

### Front-end

Acesse a pasta `/web` e instale as dependências usando:

```
npm install
```

Para rodar o projeto execute:

```
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para acessar a aplicação.

## Link do projeto

[Shopper](misty-need.surge.sh)

Entre com qualquer email e senha

## Autor

[Linkedin](https://www.linkedin.com/in/mileny-faria)
