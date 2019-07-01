let {comprobarCaso, mostrarComprobacionCaso} = require('../04_caso.js')

describe('funcion comprobarCaso', () => {

    it('should be 0 if all MAY ', () => {
        const cadena = 'HOLA PEPE'
        expect(comprobarCaso(cadena)).toEqual(0)
    });

    it('should be 1 if all min ', () => {
        const cadena = 'hola pepe'
        expect(comprobarCaso(cadena)).toEqual(1)
    });

    it('should be 2 if all MAY & min ', () => {
        const cadena = 'HOLA pepe'
        expect(comprobarCaso(cadena)).toEqual(2)
    });

});


describe('funcion mostrarComprobacionCaso', () => {

    it('should be - solo mayusculas - if all MAY', () => {
        const cadena = 'HOLA PEPE'
        console.log = jasmine.createSpy("log")
        mostrarComprobacionCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('solo mayusculas')
    });

    it('should be - solo minusculas - if all min', () => {
        const cadena = 'hola pepe'
        console.log = jasmine.createSpy("log")
        mostrarComprobacionCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('solo minusculas')
    });

    it('should be - mayusculas y minusculas - if all MAY & min', () => {
        const cadena = 'HOLA pepe'
        console.log = jasmine.createSpy("log")
        mostrarComprobacionCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('mayusculas y minusculas')
    });
});

