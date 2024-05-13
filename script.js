// HTML

let ctnejercicios = document.getElementById("ctn-ejercicios");
let nav = document.getElementById("nav");

const ejercicios = [
    {
        nombre: "Ejercicio 1",
        url: "ejercicio1.html",
        img: "img/numeros-01.png",
        descripcion:'',
    },
    {
        nombre: "Ejercicio 2",
        url: "ejercicio2.html",
        img: "img/numeros-02.png",
        descripcion:'',
    },
    {
        nombre: "Ejercicio 3",
        url: "ejercicio3.html",
        img: "img/numeros-03.png",
        descripcion:'',
    },
    {
        nombre: "Ejercicio 4",
        url: "ejercicio4.html",
        img: "img/numeros-04.png",
        descripcion:'',
    },
    {
        nombre: "Ejercicio 5",
        url: "ejercicio5.html",
        img: "img/numeros-05.png",
        descripcion:'',
    },
    {
        nombre: "Ejercicio 6",
        url: "ejercicio6.html",
        img: "img/numeros-06.png",
        descripcion:'',
    },
    {
        nombre: "Ejercicio 7",
        url: "ejercicio7.html",
        img: "img/numeros-07.png",
        descripcion:'',
    },
    ];

ejercicios.forEach((ejercicio) => {
    
    let formatocontenedor = `
    <div class="card border border-1 border-primary" style="width: 18rem;">
  <img src="${ejercicio.img}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${ejercicio.nombre}</h5>
    <p class="card-text">${ejercicio.descripcion}</p>
    <a href="${ejercicio.url}" class="btn btn-primary">Ir a ejercicio</a>
  </div>
</div>`

ctnejercicios.innerHTML += formatocontenedor;


})


ejercicios.forEach((ejercicio) => {
    let navFormato = `
    <a class="nav-link" href="${ejercicio.url}">${ejercicio.nombre}</a>
    `
    nav.innerHTML += navFormato
});