const productos = [producto1, producto2, producto3, producto4, producto5, producto6]
const cardContainer = document.querySelector('#cardContainer')



const botonRegistro = document.querySelector('#formulario')

const mostrarValue = (e) => {
    e.preventDefault()
    const nombreUsuario = document.getElementById('name').value
    const emailUsuario = document.getElementById('email').value
if (nombreUsuario === "" || emailUsuario === "") {

    alert('¡Porfavor ingresa tus datos para continuar!')
    
} else {
        productos.forEach((producto) => {
            const card = document.createElement('div')
            card.className = 'card'
            card.innerHTML = `
                    <h3 class="cardTitle"> ${producto.marca} </h3>
                    <img src="${producto.imgSrc}" class="cardImg">
                    <p class="cardDesc"> ${producto.modelo}</p>
                    <span class="cardPrice"> $${producto.precio} </span>
                    <button data-id="${producto.marca}" class="buttonCTA"> Agregar al Carrito </button>
                `
            cardContainer.append(card)
        })
        const botonesCompra = document.querySelectorAll('.buttonCTA')
        console.log(botonesCompra)
        botonesCompra.forEach((botonCompra) => {
        botonCompra.addEventListener('click', agregarProducto)
    })
}}

botonRegistro.addEventListener('submit', mostrarValue)

let carrito = []
const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute('data-id')
    const producto = productos.find((producto) => producto.marca ==  productoElegido)
    carrito.push(producto)
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }

document.querySelector('#finalizarCompra').addEventListener('click',()=>{
    carrito = []
    localStorage.setItem('carrito', JSON.stringify(carrito))
    Toastify({
        text: "Compra Finalizada!",
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){}
    }).showToast();
})


const renderizarBancos = (data) =>{
    console.log(data)
}

fetch("./bancos.json")
.then((res)=>res.json)
.then((data)=>renderizarBancos(data))