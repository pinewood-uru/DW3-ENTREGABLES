// HTML

let ctnejercicios = document.getElementById("ctn-ejercicios");
let nav = document.getElementById("nav");

const ejercicios = [
    {
        nombre: "Ejercicio 1",
        url: "ejercicios/ejercicio1/ejercicio1.html",
        img: "img/numeros-01.png",
        descripcion:'Prueba de Nivel',
    },
    {
        nombre: "Ejercicio 2",
        url: "ejercicios/ejercicio2/ejercicio2.html",
        img: "img/numeros-02.png",
        descripcion:'',
    },
    {
        nombre: "Ejercicio 3",
        url: "https://dw3langingavellanal.netlify.app",
        img: "img/numeros-03.png",
        descripcion:'',
    },
    {
        nombre: "Ejercicio 4",
        url: "ejercicios/ejercicio1/ejercicio4.html",
        img: "img/numeros-04.png",
        descripcion:'',
    },
    {
        nombre: "Ejercicio 5",
        url: "ejercicios/ejercicio1/ejercicio5.html",
        img: "img/numeros-05.png",
        descripcion:'',
    },
    {
        nombre: "Ejercicio 6",
        url: "ejercicios/ejercicio1/ejercicio6.html",
        img: "img/numeros-06.png",
        descripcion:'',
    },
    {
        nombre: "Ejercicio 7",
        url: "ejercicios/ejercicio1/ejercicio7.html",
        img: "img/numeros-07.png",
        descripcion:'',
    },
    ];

ejercicios.forEach((ejercicio) => {
    
    let formatocontenedor = `
    <div class="col">
    <div class="card h-100 border border-1 border-primary" style="width: 18rem;">
  <img src="${ejercicio.img}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title primary-text">${ejercicio.nombre}</h5>
    <p class="card-text">${ejercicio.descripcion}</p>
    <a target="_blank" href="${ejercicio.url}" class="btn btn-primary">Ir a ejercicio</a>
  </div>
</div></div>`

ctnejercicios.innerHTML += formatocontenedor;


})
