
const nombre=document.getElementById('nombre')
const area=document.getElementById('area')
const usuario=document.getElementById('usuario')
const email=document.getElementById('email')
const edad=document.getElementById('edad')
const busqueda=document.getElementById('busqueda')

let usuarios=JSON.parse(localStorage.getItem('Usuarios'))
let listaarea=[]


usuarios.forEach(element => {
    
    if(listaarea.includes(element.area)){
        area.innerHTML+=`<p class="text-lg font-bold text-center text-white " >${element.area}</p>`
        nombre.innerHTML+=`<p class="text-lg font-bold text-center ">${element.nombre} ${element.apellidos}</p>`
        usuario.innerHTML+=`<p class="text-lg font-bold text-center ">${element.usuario}</p>`
        email.innerHTML+=`<p class="text-lg font-bold text-center text-red-800 ">${element.email}</p>`
        edad.innerHTML+=`<p class="text-lg font-bold text-center ">${element.edad}</p>`

    }else{
        listaarea.push(element.area)
        area.innerHTML+=`<p class="text-lg font-bold text-center " >${element.area}</p>`
        nombre.innerHTML+=`<p class="text-lg font-bold text-center ">${element.nombre} ${element.apellidos}</p>`
        usuario.innerHTML+=`<p class="text-lg font-bold text-center ">${element.usuario}</p>`
        email.innerHTML+=`<p class="text-lg font-bold text-center text-red-800 ">${element.email}</p>`
        edad.innerHTML+=`<p class="text-lg font-bold text-center ">${element.edad}</p>`
        

    }
   
});

busqueda.addEventListener("keypress",function(event){
    let cont=0

    if (event.key === "Enter") {

        const busqueda=document.getElementById('busqueda').value
        usuarios.forEach(element => {

            if(busqueda==element.nombre){
                area.innerHTML=''
                nombre.innerHTML=''
                usuario.innerHTML=''
                email.innerHTML=''
                edad.innerHTML=''
                area.innerHTML+=`<p class="text-lg font-bold text-center " >${element.area}</p>`
                nombre.innerHTML+=`<p class="text-lg font-bold text-center ">${element.nombre} ${element.apellidos}</p>`
                usuario.innerHTML+=`<p class="text-lg font-bold text-center ">${element.usuario}</p>`
                email.innerHTML+=`<p class="text-lg font-bold text-center text-red-800 ">${element.email}</p>`
                edad.innerHTML+=`<p class="text-lg font-bold text-center ">${element.edad}</p>`

            }else{

                cont++


            }
            
        });

        if(cont>=1){
            alert('No existe este usuario')
        }


    }
})




window.onbeforeunload = () => {
    // Clear the local storage
    window.localStorage.clear()
 }

 