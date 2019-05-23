'use strict'

// undefined
// boolean 
// number (int, float)
// string
// object


//Declaración de la función
function sample() {
    //ES6
    /* let saludo = //Esto se llama declarar una variable --> tipo sea undefined
    saludo = 'Hola'  Inicializar la variable */
    let saludo = 'Hola'  //Declarar + Inicializar -->tipo string

    //MALA PRÁCTICA
    // curso = 'JavaScript'  //Inicializar la variable es darle un valor

    console.log(saludo)
}

//let saludo = 'Hello'

function saludar(nombre = 'amigo') {
    let saludo = 'Hola '  
    console.log(saludo + nombre) //Es conocido como un parametro -> nombre ->undefined. 
}

//Invocación o ejecución uso de una función
saludar('Pepe')
saludar('Elena')
saludar()
//console.log(saludo)

// ----------- SEPARACIÓN DE RESPONSABILIDADES O INTERESES (separation of concerns - Edsger W. Dijkstra)--------------

/**
 * Función suma
 * recibe dos parámetros
 * devuelve la suma de ambos
 * 
 * @param {number}
 * @param {number}
 * @returns {number}
 * 
 Función pura*/
function suma (a = 0, b = 0) {
    /* let c = a + b
     return c */
     return a + b
}

/**
 * Función mostrar
 * Recibe un texto y lo saca por pantalla
 * 
 * @param {string | number}
 * @returns {void}
 * 
Función de interfaz */
function mostrar(texto = '') {
    console.log(texto)
}

/*  0 / 4 = 0
    4 / 0 = Infinito

    0 / 0 = Indeterminación -->NaM  
*/

function division (a = 0, b = 1) {
    return a / b
}

function resta(a = 0, b = 0) {
    return a - b
}

function probar() {
    let x = 2
    let y = 3
    mostrar(suma(x, y))
    mostrar(suma(x))
    mostrar(suma(undefined, y))
    mostrar(suma())
    mostrar(suma())
    mostrar()

    mostrar(division(4,2))
    mostrar(division(4))
    mostrar(division())
    mostrar(division(undefined,2))
    mostrar()
    mostrar(resta(x, y))

    mostrar(resta(7,3))
}
probar()

