const nombreTitular = document.getElementById ("nombre")
const apellidoTitular = document.getElementById ("apellido")
const mailTitular = document.getElementById ("mail")
const btnEnviarFormulario = document.getElementById ("enviarFormulario")
let cuentas = []

btnEnviarFormulario.onclick = (e)=>{
    e.preventDefault()
    let nombre = nombreTitular.value
    let apellido = apellidoTitular.value
    let mail = mailTitular.value
    if (nombre != "" && apellido != "" && mail != ""){
        let cuenta = new cuentaUsuario (nombre,apellido,mail)
        cuentas.push(cuenta)
        console.log(cuentas)
    }
    else{
        alert ("El contenido ingresado no es valido")
    }
}
class cuentaUsuario{
    constructor(nombre, apellido, mail){
        this.nombre = nombre
        this.apellido = apellido
        this.mail = mail
    }
}
 /* no compila */



