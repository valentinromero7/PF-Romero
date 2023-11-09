"use strict"

alert("Si el precio de tu compra supera los $20000, obtendras envio GRATIS!!!")
let valor1 = prompt("escribi el nombre del producto que deseas comprar y calcularemos el precio total de tu compra. (bolso, toalla o matera)")
let bolso = "bolso"
let toalla = "toalla"
let matera = "matera"
let valorTotal = 0
let precioBolso = 25000
let precioToalla = 15000
let precioMatera = 20000
let minimoEnv = 20000

if (valor1 !== "bolso"||"toalla"||"matera"){
    alert("El producto ingresado no es valido, por favor ingrese uno de estos tres: bolso, toalla, matera")
}
if (valor1 == "toalla"){
    let noCumple = prompt("El total de su compra, no supera los $20000, si desea agregar un producto escriba 'si'")
    if (noCumple != "si"){
        alert("Su envio tendra un coste de $5000.")
    }else{
        let valor2 = prompt("escribi el nombre del producto que deseas agregar y calcularemos precio total de tu compra. (bolso, toalla o matera)")
    }
}



