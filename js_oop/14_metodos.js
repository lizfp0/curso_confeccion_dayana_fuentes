const o = {
    id: 123,
    nombre: 'Pepe',
    edad: 34,                            // se puede poner abajo de la funcion, pero se ve mejor antes 
    conocidos: ['Juan', 'Raul', 'Elena', 'Lola'],
    mostrarID: function () {           //Esto se conoce como un método(propiedades), una función dentro de un objeto
        console.log(this.id)          //this es yo, no es necesario poner otro nombre o el o
    },
    saludar: function (otro = 'amigo') {
        if (this._comprobarSiSonConocidos(otro)) {
            console.log(`Hola ${otro}, ¿cómo estás?`)
        } else {
            console.log(`Hola ${otro}, soy ${this.nombre}`)
        }
    },
    _comprobarSiSonConocidos: function (otro) {  //es una funcion privada, solo se usa dentro del objeto
        return this.conocidos.some(
            item => item.toLowerCase() === otro.toLowerCase() )
    }
}

o.mostrarID()
o.saludar('Juan')
o.saludar()
o.saludar('Pablo')
console.log(o._comprobarSiSonConocidos('Julio'))

