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

function Alumno(nombre, edad, direccion, curso) {
    this.curso = curso
    Persona.prototype.constructor.call(this, nombre, edad, direccion)
}

Alumno.prototype = new Persona()
Alumno.prototype.constructor = Alumno 

Alumno.prototype.inscribirse = function (curso) {
    this.cursos.push(curso)
}

          // .constructor =>guarda el valor de la funcion constructora que se ha creado

// ---------------------------------------------------------------------------------------------------------------------------

const a1 = new Alumno('Pepe', 34,
        new Direccion('c/ Pez', 7, 'Cadiz', 'España'),
        'Páginas Web')
console.log(a1)               

console.log(a1 instanceof Alumno)
console.log(a1 instanceof Persona)
console.log(a1 instanceof Object)

const m1 = new Mascota('Amedio', 'mono')
const m2 = new Mascota('Perrie', 'ornitorrinco')

a1.adoptarMascota(m2) //Inyección de dependencia
console.log(a1)

console.log(m2.nombre)  //independencia (la mascota)
console.log(a1.mascota[0].nombre)  //dependencia (mi mascota)
