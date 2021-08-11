const { Router }= require('express');
const Producto = require('../Classes/Producto');
const { isAdmin } = require('../middleware/isAdmin');
const router = Router();


const prod = new Producto()

router.get("/listar/",  (req, res) =>  {
    res.json({"productos":  prod.listar()})
})

router.get("/listar/:id",  (req, res) => {
    const { id } = req.params
    res.json({"producto": prod.buscarPorId( id )})
})

router.delete("/borrar/:id",  isAdmin ,(req, res) => {
    const { id } = req.params
    res.json({"eliminado": prod.eliminar(id)})
})

// TODO: aun falta como definir este campo 
router.put("/actualizar/:id", isAdmin , (req, res) => {
    const { id } = req.params
    const { body } = req
    res.json({"producto": prod.editar( id , body )})
})

router.post("/guardar/", isAdmin ,(req, res) => {
    const { body } = req
    res.json({"producto": prod.guardar(body)})
})
module.exports = router;
