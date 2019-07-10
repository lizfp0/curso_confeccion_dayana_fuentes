const {fechaEsp, fijarLongitudCadena} = require('./15_helpers.js')


/** funcion Factura
 * @description modificar una factura hecha para crear una funcion constructora correspondiente y que permita crear objetos de ese tipo
 * @property utilizar la propiedad prototype
 * @param {object}
 * @param {array}
 * @param { date | string } fecha 
 * @external aDias, aMeses
 * @author Dayana Fuentes
 */

// ---------------------- modelo de factura ---------------------------

function Factura(
    empresa = {},
    cliente = {},
    items  = [{}],
    numFactura = '',
    tipoIVA = '',
    formaPago = '',
    fecha = new Date()) { 
    this.empresa = empresa
    this.cliente = cliente
    this.items = items
    this.numFactura = numFactura
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
    this.fecha = fecha
}    

function Empresa (nombre, direccion, telefono, nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}

function Item (descripcion = '', precioU = 0, cantidad = 0) {
    this.descripcion = descripcion
    this.precioU = precioU
    this.cantidad = cantidad
}

function Direccion (calle, num, poblacion, pais) {
    this.calle = calle
    this.num = num
    this.poblacion = poblacion
    this.pais = pais
}

// ------------------------ Factura cliente------------------------------

function Paises(nombre, capital) {
    this.nombre = nombre
    this.capital = capital
}

function Cliente(nombre, direccion, telefono, nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}

Cliente.prototype = new Viaje()
Cliente.prototype.constructor = Cliente 

Cliente.prototype.inscribirse = function (viaje) {
    this.viajes.push(viaje)
}

const factura = {
    empresa: {
        nombre: 'Viajes Seoul',
        direccion: 'c/ Santa Maria de la Calzada 8, Madrid',
        telefono: '625875921',
        nif: 'T-34761234',
    },
    cliente: {
        nombre: 'Dayana Fuentes',
        direccion: 'c/ Lago Ercina 6, Rivas Vaciamadrid',
        telefono: '625493421',
        nif: 'F-76521743',
    },
    items : [
        {descripcion: 'Viaje a la Isla Jeju', precioU: 2.500, cantidad: 2}],
    numFactura: '000000456',
    tipoIVA: 0.10,
    formaPago: 'Contado',
    fecha: new Date()
    }

Factura.prototype.calcularImporte = function() {
    const importe = {} 
    importe.base = 
        this.items
        .map( viaje => viaje.precioUnidad * viaje.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe
}

Factura.prototype.listarItems = function() {
    let items = ``
    this.items.forEach(
        item => {
            let desc = fijarLongitudCadena(item.descripcion, 30)
            let pv = item.precioU
                .toLocaleString('es', {style: 'currency', currency: 'EUR'})
            let cant = item.cantidad
            items += 
`
    ${desc}     ${pv}          ${cant}
`
    })
    return items
}

Factura.prototype.prepararFactura = function() {
    const importe = this.calcularImporte()
    const factura =
`
    _______________________________________________________________
                                        ${this.empresa.nombre}
                                        ${this.empresa.direccion}
                                        ${this.empresa.telefono}
                                        ${this.empresa.nif}
    Num. Factura: ${this.numFactura}
    ${this.cliente.nombre}
    ${this.cliente.direccion}
    ${this.cliente.telefono}
    ${this.cliente.nif}
    Descripción                         Precio      Cantidad
    _______________________________     _______     ________
    ${this.listarItems()}
    Importe ....................................${importe.base
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    IVA ........................................${importe.iva
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Importe Total ..............................${importe.total
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Forma de Pago ..............................${this.formaPago}
    Madrid, ${fechaEsp(this.fecha)}
    ______________________________________________________________
`
    return factura
}

Factura.prototype.render = function () {
    console.log(this.prepararFactura())
}

Factura.render()