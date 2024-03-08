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

