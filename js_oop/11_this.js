// TIPOS DE OBJETOS QUE CONOCEMOS HASTA AHORA
let x = {} // new Object()

let a = [] // new Array ()

let c = 'pepe'
c.toUpperCase() // implicitamente  new String(c)

let n = 223
n.toFixed(2) // implicitamente new Number(n)

function algo() {} // new function()

// OTROS OBJETOS
const d = new Date()
const r = new RegExp()
const r1 = / /

// Objetos no instanciables
Math.random()
Math.PI
// JSON.stringify()
// JSON.parse()

const fecha = new Date()
const america = new Date(1492, 6, 4)
const y = new Date(62252648284)
const zy = new Date('1975-12-22')

console.log(fecha.valueOf())
console.log(america.valueOf())
console.log(y)
console.log(zy)

// Mostrar fechas
console.log(fecha)
console.log(fecha.toString())
console.log(fecha.toUTCString())
console.log(fecha.toJSON())
console.log(fecha.toLocaleString())
console.log(fecha.toDateString())

// Operaciones con las fechas

// get  |  getters

console.log(fecha.getTime())
console.log(fecha.getTimezoneOffset())
console.log(fecha)
console.log(fecha.getMonth())
console.log(fecha.getDay())


// set  | setters

