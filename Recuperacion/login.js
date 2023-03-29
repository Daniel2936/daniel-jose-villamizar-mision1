
const formulario=document.getElementById('formulario')
const btn=document.getElementById('buton')
const email=document.getElementById('email')
const usuario=document.getElementById('usuario')
const validar=document.getElementById("validar")

const principal = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    localStorage.setItem("Usuarios", JSON.stringify(data));
}

principal()

const datos=JSON.parse(localStorage.getItem("Usuarios"));
console.log(datos)


formulario.addEventListener('submit',form);
    function form(event) {
        event.preventDefault();
    }

btn.addEventListener('click',function(){
    let cont=0
    datos.forEach(element => {
        if(element.email==email.value&&element.username==usuario.value){
            email.value=""
            usuario.value=""
            location.href='welcome.html'
        }else{
            cont++
        }     
    });
    if(email.value!="" && usuario.value!=""){
        if(cont==10){
            validar.innerHTML=`<p>El correo o el Usuario no son validos, intente de nuevo</p>`
            email.value=""
            usuario.value=""
        }
    } 
})



