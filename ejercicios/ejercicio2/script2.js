import {ejercicios } from "../../script.js";

function insertarEnNav() {
    let nav = document.getElementById("nav2");
    nav.innerHTML = `<a class="nav-link" href="${ejercicios[1].url}">${ejercicios[1].nombre}</a>`;
}

insertarEnNav();