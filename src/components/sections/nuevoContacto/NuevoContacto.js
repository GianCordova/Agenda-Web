import { ContactList } from "../contactos/db.js";
import { saveContactsToStorage } from "../contactos/localStorage/storage.js";

let NuevoContacto = () => {
    let section = document.createElement("section");
    section.className = "nuevo-contacto";

    let h2 = document.createElement("h2");
    h2.textContent = "Nuevo contacto";
    section.appendChild(h2);

    // Formulario
    let form = document.createElement("form");
    form.className = "form-nuevo-contacto";

    // Input nombre
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";
    inputNombre.required = true;

    // Input teléfono
    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.placeholder = "Teléfono";
    inputTelefono.required = true;

    // Botón
    let button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Agregar";

    form.appendChild(inputNombre);
    form.appendChild(inputTelefono);
    form.appendChild(button);

    section.appendChild(form);

    // Contenedor donde se mostrará el contacto creado
    let preview = document.createElement("div");
    preview.className = "preview-contacto";
    section.appendChild(preview);


    //Programacion del formulario

    form.addEventListener("submit", (e) => {
    e.preventDefault();

    let contacto = {
        nombre: inputNombre.value,
        telefono: inputTelefono.value
    };

    ContactList.push(contacto);

    saveContactsToStorage(ContactList);

    console.log("Contacto guardado en el LocalStorage");
    console.log(contacto);

    inputNombre.value = "";
    inputTelefono.value = "";
});


    return section;
};

export { NuevoContacto };
