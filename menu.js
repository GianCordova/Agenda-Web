let menu = function () {
    //2do Ejercicio

    let div = document.createElement("div");
    div.className = "div-padre";

    let div1 = document.createElement("div")
    div.appendChild(div1);
    div1.className = "div-hijo-mayor";

    let div2 = document.createElement("div")
    div.appendChild(div2);
    div2.className = "div-hijo-menor";

    return div;
}

export { menu };

