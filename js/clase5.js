/*
let myDoc = document;
name = "Dorita";
const myDog = {name: name,age: "6",legs: 4};
const myCat = {name:"Panchita",age: 1,legs:4};
console.log(myDog.name);console.log(myCat.legs);
myCat.tail = 1;
console.log(myCat.tail);
function mouse(){this.name="perez",this.age =4};
const myMouse = mouse();
class Mouse {constructor(name){this.name = name}};
const myMouse = new Mouse("Miguel");
console.log(myMouse)
*/
// Tarea para el jueves

class button 
{ 
    constructor(nombre,frase)
    {
    this.nombre = nombre,
    this.frase = frase,
    function mostrar (nombre,frase)
    {
        let btn = document.getElementById("btn");
        btn.innerHTML("<button onclik='alert(`${frase})'>`${name}</button>")
    }

    }
}
const miBoton = new button("apretame","me apretaste");
miBoton.mostrar

class array {
    constructor(elemento){
        this.elemento = elemento
    }
}