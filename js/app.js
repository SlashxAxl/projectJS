let nombre = prompt('Ingrese su nombre')
let apellido = prompt('Ingrese su apellido')

alert('Bienvenido ' + nombre + ' ' + apellido )
alert('Esta es una tienda de consola de videojuegos')

const listaProductos = ['PolyStation 5', ' Mexbox Series X ', ' Nientendo Switch HD', ' Juegosfera 3', ' Pici masterreis 2', ' SEGAton', ' Atariado',' Olculus drift 2', ' Pissdeck']

alert('Estos son nuestros productos: ' + listaProductos)

let nombreConsola = prompt('Ingrese el nombre de la consola')
let precioConsola = Number(prompt('Ingrese el precio de la consola'))

function pedido(){
    console.log('Consola: ' + nombreConsola + ', ' + 'Precio: ' + precioConsola )
}
pedido(nombreConsola, precioConsola)

while (nombreConsola == 'ESC') {
    pedido()
}

let pagoTotal = 0
function totalPagar(precioConsola){
    pagoTotal = precioConsola
}

alert('El total de tu pedido es de: ' + totalPagar())

let direccion_envio = prompt('Ingrese la direccion a la que se enviara su pedido')

alert('Gracias ' + nombre + ' ' + apellido + ' por confiar en nosotros, te enviaremos tu pedido lo mas pronto posible')
alert('Vuelve pronto!')