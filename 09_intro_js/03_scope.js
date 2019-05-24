'use strict'

//variable de *ámbito (scope) Global*
var antes = 2
let a = 2
let b = 4

function prueba () {
    
    var int = 3
    let i = 6
    let b = 9

    if (true) {
        // variable de *ámbito local* a la función
        var z = 4
        // variable de ámbito local al bloque if
        let w = 7
        console.log('Es verdad')
        console.log('Desde el if', a)   // 2   //local
        console.log('Desde el if', b)  //  9  //local
        console.log('Desde el if', w) //  7  //local
    }

    console.log('Desde la función', a)  // 2    // local
    console.log('Desde la función', b) //  9   //l ocal
    //console.log('Desde el if', w)   //   7  // local - da error porque la variable esta dentro de la función if(true)
    console.log('Desde el if', z)    //    4
}
prueba()

// c = 3 daría un error debido al use strict

console.log('Desde el programa', a)  // 2  //local
console.log('Desde el programa', b) //  4  //local d

let v = 45

function ejemplo () {
    if (true) {  //local del bloque
      let v = 3  
      console.log(v)
    }
    console.log(v)
}

console.log(v)

function sample() {
    // console.log(v)
}

ejemplo()
sample() 



