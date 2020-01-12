

//comando crear
//    --descripcion -d
//comando actualizar
//      --descripcion -d --completado -c true

const flags = {
    descripcion:{
        demand:true,
        alias:'d',
        desc:'Descripcion de la tarea por hacer'
    },
    completado:{
        alias:'c',
        default:true,
        desc:'Marca como compleada la tarea'
    }

}

const argv = require('yargs')
            .command('crear','Crea una nueva tarea',flags)
            .command('listar','Lista todas las tareas')/*,flags  */
            .command('actualizar','Actualizar una tarea',flags)
            .command('borrar','Borrar una tarea de la lista',flags)
            .help()
            .argv;

module.exports={
    argv
}