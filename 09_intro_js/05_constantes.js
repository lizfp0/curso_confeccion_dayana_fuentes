//una variable que va cambiando su valor
let a = 4
console.log(a)
a = 5
console.log(a)
a = 6
console.log(a)
a =574
console.log(a)


//ES6
//const solo para un valor, no añade mas.
const b = 6

//así esté dentro de otro bloque, la constante solo hay una.
/*if (true) {  //ESTO NO ESTA DEFINIDO
    b = 10
} */

if (true) {
    const c = 7
    console.log(b)  // 6
    //console-log(c) //  7   
}

console.log(b)  // 6
//console-log(c)   ERROR

/////////////////////

let datos = [22, 67, 36]
let persona = {nombre: 'Pepe', edad: 22}

datos[datos.length] = 63
datos.push(43)

// console.log(datos[0]) //los datos (números) se cuentan desde 0
console.log(datos)
console.log(persona.nombre)

