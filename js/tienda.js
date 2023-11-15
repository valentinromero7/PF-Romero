let maximoGastoCliente = Number(prompt("Indique la cantidad máxima de dinero que esté dispuesto a gastar y le indicaremos los productos que sean acordes a su presupuesto"))
while(isNaN(maximoGastoCliente)){
    maximoGastoCliente = Number(prompt("Por favor indique la cantidad máxima de dinero que esté dispuesto a gastar y le indicaremos los productos que sean acordes a su presupuesto"))
}
if(maximoGastoCliente<7499){
    alert("el monto ingresado es insuficiente para comprar cualquier producto de nuestra tienda.")
}else if(maximoGastoCliente>=7500 && maximoGastoCliente<=9999){
    alert("Usted puede adquirir una bandeja pequeña.")
}else if(maximoGastoCliente>=10000 && maximoGastoCliente<=12499){
    alert("Usted puede adquirir una bandeja pequeña o mediana.")
}
else if(maximoGastoCliente>=12500 && maximoGastoCliente<=14999){
    alert("Usted puede adquirir una bandeja pequeña mediana o grande.")
}
else if(maximoGastoCliente>=15000 && maximoGastoCliente<=24999){
    alert("Usted puede adquirir varias bandejas o una toalla artesanal.")
}
else if(maximoGastoCliente>=25000){
    alert("Usted puede adquirir cualquier producto de nuestra tienda.")
}




