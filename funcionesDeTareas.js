const fs = require("fs")
//let tareasJson = fs.readFileSync("./tareas.json", "utf-8");
//let tareasParseadas = JSON.parse(tareasJson);

let funcionesDeTareas = {
    leerJson: function (){
        let tareasJson = fs.readFileSync("./tareas.json", "utf-8");
        let tareasParseadas = JSON.parse(tareasJson)
        return tareasParseadas
    }
}

module.exports = funcionesDeTareas