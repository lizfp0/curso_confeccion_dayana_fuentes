'use strict'
















/* Sobrecarga del símbolo + */
/*
"Hola" + "Pepe"
2 + 2
*/

// let saludo = "Hola, " + "Pepe"

// let w = x + y  // No da 8, da '53'
// console.log(w, typeof w)

// x = 23
// y = '20'
// w = x + y // da '2320'
// w = w * 1
// console.log(w, typeof w)

/**
 * Símbolos lógicos de JS
 * NOT !
 * OR ||
 * AND &&
 * == es una comparación
 */


function sumar (a = 0, b = 0) {
    return a + b
}


function sumar (a = 0, b = 0) {  // una opción sería añadir el valor 0 en a y b
    /*if (typeof a !='number'|| typeof b !='number') {
        return 'No se puede sumar'
    }*/
    if (isNaN(a) || isNaN(b)
    || typeof a == 'boolean' || typeof b == 'boolean'
    || typeof a == 'object'  || Array.isArray(b)) {
        return 'No se puede sumar'
    }
    //let r = Number(a) + Number(b)             //Una manera para forzar el casting
    //let r = parseFloat(a) + parseFloat(b)    //Segunda forma de hacerlo
    let r = +a + +b                           //Tercera formar de forzarlo
    return 'La suma es ' + r
}

console.log(sumar())
console.log(sumar(undefined, undefined))
console.log(sumar(4))
console.log(sumar(2, 2))
console.log(sumar(2, 0))
console.log(sumar(0, 2))
console.log(sumar(2, '5'))  //No se puede sumar porque '5' es un string
console.log(sumar('2', '5'))
console.log(sumar(2, 'Pepe'))  //Nam
console.log(sumar('Juan', 'Pepe')) //Nam
console.log(sumar(2, true))  //Un true(boolean) se convierte a 1 (en casting)
console.log(sumar(2, false)) // false(boolean) se convierte en 0 (en casting)
console.log(sumar(true, false))
console.log(sumar({}, {}))
console.log(sumar([23, 56], [5, 6]))
console.log(sumar([], []))



