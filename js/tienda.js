const contenidoTienda = document.getElementById ("contenidoCarrito")
const verCarrito = document.getElementById ("verCarrito")
const contenidoModal = document.getElementById ("contenidoModal")
const cantidadCarrito = document.getElementById ("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts= async () => {
    const respuesta =  await fetch ("../data.json")
    const data = await respuesta.json()
    
    data.forEach((product)=> {
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
                        const swalWithBootstrapButtons = Swal.mixin({
                            customClass: {
                            confirmButton: "btn btn-success",
                            cancelButton: "btn btn-danger"
                            },
                            buttonsStyling: false
                        });
                        swalWithBootstrapButtons.fire({
                            title: "Ya tienes este producto en tu carrito!",
                            text: "deseas agregar otra unidad?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonText: "Si",
                            cancelButtonText: "No",
                            reverseButtons: true
                        }).then((result) => {
                            if (result.isConfirmed) {        
                                swalWithBootstrapButtons.fire({
                                    title: "Agregado!!",
                                    text: "Tu unidad fue agregada!",
                                    icon: "success" 
                                });            
                            prod.cantidad++
                            } else if (
                              /* Read more about handling dismissals below */
                                result.dismiss === Swal.DismissReason.cancel
                            ) {
                                swalWithBootstrapButtons.fire({ 
                                    title: "Cancelado!",
                                    text: "Tu unidad no fue agregada...",
                                    icon: "error"
                                });
                            }
                        });
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
}

getProducts();

const saveLocal = () =>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
}

JSON.parse(localStorage.getItem("carrito"))
