class Carrito {
  fs = require("fs");
  datosCarro = JSON.parse(this.fs.readFileSync("./db/carrito.json", "utf-8"));
  datosProductos = JSON.parse(this.fs.readFileSync("./db/productos.json", "utf-8"));
  constructor() { }

  listar() {
    return this.datosCarro;
  }
  buscarPorId(id) {
    let data = this.listar().producto.find((carro) => carro.id === id)
    return data ? data : "no existe  producto en el carrito";
  }
  agregar(id) {
    let producto = this.datosProductos.find((producto) => producto.id == id);
    producto.id_producto = this.listar().producto.length + 1
    this.datosCarro.producto.push(producto)
    this.fs.writeFileSync(
      "./db/carrito.json",
      JSON.stringify(this.datosCarro, null, 4)
    );
    return this.datosCarro
  }
  eliminar(id) {
    let eliminado = this.listar().producto.find((carro) => carro.id_producto == id)
    let carroModificado = this.listar().producto.filter(prod => prod.id_producto != id)
    this.datosCarro.producto = carroModificado
    console.log(this.datosCarro)
    this.fs.writeFileSync(
      "./db/carrito.json",
      JSON.stringify(this.datosCarro, null, 4)
    );
    return eliminado ? eliminado : "No existe producto en el carrito"
  }
}

module.exports = Carrito;
