//Serialización
// JSON.stringify()
// JSON.parse()

const oDatos = {
    user: 'Dayana',
    edad: 20,
    curso: 'Front',
    direccion: {
        calle: 'lago ercina, 6',
        ciudad: 'Madrid'
    },
    nacimiento: new Date(1999,12,1) 
}

// console.log(JSON.stringify(oDatos))  // En consola sale de modo String  // Se utiliza para el intercambio de información
//Convertimos un objeto en cadena
let cadena = JSON.stringify(oDatos)
console.log(cadena)
console.log(typeof cadena)
console.log(oDatos)
//Convertimos una cadena a objeto
let oNuevosDatos = JSON.parse(cadena)
console.log(oNuevosDatos)
console.log(typeof oNuevosDatos)

//Clonado deep

const clon = JSON.parse(JSON.stringify(oDatos))
clon.nacimiento = new Date(clon.nacimiento)
oDatos.direccion.ciudad = 'Valencia'
clon.direccion.ciudad = 'Santander'
console.log(oDatos)
console.log(clon)

console.clear()

const oAlumno1 = {
    user: 'Lizbeth',
    edad: 23,
    curso: 'Front',
    direccion: {
        calle: 'entrevias',
        ciudad: 'Madrid'
    },
    nacimiento: new Date(1999,12,1) 
}

//Clonado no deep
const oAlumno2 = Object.assign({}, oAlumno1)
oAlumno2.direccion = Object.assign({}, oAlumno1.direccion)  // separamos la ciudad de Dayana y Lizbeth
oAlumno2.user = 'Ernesto' 
oAlumno2.direccion.ciudad = 'Cuenca'
console.log(oAlumno2)
console.log(oAlumno1)

const a = [1, 3, [8, 9, 4], 5, 6]
const b = JSON.parse(JSON.stringify(a))
const d = a.slice()
const c = Object.assign([], a)
c[2].push(123)

console.log(a)
console.log(b)
console.log(c)  
console.log(d)