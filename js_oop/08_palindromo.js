'use strict'

function frasePalindromo(cadena = '') {
    let msg = 1
    if (cadena == cadena.toUpperCase()) {
        msg = 1
    } else if (cadena == cadena.toLowerCase()) {
        msg = 2
    }
    return msg
}


function comprobarFrasePalindromo(cadena = '') {
    const msg = [
        'Yo soy(0)', 
        'Yo no hago yoga hoy(1)',
        'Sometamos o matemos(2)', 
    ]
    console.log(msg(frasePalindromo(cadena)))
}

module.exports = {};
module.exports.frasePalindromo = frasePalindromo
module.exports.comprobarFrasePalindromo = comprobarFrasePalindromo

