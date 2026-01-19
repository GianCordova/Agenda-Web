import { getContactsFromStorage } from "./localStorage/storage.js"; 

let ContactList = getContactsFromStorage();

if (ContactList.length === 0) {
    ContactList = [
        { nombre: "Juan", telefono: "123456789" },
        { nombre: "Giancarlo", telefono: "123456789" },
        { nombre: "Yovanni", telefono: "123456789" }
    ];
}

export { ContactList };