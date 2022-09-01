
const process = require("process");
const funcionesDeTareas = require("./funcionesDeTareas")
// leemos el archivo json
//console.log(tareas)

//console.log(tareasParseadas);
let action = process.argv[2];
//switch (action){
    //case "listar":
        //for(let i = 0; i< tareasParseadas.length; i++){
           // console.log(tareasParseadas[i].titulo)

           switch (action) {
            case "listar": 
                let listaDeTareas = funcionesDeTareas.leerJson()
                for (let i = 0; i < listaDeTareas.length; i++){
                    console.log(`Tarea: ${listaDeTareas[i].titulo} \nEstado: ${listaDeTareas[i].estado}`)
            console.log("*************************************************************************")
                }
                break
                case undefined:
                    console.log("Atención, tienes que pasar una acción");
                    break;
                default:
                    console.log("No entiendo qué querés hacer")
        }
        
    
        

