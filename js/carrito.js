const pintarCarrito = () => {
    contenidoModal.innerHTML = ""
    contenidoModal.style.display = "block"
    const modalHeader = document.createElement ("div")
        modalHeader.className = "modalHeader"
        modalHeader.innerHTML = `<h1 class = "modalHeaderTitulo">Carrito</h1>`

    contenidoModal.append (modalHeader)

    const modalButton = document.createElement ("h2")
        modalButton.innerText = "x"
        modalButton.className ="modalButton"

        modalButton.addEventListener ("click",() => {
            contenidoModal.style.display = "none"
        }) 

        modalHeader.append (modalButton)

    carrito.forEach((product) => {
        let mostrarProductosCarrito = document.createElement ("div")
        mostrarProductosCarrito.innerHTML =` 
        <img src="${product.img}">
        <div class = "contenedorInformacionCarrito">
            <p>${product.nombre}</p>
            <p>Precio por unidad: $${product.precio}</p>
            <div class= "cantidades">
                <span class="restar"> - </span>
                <p>Cantidad: ${product.cantidad}</p>
                <span class="sumar"> + </span>
            </div>
            <p>Total: ${product.cantidad * product.precio} </p>
        </div>
        `
        mostrarProductosCarrito.className = "modalContent"

        contenidoModal.append (mostrarProductosCarrito)

        let restar = mostrarProductosCarrito.querySelector(".restar")
        restar.addEventListener("click", () => {
            if (product.cantidad !== 1)
            product.cantidad--
            pintarCarrito()
            saveLocal()
        })
        let sumar = mostrarProductosCarrito.querySelector(".sumar")
        sumar.addEventListener("click", () => {
            product.cantidad++
            pintarCarrito()
            saveLocal()
        })

        let eliminar = document.createElement ("span")
        eliminar.innerText = "x"
        eliminar.className = "deleteProduct"
        mostrarProductosCarrito.append (eliminar)

        eliminar.addEventListener("click", eliminarProducto)
    })

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const precioTotal = document.createElement ("div")
    precioTotal.className="precioTotal"
    precioTotal.innerHTML=`Total a pagar $${total}`
    contenidoModal.append(precioTotal)


} 

    verCarrito.addEventListener("click", pintarCarrito)

    const eliminarProducto = () => {
        const foundId = carrito.find ((element) => element.id)
        carrito = carrito.filter((carritoId) => {
            return carritoId !== foundId
        })
        contadorCarrito()
        pintarCarrito()
        saveLocal()
    }

    const contadorCarrito = () => {
        cantidadCarrito.style.display = "block"

        const carritoLength = carrito.length

        localStorage.setItem ("carritoLength", JSON.stringify (carritoLength))

        cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
    }

    contadorCarrito()