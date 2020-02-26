import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
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
    
    probrarPrecio(){
        console.log('<--------------------Precio---------------------->')
        let precio1 = new Precio(127.00)
        let precio2 = new Precio(127.45)
        let precio3 = new Precio(1127.00)
        let precio4 = new Precio(34127.45)
        console.log(`${precio1.getPrecio()}`)
        console.log(`${precio2.getPrecio()}`)
        console.log(`${precio3.getPrecio()}`)
        console.log(`${precio4.getPrecio()}`)
    }
    probarProducto(){
        console.log('<--------------------Producto---------------------->')
        let producto = new Producto('Pizza', 'Mexicana', 'Grande', new Precio(200))
        console.log(`${producto.getDescripcion()}`)
    }
}
let app = new Restaurante
app.probarFecha()
app.probarTiempo()
app.probarDireccion()
app.probrarPrecio()
app.probarProducto()