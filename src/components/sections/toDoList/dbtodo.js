import { getTasksFromStorage, saveTasksToStorage } from "../contactos/localStorage/storageToDoList.js"; 

let TaskList = getTasksFromStorage();

if (TaskList.length === 0) {
    TaskList = [
        { nombre: "Aprender JavaScript", estado: "pendiente" },
        { nombre: "Hacer el formulario", estado: "urgente" }
    ];
}

export { TaskList };

export const eliminarTareaDB = (nombreTarea) => {
    const index = TaskList.findIndex(t => t.nombre === nombreTarea);
    
    if (index !== -1) {
        TaskList.splice(index, 1); 
        saveTasksToStorage(TaskList); 
        console.log("Tarea eliminada correctamente")
    }
};