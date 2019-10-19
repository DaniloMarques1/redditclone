## Endpoints para a api

* POST /user/new - Cria um novo usuario
* POST /user - Autentica o usuario

**/user/new**  
Request
```json
    {
        "name" : "Paul Mccartney",
        "email" : "paul@gmail.com",
        "password" : "thebeatles"
    }
```

Response
```json
    {
        "_id": "5daa7e56df462b646d36a060",
        "name": "Ringo Star",
        "email": "ringo@gmail.com",
        "password": "$2b$10$WuJOLz00NJ2BKu45ky6Fbu0JC974wGX9p3f2NRJUduN8ZsBtwtS3.",
        "__v": 0
    }
```