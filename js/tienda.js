const contenidoTienda = document.getElementById ("contenidoCarrito")
const verCarrito = document.getElementById ("verCarrito")
const contenidoModal = document.getElementById ("contenidoModal")
const cantidadCarrito = document.getElementById ("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product)=> {
let content = document.createElement("div")
content.className = "padre-cards div-cards"
content.innerHTML = `
<img src="${product.img}">
<p class = "productName">${product.nombre}</p>
<p>$${product.precio}</p>
`;

contenidoCarrito.append(content)

let agregar = document.createElement("button");
agregar.className = "boton-agregar"
agregar.innerText = "Agregar al carrito";

content.append(agregar)

agregar.addEventListener ("click", () => {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)
    
    if(repeat === true){
        carrito.map((prod)=>{
            if(prod.id === product.id){
                prod.cantidad++
            }
        })
    }else{
        carrito.push({
            id : product.id,
            img : product.img,
            nombre : product.nombre,
            precio : product.precio,
            cantidad : product.cantidad,
        })
        console.log (carrito)
        contadorCarrito ()
        saveLocal ()
        } 
    })
});

const saveLocal = () =>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
}

JSON.parse(localStorage.getItem("carrito"))
