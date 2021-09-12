//arreglos
const pares= [2,4,6,8,10]
const impares=[1,3,5,7,9]
const numeros1= pares.concat(impares)
const numeros2= [...impares,...pares]
// console.log(numeros1,numeros2)
// objetos
let precio =4
const articulo = {
    descripcion:'Coca cola',
    precio:precio,
    stock:1000
}
const art= {...articulo}
art.id=1
// console.log('articulo',articulo)
// console.log('art',art)
// x=4
// y=x
// x=5
// console.log(x,y)
// const articulo2={
//     descripcion: 'Coca cola',
//     ...articulo,
//     precio:5,
//     ['stock']:500
// }
// console.log(articulo2)
const masDatos = ({precio,stock}) => {
    // console.log("faltante",datos)
    console.log("faltante",precio,stock)
}
const mostrarDatos = ({descripcion, ...props}) =>  {
    console.log(descripcion,precio)
    masDatos({...props})
}
mostrarDatos(articulo) 

