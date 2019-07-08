const aDatos = ['luis', 'carlos','miguel', 'maria', 'carmen', 'carla']
// aDatos = new Array()

console.log(aDatos.__proto__)
console.log(Array.prototype)

Array.prototype.saludar = function (nombre) {
    console.log(`Hola ${nombre}, soy un Array`)
}

Array.prototype.push = function (nombre) {
    console.log('Hola, ' + nombre)
}

aDatos.push('Ernesto')
aDatos.saludar('Dayana')

console.log(aDatos)