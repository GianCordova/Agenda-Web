import { Contactos } from "../../sections/contactos/Contactos.js";
import { NuevoContacto } from "../../sections/nuevoContacto/NuevoContacto.js";

let container = document.getElementById("container")

let viewContacts = function () {
        container.innerHTML = "";
        container.appendChild(Contactos());
}

let viewNuevoContacto = function () {
    container.innerHTML = "";
    container.appendChild(NuevoContacto());
}

export { viewContacts , viewNuevoContacto };
