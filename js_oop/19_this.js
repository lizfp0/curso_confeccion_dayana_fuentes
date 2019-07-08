// 4 formas de ejecutar una funcion
// patrone de invocación
// cambian el significado de this

function algo() {
    console.log(this)
}

// Funcion 
algo()  // this es process (Node) o window (Browser)

// Método
const o = { nombre: 'Pepe', edad: 23}
o.algo = algo

o.algo()

// Constructora

const nuevo = new algo()

// Indirectamente (apply o call)

const otro = {
    tipo: 'perro',
    nombre: 'Rufo'
}

algo.apply(otro)

console.log('-----------------------------------------')

const persona = {nombre: 'Pepe'}
persona.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
}
persona.saludar()
setTimeout(persona.saludar, 1000)
setTimeout(persona.saludar.bind(persona), 2000)

console.log('--------------------------------------------')

persona.saludarArrow = () => {
    console.log(`Hola, soy ${this.nombre}`)
}

persona.saludarArrow()

algoArrow = () => {
    console.log(this)
}

algoArrow()

setTimeout(persona.saludarArrow, 1000)
setTimeout(algoArrow, 2000)

