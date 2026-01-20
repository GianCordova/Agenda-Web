import { mostrarFichaContacto } from "./fichaContacto.js";
import { saveContactsToStorage } from "../../sections/contactos/localStorage/storage.js";
import { ContactList } from "../../sections/contactos/db.js"; 

let ItemContacto = (imgContacto, datosContacto) => {
    let div = document.createElement("div");
    div.className = "item-contacto";

    let btnFavorito = document.createElement("button");
    btnFavorito.className = "btn-favorito";
    btnFavorito.innerHTML = datosContacto.favorito ? "★" : "☆";
    
    if(datosContacto.favorito) btnFavorito.classList.add("es-favorito");

    btnFavorito.addEventListener("click", (e) => {
        e.stopPropagation(); 
        
        datosContacto.favorito = !datosContacto.favorito;
        
        btnFavorito.innerHTML = datosContacto.favorito ? "★" : "☆";
        btnFavorito.classList.toggle("es-favorito");

        saveContactsToStorage(ContactList);
    });

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgContacto}`;

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = datosContacto.nombre; 

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = datosContacto.telefono;

    div.addEventListener("click", () => {
        mostrarFichaContacto(datosContacto);
    });

    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaTelefono);
    div.appendChild(btnFavorito); 

    return div;
}

export { ItemContacto };