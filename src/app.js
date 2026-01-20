import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { Favoritos } from "./components/sections/contactos/contactosFav/ContactosFav.js";
import { viewContacts, viewNuevoContacto, viewToDoList, viewNuevaTarea } from "./components/layout/nav/NavControlers.js";
import { ToDoList } from "./components/sections/toDoList/ToDoList.js";

const viewFavoritos = () => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.appendChild(Favoritos());
};

// App
let app = document.getElementById("app");

// Section menu
let nav = document.getElementById("nav");

nav.appendChild(Button(
    "Agenda",
    "agenda", 
    "user.svg",
    viewContacts
));

nav.appendChild(Button(
    "Favoritos", 
    "favoritos", 
    "star.svg", // Asegúrate de tener un star.svg en tus iconos
    viewFavoritos
));

nav.appendChild(Button(
    "Crear contacto", 
    "plus", 
    "new.svg",
    viewNuevoContacto
));

nav.appendChild(Button(
    "ToDoList", 
    "todoList", 
    "agenda.svg",
    viewToDoList
));

nav.appendChild(Button(
    "Crear Tarea", 
    "plus", 
    "new.svg",
    viewNuevaTarea
));

// Section container
let container = document.getElementById("container");

// Al inicio solo mostramos Contactos (Agenda)
container.innerHTML = "";
container.appendChild(Contactos());

console.log("Completado con Favoritos");



// async function tareas() {
//     try {
//         let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//         let r = await data.json();
//         console.log(r);

//     } catch (error) {
//         console.log(error);
//     }
// }

// tareas();

