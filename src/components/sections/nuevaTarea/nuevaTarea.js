import { TaskList } from "../toDoList/dbtodo.js";
import { saveTasksToStorage } from "../contactos/localStorage/storageToDoList.js";

let NuevaTarea = () => {
    let section = document.createElement("section");
    section.className = "nueva-tarea";

    let h2 = document.createElement("h2");
    h2.textContent = "Nueva Tarea";
    section.appendChild(h2);

    let form = document.createElement("form");
    form.className = "form-nueva-tarea";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre de la tarea";
    inputNombre.required = true;

    // Select de estado
    let selectEstado = document.createElement("select");
    selectEstado.required = true;

    // Opción por defecto
    let defaultOpt = document.createElement("option");
    defaultOpt.value = "";
    defaultOpt.textContent = "Seleccionar estado";
    defaultOpt.disabled = true;
    defaultOpt.selected = true;
    selectEstado.appendChild(defaultOpt);

    ["pendiente", "urgente"].forEach(estado => {
        let opt = document.createElement("option");
        opt.value = estado;
        opt.textContent = estado.charAt(0).toUpperCase() + estado.slice(1);
        selectEstado.appendChild(opt);
    });

    let button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Agregar Tarea";

    form.appendChild(inputNombre);
    form.appendChild(selectEstado);
    form.appendChild(button);
    section.appendChild(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let tarea = {
            nombre: inputNombre.value,
            estado: selectEstado.value
        };

        TaskList.push(tarea);
        saveTasksToStorage(TaskList);

        console.log("Tarea guardada");
        inputNombre.value = "";
        selectEstado.value = "";
    });

    return section;
};

export { NuevaTarea };