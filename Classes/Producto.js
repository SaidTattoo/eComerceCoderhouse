class Producto {
  fs = require("fs");
  datos = JSON.parse(this.fs.readFileSync("./db/productos.json", "utf-8"));

  constructor() { }
  guardar(producto) {
    producto.id = this.datos.length + 1;
    producto.timestamp = new Date().toDateString();
    this.datos.push(producto);
    this.fs.writeFileSync(
      "./db/productos.json",
      JSON.stringify(this.datos, null, 4)
    );
    return this.datos;
  }
  listar() {
    return this.datos;
  }
  buscarPorId(id) {
    let producto = this.datos.find((producto) => producto.id == id)
    return producto ? producto : "No existe producto";
  }
  eliminar(id) {
    let productos = this.datos.filter((producto) => producto.id != id);
    this.fs.writeFileSync(
      "./db/productos.json",
      JSON.stringify(productos, null, 4)
    );
    let eliminado = this.datos.find((producto) => producto.id == id);
    return eliminado ? eliminado : "No existe producto";
  }
  // editar(id, producto) {
  //   let editado = (productos[id - 1] = {
  //     title: producto.title,
  //     price: producto.price,
  //     thumbnail: producto.thumbnail
  //   });
  //   return editado;
  // }
}
module.exports = Producto;

// {
//     "id": 1,
//     "nombre": "Posion",
//     "precio": 1200,
//     "thumbnail": "https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Potion-512.png",
//     "timestamp": "",
//     "descripcion": "",
//     "codigo": "",
//     "stock": 1
// }
