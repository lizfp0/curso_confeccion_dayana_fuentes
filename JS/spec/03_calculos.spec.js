const f = require(`../03_calculos.js`)

fdescribe('Funcion sumar', () => {

    const aErrores = [
        "pepe", true, [], {}, NaN, undefined, null
    ]

    it('should be 5 with suma 2 + 3', () => {
        expect(f.sumar(2, 3)).toEqual(5);
    });

    it('should be 2 with suma 2', () => {
        expect(f.sumar(2)).toEqual(2);
    });

    it('should be 0 with suma without arguments', () => {
        expect(f.sumar()).toEqual(0);
    });

    it('should be 5 with suma -2 + 7', () => {
        expect(f.sumar(-2, 7)).toEqual(5);
    });

    it('should be 5.4 with suma 2.1 + 3.3', () => {
        expect(f.sumar(2.1, 3.3)).toEqual(5.4);
    });

    it('should be NaM with suma 2 + "pepe"', () => {
        expect(f.sumar(2, 'pepe')).toBeNaN();
    });

    it('should be error with suma 2 + "pepe"', () => {
        expect(() => f.sumar(2, 'pepe')).toThrow()
    });

});