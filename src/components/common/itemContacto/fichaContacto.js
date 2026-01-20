export const mostrarFichaContacto = (contacto) => {
    let overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    let ficha = document.createElement("div");
    ficha.className = "ficha-contacto";

    ficha.innerHTML = `
        <button class="btn-cerrar">×</button>
        <h3>Ficha de Contacto</h3>
        <div class="info-grupo">
            <p><strong>Alias:</strong> ${contacto.alias || "---"}</p>
            <p><strong>Nombre:</strong> ${contacto.nombre}</p>
            <p><strong>Nombre Completo:</strong> ${contacto.nombreCompleto || "No registrado"}</p>
            <p><strong>Número:</strong> ${contacto.telefono}</p>
            <p><strong>Ubicación:</strong> ${contacto.ubicacion || "Desconocida"}</p>
            <p><strong>Tipo Familiar:</strong> ${contacto.tipoFamiliar || "Otro"}</p>
        </div>
    `;

    overlay.appendChild(ficha);
    document.body.appendChild(overlay);

    // Cerrar
    overlay.querySelector(".btn-cerrar").onclick = () => overlay.remove();
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
};