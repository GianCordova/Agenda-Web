import { getContactsFromStorage } from "./localStorage/storage.js"; 

let ContactList = getContactsFromStorage();

if (ContactList.length === 0) {
    ContactList = [
        { 
            nombre: "Juan", 
            telefono: "123456789", 
            alias: "Juancho", 
            nombreCompleto: "Juan Pérez García", 
            ubicacion: "Ciudad de Guatemala", 
            tipoFamiliar: "Hermano",
            favorito: false 
        },
        { 
            nombre: "Giancarlo", 
            telefono: "987654321", 
            alias: "Gian", 
            nombreCompleto: "Giancarlo Rossi", 
            ubicacion: "Antigua Guatemala", 
            tipoFamiliar: "Primo",
            favorito: false  
        },
        { 
            nombre: "Yovanni", 
            telefono: "555666777", 
            alias: "Yova", 
            nombreCompleto: "Yovanni Estrada", 
            ubicacion: "Quetzaltenango", 
            tipoFamiliar: "Amigo",
            favorito: false  
        }
    ];
}



export { ContactList };