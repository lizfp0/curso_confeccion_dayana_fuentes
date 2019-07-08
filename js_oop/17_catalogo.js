/* 
Crear un objeto usado para representar un articulo de una tienda.
- una descripcion
- un código
- un precio
Métodos
- permitir el cálculo de su correspondiente IVA
- mostrar los datos por pantalla
*/

/** Function (Class) Libro
 * @property {string} descripcion 
 * @property {string} codigo 
 * @property {number} precio 
 * @property {number} iva
 * @method {objet} calcularIVA
 * @method {void} mostrar
*/

function Libro(descripcion = '', codigo = '', precio = 0) {
     this.description = descripcion 
     this.codigo = codigo
     this.precio = precio
}     

Libro.prototype.iva = 0.04    // generico de cada funcion constructota (prototype)
Libro.prototype.calcularIVA = function () {
    return { 
        iva: this.precio * this.iva,
        total: this.precio + (this.precio * this.iva)
    } 
}
Libro.prototype.mostrar = function () {
    const importe = this.calcularIVA()
    const cadena = `
    Descripción: ${this.description}
    Código: ${this.codigo}
    Precio: ${this.precio.toFixed(2)}
    IVA: ${importe.iva.toFixed(2)}
    Precio Total: ${importe.total.toFixed(2)}
    `
    console.log(cadena)
}

const l1 = new Libro('Las ranas', '00345Y4', 22)  //un objeto creado
l1.mostrar()
console.log(l1)
const l2 = new Libro('Las sapos', '00345Z7', 22)  //un objeto creado
l2.mostrar()
console.log(l2)
const l3 = new Libro('Las mariposas', '0034527H48', 22)  //un objeto creado  // new, porque es un objeto nuevo que entra
l3.iva = 0.12
l3.mostrar()
console.log(l3)
