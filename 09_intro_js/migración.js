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
        - declaración : inicialización : asignación
*/ 

let x = 34 // declaración + inicialización (asignación de variable)
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

let a = 31 //global 
console.log('Variable global', a)
let b = 67

function prueba() {
    let a = 12  // local a la función
    console.log('Variable local a la función', a)
    var z = 7
    if (true) {
        let a = 78 // local al bloque   
        var z = 23 
        console.log('Variable local al bloque', a)
        console.log(b)
    }
    console.log(z)
}

prueba()  //ejecuta


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
/*user = {nombre: 'Pepe', edad: 34} -> ERROR, PORQUE YA ES CONTANTE, NO SE PUEDE ESCRIBIR DE NUEVO*/ 
/*user = 30 -> ERROR*/


// hoisting de funciones declaradas y variables var (solo la declaración, no la inicialización(el valor diría undefined si prueba() estaría por encima de function))

izar()

function izar() {
    console.log('Izado')
    console.log('z vale', z)
    var z = 7
}

/*LO QUE PASA REALMENTE 
function izar() {
    var z
    console.log('Izado')
    console.log('z vale', z)
    z = 7
}*/


/* Casting
* Cambio de tipo temporal durante una operación
*/

// Casting a string
let n = 23
let msj = 'Juan tiene ' + n  // 'Juan tiene 23'
console.log(typeof n)

// Casting a number
let indice = '34'
let incremento = indice * 0.10

// Casting a boolean
let w

//Falsy 
w = false
w = undefined
w = null
w = 0
w = NaM
w = ''

//Trully
w = true 
w = 23
w = - 34
w = ' '
w = 'Pepe'
w = {}
w = []

si (w) {}

// Operadores
// Aritméticos: + - * / %(modulo)

