const fs=require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`,data,(err)=>{
        if(err) throw new Error ('No se pudo grabar',err);
        
    })
}

const cargarDB = () =>{
    //para validar que el json tenga algo para ser valido
    try{
        listadoPorHacer = require('../db/data.json');        
    }catch{
        listadoPorHacer = []
    }

    
}

const crear = (descripcion)=>{
    cargarDB()

    let porHacer = {
        descripcion,
        completado:false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () =>{
    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion,completado = true) =>{
    cargarDB();
    //let tarea = listadoPorHacer.find(tarea=>tarea.descripcion === descripcion);
//
    //console.log(tarea);

    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion === descripcion;
    })

    if (index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    }else{
        return false;
    }
}

const borrar = (descripcion) =>{
    cargarDB();
    let listadoAux = listadoPorHacer.filter(tarea=>{
        return tarea.descripcion !== descripcion;
    })

    if (listadoAux.length === listadoPorHacer.length){
        return false;
    }else{
        listadoPorHacer = listadoAux;       
    }
    guardarDB();

    
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}