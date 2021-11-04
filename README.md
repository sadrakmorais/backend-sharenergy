# DOCUMENTAÇÃO

## O Back-End utiliza conexão com um banco de dados NoSQL, o MongoDB

## Iniciando o projeto :
```
Primeiramente instale todas as dependencias através do comando

 `yarn install` ou `npm install`

Depois que as dependências estiverm instaladas utilize esse comando para iniciar o sistema:

`yarn start`
```

# DEPENDÊNCIAS:


## bcrypt
```
$ npm install bcrypt
```

## cookie-parser
```
$ npm install cookie-parser
```
## cors
```
$ npm install cors
```
## dotenv
```
$ npm install dotenv
```
## express
```
$ npm install express
```
## mongoose
```
$ npm install mongoose
```
## nodemon
```
$ npm install nodemon
```
## path
```
$ npm install path
```
## morgan
```
$ npm install morgan
```


# ROTAS:
## Autenticação:

```
    A autenticação realizada através de BearerJWT.
    O token de autenticação deve ser informado no campo "authorization" nos headers, com o prefixo "Bearer".

    Caso o token não seja fornecido, ou seja inválido, a API retornará o status code 401.
```

```
    GET /auth : Informação se o usuário está logado no sistema

    Status de resposta:
        - 200: Usuário logado;
        - 401: Usuário não está logado;
        - 500: API não conseguiu tratar o erro;
```

```
    POST /auth : Retorna token de autenticação

    Status de resposta:
        - 200: Login feito com sucesso;
        - 404: Usuário não encontrado;
        - 401: Senha incorreta;
        - 500: API não conseguiu tratar o erro;
```

## Clientes:

```
GET /users : Retorna todos os usuários

 Status de resposta:
        - 200: Nenhum erro ocorrido;
        - 500: API não conseguiu tratar o erro;
```

```
GET /users/:userId : Retorna um usuário específico

 Status de resposta:
        - 200: Nenhum erro ocorrido;
        - 404: Usuário não foi encontrado;
        - 500:  API não conseguiu tratar o erro;
```

```
POST /users : Cria um novo usuário

Status de resposta:
        - 201: Nenhum erro ocorrido e o recurso foi criado;
        - 400: Campos inválidos passados no payload(body);
        - 500: API não conseguiu tratar o erro;
```

```
PUT /users/:userId : Atualiza um usuário

Status de resposta:
        - 200: Nenhum erro ocorrido e o recurso foi criado;
        - 400: Campos inválidos passados no payload(body);
        - 404: Usuário não foi encontrado;
        - 500: API não conseguiu tratar o erro;
```

```
DELETE /users/:userId : Deleta um usuário

 Status de resposta:
        - 200: Nenhum erro ocorrido e o recurso foi criado;
        - 404: Usuário não foi encontrado;
        - 500: API não conseguiu tratar o erro;
```
## Administradores:

```
GET /admins : Retorna todos os Administradores

 Status de resposta:
        - 200: Nenhum erro ocorrido;
        - 500: API não conseguiu tratar o erro;
```

```
GET /admins/:adminId : Retorna um usuário específico

 Status de resposta:
        - 200: Nenhum erro ocorrido;
        - 404: Usuário não foi encontrado;
        - 500:  API não conseguiu tratar o erro;
```

```
POST /admins: Cria um novo usuário

Status de resposta:
        - 201: Nenhum erro ocorrido e o recurso foi criado;
        - 400: Campos inválidos passados no payload(body);
        - 500: API não conseguiu tratar o erro;
```

```
DELETE /admins/:adminId : Deleta um usuário

 Status de resposta:
        - 200: Nenhum erro ocorrido e o recurso foi criado;
        - 404: Usuário não foi encontrado;
        - 500: API não conseguiu tratar o erro;
```
# ACESSO REMOTO:

## Deploy do Back-End feito utilizando Heroku, disponível no link :
```
https://backend-sharenergy.herokuapp.com
```
