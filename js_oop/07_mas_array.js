
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