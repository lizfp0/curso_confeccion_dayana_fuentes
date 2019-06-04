describe('Función isEntero', () => {
    let f = require('../10_pares')
    
    it('should be true if n is 2', () => {
        let n = 2
        expect(f.isEntero(n)).toBeTruthy()
    });

    it('should be false n is 2.2', () => {
        let n = 2.2
        expect(f.isEntero(n)).toBeFalsy()
    });

    it('should be true n is -2', () => {
        let n = 2
        expect(f.isEntero(n)).toBeTruthy()
    });

    it('should be false n is -2.2', () => {
        let n = 2
        expect(f.isEntero(n)).toBeFalsy()
    });

    it('should be true n is 0', () => {
        let n = 2
        expect(f.isEntero(n)).toBeTruthy()
    });

    it('should be false n is "2"', () => {
        let n = 2
        expect(f.isEntero(n)).toBeFalsy()
    });
});

describe('Función esPar', () => {
    let f = require('../10_pares.js')

    it('should be true if n = 0', () => {
        let n = 0
        expect(f.isPar(n)).toBeTruthy()
    });

    it('should be false if n = 1', () => {
        let n = 1
        expect(f.isPar().bind(n)).toBeFalsy()
    });

    it('should be true if n = 2', () => {
        let n = 2
        expect(f.isPar(n)).toBeTruthy()
    });

    it('should be false if n = string "11"', () => {
        let n = '11'
        expect(f.isPar(n)).toBeFalsy()
    });

    it('should be true if n = string "22"', () => {
        let n = '22'
        expect(f.isPar(n)).toBeTruthy()
    });

    it('should be false if n = -5', () => {
        let n = -5
        expect(f.isPar(n)).toBeFalsy()
    });

    it('should be true if n = -4', () => {
        let n = -4
        expect(f.isPar(n)).toBeTruthy()
    });

    it('should be -2 if n = "pepe"', () => {
        let x = 'pepe'
        expect(f.isPar(x)).toEqual(-2)
    });

    it('should be -2 if n = "pepe"', () => {
        let x = 'pepe'
        expect(f.isPar(x)).toEqual(-2)
    });
    
    it('should be -2 if n = "pepe"', () => {
        let x = 'pepe'
        expect(f.isPar(x)).toEqual(-2)
    });
})