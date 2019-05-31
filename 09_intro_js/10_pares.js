/**
 * JSDOC
 * @description Programa que calcula y muestra si un número es par o impar
*/

/**
 * @description  Función que comprueba si una función 
 *               es convertible a un número válido
 *               rechazando objects, arrays, booleans, 
 *               null, undefined, '' y strings no numéricos.
 * @param {any (*)} n 
 * @returns {boolean}
 */
function isValidNumber(n) {
    let r = true
    if(isNaN(n) || typeof n == 'boolean'
    || Array.isArray(n) || n === ''  || n === null) {
        r = false
    }
    return r
}

/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */
function isEntero(n = 0) {
    return (parseInt(n) === parseFloat(n))
}

/**
 * @description Función que calcula si un número es par 
 *       Puede devolver -2, -1, true, false
 * @param {number}: n
 * @returns {*}
 */

 function esPar(n) {
    let r = true
    if (!isValidNumber(n)) {
        //Excepción: n no es un número
        return -2
    } else if (!isEntero(n)) {
        //Excepción: n no es entero
        return -1
    } else if (n%2) {
        r = false
    }
    return r
 }

 /*EJEMPLO 
 let x = 1
 console.log( ! (x%2) )
 x = 2
 console.log( ! (x%2) )
 x = 3
 console.log( ! (x%2) )
 x = 4
 console.log( ! (x%2) )
 */

 /**
 * @description Función que muestra si un número es par o impar
 * @param {number}: n
 * @returns {void}
 */

 function mostrar(n) {
    let mensajes = [
     `El número ${n} es impar`, 
     `El número ${n} es par`,
     `El número ${n} no es entero`,
     `${n} no es un número`,
    ]
    let i = Number(esPar(n))  // -2, -1, 0, 1
    if ( i<0 ) { //Código de error
        i = -i + 1 // -1 -> 2  //-2 -> 3
    }
    console.log(mensajes[i])
}

function probar() {
    let x
    x = 1
    x = 2
    x = 345
    x = 98
    x = 0
    x = -4
    x = -5
    x = 4.3
    x = - 56.7
    x = 'Pepe'
    x = '56'
    mostrar(x)
    // x = 2.1
    // console.log(isEntero(x))
}

probar()


