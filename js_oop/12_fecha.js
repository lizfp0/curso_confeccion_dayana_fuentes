const {diaSemana, meses} = require('./12_datos.js')

const capitalize = (cadena ='') =>
    cadena[0].toUpperCase() + cadena.slice(1)

/** funcion fechaDay()
 *@description devuelve la fecha como 
 "Día de la semana, día de Mes del Año"
 @author Dayana Fuentes
 @param { date  | string }  fecha
 @description el string debe respetar el estandar ISO
 @external diaSemana, meses
 @return {string}
 @copyright Dayana Fuentes
 */

 const fechaDay = (fecha = new Date() ) => {
    if (typeof fecha === 'string') {
        fecha = new Date(fecha)
    }
     const nombreDia = capitalize(diaSemana[fecha.getDay()])
     const dia = fecha.getDate()
     const mes = capitalize(meses[fecha.getMonth()])
     const año = fecha.getFullYear()
     return `${nombreDia}, ${dia}, ${mes}, ${año}`
 }

//LAS DOS SON IGUAL DE VÁLIDAS

 const fechaDayShort = (fecha = new Date() ) => {
    fecha = (typeof fecha === 'string') ? new Date(fecha) : fecha
    return capitalize(diaSemana[fecha.getDay()])
        + ', ' + fecha.getDate()
        + ', ' + capitalize(meses[fecha.getMonth()])
        + ', ' + fecha.getFullYear()
 }
 


 let f = new Date(1999,12,1)
 f = '1999,12,1'
 console.log(fechaDay(f))
 a = '1998,11,3'
 console.log(fechaDayShort(a))