function suma(a:number, b:number): number {
    return a + b
}

function producto(a: number, b: number): number {
    return a * b
}

// function productoRaro(a: string, b: string): number {
//     return Number(a) * Number(b)
// }

function productoLibre(a: any, b: any): number {
    return a * b
}  //devuelve NaM

console.log(suma(2, 4))
console.log(producto(2, 24))
console.log(productoLibre(2, 'pepe'))


