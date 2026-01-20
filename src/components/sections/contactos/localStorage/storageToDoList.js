const LOCAL_STORAGE_KEY = 'todo_list';

function saveTasksToStorage(tareas) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tareas));
}

function getTasksFromStorage() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export { getTasksFromStorage, saveTasksToStorage };