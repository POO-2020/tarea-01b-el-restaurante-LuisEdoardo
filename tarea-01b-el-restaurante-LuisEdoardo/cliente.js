export default class Cliente{
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
    }
    
getCliente(){
    return `Nombre: ${this.nombre}\n Direccion: ${this.direccion.getFormatoExtendido()}\n Telefono: ${this.telefono} `
}
}