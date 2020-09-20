<h1 align="center">
  <img alt="Logo RocketShoes" src="./mobile/src/assets/screens/logo_rocketshoes.png" />
</h1>

<h1 align="center">
  Aplicação para um carrinho de compras web e mobile utilizando conceitos de Redux Saga. 
</h3>

## :information_source: Sobre o projeto

- Este projeto apresenta a versão web e mobile do app RocketShoes.
- Este projeto disponibiliza um carrinho de compra de tênis.
- A principal funcionalidade é o uso do framework Redux-Saga.

O projeto apresenta basicamente 3 telas (screens):

### Main/Home:

#### Nesta tela é possível visualizar os produtos disponíveis via API e adicioná-los ao carrinho de compras.

<h3>
  <img src="./mobile/src/assets/screens/screen_home.png" alt="Tela Home do App RocketShoes">
</h3>

### Cart:

#### Nesta tela é possível visualizar os produtos selecionados, acrescentar mais itens ao produto e remover o produto do carrinho de compras.

<img src="./mobile/src/assets/screens/screen_cart.png" alt="Tela Cart do App RocketShoes">

### Header:

#### No Header do app é possível visualizar quantos produtos foram acrescentados ao carrinho de compra.

<img src="./mobile/src/assets/screens/screen_header.png" alt="Header do App RocketShoes">

## :black_nib: Funcionalidades

1. Selecionar o produto para adicioná-lo ao carrinho.
2. Acessar a cesta de produtos pelo Header da aplicação.
3. Ao entrar na cesta de carrinho é possivel aumentar/diminuir a quantidade de itens do produto.
4. Ao adicionar mais itens ao produto na cesta do carrinho a aplicação informa quando a quantidade solicitada está fora de estoque.
5. Também é possível remover o produto da cesta do carrinho. Uma vez sem produtos na cesta o sistema apresenta a mensagem "Seu carrinho está vazio".

## :rocket: Tecnologias

As principais tecnologias/bibliotecas utilizadas são:

- Axios
- PropTypes
- Redux Saga
- react-native-gesture-handler
- MaterialIcons (react-native-vector-icons/MaterialIcons)
- styled-components
- slint + Prettier + Babel

## :construction_worker: Como utilizar

Você pode clocar o repositório deste projeto em sua estação de trabalho utilizando o comando abaixo:

git clone https://github.com/edenex/bootcamp-gostack-modulo-07.git

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 🧡 by [Edenir de Souza](https://github.com/edenex) 😉
