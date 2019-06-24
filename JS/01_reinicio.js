'use strict'

/* DATOS

- Indefinidos:
    - undefined
- Primitivos
    - number
    - string
    - boolean
- Referenciados
    -Objects
        - Array
        - Date
        - Error
        - RegExp
        - Math
        - JSON
        - Function
*/

/* VARIABLES

    - Tipo: débiles (implícito al valor) y dinámicos
    - Ciclo de vida
        - declaración : inicialización(es un tipo de asignación) : asignación
*/ 

let x = 34 // declaración(let) + inicialización (asignación de variable)(x = 34)
// let y (declaración, y es undefined) let y o let y = undefined (es lo mismo)
// let y = suma 

// suma(3,4)
// y(2,5)
// ......
// ......
x = 45 // asignación de un nuevo dato
x = x * 2 //asignación por expresión

/* Ámbito
    - Global 
    - Local
        - al bloque => let / const
        - a la función => var 
*/ 

let a = 31 // global
console.log('Variable global', a)
let b = 67

function prueba() {
    let a = 12 // local a la función
    console.log('Variable local a la función', a)

    console.log('z vale ', z)
    var z = 7
    if (true) {
        let a = 78 // local al bloque
        var z = 23
        console.log('Variable local al bloque', a) //
        console.log(b)
    }
    
}

prueba()

/* Constantes
    - Ciclo de vida: declaración + inicialización 
*/
const IVA = 1.26
// IVA = 1.34 // -> DA ERROR

/* Constantes referenciadas -> es constante la referencia */

const user = {nombre: 'Pepe', edad: 34}
user.nombre = 'Juan'
user.edad = 32
console.log(user)
// user = {nombre: 'Juan', edad: 32} -> Error
// user = 34 -> Error
console.log(user)

// hoisting de funciones declaradas y variables var (solo la declaración)

izar()

function izar() {
    console.log('Izado')
    console.log('z vale ', z)
    var z = 7
}

/* Lo que pasa realmente 
function izar() {
    var z
    console.log('Izado')
    console.log('z vale ', z)
    z = 7
}
*/

/** Casting 
 * Cambio de tipo temporal durante una operación
*/

// Casting a string
let n = 23
let msg = 'Juan tiene ' + n  + ' años' // Juan tiene 23 años
console.log(typeof n)

// Casting a number
let indice = '34'
let incremento = indice * 0.10

//EN JS TODOS LOS DATOS HACEN CASTING A NUMBER -> NaM

let tipo = 'indefinido'
let sueldo = 23 * tipo
let datoRaro = -23 / 0

console.log('sueldo: ', sueldo)
console.log('datoRaro: ', datoRaro)

// Casting a boolean
//EN JS TODOS LOS DATOS HACEN CASTING A BOOLEAN

let w

// Falsy
w = false
w = undefined
w = null
w = 0
w = NaN
w = ''

// Truly
w = true
w = 23
w = -34
w = ' '
w = 'Pepe'
w = {}
w = []

if (w) {}


// Operadores
// Aritméticos: + - * / %(calcula el modulo)

parseInt(7/3) //2 (me devuelve la parte entera del resultado)
7%3 // 1  //saca el resto que sería 1
9%3 // 0

//Operadores de asignación

let x = 45
x = 86

//Operadores de comparación

//IGUALDAD
(x == 67)  //comparación que sea igual a .... (FALSE)
(x == 86)  // (TRUE)
(x == '86') // (TRUE)

//IDENTIDAD
(x === '86')  //(FALSE)  //comparación de tipos

//OTROS COMPARADORES >  <  >=  <=

//NEGACIÓN  !

x = 86


//NO IGUALDAD
(x != '86') //FALSE

// NO IDENTIDAD
(x !== '86') //TRUE     


