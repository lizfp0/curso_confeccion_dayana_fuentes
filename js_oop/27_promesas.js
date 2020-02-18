
function asincrona() {
    return new Promise( (resolve, reject) => {
        let i = Math.random()
        setTimeout( () => {
            if(i < 0.7) { //OK
                resolve('Exito!!!  ' + i)
            } else { //ERROR
                reject(new Error('Error número ' + i))
            }
        }, 2000 )
    })
}

for (let i = 0; i < 10; i++) {
    asincrona()
    .then( ( response ) => {console.log(response)})      // then => si todo va bien
    .catch( ( error ) => {console.log(error.message)})  // catch => si todo va mal 
}
