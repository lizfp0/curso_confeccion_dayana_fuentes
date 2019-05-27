'use strict'

// Valores primitivos
// (number, string, boolean, undefined)

let a = 2
let b = a        // asignación de valor
console.log('Al crear b', a, b)
b = b * b
a = a / 2
console.log('Valor de b', b)  //4
console.log('Valor de a', a) //1

b = a
console.log('Valor de b', b)


// Valores referenciados
// objects (array)

let p1 = {nombre: 'Pepe', edad: 34}
let p2 = p1  //Asignación de referencia
p1.nombre= 'Juan'
console.log(p1) //Juan    //un objeto en dos referencias
console.log(p2) //Juan


let a1 = {nombre: 'Raquel', edad: 34}
let a2 = {nombre: 'Maria', edad: 35}
let a3 = {nombre: 'José', edad: 36}

function inscribirMal() {
    a1.curso = 'JS'
}

function inscribirEnJS(alumno) {
    if (alumno) {
        alumno.curso = 'JS'  
    } 
}
inscribirEnJS(a1, a2, a3) //Paso por referencia
inscribirEnJS(a2) 
inscribirEnJS(a3) 
console.log(a1)
console.log(a2)
console.log(a3)

let saldo = 1000  //1000

function invertir(x) {
    let z = Math.random()
    let rendimiento = x * z
    return x + rendimiento
}

saldo = invertir(saldo)  //Paso por valor
console.log(saldo)

/////////////////////
/*
let saldo = 1000  //2000

function invertir(x) {
    x = x *2
}

invertir(saldo)
console.log(saldo)

///////////////////////

function restar(a, b) {return a - b}
function restar(x, y) {return x - y}

console.log(restar(7,3)) */