export default class Fecha{
    /**
     * @param {number} dia
     * @param {string} mes
     * @param {number} año
     */
    constructor(dia,mes,año){
        this.fecha = new Date(año,mes -1,dia)
        this.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        this.dia = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado']
    }
    getAños(){
        let añosR = new Date(Date.now() - this.fecha)
        let mAños = 1000 * 60 * 60 * 24 * 365
        let años = Math.trunc(añosR/mAños)
        return `${años}`
    }
    getMeses(){
        let mesesR = new Date(Date.now() - this.fecha)
        let mMeses = (1000 * 60 * 60 * 24 * 365) / 12
        let meses1 = Math.trunc(mesesR/mMeses)
        return `${meses1}`
    }
    getSemanas(){
        let semanasR = new Date(Date.now() - this.fecha)
        let mSemanas = (1000 * 60 * 60 * 24 * 365) / 52.1429
        let semanas = Math.trunc(semanasR/mSemanas)
        return `${semanas}` 
    }
    
    getDias(){
        let diasr = new Date(Date.now() - this.fecha)
        let mDias = 1000 * 60 * 60 * 24
        let dias = Math.trunc(diasr/mDias)
        return `${dias}`
    }
    getFecha(){
        return `${this.fecha.getDate()}/${this.meses[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`
    }
    getDiaFecha(){
        return `${this.dia[this.fecha.getDay() -1]}`
    }
    }