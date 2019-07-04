const o = {
    id: 123,
    nombre: 'Pepe',
    edad: 34,                            // se puede poner abajo de la funcion, pero se ve mejor antes 
    conocidos: ['Juan', 'Raul', 'Elena', 'Lola'],
    mostrarID: function () {           //Esto se conoce como un método(propiedades), una función dentro de un objeto
        console.log(this.id)          //this es yo, no es necesario poner otro nombre o el o
    },
    saludar: function (otro = 'amigo') {
        if (this.comprobarSiSonConocidos(otro)) {
            console.log(`Hola ${otro}, ¿cómo estás?`)
        } else {
            console.log(`Hola ${otro}, soy ${this.nombre}`)
        }
    },
    comprobarSiSonConocidos: function (otro) {
        return this.conocidos.some(
            item => item.toLowerCase() === otro.toLowerCase() )
    }
}

o.mostrarID()
o.saludar('Juan')
o.saludar()
o.saludar('Pablo')

