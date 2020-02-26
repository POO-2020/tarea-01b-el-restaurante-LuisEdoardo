export default class Direccion{
    /**
     * 
     * @param {number} numeroI 
     * @param {number} numeroE 
     * @param {string} calle 
     * @param {string} colonia 
     * @param {string} nombre 
     */
    constructor(numeroI, numeroE, colonia,tipo,nombre){
        this.numeroI = numeroI
        this.numeroE = numeroE
        this.colonia = colonia
        this.tipo = tipo
        this.nombre = nombre
    }
    getFormatoCorto(){
        let tipo = this.tipo
        if(tipo === "Avenida" || tipo === "avenida"){
            tipo = "Av."
        }else if(tipo === "Calle" || tipo === "calle"){
            tipo = "C."
        }
        return `${tipo} ${this.nombre} ${this.numeroE} ${this.numeroI}`
    }

    getFormatoExtendido(){
        return `${this.tipo} ${this.nombre} ${this.numeroE} ${this.numeroI} ${this.colonia}`
    }
}