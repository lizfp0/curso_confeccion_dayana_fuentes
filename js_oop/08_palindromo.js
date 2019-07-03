'use strict'

/** funcion frasePalindromo
 * @description: comprobar si un string (cadena) es palindromo
 * @param {string} cadena
 * @returns {boolean}
 */

 const frasePalindromo = (cadena = '') => {
    let r = false
    const cadenaSinEspacios = cadena.split(' ').join('').toLowerCase()
    console.log(cadenaSinEspacios)
    const cadenaInversa = cadenaSinEspacios.split('').reverse().join('')
    console.log(cadenaInversa)
    if (cadenaSinEspacios === cadenaInversa) {
        r = true
    }
    return r
}

 const comprobarFrasePalindromo = (cadena = '') => {
    const sinEspacios = cadena.split(' ').join('').toLowerCase()
    return sinEspacios === sinEspacios.split('').reverse().join('') ? true : false 
}


module.exports = {};
module.exports.frasePalindromo = frasePalindromo
module.exports.comprobarFrasePalindromo = comprobarFrasePalindromo










