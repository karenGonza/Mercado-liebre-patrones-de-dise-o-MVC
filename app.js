let express = require("express");
let app = express()
let path = require("path")//Sirve para traer el dirname y pasarle la ruta absoluta al sendFile
app.use(express.static("public"));//Sirve para poder mostrar las imagenes en el navegador
const indexController = require("./controller/indexController.js")//requiero el modulo que creé

app.get("/", indexController.index)//ejecuto el modulo que creé en index controller que es el responsable de guiar hacia el index HTML


app.listen(3000, () =>{
    console.log("Servidor levantado en el puerto 3000")
})