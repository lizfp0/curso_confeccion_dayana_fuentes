'use strict'

function ejemplo () {
    let v = 160
    let a = 4
    let modelo = 'RAV'
    let marca = 'Toyota'

    let coche = {    //colecciones de propiedades con nombres --> object
         v : 160,
         a : 4,
         modelo : 'RAV',
         marca : 'Toyota',
         usuarios : ['Pepe', 'Elena', 'Rosa']
    } 

    //array [], lista, arreglo
   let aDatos = [2, 4, 6, 7, 37]   //arrive

    console.log(coche)
    console.log(coche.marca)
}
ejemplo()

// Objeto JSON o literal

let persona = {
    fullNombre : {
        nombre : 'Pepe',
        apellido : 'Pérez' 
    },
    edad : {
        valor : 20,
        unidad : 'años'
    },
    altura : 178,
    isMujer : false,
    formacion : 'Ingeniero',
    aficiones : ['leer', 'bailar', 'programar']
}

let user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
}
console.log(user, persona)