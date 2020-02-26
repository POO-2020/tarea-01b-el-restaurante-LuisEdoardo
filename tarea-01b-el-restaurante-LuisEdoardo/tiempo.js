export default class Tiempo{
    /**
     * @param {number} hora
     * @param {number} minutos
     * @param {string} periodo
     */
    constructor(hora, minutos, periodo){
        
        this.hora = hora
        this.minutos = minutos
        this.periodo = periodo.toLowerCase()
        
    }
    getFormato24(){
        let hora = this.hora
        if(this.periodo === "pm"){
            hora = hora +12
            return `${hora}:${this.minutos}`
        }else{
            return `${hora}:${this.minutos}`
        }
    }
    getFormato12(){
        let hora = this.hora
        if (hora >= 12){
            this.periodo = 'pm'
            hora = hora - 12 
            return `${hora}:${this.minutos}:${this.periodo}`
            
        }else{
            this.periodo = 'am'
            return `${hora}:${this.minutos}:${this.periodo}`
        }
        
    }
}