import Fecha from "./fecha.js"
class Restaurante{
    constructor(dia,mes,año){
        this.fecha = new Date(año,mes -1,dia)
        this.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        this.dia = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado']

    }

    probarFecha(){
        let fecha = new Fecha(1,2,2000)
        console.log(`El día fue ${fecha.getDiaFecha()}`);
        console.log(`Han pasado ${fecha.getAños()} Años`)
        console.log(`Han pasado ${fecha.getMeses()} Meses`);
        console.log(`Han pasado ${fecha.getSemanas()} Semanas`);
        console.log(`Han pasado ${fecha.getDias()} Días`);
    }

}
let app = new Restaurante
app.probarFecha()