import { saveTasksToStorage, getTasksFromStorage } from "../contactos/localStorage/storageToDoList.js";

export const abrirModalEdicion = (nombreOriginal, estadoOriginal, refrescarVista) => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal-content";
    modal.innerHTML = `
        <h3>Editar Tarea</h3>
        <input type="text" id="edit-nombre" value="${nombreOriginal}">
        <select id="edit-estado">
            <option value="pendiente" ${estadoOriginal === 'pendiente' ? 'selected' : ''}>Pendiente</option>
            <option value="urgente" ${estadoOriginal === 'urgente' ? 'selected' : ''}>Urgente</option>
        </select>
        <div class="modal-buttons">
            <button id="btn-cancelar" class="btn-secundario">Cancelar</button>
            <button id="btn-guardar" class="btn-primario">Guardar Cambios</button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    document.getElementById("btn-cancelar").onclick = () => overlay.remove();

    document.getElementById("btn-guardar").onclick = () => {
        const nuevoNombre = document.getElementById("edit-nombre").value.trim();
        const nuevoEstado = document.getElementById("edit-estado").value;

        // Validación: No permitir nombres vacíos
        if (nuevoNombre === "") {
            alert("El nombre de la tarea no puede estar vacío");
            return;
        }

        let tareas = getTasksFromStorage();
        const index = tareas.findIndex(t => t.nombre === nombreOriginal);
        
        if (index !== -1) {
            tareas[index].nombre = nuevoNombre;
            tareas[index].estado = nuevoEstado;
            saveTasksToStorage(tareas);
            
            overlay.remove(); // Cerramos el modal
            refrescarVista(); // Actualizamos la lista sin recargar la página
        }
    };
};