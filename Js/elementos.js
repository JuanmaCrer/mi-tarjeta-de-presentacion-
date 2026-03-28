document.getElementById("titulo").innerHTML ="<h1>Mi Primera Pagina</h1><p>Lopez Juan Manuel</p>"; 
document.getElementById("pie").innerHTML ="<p>Practica En Casa</p>";

const nombre = "Juan Manuel";
let apellido = "Lopez";
let edad = 32;
console.log(nombre, apellido,  edad);

const mascota = {
    nombre: "pancho",
    raza: "salchicha",
    personalidad: "intenso",
    edad: 4,
    leGustaComer: true
};
console.log(mascota.nombre);

const materia = {
    nombre: "civil1",
    diaDeCursada: "lunes y jueves",
    promocionable: true,
    notaEsperada: 10

};
console.log(materia.nombre);

const misMateriasAprobadas = ["derecho Romano", "economia","filosofia del derecho","derecho politico", "introduccion al derecho"];

console.log(misMateriasAprobadas);

const listaUnlam = [
    {
        nombre: "civil1",
        cuatrimestral: true,
        nota: 10
    },
    {
        nombre: "derecho Romano",
        cuatrimestral: true,
        nota: 7,
    },
    {
        nombre: "derecho politico",
        cuatrimestral: true,
        nota: 9
    },
    {
        nombre: "filosofia del derecho",
        cuatrimestra: true,
        nota: 7
    },
    {
        nombre: "introduccion al derecho",
        cuatrimestral: true,
        nota: 7
    },
    {
        nombre: "economia politica",
        cuatrimestral: true,
        nota: 7
    }
];
console.log(listaUnlam[2], listaUnlam[0]);
