# TakeTeste API

API construida como parte do teste técnico do processo seletivo da **Take Blip**.

O seu objetivo é integrar com a API pública do GitHub e listar informações sobre os 5 repositórios de linguagem C# mais antigos da Take,
ordenados de forma crescente por data de criação.

Posteriormente, a API deve ser consumida por um chatbot construído por meio da plataforma [Blip](portal.blip.ai).

Estrutura da aplicação:

```
.
├── challenge
│   ├── Api
│   │   ├── controllers
│   │   │   ├── Controller.js
│   │   ├── services
│   │   │   ├── Service.js
│   │   ├── routes
│   │   │   ├── CustomRouter.js
│   │   ├── utils
│   │   │   ├── fetchAPI.js
│   │   │   ├── formatRepo.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── Flow
│   │   ├── mybotflow.json

```

# Desenvolvimento

A aplicação foi desenvolvida na linguagem **JavaScript**, utilizando **Node.js** e **Express**.

As dependências da aplicação são:

- `axios@^0.27.2`: para fazer a requisição para a API do GitHub
- `dotenv@^16.0.1`: para ter acesso às variáveis de ambiente
- `express@^4.18.1`: para criar a API Rest

As dependências de desenvolvimento são:

- `eslint@^8.15.0`, `eslint-config-airbnb-base@^15.0.0`, `eslint-plugin-import@^2.26.0`: para
configurar o ESLint utilizando o guia de estilos do Airbnb
- `nodemon@^2.0.16`: para reiniciar a aplicação sempre que ocorrer alguma mudança no código

O deploy, realizado pela plataforma gratuita do Heroku, está disponível no endereço:

https://taketeste-api.herokuapp.com/

# Endpoint disponível

`GET /` - Lista os 5 repositórios de linguagem C# mais antigos da Take em ordem crescente de data de criação.

Retorno esperado para uma requisição bem-sucedida:

```json
{
  "repos": [
  {
     "title": "takenet/library.data",
     "subtitle": "Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications",
     "image": "https://avatars.githubusercontent.com/u/4369522?v=4",
     "language": "C#",
     "createdAt": "2013-10-25T13:04:51Z"
   },
  {
     "title": "takenet/library.logging",
     "subtitle": "Provides a simple logging interface for applications and some basic implementations of this interface",
     "image": "https://avatars.githubusercontent.com/u/4369522?v=4",
     "language": "C#",
     "createdAt": "2013-10-25T15:18:07Z"
   },
  {
     "title": "takenet/libphonenumber-csharp",
     "subtitle": "Forking original c# port",
     "image": "https://avatars.githubusercontent.com/u/4369522?v=4",
     "language": "C#", 
     "createdAt": "2013-11-29T09:16:51Z"
   },
  {
     "title": "takenet/Takenet.Radar",
     "subtitle": "Radar de tecnologias takenet",
     "image": "https://avatars.githubusercontent.com/u/4369522?v=4",
     "language": "C#",
     "createdAt": "2014-01-13T11:38:38Z"
   },
  {
     "title": "takenet/Takenet.ScoreSystem",
     "subtitle": "Takenet score system",
     "image": "https://avatars.githubusercontent.com/u/4369522?v=4",
     "language": "C#",
     "createdAt": "2014-01-28T10:31:10Z"
   }
  ]
}
```

# Contato

E-mail: this.willprado@gmail.com \
Linkedin:  https://www.linkedin.com/in/willian-prado-dev/ \
Github: https://github.com/willian-prado
