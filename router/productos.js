const { Router }= require('express');
const Producto = require('../Classes/Producto');
const router = Router();


const prod = new Producto()

router.get("/listar/",  (req, res) =>  {
    res.json({"productos":  prod.listar()})
})

router.get("/listar/:id",  (req, res) => {
    const { id } = req.params
    res.json({"producto": prod.buscarPorId( id )})
})

router.delete("/borrar/:id", (req, res) => {
    const { id } = req.params
    res.json({"eliminado": prod.eliminar(id)})
})

// TODO: aun falta como definir este campo 
router.put("/actualizar/:id", (req, res) => {
    const { id } = req.params
    const { body } = req
    res.json({"producto": prod.editar( id , body )})
})

router.post("/guardar/",  (req, res) => {
    const { body } = req
    res.json({"producto": prod.guardar(body)})
})
module.exports = router;
