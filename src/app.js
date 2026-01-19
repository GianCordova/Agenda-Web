import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { viewContacts, viewNuevoContacto } from "./components/layout/nav/NavControlers.js";

//App
let app = document.getElementById("app");

//Section menu
let nav = document.getElementById("nav");

nav.appendChild(Button(
    "Agenda",
    "agenda", 
    "user.svg",
));
nav.appendChild(Button(
    "Crear contacto", 
    "plus", 
    "new.svg",
));
nav.appendChild(Button("ToDoList", "todoList", "agenda.svg"));
nav.appendChild(Button("Crear Tarea", "plus", "new.svg"));

//Section container
let container = document.getElementById("container");

container.innerHTML = "";
container.appendChild(Contactos());

//container.appendChild(NuevoContacto());


