const numeros = [20,40,20,80,100]
const alumnos = [
    {nombre: "Yadi",n1:20,n2:50},
    {nombre: "Erick",n1:50,n2:50},
    {nombre: "Daniel",n1:40,n2:50},
    {nombre: "Danni",n1:40,n2:40},
    {nombre: "Noris",n1:30,n2:40}
]
console.clean()
// console.log("alumnos ==>",alumnos[1].nombre)
// for (pos=0;pos< alumnos.length;pos++)
//     console.log("alumnos ==>",alumnos[pos].nombre)
const fun = alumno => {
    prom = alumno.n1+alumno.n2
    console.log(alumno.nombre.prom)
}
// alumnos.forEach(item => {
//     prom =item.n1+item.n2
//     console.log(item.nombre,prom)
// });
// const items = alumnos.map(item =>{
//     prom = (item.n1+item.n2)/2
//     return item.nombre
// });
const items = alumnos.filter(item => item.n2==50);

alumnos = [...items]
// console.log(items)
console.log(alumnos)

