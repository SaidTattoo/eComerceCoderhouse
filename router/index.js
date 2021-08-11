const fs = require('fs');
const { Router } = require('express');
const router = Router()

const pathRouter = `${__dirname}`

const removeExtencion = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithoutExtension = removeExtencion(file)
    const skip = ["index"].includes(fileWithoutExtension)
    if (!skip) {
        router.use(`/${fileWithoutExtension}`, require(`./${fileWithoutExtension}`))
        console.log(`http://localhost:8080/api/${fileWithoutExtension}`)
    }
})

router.get("*", (req, res) => {
    res.status(404).send({ message: "Page Not found " })
})

module.exports = router