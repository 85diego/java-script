// variables primitivas 
// let nombre= null
// let apellido="palma"
// let edad=52
// let estado=true
// // constantes
// //arreglos
cons=numeros= [2,45,60,85,10]
// //objetos
// const articulo= {
//     descripcion:'Coca cola',
//     precio:2,
//     stock:1000
// }
// const notas=[
//     {nombre:"dan",promedio:100,
//       parciales:[
//           {primer:[25,35]},
//           {segundo:[15,25]}]
// },

// {nombre:"yadi",promedio:60,
//   parciales:[
//     {primer:[35,25]},
//     {segundo:[15,5]}]
// },

// {nombre:"Erick",promedio:100,
//   parciales:[
//     {primer:[25,25]},
//     {segundo:[25,25]}]
// },
// ]
// articulo.precio=30
// articulo.precio=true
//onsole.log(notas)
// console.log(notas[1])
// console.log(notas[1].nombre)
// console.log(notas[1].parciales)
// console.log(notas[1].parciales[1])
// consoleconsole.log(notas[1].parciales[1].segundo)
// consoleconsole.log(notas[1].parciales[1].segundo[1])

// console.log("articulo",articulo.descripcion,articulo.precio,articulo.estado)
// if(condicion)
// if(nombre)
//     console.log("nombre: ",nombre,"edad",edad)
// else
//    console.log("no ha ingresado nombre",nombre)


// let resp = (nombre== undefined) ? "no se ha ingresado la variable" : nombre
//     console.log(resp)

// dia=2
// switch (dia){
//     case 1:
//         console.log("lunes")
//         break
//     case 2:
//         console.log("martes")
//         break
//     default:
//         console.log("dia no valido")
//         break

// }
// let x=20
// let y=0
// try {
//     if (y==0)
//     throw("division no permitida para 0")
//     let resp=x/y
//     console.log(resp)
// } catch (error) {
//     console.log("error con y=0",error)

// }
//ciclos 
// const numeros =[2,45,60,85,10]
// let pos=0
// while (pos < numeros.length && numeros[pos]!=85){
//   console.log(pos,numeros[pos])
//   pos += 1
// }
// console.log("termino el while")
// // for(let ind=0;ind<numeros.length;ind+=2){
// //     console.log(ind,"[",numeros[ind],"]")
// }
// for(let ind=numeros.length-1;ind>=0;ind-=1){
//     console.log(ind,"[",numeros[ind],"]")
// }

function suma(){
    let n1= 5
    let n2 =20
    console.log(n1,"+",n2,"=",n1+n2)
const sumaA = () => {
    let n1= 5
    let n2 =20
     console.log('Suma: ${n1}+${n2}=${n1+n2}')
    }
}
// sumaA()
function multiplicar(n1=1,n2=2 ){
    n1=(n1) ? n1:0
    n2=(n2) ? n2:0
    return n1*n2
}
const multiplicarA= (n1=1,n2=2 ) =>{
        n1=(n1) ? n1:0
        n2=(n2) ? n2:0
        return n1*n2
}
// console.log(multiplicarA(4,5))
function resta(n1,n2){
    return n1 -n2
}
const restaA=(n1,n2)=> n1 -n2

// console.log(resta(5,2))

function division(n1,n2){
    resp =n2 ? n1/n2 :0
    return resp
}
const divisionA= (n1,n2)=> n2 ? n1/n2 :0
    
//console.log(divisionA(6,4))

const arreglo = [2,45,60,85,10,20]
for(let ind=0;ind<arreglo.length;ind+=2){
    console.log('${ind}[${arreglo[ind]}]' )
}
