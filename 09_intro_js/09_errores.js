



function isValidNumber(n) {
    let r = true
    if(isNaN(n) || typeof n == 'boolean'
    || Array.isArray(n) || n === ''  || n === null) {
        r = false
    }
    return r
}




function codificarEdad(edad) {
   let i = 3
   if (!isValidNumber(edad)) {
       i = -2
   } else if (edad <= 0) {
       i = -1
   } else if (edad < 18) {
       
   }
}




