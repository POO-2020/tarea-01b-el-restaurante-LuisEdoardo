import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
class Restaurante{
    constructor(dia,mes,año){
        this.fecha = new Date(año,mes -1,dia)
        this.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        this.dia = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado']

    }

    probarFecha(){
        console.log('<--------------------Fecha---------------------->')
        let fecha = new Fecha(1,2,2000)
        console.log(`El día fue ${fecha.getDiaFecha()}`);
        console.log(`Han pasado ${fecha.getAños()} Años`)
        console.log(`Han pasado ${fecha.getMeses()} Meses`);
        console.log(`Han pasado ${fecha.getSemanas()} Semanas`);
        console.log(`Han pasado ${fecha.getDias()} Días`);
    }

    probarTiempo(){
        console.log('<--------------------Tiempo---------------------->')
    let h = new Tiempo(18,55,"AM")
    console.log(h.getFormato24())
    console.log(h.getFormato12())
    }

    probarDireccion(){
        console.log('<--------------------Direccion---------------------->')
        let direccion = new Direccion("Avenida", "Acapulco", 234, 12, "Nuevo Milenio")
        console.log(`${direccion.getFormatoCorto()}`)
        console.log(`${direccion.getFormatoExtendido()}`)    
    }

}
let app = new Restaurante
app.probarFecha()
app.probarTiempo()
app.probarDireccion()