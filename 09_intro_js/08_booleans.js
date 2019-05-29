let x = 34
// x = -5

console.log(x >= 0)

if (x >= 0) {
   console.log('Positivo')
}
else {
   console.log('Negativo')
}


let w

//Falsy 
w = false
w = undefined
w = null
w = 0
w = ''

//True
w = true
w = 23
w = -34
w = ' '
w = 'Pepe'
w = {}
w = []


if (w){
// if (Boolean(w)) {   //Forzar el casting booleano
    console.log('Verdadero')
 }
 else {
    console.log('Falso')
}


/*let k
k = 34
k = '46'
k = '34 Pepes'
k = true
k = false
k = undefined
k = []  // o
k = {} // NaM
k = [4]
k = [4, 8]
console.log(Number(k))*/


let q = 5
q = undefined
q = 0

// if(q != 0) { 
if (q) {
    console.log(' q tiene valor')
}
else {
    console.log(' q es 0')
}

if (q === 0) {  // === idéntico  //== que algo es igual y flexible
    console.log(' q es exactamente 0')
}














let nota = 0

if (!nota) {

}



let b = Boolean(nota)
b = !!nota

let edad = 18

if (edad < 18) {
    console.log('Eres menor de edad')
} else if (edad < 35) {
    console.log('Eres joven')
} else if (edad < 50) {
    console.log('Empieza a tener cuidado')
} else {
    console.log('Lo siento por ti')
}