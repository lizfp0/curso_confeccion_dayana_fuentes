/** funcion objetoT
 * @description
 * @param
 */

 function Triangulo(l1, l2, l3) {
    this._l1 = l1
    this._l2 = l2
    this._l3 = l3
 }

Triangulo.prototype.getLados = function () {
    return this 
}

Triangulo.prototype.getPerimetro = function () {
    return this._l1 + this._l2 + this._l3
}

Triangulo.prototype.getTipo = function () {
    
}