
    let aDatos = ['perro', 'gato']
    aDatos.length


    //Implementadas como inmutables  //No afectan el array
    console.log(aDatos.concat(['leon', 'tigre']))
    console.log(aDatos)

    //Implementadas como mutables  //Afectan el array
    aDatos.sort()
    console.log(aDatos)
    
    let aNumbers = [32, 3, 2, 21, 56, 5, 9]
    aNumbers.sort((a, b) => a-b)
    console.log(aNumbers)
