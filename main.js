const nav = document.querySelector(".nav")
const boton = document.querySelector(".botton")

boton.addEventListener("click",()=>{
    nav.classList.toggle("nav");
})

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
})

window.addEventListener("scroll", function(){
    let imagenes = document.querySelectorAll(".derecha");

    imagenes.forEach(function(imagen){
        let posicion = imagen.getBoundingClientRect().top;
        let tamañoDePantalla = window.innerHeight;

        if (posicion < tamañoDePantalla){
            imagen.style.animation = "mover 1s ease-out";
        }
    });
});

window.addEventListener("scroll", function(){
    let imagenes = document.querySelectorAll(".izquierda");

    imagenes.forEach(function(imagen){
        let posicion = imagen.getBoundingClientRect().top;
        let tamañoDePantalla = window.innerHeight;

        if (posicion < tamañoDePantalla){
            imagen.style.animation = "moverinverso 1s ease-out";
        }
    });
});