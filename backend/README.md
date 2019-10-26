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

**/post/new**  
Request
```json
{
  "title": "Title of the post",
  "category": "The category the post fits in",
  "content": "The post content"
}
```
Response  