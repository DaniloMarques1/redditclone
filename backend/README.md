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
