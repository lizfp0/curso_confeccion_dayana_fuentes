'use strict'

let version = 'ES6'

let cadena = "Esto no es buena práctica"
let otraCadena = 'Es mejor usar comillas simples'
let nuevaCadena = `Nuevo en ${version}` // Template String

console.log(cadena, otraCadena, nuevaCadena)
console.log(cadena.toUpperCase())


console.log(cadena.length)
console.log(cadena[100])

/*for (let i = 0; i < cadena.length; i++) {
    const item = cadena[i];
    console.log(item)
}
*/


