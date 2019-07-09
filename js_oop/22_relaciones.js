// instancia => cada vez que creamos un objeto a partir de una clase



function Direccion(calle, numero, ciudad, pais) {
    this.calle = calle
    this.numero = numero
    this.ciudad = ciudad
    this.pais = pais
}

function Persona(nombre, edad, direccion) {
    this.nombre = nombre
    this.edad = edad
    this.direccion = direccion  //Asociación (atributos)
    this.mascota = []
}

Persona.prototype.adoptarMascota = function(mascota) {
    this.mascota.push(mascota)
    // Dependencia (metodo)
}

function Mascota(nombre, especie) {
    this.nombre = nombre
    this.especie = especie
}

const p1 = new Persona(
    'Pepe',
     34,
     new Direccion('c/ Pez', 7, 'Cadiz', 'España'));

const m1 = new Mascota('Amedio', 'mono')
const m2 = new Mascota('Perrie', 'ornitorrinco')

p1.adoptarMascota(m2) //Inyección de dependencia
console.log(p1)

console.log(m2.nombre)  //independencia (la mascota)
console.log(p1.mascota[0].nombre)  //dependencia (mi mascota)