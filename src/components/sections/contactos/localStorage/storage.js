/**
 * Clave utilizada para almacenar los datos en el LocalStorage
 */
const LOCAL_STORAGE_KEY = 'agenda_telefonica';

/**
 * Guarda la lista de contactos en el LocalStorage
 * @param {Array} contactos - Lista de contactos a guardar
 */
function saveContactsToStorage(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

/**
 * Obtiene la lista de contactos desde el LocalStorage
 * @returns {Array} Lista de contactos, o un array vacío si no hay datos
 */
function getContactsFromStorage() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// Exportar las funciones para su uso en otros módulos
export { LOCAL_STORAGE_KEY, getContactsFromStorage, saveContactsToStorage };