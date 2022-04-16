let express = require("express");//Tengo que volver a requerirlos ya que los voy a usar en las funciones que voy a crear
let app = express()
let path = require("path")


let controlador = {
    index: (req, res) =>{
        res.sendFile(path.join(__dirname, "../views/home.html"))
    }
//traigo las rutas para que el codigo en el app.js esté más limpio y sea más comodo al momento de trabajar en equipo
}

module.exports = controlador;//exporto la funcion que creé