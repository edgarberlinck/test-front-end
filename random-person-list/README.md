# Executando o projeto

## Yarn

Atualizar as dependências
> yarn

Executar o servidor de desenvolvimento
> yarn start

## Npm

O projeto foi desenvolvido com o `yarn`, mas se quiser rodar com o `npm` não tem problema, basta apagar o `.yarn-lock` e executar os comandos abaixo:

Atualizar as dependências
> npm install

Executar o servidor de desenvolvimento
> npm start

# Notas para review

## Estrutura de pastas

 - **api**: Componentes responsáveis por retornar os dados do servidor
 - **components**: Componentes base do app
 - **containers**: Componentes de *layout*

 ## Organização dos componentes

 Não utilizei nenhuma bilioteca em especial, apenas organizei as informações e estilizei com css. A solução foi pensada para facilitar o uso de alguma bibliotaca visual, caso seja preciso, bastando alterar os componentes base.

 ## Filtragem de usuários

 A api sempre retorna dados diferentes, então eu passei a responsabilidade da fltragem de dados para o componente `UserList`. Eu não trabalharia dessa forma em uma aplicação de verdade, acabei achando que o componente ficou com responsabilidades demais.

## Quantidade de registros

Eu limitei a quantidade de registros para 1000 pois a api retorna muitos registros, não possui paginação e vários deles são repedidos. Limitei apenas para visualizar os resultados mais rápido. Creio eu não ser um problema para o teste. 

> Para ver todos os resultados basta alterar o arquivo `api/users.js`

````
.then(response => response.data.slice(0,1000))
````

para 

````
.then(response => response.data)
````