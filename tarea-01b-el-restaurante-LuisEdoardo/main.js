import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elemento-pedido.js"
import Cliente from "./cliente.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"
class Main{
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
        let producto = new Producto('Pizza', 'Mexicana', 'Grande', new Precio(200).getPrecio())
        console.log(`${producto.getDescripcion()}`)
    }
    probarElementoPedido(){
        console.log('<--------------------Elemento Pedido---------------------->')
        let cantidad = 2
        let costo = new Precio(200 * cantidad).getPrecio()
        let producto = new Producto('Pizza', 'Mexicana', 'Grande').getDescripcion()
        let pedido = new ElementoPedido(cantidad, costo, producto)
        console.log(`${pedido.getDescripcionP()}`)
    }
    probarCliente(){
        console.log('<--------------------Cliente---------------------->')
        let nombre = 'Jose Martin Flores Alcaraz'
        let direccion = new Direccion('Avenida', 'Acapulco', 234, 12, 'Nuevo Milenio').getFormatoExtendido()
        let telefono = 3125631234
        let cliente = new Cliente(nombre, direccion, telefono)
        console.log(`${cliente.getCliente()}`)
    }
    probarPedido(){
        console.log('<--------------------Pedidos---------------------->')
        let cantidad1 = 1
        let cantidad2 = 3
        let precio1 = new Precio(200)
        let precio2 = new Precio(100)
        let elemento1 = new ElementoPedido(cantidad1, precio1, new Producto("Pizza", "Mexicana", "Grande", precio1))
        let elemento2 = new ElementoPedido(cantidad2, precio2, new Producto("Pizza", "Pepperoni", "Grande", precio2))
        let pedido = new Pedido(
        new Fecha(1, 13, 2020),
        new Tiempo(2, 22, "pm"),
        new Cliente('Raul Castro Torres', new Direccion ("Avenida", "Acapulco", 123, 2, "Nuevo Milenio"), 3124456446).getCliente()
        )
        pedido.agregarElemento(elemento1);
        pedido.agregarElemento(elemento2);
        console.log("Cantidad de productos distintos: " + pedido.getNumeroElementos())
        console.log("Total de productos: " + pedido.getNumeroProductos()) 
        pedido.listarElementos()
        console.log(pedido.getResumen())
        console.log('Costo total: ' + pedido.getCostoTotal())
    }
    probarRestaurante(){
        let cantidad1 = 2
        let cantidad2 = 4
        let precio1 = new Precio(200).getPrecio()
        let precio2 = new Precio(100).getPrecio()
        let producto1 = new ElementoPedido(cantidad1, precio1, new Producto("Pizza", "Mexicana", "Grande", precio1).getDescripcion()).getDescripcionP()
        let producto2 = new ElementoPedido(cantidad2, precio2, new Producto("Pizza", "Pepperoni", "Grande", precio2).getDescripcion()).getDescripcionP()
        let pedido1 = new Pedido(
        new Fecha(1, 13, 2020),
        new Tiempo(2, 22, "pm"),
        new Cliente("Raul Castro Torres", new Direccion ("Avenida", "Acapulco", 123, 2, "Nuevo Milenio"), 3122381273)
        )
        let pedido2 = new Pedido(
            new Fecha(1, 13, 2020),
            new Tiempo(2, 22, "pm"),
            new Cliente("Jesus Castro Martinez", new Direccion ("Avenida", "Acapulco", 78, 2, "Nuevo Milenio").getFormatoExtendido(), 3129803452).getCliente()
            )
        let restaurante = new Restaurante("Papa's Pizzeria", 3125362822, new Direccion ("Avenida", "Acapulco", 203, 1, "Nuevo Milenio"), 3126374352)
        console.log('<---------Restaurante--------->')
        restaurante.registrarProducto(producto1)
        restaurante.registrarProducto(producto2)
        pedido1.agregarElemento(producto1)
        pedido2.agregarElemento(producto2)
        restaurante.registrarPedido(pedido1)
        restaurante.registrarPedido(pedido2)
        console.log(`-----Pedidos-----`)
        restaurante.listarProductos()
        console.log(`-----Productos-----`)
        restaurante.listarPedidos()
    }
}
    

let app = new Main
app.probarFecha()
app.probarTiempo()
app.probarDireccion()
app.probrarPrecio()
app.probarProducto()
app.probarCliente()
app.probarElementoPedido()
app.probarPedido()
app.probarRestaurante()