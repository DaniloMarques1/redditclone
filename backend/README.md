## Endpoints para a api

* POST /user/new - Cria um novo usuario
* POST /user - Autentica o usuario

**/user/new**  
Request
```json
{
	"name" : "John Lennon",
	"email" : "jon@gmail.com",
	"password" : "yoko"
}
```

Response
```json
{
  "_id": "5daa8e44ee366678c4ac306c",
  "name": "John Lennon",
  "email": "jon@gmail.com",
  "password": "$2b$10$WfpakRtJBL3LPzu.xT7hY.t8v2XdsDktZtXDI0vJwCwM5aRWPo17K",
  "__v": 0
}
```

* GET /categories - Retorna as categorias cadastradas
```json
[
  {
    "_id": "5db38dc570754118f292a98d",
    "name": "programming",
    "__v": 0
  },
  {
    "_id": "5db38dc970754118f292a98e",
    "name": "movies",
    "__v": 0
  }
]
```

* POST /post/new - Cria um novo post
* GET /post - Retorna todos os posts


**/post/new**  
Request - **token** deve ser enviado no header
```json
{
  "title": "Title of the post",
  "category": "The category the post fits in",
  "content": "The post content"
}
```
Response  

```json
{
  "_id": "5db3a009a0ffa02ae2dfd74e",
  "title": "Side Projects",
  "content": "Fala pessoal, alguem a fim de criar um projetinho? pode ser um clone de algo legal!",
  "user": "5daa4ac78c0a3c1ae54543b2",
  "category": "5db38dc570754118f292a98d",
  "__v": 0
}
```
**/post** Response

```json
[
  {
    "_id": "5db39ab7a63eec25637baca0",
    "title": "How you guys learned mern stack?",
    "content": "Hey guys, i'm curious about how you all learn mern stack",
    "user": {
      "_id": "5dac777ea6a1241e720d3f75",
      "nickName": "simbazinho",
      "name": "Simba Lion",
      "email": "simba@gmail.com",
      "password": "$2b$10$y3AF683z4j8XtfF0sSBKFu7LxIRDCAXF7qXqbE8iqEtJRoFxOUSta",
      "__v": 0
    },
    "category": {
      "_id": "5db38dc570754118f292a98d",
      "name": "programming",
      "__v": 0
    },
    "__v": 0
  }
  
]
```
