'use strict'

/** funcion limpiarLetra
 * @description: devuelve un array eliminando los nombres 
 *               que empiecen por una letra determinada del array que recibe
 * @param {string} letra
 * @param {array} nombres
 * @return {array}
 */

 function limpiarLetra(letra = '', nombres= []) {
     const datos = nombres.slice()
    for (let i = 0; i < datos.length; i++) {
        const item = datos[i];
        if (item[0].toUpperCase() === letra.toUpperCase()) {
            datos.splice(i, 1)
            i--
        }
    } return datos
 }

 let l = 'a'
 let usuarios = [
    'Alonso', 'Julia', 'Pablo', 'Carolina', 
    'Armando', 'Carlos', 'Alba', 'Maria', 'Alejandro', 'Arnaldo', 'Aldo' 
 ]

 console.log(limpiarLetra(l, usuarios))
 console.log(usuarios)


 //PARAMETROS Y ELEMENTALES

 function algo(h) {
     h = h * h
     return h //16
 }

 let z = 4
 algo(z) //16
 console.log(z) //4


 //PARAMETROS Y REFERENCUAS

 function cuadrados(a) {
     for (let i = 0; i < a.length; i++) {
         a[i] = a[i]  * a[i] 
     }
     return a  // 1, 4, 9
 }

 let x = [1, 2, 3]
 cuadrados(x) 
 console.log(x) // 1, 4, 9  //PORQUE ES UN ARRAY PASAN REFERENCIA, NO VALORES
