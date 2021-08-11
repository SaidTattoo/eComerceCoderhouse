const express = require("express");
const app = express();

const superRoutes = require("./router/index")

const PORT = process.env.PORT || 8080;

app.use(express.json())

app.use("/api", superRoutes )

const server = app.listen(PORT, () => {
    console.log(`servidor corriendo en en http://localhost:${PORT}`);
});
server.on("error", (error) => console.log(`error en el servidor ${error}`));