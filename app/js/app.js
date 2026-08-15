import {Tarea} from "./classTarea.js"

const listaTareas = [];
let actualId = 0;

//Función para crear la tarea.
export function nuevaTarea(nombreTarea, descripcionTarea){

    if(nombreTarea === "" || nombreTarea === undefined || nombreTarea === null){
        console.log("El campo nombre no es valido, no se guardara la tarea")
        return
    }

    if(descripcionTarea === "" || descripcionTarea === undefined || descripcionTarea === null){
        console.log("El campo descipción no es valida, no se guardara la tarea")
        return
    }
        actualId = actualId + 1;
        const tarea = new Tarea(actualId, nombreTarea, descripcionTarea);
        listaTareas.push(tarea);
        console.log("Se inserto la tarea.");
        return tarea;
}

//Función para eliminar la tarea
export function eliminarTarea(idTarea){

    const indice = listaTareas.findIndex(
        tarea => tarea.id_tarea === idTarea //Se esta accediendo al objeto dentro de listaTareas[], donde tarea es un parámetro, no hace referencia al objeto tarea = new Tarea
    );

    if (indice !== -1){
        listaTareas.splice(indice, 1)
        return true;
    }
    return false;
}

//Función para editar una tarea
export function editarTarea(idTarea, cambios){

    const tarea = listaTareas.find(
        tarea => tarea.id_tarea === idTarea
    )
    
    if(!tarea){
        console.log("La tarea no existe")
        return;
    }
    console.log("La tarea existe, se va a modificar.")

    if(cambios.name === null || cambios.description === null){

        console.log("Alguno de los campos es invalido.")
        return;
    }

    if(cambios.name !== undefined && cambios.name !== ""){
        tarea.nombre_tarea = cambios.name;
    }

    if(cambios.description !== undefined && cambios.description !== ""){
        tarea.descripcion_tarea = cambios.description;
    }

    return tarea;
}

//Muestra todas las tareas 
export function mostrarTareas(){
    if(listaTareas.length === 0){
        console.log("No hay tareas para mostrar.")
        return; 
    } else {
        console.log(`Tareas disponibles: ${listaTareas.length}`)
        console.table(listaTareas);
    }
}

export function mostrarTarea(idTarea){

    const tarea = listaTareas.find(
        tarea => tarea.id_tarea === idTarea
    );

    if(tarea){
        console.log("Tarea encontrada");
        console.table(tarea)
    } else {
        console.log("No existe la tarea.");
    }
}

/*
nuevaTarea("Gimnasio", "Ir al gimnasio");
nuevaTarea("Reset de correo Telcel", "Mandar correo y mantener el seguimiento para la restauración de mi correo.")
nuevaTarea("Sabritas Moradas", "Ir a comprar unas Sabritas moradas a la tienda.")
nuevaTarea("Baño", "Ir al baño a plantar un pino")
nuevaTarea("Desbloqueo de telefono", "Se necesita hacer un desbloque de telefono.")

console.log(siguienteId)
mostrarTareas()

eliminarTarea(4);
eliminarTarea(5);

nuevaTarea("Comer", "Es la hora de la comida, a comer.")
mostrarTareas();

eliminarTarea(1)
eliminarTarea(2)
eliminarTarea(3)
eliminarTarea(6)

nuevaTarea("Chisme", "Escuchar todo el chisme de la infidelidad");

editarTarea(7, {name: "Super chisme"});

mostrarTareas();
console.log(siguienteId);

editarTarea(1, {name: "No ir al Gym", description: "Estoy adolorido"})
mostrarTarea(1)

mostrarTarea(2)
editarTarea(2, {})
mostrarTarea(2) */

/* const tarea = {
    id: 10,
    name: "Desintoxicación",
    description: "Dejar de comer chatarra"
}


function ejecutarCambios(parametros){
    
    if(parametros.name !== undefined){
        tarea.name = parametros.name;   
    } else {
    console.log("El campo nombre no se modifica")}

    if(parametros.description !== undefined){
        tarea.description = parametros.description;
    } else {
    console.log("El campo descripción no se modifica")}

    return tarea;
}

ejecutarCambios({name: "Cocinar"})
console.log(tarea)

ejecutarCambios({description: "Cocinar un arroz"})
console.log(tarea)

ejecutarCambios({name: "Bañarse", description: "Tomar una ducha"})
console.log(tarea) */