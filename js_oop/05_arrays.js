let ob = {} //new object
let aDatos = [2, 8, 9, 76]  //new array()
aDatos[aDatos.length] = 87
aDatos[aDatos.length] = 56

aDatos[100] = 9
//console.log(aDatos[78])

for (let i = 0; i < aDatos.length; i++) {
    const items = aDatos[i]
    if(!items) {
        aDatos[i] = parseInt(Math.random() * 100)
    }
}

//console.log(String(aDatos))

// **************************************************************************

/** funcion randomArray
 * @description: funcion que me devuelve un array de n numeros aleatorios 
 *                enteros y positivos menores o iguales a 100
 * @param {number} n
 * @returns {array}
 */
 //Implementación todo lo que haré en las siguientes líneas
 function randomArray(n = 0) {
     const r = []
        for (let i = 0; i < n; i++) {
            r[i] = parseInt(Math.random() * 100)
        }
     return r
}
console.log(String(randomArray(40)))


// **************************************************************************

/** funcion formatoDNI
 * @description: dar formato número al DNI
 * @param {number | string} dni
 * @returns {number}
 */

 function formatoDNI(dni) {
     if (typeof dni === 'number') {
         return dni
     }
     let cadenaDNI = ''
     for (let i = 0; i < dni.length; i++) {
         const caracter = dni[i];
            if (caracter != ' ' && !isNaN(caracter)) {
                cadenaDNI += caracter
            }
     }
     return Number(cadenaDNI)
 }

// **************************************************************************

/** funcion letraDNI
 * @description: calcular letra DNI
 * @param {number | string} dni
 * @returns {string}
 */

 function letraDNI(dni) {
     const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 
     /*
     let r = ''
     r = aLetras[dni%23]
     return r
     */
     return aLetras[formatoDNI(dni)%23]
 }

console.log(letraDNI(51023173))
console.log(letraDNI('51.023.173'))
console.log(letraDNI('51-02-31-73'))
console.log(letraDNI('510231|73'))
console.log(letraDNI('00821728'))







