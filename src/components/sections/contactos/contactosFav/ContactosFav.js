import { ItemContacto } from "../../../common/itemContacto/ItemContacto.js";
import { ContactList } from "../db.js";

let Favoritos = () => {
    let sectionFavs = document.createElement("section");
    sectionFavs.className = "contactos-favoritos";

    let h2 = document.createElement("h2");
    h2.textContent = "Mis Favoritos ⭐";
    sectionFavs.appendChild(h2);

    // Filtramos la lista antes de mostrarla
    const listaFavoritos = ContactList.filter(c => c.favorito === true);

    if (listaFavoritos.length === 0) {
        let mensaje = document.createElement("p");
        mensaje.textContent = "Aún no tienes contactos favoritos.";
        sectionFavs.appendChild(mensaje);
    } else {
        listaFavoritos.forEach((contact) => {
            sectionFavs.appendChild(ItemContacto("user.svg", contact));
        });
    }

    return sectionFavs;
}

export { Favoritos };