export default class Precio{
    constructor(precio){
        this.precio = precio
    }
    getPrecio(){
        return `$${this.precio.toFixed(2)}`
    }
}