/* EXTRUCTURA DE UN OBJETO (MODELO DE DATOS)
Definir la estructura de un objeto que almacena una factura.

Las facturas están formadas por:
- La información de la propia empresa:
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF

- La información del cliente
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF

- Una lista de elementos, cada uno de los cuales dispone de:
    - descripción
    - precio por unidad
    - cantidad

- Otra información básica de la factura
    - el número de factura
    - tipo de IVA
    - forma de pago
    - la fecha

Añadir al menos dos métodos públicos:
- el que calcula el importe total de la factura
- el que muestra por pantalla la factura
    o al menos el importe total de la factura
*/

const formatoFactura = {
    empresa: {
        nombre: '',
        direccion: '',
        telefono: '',
        nNIF: ''
    },
    cliente: {
        nombre: '',
        direccion: '',
        telefono: '',
        nNIF: ''
    },
    items: [

    ],
    nFactura: '',
    nIVA: '',
    formaPago: '',
    fecha: new Date()
}

const Factura = {
    empresa: {
        nombre: 'Supermercado DIA',
        direccion: 'Calle Miralrio, 9',
        telefono: 695448024,
        nNIF: 8927408
    },
    cliente: {
        nombre: 'Dayana Fuentes',
        direccion: 'Calle Lago Ercina, 6',
        telefono: 695299238,
        nNIF: 51023173
    },
    items: [
        {descripcion: '', precio: 0, cantidad: 0}
    ],
    nFactura: '',
    nIVA: '',
    formaPago: '',
    fecha: new Date()
}



const datosFactura = {
    nFactura: 0023,
    nIVA: 10,
    descripProducto: ['arroz', 'fideos','soja','wasabi', 'salmon'],
    preUniProducto: 3,
    cantProducto: 2,
    formPago: ['efectivo', 'tarjeta'],
 pago: function (formaPago = ''){
    if (this._comprobarFormaDePAgo(formaPago)) {
        console.log(`El cliente pagará en ${this}`)
    }
 },
    
 cobrar: function(calcular) {
    calcular.total = (calcular.cantProducto * calcular.preUniProducto)
    console.log(calcular(calcular.total))
  }
}
console.log(datosFactura)

