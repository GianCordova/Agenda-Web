import { ItemToDoList } from "../../common/itemToDoList/itemToDoList.js";
import { getTasksFromStorage } from "../contactos/localStorage/storageToDoList.js"; 

let ToDoList = () => {
    let sectionToDoList = document.createElement("section");
    sectionToDoList.className = "todolist";

    const renderTasks = () => {
        sectionToDoList.innerHTML = "<h2>Mi Lista de Tareas</h2>";
        
        const TaskList = getTasksFromStorage();

        TaskList.forEach((tarea) => {
            sectionToDoList.appendChild(
                ItemToDoList("agenda.svg", tarea.nombre, tarea.estado, renderTasks)
            );
        });
    };

    renderTasks(); 
    return sectionToDoList;
}

export { ToDoList };