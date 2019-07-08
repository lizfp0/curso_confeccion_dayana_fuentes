
// Como se haría SI existieran ambitos privado / público

const dado = {
    _valor: null ,
    set: function () {
        this._valor = parseInt(Math.random()*5) +1
    },
    get: function () {}
}

for (let i = 0; i < 20; i++) {
    dado.lanzar()
    console.log(dado._valor)
}

// get = leer un valor privado
// set = establecer un valor privado

function dado() {
    this._valor = null
}
dado.prototype.lanzar = function () {
    this._valor = parseInt(Math.random()*6) +1
}

const dado = new dado()


// ES5 (2005) JavaScript Accessors (Getters and Setters)

const persona = {
    nombre: 'Pepe',
    apellido: 'Perez',
    edad: 23,
    _curso: '',
    get _curso() {return this._curso},
    set _curso() { this._curso = curso},
    get verNombreCompleto() {
        return `${this.nombre} ${this.apellido}`
    }
}

persona._curso = 'Angular'
persona._curso = 'JS'
console.log(persona.curso)
console.log(persona.verNombreCompleto)