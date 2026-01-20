import { ItemToDoList } from "../../common/itemToDoList/itemToDoList.js";
import { TaskList } from "./dbtodo.js"; 

let ToDoList = () => {
    let sectionToDoList = document.createElement("section");
    sectionToDoList.className = "todolist";

    let h2 = document.createElement("h2");
    h2.textContent = "Mi Lista de Tareas";
    sectionToDoList.appendChild(h2);

    // Iteramos sobre el Array de datos TaskList
    TaskList.forEach((tarea) => {
        sectionToDoList.appendChild(
            ItemToDoList("agenda.svg", tarea.nombre, tarea.estado)
        );
    });

    return sectionToDoList;
}

export { ToDoList };