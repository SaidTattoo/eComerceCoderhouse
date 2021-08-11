const { Router } = require("express");
const Carrito = require("../Classes/Carrito");
const { isAdmin } = require("../middleware/isAdmin");
const router = Router();


const carr = new Carrito()

router.get("/listar/:id?", (req, res) => {
  const { id } = req.params;
  res.json(req.params.id ? { carrito: carr.buscarPorId(parseInt(id)) } : { carrito: carr.listar() });
});

router.put("/agregar/:id_producto", (req, res) => {
  const { id_producto } = req.params
  res.json({ "carrito": carr.agregar(id_producto) });
});
router.delete("/borrar/:id", (req, res) => {
  const { id } = req.params
  res.json({ carrito: carr.eliminar(id) });
});
module.exports = router;
