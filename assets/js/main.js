let Formulario = document.querySelector("#Formulario");


const buscarDatos = async () => {
    const response = await fetch ('../json/formulario.json')
    const data = await response.json()
    Formulario = data
}

buscarDatos()
let todosLosClientes
if(localStorage.getItem('todosLosClientes')){
    todosLosClientes = JSON.parse(localStorage.getItem('todosLosClientes'))
} else {
    todosLosClientes = []
}
//addEventListener("submit"
Formulario.onsubmit = (e) => {
    e.preventDefault();

    let texto =document.querySelector("#texto");
    let mail =document.querySelector("#mail");
    let telefono =document.querySelector("#telefono");
   
    let datos = {
        texto : texto.value,
        mail : mail.value,
        telefono : telefono.value,
    }
    
   todosLosClientes.push(datos) 

    localStorage.setItem(todosLosClientes, JSON.stringify(todosLosClientes))
    vaciarForm()   
    console.log(todosLosClientes)
    
    
    Swal.fire("Se enviaron tus datos correctamente")

const todosLosClientesGuardado = JSON.parse(localStorage.getItem('todosLosClientes'))
console.log(todosLosClientesGuardado)

} 



const vaciarForm = () => {
    texto.value = ' '
    mail.value = ' '
    telefono.value = ' '
}




    

    





