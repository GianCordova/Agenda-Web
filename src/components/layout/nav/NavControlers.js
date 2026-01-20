import { Contactos } from "../../sections/contactos/Contactos.js";
import { NuevoContacto } from "../../sections/nuevoContacto/NuevoContacto.js";
import { ToDoList } from "../../sections/toDoList/ToDoList.js";
import { NuevaTarea } from "../../sections/nuevaTarea/nuevaTarea.js";


let container = document.getElementById("container")

let viewContacts = function () {
        container.innerHTML = "";
        container.appendChild(Contactos());
}

let viewNuevoContacto = function () {
    container.innerHTML = "";
    container.appendChild(NuevoContacto());
}

let viewToDoList = function () {
    container.innerHTML = "";
    container.appendChild(ToDoList());
}

let viewNuevaTarea = function () {
    container.innerHTML = "";
    container.appendChild(NuevaTarea());
}


export { viewContacts , viewNuevoContacto, viewToDoList, viewNuevaTarea };
