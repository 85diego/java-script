const datos = {
imagen: 'https://cdn,pixabay.com/photo/2020/04/03/06/35/work-4997565_480.com'
correo: 'dverap@unemi.edu.ec'
}
// console.log(datos)
const mostrarDatos = (avatar) => {
    return(
` 
  < ing src=${àvatar.imagen} alt=${àvatar.correo}/>
` 
    )

}
// let img = mostrarDatos(datos)
const $root = document.getElementById("root")
$root.innerHTML = "<h2>Destructuring<h2>"
$root.innerHTML += mostradDatos(datos)

const mostrarDatos2 = ({imagen:img,correo})
` 
  < ing src=${àvatar.imagen} alt=${àvatar.correo}/>
` 

// let img = mostrarDatos(datos)
const $root = document.getElementById("root")
$root.innerHTML = "<h2>Destructuring<h2>"
$root.innerHTML += mostradDatos(datos)


