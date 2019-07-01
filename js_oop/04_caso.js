'use strict'

/** function comprobar 
 * @description: Comprobar si la cadena tiene:
 * solo mayúsculas
 * solo minúsculas
 * mayúsculas y minusculas
 * @param {string} cadena
 * @returns {number}
 */

 function comprobarCaso(cadena = '') {
     let r = 2
     if (cadena == cadena.toUpperCase() ) { //eres solo mayúsculas
        r = 0
     } else if (cadena == cadena.toLowerCase() ) { //eres solo minúsculas
        r = 1
     }
     return r
 }

 function mostrarComprobacionCaso (cadena = '') {
     const msg = [
         'solo mayusculas (0)',
         'solo minusculas (1)',
         'mayusculas y minusculas (2)',
     ]
     console.log(msg(comprobarCaso(cadena)))
 }

module.exports = {};
module.exports.comprobarCaso = comprobarCaso
module.exports.mostrarComprobacionCaso = mostrarComprobacionCaso