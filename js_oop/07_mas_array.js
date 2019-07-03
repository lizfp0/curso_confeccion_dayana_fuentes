
    let aDatos = ['perro', 'gato']
    aDatos.length


    //Implementadas como inmutables  //No afectan el array
    console.log(aDatos.concat(['leon', 'tigre']))
    console.log(aDatos)

    //Implementadas como mutables  //Afectan el array
    aDatos.sort()
    console.log(aDatos)
  
    const aNumbers = [32, 3, 2, 21, 56, 5, 9]
    const aNumerosOriginal = aNumbers.slice()

    aNumbers.sort( (a,b) => a-b )
    console.log(aNumbers)
    console.log(aNumerosOriginal.reverse())
    console.log(aNumerosOriginal)


    let nombres = ['ana', 'carlos', 'vanye', 'javi', 'liz', 'roberto', 'dayana']

    // Fraccionar array : inmutable
    let seleccion = nombres.slice(1, 3)
    console.log(seleccion)
    console.log(nombres)

    //Clonar
    let clon = nombres.slice()

    //Fraccionar array : mutable
    let eliminados = nombres.splice(1, 3, 'pedro', 'ernesto')
    console.log(eliminados)
    console.log(nombres)

    // splice para añadir
    let paises = ['corea del sur', 'japon', 'china', 'tailandia']
    paises.splice(2, 0, 'España')
    console.log(paises)

    //Pilas y colas

    //PILA -> stack FiLO

    console.log(paises.push(['portugal', 'alemania']))
    paises.pop()
    console.log(paises)
    
    // COLAS -> heap FIFO

    paises.unshift('croacia')
    console.log(paises)
    paises.
    console.log()
    
    