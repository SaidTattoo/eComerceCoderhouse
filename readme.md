###Productos

```
[GET] http://localhost:8080/api/productos/listar
[DELETE] http://localhost:8080/api/productos/borrar/+ID
[GET] http://localhost:8080/api/productos/listar/+ID
```

```
[PUT] http://localhost:8080/api/productos/actualizar/+ID
{
    "nombre": "Posion",
    "precio": 1200,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Potion-512.png",
    "timestamp": "",
    "descripcion": "",
    "codigo": "",
    "stock": 1
}

```

```
[POST] http://localhost:8080/api/productos/guardar/
/* body de la peticion */
{
    "nombre": "Posion",
    "precio": 1200,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Potion-512.png",
    "timestamp": "",
    "descripcion": "",
    "codigo": "",
    "stock": 1
}
```


###Carrito 

```
[GET] http://localhost:8080/api/carrito/listar
[PUT] http://localhost:8080/api/carrito/agregar/+ID_PRODUCTO
[GET] http://localhost:8080/api/carrito/listar/+ID_PRODUCTO
[DELETE] http://localhost:8080/api/carrito/borrar/+ID_PRODUCTO
```