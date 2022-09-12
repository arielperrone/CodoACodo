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
        this.frase = frase
    }
    mostrar ()
        {
            var myHTML = `<button onclick="miBoton.mostrarAlert()" > ${this.nombre}</button>`;
            return myHTML
        }
    mostrarAlert()
        {
            return alert(this.frase)
        }
        
}
    
const myApp = document.getElementById("myApp");
const miBoton = new button("apretame","me apretaste");
myApp.innerHTML = miBoton.mostrar()

class array {
    constructor(elemento){
        this.elemento = elemento
    }
}
