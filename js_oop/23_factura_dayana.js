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

const generarFactura = {
    empresa: {
        nombre: '',
        direccion: '',
        telefono: '',
        nif: '',
    },
    cliente: {
        nombre: '',
        direccion: '',
        telefono: '',
        nif: '',
    },
    items : [
        {descripcion: '', precioUnidad: 0, cantidad: 0} 
    ],
    numFactura: '',
    tipoIVA: '',
    formaPago: '',
    fecha: new Date()
    }

generarFactura.calcularImporte = function() {}
generarFactura.mostrarImporte = function() {}

// ---------------------------- Fecha ----------------------------------

const capitalize = (cadena = '') => 
        cadena[0].toUpperCase() + cadena.slice(1)

const fechaEsp = (fecha = new Date() ) => {
    if (typeof fecha === 'string') {
        fecha = new Date(fecha)
    }
    const nombreDia = capitalize(aDias[fecha.getDay()])
    const dia = fecha.getDate()
    const mes = capitalize(aMeses[fecha.getMonth()])
    const año = fecha.getFullYear()
    return `${nombreDia}, ${dia} de ${mes} del ${año}`
}

function fijarLongitudCadena (cadena = '', lon = 0) {
    if (cadena.length < lon) {
        const espacios = lon - cadena.length
        for (let i = 0; i < espacios; i++) {
            cadena += ' ';
        }
    } else if (cadena.length > lon) {
        cadena = cadena.slice(0, lon-3) + '...'
    }
    return cadena
}

// ------------------------ Factura cliente------------------------------

function Viaje(destino, transporte, coste) {
    this.destino = destino
    this.transporte = transporte
    this.coste = coste
    this.paises = []
}

Viaje.prototype.paisDeDestino = function(paises) {
    this.paises.push(paises)
    // Dependencia (metodo)
}

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

factura.calcularImporte = function() {
    const importe = {} 
    importe.base = 
        this.items
        .map( viaje => viaje.precioUnidad * viaje.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe
}

factura.listarItems = function() {
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

factura.prepararFactura = function() {
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

factura.render = function () {
    console.log(this.prepararFactura())
}

factura.render()