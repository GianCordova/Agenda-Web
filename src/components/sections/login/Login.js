let login = function () {

    let login = document.createElement("section");
    login.className = "login-container";

    let h3 = document.createElement("h3");
    h3.className = "login-tile";
    h3.innerHTML = "Login";

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";

    let button = document.createElement("button");
    button.innerHTML = "Iniciar Sesion";

    button.addEventListener("click", () => {
        if (user.value.trim() !== "" && password.value.trim() !== "") {
            window.location.href = "./src/app.html"; 
        } else {
            alert("Ingresa un usuario y una contraseña para continuar.");
        }
    });

    login.appendChild(h3);
    login.appendChild(user);
    login.appendChild(password);
    login.appendChild(button);

    return login;
}

export { login };