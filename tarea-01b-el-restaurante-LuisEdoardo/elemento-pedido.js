export default class ElementoPedido{
    /**
     * 
     * @param {number} cantidad 
     * @param {string} producto 
     */
    constructor(cantidad, producto){
        this.cantidad = cantidad
        this.producto = producto
    }
    getDescripcionP(){
        return `x${this.cantidad}  ${this.producto}`
    }
}