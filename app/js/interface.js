import {nuevaTarea, eliminarTarea, editarTarea, mostrarTarea, mostrarTareas} from './app.js'

const formCrearTarea = document.querySelector('#form-crear-tarea');
const contenedorTareaCreada = document.querySelector('.contenedor-tarea-creada');
const contenedorTareas = document.querySelector('.contenedor-tareas');
const botonMostrarAll = document.querySelector('.boton-historial-tareas');

formCrearTarea.addEventListener('submit', (event)=>{
    event.preventDefault()
    /* alert("formulario enviado") */
    
    const nombreTarea = event.target.elements.tarea.value
    const descripcionTarea = event.target.elements.descripcion.value

    if(nombreTarea === "" || nombreTarea === undefined || nombreTarea === null){
        console.log("El campo nombre no es valido, no se guardara la tarea")
        formCrearTarea.reset()
        return
    }

    if(descripcionTarea === "" || descripcionTarea === undefined || descripcionTarea === null){
        console.log("El campo descipción no es valida, no se guardara la tarea")
        formCrearTarea.reset()
        return
    }

    const respuesta = nuevaTarea(nombreTarea, descripcionTarea)

    contenedorTareaCreada.innerHTML = `
        <div class="tarea">
            <h2>Ultima tarea creada</h2>
            <p>ID: ${respuesta.id_tarea}</p>
            <p>Tarea: ${respuesta.nombre_tarea}</p>
            <p>Descripcion: ${respuesta.descripcion_tarea}</p>
        </div>
    `
    contenedorTareas.innerHTML += `
        <div class="tarea" data-id="${respuesta.id_tarea}">
            <p>ID: ${respuesta.id_tarea}</p>
            <p>Tarea: ${respuesta.nombre_tarea}</p>
            <p>Descripcion: ${respuesta.descripcion_tarea}</p>
            <button>Editar tarea</button>
            <button class="boton-eliminar-tarea">Eliminar tarea</button>
        </div>
    `
    
    if (respuesta === undefined){
        alert("Tarea no insertada.")
        formCrearTarea.reset();
        return
    }

    const botonEliminarTarea = document.querySelector(".boton-eliminar-tarea");
    
    contenedorTareas.addEventListener("click", (event)=>{
        if(event.target.className === "boton-eliminar-tarea"){
            const idBorrarTarea = parseInt(event.target.parentElement.getAttribute('data-id'))
            const tarjeta = document.querySelector(`[data-id="${idBorrarTarea}"]`)
            tarjeta.remove();
            eliminarTarea(idBorrarTarea);
        }
        return;
    })

})

botonMostrarAll.addEventListener('click', () => {

    const respuestaAll = mostrarTareas();
    console.log(respuestaAll);


    contenedorTareas.innerHTML = `
        <div class="tarea" data-id="${respuestaAll.Tarea.id_tarea}">
            <p>ID: ${respuestaAll.id_tarea}</p>
            <p>Tarea: ${respuestaAll.nombre_tarea}</p>
            <p>Descripcion: ${respuestaAll.descripcion_tarea}</p>
            <button class="boton-eliminar-tarea">Eliminar tarea</button>
        </div>
    `
})
