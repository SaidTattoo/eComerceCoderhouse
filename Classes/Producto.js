const { Console } = require("console");

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
  editar(id, product) {
    let arr
    this.datos.map((producto) => {
      if (producto.id == id) {
        arr = {
          "id": id,
          "nombre": product.nombre,
          "precio": product.precio,
          "thumbnail": product.thumbnail,
          "timestamp": product.timestamp,
          "descripcion": product.descripcion,
          "codigo": product.codigo,
          "stock": product.stock
        }
      }
    });
    let newArr = this.datos.filter((prod) => prod.id != id)
     newArr.push(arr)
   

    this.fs.writeFileSync(
      "./db/productos.json",
      JSON.stringify(newArr, null, 4)
    );
    return newArr;
  }
}
module.exports = Producto;

