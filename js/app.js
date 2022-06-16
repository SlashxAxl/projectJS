/*let nombre = prompt('Ingrese su nombre')
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

alert('El total de tu pedido es de: ' + totalPagar(pagoTotal))

let direccion_envio = prompt('Ingrese la direccion a la que se enviara su pedido')

alert('Gracias ' + nombre + ' ' + apellido + ' por confiar en nosotros, te enviaremos tu pedido lo mas pronto posible')
alert('Vuelve pronto!')*/

class Consolas {
    constructor(marca, modelo,imgSrc ,precio){
        this.marca = marca
        this.modelo = modelo
        this.imgSrc = imgSrc
        this.precio = precio
    }
}

const consola1 = new Consolas ('Sony','Playstation 5','https://m.media-amazon.com/images/I/61gimpyy0UL._AC_SX466_.jpg',13999)
const consola2 = new Consolas ('Microsoft','Xbox Series X','https://m.media-amazon.com/images/I/61eYoSqkHnL._AC_SX466_.jpg', 13999)
const consola3 = new Consolas ('Nintendo', 'Switch Oled','https://m.media-amazon.com/images/I/61dYrzvBLbL._AC_SL1483_.jpg', 9999)

const productos = [consola1,consola2,consola3]
const cardContainer = document.querySelector('#cardContainer')
productos.forEach((producto) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
            <h3 class="cardTitle"> Consola ${producto.marca} </h3>
            <img src="${producto.imgSrc}" class="cardImg">
            <p class="cardDesc"> ${producto.modelo}</p>
            <span class="cardPrice"> $${producto.precio} </span>
            <button data-id="${producto.marca}" class="buttonCTA"> Agregar al Carrito </button>
        `
    cardContainer.append(card)
})
const botonAgregarProductos = document.querySelector('#agregarProductos')
let carrito = []
const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute('data-id')
    const producto = productos.find((producto) => producto.marca ==  productoElegido)
    carrito.push(producto)
    console.log(carrito)
}
const botonesCompra = document.querySelectorAll('.buttonCTA')
console.log(botonesCompra)
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
})
localStorage.setItem('key','value')

const objectLocalstorage = JSON.stringify(Consolas)
console.log(Consolas)

localStorage.setItem('Objeto', Consolas)
console.log(document.getElementsByClassName('card'))