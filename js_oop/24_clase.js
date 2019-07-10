/*  ES5
function Coche (marca, modelo, color, energia, precio) {  // función constructora
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.energia = energia
    this.precio = precio
}

Coche.prototype.arrancar = function () {  // función prototipo
    console.log('run, run')
    return this
}
Coche.prototype.ver = function () {
    console.log(this)
}    


const c1 = new Coche('Audi', 'A3', 'Rojo', 'Hibrido', 20000)  // instancia
c1.arrancar().ver()
*/



/**
 * ES6 -ES2015
 * 
 * Modulos import / export
 * arrow functions (this consistente)
 * lent y const
 * template string (``)
 * destructuring, spread y rest
 * for-in
 * clases
 * promesas
 * 
 */

 class Vehiculo { 
   constructor(marca, modelo, color, energia, precio)   {
     this.marca = marca
     this.modelo = modelo
     this.color = color
     this.energia = energia
     this.precio = precio  
   }  
   arrancar() {
       console.log('run, run')
   }
   ver() {
       console.log(this)
   }

}

class Coche extends Vehiculo {
    constructor(marca, modelo, color, energia, precio, volante, radio) {
        super(marca, modelo, color, energia, precio)  
        this.volante = volante
        this.radio = radio
    }
    arrancar() {
        super.arrancar()   //super para llamar al padre
        return this
    }
}

class Moto extends Vehiculo {  //extends => extiende a la clase que tu le dices
    constructor(marca, modelo, color, energia, precio, manillar) {
        super(marca, modelo, color, energia, precio)
        this.manillar = manillar
    }
    arrancar() {
        super.arrancar()
        console.log('run, run, ruuuuuun')
        return this
    }
}

let cadena = ''

const c1 = new Coche('Audi', 'A3', 'rojo', 'Hibrido', 20000, 'deportivo', 'MP3')  
c1.arrancar().ver()

const m1 = new Moto('Kawasaki', 'Ninja', 'verde', 
        'gasolina', 19000, 'extra')


m1.arrancar().ver()