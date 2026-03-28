const botonModo = document.getElementById('boton-modo');
const icono = document.getElementById('icono-modo');
const body = document.body;
botonModo.addEventListener('click', () =>{

    //le ponemos o sacamos la clase dark-mode al body
    body.classList.toggle('dark-mode');
    //cambiamos el icnono segun el modo
    if (body.classList.contains('dark-mode'))
    {
        icono.classList.replace('fa-moon','fa-sun');//de luna a sol
    } else {
        icono.classList.replace('fa-sun','fa-moon'); //de sol a luna

    }
    
});
