/*for(let i = 1;i < 10 ; i++)
{let nombre = prompt ("ingrese un nombre")
console.log("Turno numero: " + i + "Nombre: "+ nombre)}*/


/*let pregunta = parseInt(prompt('¿Que productos quiere llevar?  1-Cuadro 2-Cuadro 3-Cuadro 4-Cuadro, Digite 0 para salir'))
let cantidad= 0
let precioTotal= 0

function suma(n) {
    precioTotal+=n
}
while(pregunta != 0){
    switch (pregunta) {
        case 1:
            let producto1 = 1500
            cantidad+=1
            suma(producto1)
            break;
        case 2:
            let producto2 = 1300
            cantidad+=1
            suma(producto2)
            break;
        case 3:
            let producto3 = 1700
            cantidad+=1
            suma(producto3)
            break;
        case 4:
            let producto4= 1100
            cantidad+=1
            suma(producto4)
            break;
    
        default:
            alert('Ese producto no esta en la lista')
            break;
    }

    pregunta = parseInt(prompt('¿Que productos quiere llevar?  1-algo 2-algo 3-algo 4-algo, digite 0 para salir'))
}

function descuento() {
    if(cantidad == 2){return  precioDescontado = precioTotal - (precioTotal * 0.20)}
    else if(cantidad == 3){
        return  precioDescontado = precioTotal - (precioTotal * 0.30)}
    else{
        return  precioTotal}
}

alert('Su total es de :$' + descuento())*/



/*let listaProductos=[
    {nombre:"Mapamundi", precio:2500},
    {nombre:"Reloj", precio:1500},
    {nombre:"Cuadro de neon", precio:12000},
    {nombre:"Cuadro de neon customizado", precio:16000},
    {nombre:"Cartel 7x2", precio:20000},
    {nombre:"Cuadro de neon 2", precio:12300},
    {nombre:"Cuadro de neon 3", precio:12700},
    {nombre:"Cuadro de neon 3", precio:13000},
   
];

//listaProductos.forEach(producto=> {console.log(`Este prducto es ${producto.nombre} Precio ${producto.precio}`)})    

let busquedaUsuario= prompt ("Que buscas?");
let buscar = listaProductos.find (producto=>producto.nombre == busquedaUsuario);
console.log(buscar);*/


const Formulario = document.querySelector("#Formulario");

Formulario.addEventListener("Submit",(e) => {
    e.preventDefault();
    let texto =document.querySelector("#texto").value;
    let mail =document.querySelector("#mail").value;
    let telefono =document.querySelector("#telefono").value;

    console.log(texto,mail,telefono)
})



/*INTENTO #2 PARA EVENTOS
const Formulario = document.getElementById("Formulario");

Formulario.addEventListener("boton", (e) => {
    e.preventDefault();
    console.log("Formulario");}
);*/



/*INTENTO #1 PARA EVENTOS
let formulario =document.getElementById(container);
formulario.addEventListener ("submit",validarFormulario);

boton.onclick = (e)=>{
    e.preventDefault(),
    console.log
}*/


/*let Productos = [
    {id: 1, nombre: "Mapamundi", tipo: "cuadro", precio: 1200},
    {id: 2, nombre: "Reloj", tipo: "cuadro", precio: 1100},
    {id: 3, nombre: "Cuadro de neon", tipo: "neon", precio: 1200},
    {id: 4, nombre: "Cuadro de neon customizado", precio: 1400},
    {id: 5, nombre: "Cartel 7x2", tipo: "cartel", precio: 1200},
    {id: 6, nombre: "Cuadro de neon 2", tipo: "neon", precio: 1500},
    {id: 7, nombre: "Cuadro de neon 2", tipo: "neon", precio: 500},
    {id: 8, nombre: "Cuadro de neon 3", tipo: "neon", precio: 500},
]

let carritoDeCompras = []

agregarAlCarrito()

function agregarAlCarrito() {

    let elijoProducto = parseInt(prompt('Ingrese el ID de su producto')) 

    let agregarProducto = Productos.find((el) => el.id == elijoProducto)
    carritoDeCompras.push(agregarProducto)
     console.log(carritoDeCompras)
    actualizarCarrito()
    
}

function actualizarCarrito() {
    console.log('cantidad de productos agregados ' + carritoDeCompras.length)
    let suma = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)

    console.log('la suma total de su Carrito es $' + suma)
}*/

    

    





