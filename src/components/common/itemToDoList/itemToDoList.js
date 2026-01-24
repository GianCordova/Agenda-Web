import { eliminarTareaDB } from "../../sections/toDoList/dbtodo.js";
import { abrirModalEdicion } from "../../sections/editarTarea/EditarTarea.js"; 

let ItemToDoList = (imgToDoList, nombreTarea, estado, refrescar) => {
    let div = document.createElement("div");
    div.className = "item-todolist";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgToDoList}`;

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = nombreTarea;

    let etiquetaEstado = document.createElement("p");
    etiquetaEstado.textContent = estado;
    etiquetaEstado.classList.add(estado.toLowerCase());

    let btnEditar = document.createElement("button");
    btnEditar.textContent = "✏️";
    btnEditar.className = "btn-editar";
    btnEditar.onclick = () => {
        abrirModalEdicion(nombreTarea, estado, refrescar);
    };

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "🗑️";
    btnEliminar.className = "btn-eliminar";
    btnEliminar.addEventListener("click", () => {
        eliminarTareaDB(nombreTarea);
        refrescar();
    });

    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaEstado);
    div.appendChild(btnEditar); 
    div.appendChild(btnEliminar);

    return div;
}

export { ItemToDoList };