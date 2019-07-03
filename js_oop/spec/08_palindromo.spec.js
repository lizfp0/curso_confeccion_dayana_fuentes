let {frasePalindromo, comprobarFrasePalindromo} = require('../08_palindromo.js')

describe('Palindromo: frasePalindromo', () => {

    it('should be true La ruta nos aporto otro paso natural', () => {
        let cadena = 'La ruta nos aporto otro paso natural'
        expect(frasePalindromo(cadena)).toBeTruthy()
    });

    it('should be false Un anillo para gobernarlos a todos ', () => {
        let cadena = 'Un anillo para gobernarlos a todos'
        expect(frasePalindromo(cadena)).toBeFalsy()
    });

});

describe('Palindromo: comprobarFrasePalindromo', () => {

    it('should be true Se van sus naves', () => {
        let cadena = 'Se van sus naves'
        expect(comprobarFrasePalindromo(cadena)).toBeTruthy()
    });

    it('should be false Hoy no hago yoga', () => {
        let cadena = 'Hoy no hago yoga'
        expect(comprobarFrasePalindromo(cadena)).toBeFalsy()
    });

});