class Usuario{
    nombre 
    apellidos
    area
    usuario
    edad
    direccion
    email

    constructor(nombre,apellidos,area,usuario,edad,direccion,email){
        this.nombre=nombre
        this.apellidos=apellidos
        this.area=area
        this.usuario=usuario
        this.edad=edad
        this.direccion=direccion
        this.email=email
    }

}


const nombres=document.getElementById('nombres')
const apellidos=document.getElementById('apellidos')
const area=document.getElementById('area')
const usuarioo=document.getElementById('usuario')
const edad=document.getElementById('edad')
const direccion=document.getElementById('direccion')
const email=document.getElementById('email')
const formulario=document.getElementById('formulario')
let listaP=[]
let usuarios=[]


formulario.addEventListener("submit", form);
function form(event) {
    event.preventDefault();
    
    const usero=new Usuario(nombres.value,apellidos.value,area.value,usuarioo.value,edad.value,direccion.value,email.value )
    const {usuario}=usero

    if(usuarios.includes(usuario)){
        alert('este usuario ya esta tomado, cambielo')
        usuarioo.value=""
    }else{

        usuarios.push(usuario)
        listaP.push(usero)
        console.log(listaP)
        localStorage.setItem("Usuarios", JSON.stringify(listaP))
        localStorage.setItem("RegistroUsers", JSON.stringify(usuarios))
        nombres.value=""
        apellidos.value=""
        area.value=""
        usuarioo.value=""
        edad.value=""
        direccion.value=""
        email.value=""

    }

}

